"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const FULL_TEXT = "Close to the problem,\nClose to the technology,\nRemoving work, not just adding features.";

export default function Statement() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(textRef, { once: false, margin: "-80px" });

  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  useEffect(() => {
    clearTimer();

    if (isInView) {
      // Forward: type characters in
      setDone(false);
      let i = displayed.length;
      const tick = () => {
        i++;
        setDisplayed(FULL_TEXT.slice(0, i));
        if (i < FULL_TEXT.length) {
          timerRef.current = setTimeout(tick, 20);
        } else {
          setDone(true);
        }
      };
      timerRef.current = setTimeout(tick, displayed.length === 0 ? 200 : 0);
    } else {
      // Reverse: erase characters out
      setDone(false);
      let i = displayed.length;
      if (i === 0) return;
      const tick = () => {
        i--;
        setDisplayed(FULL_TEXT.slice(0, i));
        if (i > 0) {
          timerRef.current = setTimeout(tick, 12);
        }
      };
      timerRef.current = setTimeout(tick, 0);
    }

    return clearTimer;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} style={{ padding: "clamp(5rem, 14vh, 11rem) 0", overflow: "hidden" }}>
      <div className="site-container">
        <motion.div style={{ y }}>
          <p className="section-label" style={{ marginBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}>
            How I work
          </p>

          <p
            ref={textRef}
            style={{
              fontSize: "clamp(1.75rem, 3.8vw, 3.75rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.25,
              color: "var(--fg)",
              whiteSpace: "pre-line",
            }}
          >
            {displayed}
            {!done && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ display: "inline-block", width: "2px", height: "1em", background: "#1377ff", marginLeft: "2px", verticalAlign: "middle" }}
              />
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
