import React, { ChangeEvent } from "react";
interface InputProps {
  label: string;
  type?: string;
  id: string;
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputAd: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="font-inter text-2xl text-[#667085]" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className=" font-medium font-inter text-[1.8rem] max-h-[4.63rem] leading-6 text-[#242222] py-5 px-4 outline-none border border-[#667085] rounded-md w-full"
      />
    </div>
  );
};

export default InputAd;
