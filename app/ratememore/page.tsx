import Link from "next/link";

export default function RateMeMore() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-pink-500 selection:text-white">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                    RateMeMore
                </div>
                <Link
                    href="https://wa.me/9359014662"
                    className="px-6 py-2 rounded-full border border-pink-500/30 hover:bg-pink-500/10 transition-colors text-pink-400 font-medium text-sm"
                >
                    Contact Sales
                </Link>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-32 max-w-4xl mx-auto space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    🚀 Boost your online reputation
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-[0_0_15px_rgba(236,72,153,0.3)] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    How businesses collect <span className="text-pink-500">more reviews</span>, without risking their rating.
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                    Replace multiple review links with one smart QR code. Customers scan once and choose their favorite platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
                    <Link
                        href="https://wa.me/9359014662"
                        className="px-8 py-4 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-bold text-lg shadow-lg shadow-pink-600/30 transition-all hover:scale-105"
                    >
                        Get Your Smart QR Code 👉
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-zinc-900/50 py-24 border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">

                        {/* Feature 1 */}
                        <div className="space-y-4 p-8 rounded-3xl bg-black border border-zinc-800 hover:border-pink-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                🔗
                            </div>
                            <h3 className="text-2xl font-bold text-white">One QR Code for Every Platform</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Replace multiple review links with one smart QR code. Customers scan once and choose Google, Facebook, Yelp, and more—all from a single place.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="space-y-4 p-8 rounded-3xl bg-black border border-zinc-800 hover:border-pink-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                🤖
                            </div>
                            <h3 className="text-2xl font-bold text-white">AI Turns Feedback Into Reviews</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Customers answer a few quick questions. Our AI helps turn their feedback into clear, high-quality reviews written for each platform’s style.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="space-y-4 p-8 rounded-3xl bg-black border border-zinc-800 hover:border-pink-500/50 transition-colors group">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                🛡️
                            </div>
                            <h3 className="text-2xl font-bold text-white">Protect Your Rating</h3>
                            <p className="text-gray-400 leading-relaxed">
                                After feedback, every customer decides whether to share publicly or send private feedback to your team. Protects you from negative public reviews.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-900 to-black p-12 rounded-[3rem] border border-zinc-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"></div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                        Ready to grow your rating?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        Join smart businesses using RateMeMore to collect better reviews faster.
                    </p>

                    <Link
                        href="https://wa.me/9359014662"
                        className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl shadow-lg shadow-green-600/20 transition-all hover:scale-105"
                    >
                        <span>Chat on WhatsApp</span>
                        <span className="text-2xl">📱</span>
                    </Link>
                </div>
            </section>

            <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
                © 2024 RateMeMore. power by AI.
            </footer>
        </main>
    );
}
