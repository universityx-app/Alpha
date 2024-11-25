import React, { FormEvent, useState } from "react";
import { MdClose } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import bot from "../assets/images/bot.png"; // Bot image imported
// import Bottleneck from "bottleneck";

// Define TypeScript interfaces
interface Message {
  sender: "bot" | "user";
  time: number;
  message: string;
}

interface AiChatUIProps {
  toggleModal: () => void;
}

const AiChatUI: React.FC<AiChatUIProps> = ({ toggleModal }) => {
  // State management
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      time: Date.now(),
      message:
        "Let's think about the main idea of the lesson so far. What is the primary role of economists according to what you've learned?",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    try {
      setIsLoading(true);

      // Add user message immediately
      const userMessage: Message = {
        sender: "user",
        time: Date.now(),
        message: newMessage.trim(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setNewMessage("");

      const API_KEY = import.meta.env.VITE_API_KEY;

      if (!API_KEY) {
        throw new Error(
          "OpenAI API key is missing. Please check your environment variables."
        );
      }

      const apiMessages = messages.map((msg) => ({
        role: msg.sender === "bot" ? "assistant" : "user",
        content: msg.message,
      }));

      apiMessages.push({
        role: "user",
        content: userMessage.message,
      });

      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: apiMessages,
            temperature: 0.7,
            max_tokens: 800,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message ||
            `API request failed with status ${response.status}`
        );
      }

      const data = await response.json();
    
      const botMessage: Message = {
        sender: "bot",
        time: Date.now(),
        message: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);

      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          time: Date.now(),
          message: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div
      className="fixed px-8 py-5 top-0 right-0 w-[85%] md:w-[70%] lg:w-[40%] h-screen bg-white outline-none"
      role="dialog"
      aria-label="AI Chat Interface"
    >
      <button
        onClick={toggleModal}
        className="absolute top-5 left-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Close chat"
      >
        <MdClose className="w-8 h-8 text-gray-800" />
      </button>

      <div className="flex flex-col h-[calc(100%-80px)] mt-16">
        {/* Messages container with scroll */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.time}
              className={`flex ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.sender === "bot"
                    ? "bg-white border border-gray-200"
                    : "bg-[#9c2d9c] text-white"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="flex items-center gap-3 mb-2">
                    <img src={bot} alt="Bot" className="w-8 h-8 rounded-full" />
                    <span className="font-medium">AI Tutor</span>
                  </div>
                )}
                <p className="text-base leading-relaxed text-[#242222]">
                  {message.message}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message input form */}
        <form onSubmit={handleFormSubmit} className="relative">
          <div className="flex items-center gap-2 w-full rounded-2xl border border-gray-200 bg-white p-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Message AI tutor..."
              className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !newMessage.trim()}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50"
              aria-label="Send message"
            >
              <TbSend2 className="w-6 h-6 text-[#9c2d9c]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AiChatUI;
