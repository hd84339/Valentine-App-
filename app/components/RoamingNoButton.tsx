"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

export default function RoamingNoButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [text, setText] = useState("NO 😒");
    const [position, setPosition] = useState<{ x: number, y: number } | null>(null);

    const texts = [
        "NO 😒",
        "Are you sure?",
        "Think again!",
        "Don't do it!",
        "Try again!",
        "Cant catch me",
        "Nope!",
        "Too slow!",
        "Nice try!",
        "Missed me!",
    ];

    const moveButton = () => {
        if (!buttonRef.current) return;

        // On first hover, switch to fixed positioning if not already
        // This allows it to fly anywhere on screen
        const maxX = window.innerWidth - buttonRef.current.offsetWidth - 20;
        const maxY = window.innerHeight - buttonRef.current.offsetHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Use GSAP for smooth but fast movement
        gsap.to(buttonRef.current, {
            left: randomX,
            top: randomY,
            position: 'fixed', // Force fixed position
            x: 0, // Reset transform x
            y: 0, // Reset transform y
            duration: 0.2, // Fast movement
            ease: "power2.out",
        });

        // Change text randomly
        setText(texts[Math.floor(Math.random() * texts.length)]);
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={moveButton}
            onTouchStart={moveButton} // Handle mobile touch better
            onClick={moveButton}
            className="rounded-full bg-white border-2 border-red-500 text-red-500 px-8 py-3 text-lg font-bold shadow-lg transition-colors hover:bg-red-50 z-50"
            style={{
                minWidth: "150px",
                // Initial relative position, will be overridden by GSAP to fixed
            }}
        >
            {text}
        </button>
    );
}
