"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "hello",
  "hola",
  "bonjour",
  "नमस्ते",
  "こんにちは",
  "你好",
  "안녕하세요",
  "ciao",
  "olá",
  "hallo",
  "привет",
  "مرحبا",
  "γεια σου",
  "שלום",
  "สวัสดี",
  "xin chào",
  "hello",
];

const WORD_DURATION = 380;  // ms each word stays visible
const FADE_DURATION = 0.18; // seconds for each fade transition

export default function SplashScreen() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Only show once per session
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sessionStorage.getItem("splashSeen")) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (!show) return;

    if (index < greetings.length - 1) {
      const t = setTimeout(() => setIndex((i) => i + 1), WORD_DURATION);
      return () => clearTimeout(t);
    } else {
      // Last word: linger a moment then fade the whole screen
      const t = setTimeout(() => {
        setDone(true);
        setTimeout(() => {
          setHidden(true);
          document.body.style.overflow = "";
          sessionStorage.setItem("splashSeen", "1");
        }, 700);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [index, show]);

  if (!show || hidden) return null;

  return (
    <motion.div
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: done ? "none" : "all",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: FADE_DURATION, ease: "easeOut" }}
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            color: "#fff",
            fontFamily: "var(--font)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {greetings[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
