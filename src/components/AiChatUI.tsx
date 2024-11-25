import React, { FormEvent, useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import bot from "../assets/images/bot.png";

interface Message {
  sender: "bot" | "user";
  time: number;
  message: string;
  isTyping?: boolean;
}

interface AiChatUIProps {
  toggleModal: () => void;
}

const TypingAnimation = () => {
  return (
    <div className="flex space-x-2 p-2">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
  );
};

const Typewriter = ({ text, scrollToBottom }: { text: string; scrollToBottom: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        scrollToBottom();
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, scrollToBottom]);

  return <span>{displayedText}</span>;
};

const AiChatUI: React.FC<AiChatUIProps> = ({ toggleModal }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      time: Date.now(),
      message: "Let's think about the main idea of the lesson so far. What is the primary role of economists according to what you've learned?",
      isTyping: false,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Only scroll to bottom on new messages, not during typing
  useEffect(() => {
    if (!messages[messages.length - 1]?.isTyping) {
      scrollToBottom();
    }
  }, [messages]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newMessage.trim()) return;

    try {
      setIsLoading(true);

      const userMessage: Message = {
        sender: "user",
        time: Date.now(),
        message: newMessage.trim(),
      };

      setMessages(prev => [...prev, userMessage]);
      setNewMessage("");

      const tempBotMessage: Message = {
        sender: "bot",
        time: Date.now(),
        message: "",
        isTyping: true,
      };

      setMessages(prev => [...prev, tempBotMessage]);

      const API_KEY = import.meta.env.VITE_API_KEY;

      if (!API_KEY) {
        throw new Error("OpenAI API key is missing. Please check your environment variables.");
      }

      const apiMessages = messages.map(msg => ({
        role: msg.sender === "bot" ? "assistant" : "user",
        content: msg.message,
      }));

      apiMessages.push({
        role: "user",
        content: userMessage.message,
      });

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
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
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error?.message || `API request failed with status ${response.status}`
        );
      }

      const data = await response.json();

      // Remove typing message and add actual bot message
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => !msg.isTyping);
        return [...filteredMessages, {
          sender: "bot",
          time: Date.now(),
          message: data.choices[0].message.content,
          isTyping: false,
        }];
      });

    } catch (error) {
      console.error("Error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      
      setMessages(prev => {
        const filteredMessages = prev.filter(msg => !msg.isTyping);
        return [...filteredMessages, {
          sender: "bot",
          time: Date.now(),
          message: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
          isTyping: false,
        }];
      });
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
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.time}
              className={`flex ${message.sender === "bot" ? "justify-start" : "justify-end"}`}
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
                <p className={`text-base leading-relaxed ${
                  message.sender === "bot" ? "text-[#242222]" : "text-white"
                }`}>
                  {message.isTyping ? (
                    <TypingAnimation />
                  ) : (
                    <Typewriter text={message.message} scrollToBottom={scrollToBottom} />
                  )}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

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