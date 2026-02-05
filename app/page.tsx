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

     <footer className="fixed bottom-4 left-0 w-full text-center z-10 px-4">
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md border border-pink-200/50 rounded-full shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300">
    <span className="text-pink-800/70 text-xs md:text-sm font-mono tracking-tight">
      Made with ❤️ by a coder who believes in love (and 
      <span className="text-pink-900 font-bold"> JavaScript</span>)
    </span>
    
    <div className="h-3 w-[1px] bg-pink-300/50 mx-1" /> {/* Subtle Separator */}

    <a 
      href="https://www.linkedin.com/in/harsh-dubey-498498256/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex items-center gap-1 text-pink-800/80 hover:text-blue-600 transition-colors duration-300"
    >
      <svg 
        className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" 
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
      <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Connect</span>
    </a>
  </div>
</footer>
    </main>
  );
}
