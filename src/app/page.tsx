"use client";

import Image from "next/image";
import {useState} from "react";

export default function Home() {
    const [username, setUsername] = useState("raymond");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
            <div className="border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-md rounded-2xl">
                <div className="space-y-5">
                    <div className="space-y-2">
                        <label className="flex items-center text-zinc-500">Your Identity</label>
                        <div className="flex-1 bg-zinc-950 broder border-zinc-800 p-3 text-sm text-zinc-400 font-mono rounded-xl">{username}</div>
                    </div>
                    <button className="w-full bg-zinc-100 text-black p-3 text-sm font-bold hover:bg-zinc-50 hover:text-black transition-colors mt-2 cursor-pointer disabled:opacity-50 rounded-full">Create Secure Room</button>
                </div>
            </div>
        </div>
    </main>
  );
}
