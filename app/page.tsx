import { Suspense } from "react";
import ValentineContainer from "./components/ValentineContainer";
import ShareGenerator from "./components/ShareGenerator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-zinc-900 to-black relative overflow-hidden text-pink-500">
      <ShareGenerator />
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-10 text-4xl opacity-30 animate-pulse text-pink-600">💖</div>
        <div className="absolute bottom-20 right-20 text-6xl opacity-30 animate-bounce text-pink-600">💕</div>
        <div className="absolute top-1/3 left-1/4 text-2xl opacity-20 text-pink-400">💘</div>
        <div className="absolute top-1/4 right-1/3 text-3xl opacity-20 text-pink-400">💗</div>
        <div className="absolute bottom-1/3 right-10 text-5xl opacity-25 text-pink-700">💓</div>
      </div>

      <div className="z-10 w-full">
        <Suspense fallback={<div className="text-pink-500 animate-pulse text-xl">Loading Love... 💖</div>}>
          <ValentineContainer />
        </Suspense>
      </div>

      <footer className="fixed bottom-4 text-center text-pink-800/60 text-sm z-10 w-full font-mono">
        Made with ❤️ by a coder who believes in love (and JavaScript)
      </footer>
    </main>
  );
}
