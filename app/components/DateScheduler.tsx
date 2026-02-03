"use client";

import { useState, FormEvent, useEffect } from "react";
import DateTicket from "./DateTicket";
import gsap from "gsap";

export default function DateScheduler({ referralNumber, senderName }: { referralNumber?: string | null, senderName?: string | null }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        location: "",
        activity: "",
        phoneNumber: referralNumber || "", // Pre-fill if exists
    });

    // Update state if referralNumber changes (e.g. navigation)
    useEffect(() => {
        if (referralNumber) {
            setFormData(prev => ({ ...prev, phoneNumber: referralNumber }));
        }
    }, [referralNumber]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="w-full max-w-lg mx-auto transition-all duration-500">
            {step === 1 ? (
                <form
                    onSubmit={handleSubmit}
                    className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border-2 border-pink-500/50 animate-in slide-in-from-bottom duration-700 fade-in text-white shadow-pink-500/20"
                >
                    <h3 className="text-2xl font-bold text-pink-500 mb-6 text-center drop-shadow-md">
                        Let's make it official! 📅
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-pink-300 font-bold mb-2 text-left">When are we free? 🌹</label>
                            <input
                                type="date"
                                name="date"
                                required
                                className="w-full p-3 rounded-xl border-2 border-pink-500/30 bg-black/50 text-pink-100 focus:border-pink-500 focus:outline-none transition-colors focus:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                                onChange={handleInputChange}
                                style={{ colorScheme: "dark" }}
                            />
                        </div>



                        {referralNumber && (
                            <div className="bg-pink-500/10 border border-pink-500/30 p-3 rounded-xl text-center">
                                <p className="text-pink-300 text-sm font-bold">
                                    Ticket will be sent to <span className="text-white">{senderName || "your Valentine"}</span> automatically! 📨
                                </p>
                            </div>
                        )}

                        <div>
                            <label className="block text-pink-300 font-bold mb-2 text-left">What time? ⏰</label>
                            <input
                                type="time"
                                name="time"
                                required
                                className="w-full p-3 rounded-xl border-2 border-pink-500/30 bg-black/50 text-pink-100 focus:border-pink-500 focus:outline-none transition-colors focus:shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                                onChange={handleInputChange}
                                style={{ colorScheme: "dark" }}
                            />
                        </div>

                        <div>
                            <label className="block text-pink-300 font-bold mb-2 text-left">Where are we going? 🗺️</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="e.g. That cute coffee shop..."
                                required
                                className="w-full p-3 rounded-xl border-2 border-pink-500/30 bg-black/50 text-pink-100 focus:border-pink-500 focus:outline-none transition-colors placeholder-pink-700/50"
                                onChange={handleInputChange}
                                autoComplete="off"
                            />
                        </div>

                        <div>
                            <label className="block text-pink-300 font-bold mb-2 text-left">What's the plan? 🎬</label>
                            <select
                                name="activity"
                                required
                                className="w-full p-3 rounded-xl border-2 border-pink-500/30 bg-black/50 text-pink-100 focus:border-pink-500 focus:outline-none transition-colors"
                                onChange={handleInputChange}
                            >
                                <option value="" className="bg-zinc-900">Choose an adventure...</option>
                                <option value="Dinner Date 🍝" className="bg-zinc-900">Dinner Date 🍝</option>
                                <option value="Movie Night 🍿" className="bg-zinc-900">Movie Night 🍿</option>
                                <option value="Arcade Games 👾" className="bg-zinc-900">Arcade Games 👾</option>
                                <option value="Late Night Drive 🚗" className="bg-zinc-900">Late Night Drive 🚗</option>
                                <option value="Coding Session 💻" className="bg-zinc-900">Coding Session 💻 (Nerd! ❤️)</option>
                                <option value="Surprise Me! 🎁" className="bg-zinc-900">Surprise Me! 🎁</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl shadow-lg shadow-pink-600/30 transform transition hover:scale-105 active:scale-95 mt-6 border border-pink-400/50"
                        >
                            Lock it in! 🔒
                        </button>
                    </div>
                </form>
            ) : (
                <DateTicket {...formData} />
            )}
        </div>
    );
}
