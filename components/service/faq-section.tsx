"use client";

import { useState } from "react";
import Container from "@/components/shared/container";
import { Typography } from "../ui/typography";

interface ServiceFAQProps {
  title?: React.ReactNode;
}

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How often do you post?",
    answer:
      "We publish new blog posts weekly. Our goal is to provide fresh insights and valuable information regularly. Stay tuned for our latest updates!",
  },
  {
    id: 2,
    question: "Can I submit a guest post?",
    answer: "Yes — we welcome guest contributions. Reach out via contact.",
  },
  {
    id: 3,
    question: "What topics do you cover?",
    answer:
      "We cover product, design, engineering, and growth topics relevant to modern apps.",
  },
  {
    id: 4,
    question: "Can I comment?",
    answer:
      "Yes — comments are open on most posts. Please follow our community guidelines.",
  },
  {
    id: 5,
    question: "How can I subscribe?",
    answer:
      "Subscribe using the newsletter form on the site to receive updates.",
  },
];

export default function ServiceFAQ({ title }: ServiceFAQProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <Container className="w-full flex flex-col sm:gap-8 gap-4">
      {title && (
        <Typography variant="h4" className="shrink-0 sm:text-start text-center">
          {title}
        </Typography>
      )}
      <div className="flex justify-center">
        <div className="w-full flex flex-col sm:max-w-[80%]">
          {FAQ_ITEMS.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between gap-4">
                  <button
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="w-full flex items-center justify-between gap-4 py-6"
                    aria-expanded={open}
                  >
                    <p
                      className={`text-left font-heading font-normal text-base md:text-lg 2xl:text-xl 3xl:text-2xl`}
                    >
                      {item.question}
                    </p>

                    <div
                      className={`ml-4 flex items-center justify-center sm:w-11 w-10 sm:h-11 h-10 rounded-md ${open ? "bg-blue-600" : "bg-blue-600/90"}`}
                    >
                      <span className="text-white text-xl leading-none">
                        {open ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                </div>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-3 pb-6">
                      <p className="text-xs 2xl:text-sm 3xl:text-base text-[#333333] leading-6">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-full border-b ${open ? "border-black" : "border-[#D0D0D0]"}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
