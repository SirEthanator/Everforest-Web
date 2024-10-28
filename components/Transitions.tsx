'use client'
import React from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

export default function Transitions({ children }: { children: React.ReactNode }) {
  return (
    <TransitionRouter
      auto={true}
      leave={(next) => {
        const tween = gsap.timeline({ onComplete: next }).fromTo("body", { opacity: 1, x: 0 }, { opacity: 0, x: -100, ease: "none", duration: 0.1 }).fromTo("body", { x: -100 }, { x: 100, delay: 0.1, duration: 0.1 });
        return () => tween.kill();
      }}
      enter={(next) => {
        const tween = gsap.fromTo("body", { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: "none", delay: 0.1, duration: 0.1, onComplete: next });
        return () => tween.kill();
      }}
    >
      {children}
    </TransitionRouter>
  );
}
