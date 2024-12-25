"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function TypingAnimation({ text, duration = 100, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  const [isTyping, setIsTyping] = useState(false); // State to trigger typing animation

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setIsTyping(true); // Start typing after 3 seconds
    }, 1500);

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isTyping) return; // Don't start typing if isTyping is false

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [isTyping, duration, i, text]);

  return (
    <motion.p
      className={cn(
        "text-[48px] font-normal leading-normal -tracking-[2px]",
        className
      )}
    >
      {displayedText || " "}
    </motion.p>
  );
}
