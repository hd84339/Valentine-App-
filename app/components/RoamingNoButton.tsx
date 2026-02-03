"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

export default function RoamingNoButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [text, setText] = useState("NO 😒");

    const texts = [
        "NO 😒",
        "Are you sure?",
        "Think again!",
        "Don't do it!",
        "Try again!",
        "Cant catch me",
        "Nope!",
        "Too slow!",
    ];

    const moveButton = () => {
        if (!buttonRef.current) return;

        // Calculate random position within viewport, keeping clear of edges
        // We'll use a safer range to prevent it from going off-screen completely
        // Assuming standard button size, we want to keep it visible.
        // We can move it relative to its current position or absolute on screen.
        // Absolute on screen is harder to manage in a flow layout.
        // Let's use relative movement but large enough to jump away.

        // Better approach: Fixed position or absolute position if we want it to fly around freely.
        // But initially it's in the layout.
        // Let's make it fixed/absolute *after* the first hover?
        // Or just simple transforms.

        const x = Math.random() * (window.innerWidth - 200) - window.innerWidth / 2 + 100;
        const y = Math.random() * (window.innerHeight - 100) - window.innerHeight / 2 + 50;

        // Ensure we don't move it off screen (clamping)
        // Actually, simple random translation from original spot might be safer.

        const randomX = Math.floor(Math.random() * 300) - 150;
        const randomY = Math.floor(Math.random() * 300) - 150;

        gsap.to(buttonRef.current, {
            x: randomX,
            y: randomY,
            duration: 0.3,
            ease: "power2.out",
        });

        // Change text randomly
        setText(texts[Math.floor(Math.random() * texts.length)]);
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={moveButton}
            onClick={moveButton} // Just in case they click it
            className="rounded-full bg-white border-2 border-red-500 text-red-500 px-8 py-3 text-lg font-bold shadow-lg transition-colors hover:bg-red-50"
            style={{ minWidth: "150px" }}
        >
            {text}
        </button>
    );
}
