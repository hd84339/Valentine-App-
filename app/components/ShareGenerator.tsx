"use client";

import { useState } from "react";

export default function ShareGenerator() {
    const [isOpen, setIsOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const handleGenerate = () => {
        if (!phone) return;

        // Create the link relative to current origin, or simple string if SSR
        const origin = window.location.origin;

        // Smart Phone Handling: Default to India (+91) if 10 digits provided
        let cleanPhone = phone.replace(/\D/g, "");
        if (cleanPhone.length === 10) {
            cleanPhone = `91${cleanPhone}`;
        }

        const link = `${origin}/?ref=${cleanPhone}&name=${encodeURIComponent(name || "")}`;

        // Message to send
        const msg = `Will you be my Valentine? 💖\nOpen this link: ${link}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;

        window.open(whatsappUrl, "_blank");
        setIsOpen(false);
    };

    return (
        <div className="absolute top-4 right-4 z-50">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-white/10 backdrop-blur-md border border-pink-500/50 text-pink-500 px-4 py-2 rounded-full text-sm font-bold hover:bg-pink-500/20 transition-all shadow-lg shadow-pink-500/10 animate-pulse"
                >
                    Send to your Valentine 🔗
                </button>
            ) : (
                <div className="bg-zinc-900 border border-pink-500/50 p-4 rounded-xl shadow-2xl w-64 animate-in fade-in zoom-in duration-200">
                    <label className="block text-pink-400 text-xs font-bold mb-2 uppercase">
                        Your Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul"
                        className="w-full bg-black/50 border border-pink-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-pink-500 mb-3"
                        autoFocus
                    />

                    <label className="block text-pink-400 text-xs font-bold mb-2 uppercase">
                        Your WhatsApp Number
                    </label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 919876543210"
                        className="w-full bg-black/50 border border-pink-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-pink-500 mb-3"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={handleGenerate}
                            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold py-2 rounded-lg transition-colors"
                        >
                            Share 📤
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-3 bg-zinc-800 hover:bg-zinc-700 text-gray-400 text-xs font-bold rounded-lg transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
