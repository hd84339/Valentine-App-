"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface DateTicketProps {
    date: string;
    time: string;
    location: string;
    activity: string;
    phoneNumber?: string;
}

export default function DateTicket({ date, time, location, activity, phoneNumber }: DateTicketProps) {
    const ticketRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Ticket reveal animation: Slide up + Rotate + Scale
        gsap.fromTo(
            ticketRef.current,
            { y: 100, opacity: 0, rotate: -10, scale: 0.8 },
            { y: 0, opacity: 1, rotate: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.2 }
        );
    }, []);

    const handleShare = () => {
        const text = `It's official! I'm your Valentine! 💖\n📅 Date: ${date} at ${time}\n📍 Location: ${location}\n🎬 Mission: ${activity}\nCan't wait! 🎟️`;

        // If phone number is provided, open WhatsApp directly
        if (phoneNumber) {
            // Basic cleaning of phone number (remove +, spaces, dashes)
            const cleanNumber = phoneNumber.replace(/\D/g, "");
            window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
        } else if (navigator.share) {
            navigator.share({
                title: 'Valentine Date Ticket',
                text: text,
            }).catch(console.error);
        } else {
            // Fallback to generic WhatsApp share
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        }
    };

    const handleInstagramShare = () => {
        const text = `It's official! I'm your Valentine! 💖\n📅 Date: ${date} at ${time}\n📍 Location: ${location}\n🎬 Mission: ${activity}\nCan't wait! 🎟️`;

        navigator.clipboard.writeText(text).then(() => {
            alert("Ticket details copied! Paste them in Instagram DM 📸");
            window.open("https://instagram.com/direct/inbox/", "_blank");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            window.open("https://instagram.com/direct/inbox/", "_blank");
        });
    };

    return (
        <div className="flex flex-col items-center gap-6 md:gap-8 w-full max-w-md mx-auto px-4 md:px-0">
            <div
                ref={ticketRef}
                className="relative bg-zinc-900 border-4 border-dashed border-pink-500 p-6 md:p-8 rounded-xl shadow-2xl w-full transform hover:rotate-1 transition-transform cursor-default shadow-pink-500/20"
            >
                {/* Holes for "ticket" look */}
                <div className="absolute -left-4 top-1/2 w-8 h-8 bg-black rounded-full transform -translate-y-1/2" />
                <div className="absolute -right-4 top-1/2 w-8 h-8 bg-black rounded-full transform -translate-y-1/2" />

                <h3 className="text-2xl md:text-3xl font-extrabold text-pink-500 mb-6 uppercase tracking-widest border-b-2 border-pink-500/30 pb-2 drop-shadow-[0_0_5px_rgba(236,72,153,0.5)]">
                    Official Date Ticket 🎟️
                </h3>

                <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center">
                        <span className="text-pink-400/80 font-bold uppercase text-xs tracking-wider">When?</span>
                        <span className="text-xl font-bold text-pink-100">{date} at {time}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-pink-400/80 font-bold uppercase text-xs tracking-wider">Where?</span>
                        <span className="text-xl font-bold text-pink-100">{location}</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="text-pink-400/80 font-bold uppercase text-xs tracking-wider">Mission?</span>
                        <span className="text-xl font-bold text-pink-100">{activity}</span>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t-2 border-pink-500/30 flex justify-between items-end">
                    <div className="text-xs text-pink-600/50 font-mono">
                        ID: LOVE-{Math.floor(Math.random() * 10000)}
                    </div>
                    <div className="text-2xl md:text-4xl animate-pulse text-white/90">barcode ║▌║█║</div>
                </div>

                <div className="absolute -bottom-10 left-0 w-full text-center text-sm text-pink-400 font-bold animate-bounce mt-4 tracking-widest uppercase">
                    Screenshot this! 📸
                </div>
            </div>

            <div className="flex gap-4 w-full">
                <button
                    onClick={handleShare}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                    <span>Send to Valentine 💌</span>
                </button>

                <button
                    onClick={handleInstagramShare}
                    className="bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center justify-center"
                    title="Share on Instagram"
                >
                    <span>📸</span>
                </button>
            </div>
        </div>
    );
}
