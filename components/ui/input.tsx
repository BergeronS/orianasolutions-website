import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: "default" | "textarea";
  rows?: number;
  className?: string;
}

export default function Input({
  label,
  variant = "default",
  rows = 7,
  className = "",
  ...props
}: InputProps) {
  const base =
    "w-full rounded-xl border border-outline bg-white placeholder:text-[#808080] placeholder:text-sm text-base text-[#0B1226] px-4 py-3 focus:outline-none focus:ring-0";

  if (variant === "textarea") {
    return (
      <label className="flex flex-col gap-2 w-full">
        {label && <span className="text-sm text-[#111111] font-medium">{label}</span>}
        <textarea
          rows={rows}
          className={`${base} min-h-[140px] resize-none ${className}`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      </label>
    );
  }

  return (
    <label className="flex flex-col gap-2 w-full">
      {label && <span className="text-sm text-[#111111] font-medium">{label}</span>}
      <input className={`${base} ${className}`} {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />
    </label>
  );
}
