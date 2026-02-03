"use client";

import { useState } from "react";
import RoamingNoButton from "./RoamingNoButton";
import confetti from "canvas-confetti";
import gsap from "gsap";
import DateScheduler from "./DateScheduler";

export default function ValentineContainer() {
    const [yesPressed, setYesPressed] = useState(false);
    const [showScheduler, setShowScheduler] = useState(false);
    const [message, setMessage] = useState("");

    const successMessages = [
        "Congratulations 🎉 You are officially my Valentine now 😌💖",
        "You clicked YES… now there’s no escape 😏❤️",
        "Na bug hoga, na error aayega, tera Valentine bas tere paas aayega! 💻❤️",
        "Roses are red, violets are blue, my code is broken, but I still love you! 🐛",
        "Pyar hua, ikraar hua, fir system crash baar baar hua! 😂💔",
        "Relationship Status: true ✅",
        "Love successfully deployed 🚀",
        "Tere bina life hai NullPointer Exception jaisi! 🥺",
        "Sudo love user --force ❤️",
    ];

    const handleYesClick = () => {
        setYesPressed(true);
        const randomMessage =
            successMessages[Math.floor(Math.random() * successMessages.length)];
        setMessage(randomMessage);

        // Confetti effect
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) =>
            Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);

        // Show scheduler after a delay
        setTimeout(() => {
            setShowScheduler(true);
        }, 4000);
    };

    return (
        <div className="flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto z-50 relative">
            {!yesPressed ? (
                <div className="space-y-12 animate-in fade-in zoom-in duration-500">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 drop-shadow-sm tracking-tight text-balance">
                        Will you be my Valentine? 💖
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12">
                        <button
                            onClick={handleYesClick}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-2xl shadow-xl transition-all hover:scale-110 active:scale-95 hover:shadow-green-500/50"
                        >
                            YES 😍
                        </button>

                        <RoamingNoButton />
                    </div>
                </div>
            ) : (
                <div className="w-full">
                    {!showScheduler ? (
                        <div className="space-y-8 animate-in fly-in-bottom duration-700">
                            <div className="text-8xl animate-bounce">💘</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight">
                                {message}
                            </h2>
                            <p className="text-xl text-gray-700 mt-4 font-medium">
                                (No takebacks! 😌)
                            </p>
                        </div>
                    ) : (
                        <DateScheduler />
                    )}
                </div>
            )}
        </div>
    );
}
