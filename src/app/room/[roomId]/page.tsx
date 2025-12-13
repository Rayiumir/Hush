"use client"

import {useParams} from "next/navigation";
import {useRef, useState} from "react";
import {client} from "@/lib/client";
import {useMutation} from "@tanstack/react-query";
import {useUsername} from "@/app/hooks/username";

function formatTime(seconds: number){
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
}

const Page = () => {
    const params = useParams();
    const roomId = params.roomId as string
    const {username} = useUsername();
    const [copyStatus, setCopyStatus] = useState("COPY");
    const [time, setTime] = useState<number | null>(40)
    const [input, setInput] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const copyLink = () => {
        const url = window.location.href
        navigator.clipboard.writeText(url)
        setCopyStatus("COPIED!")
        setTimeout(() => {
            setCopyStatus("COPY")
        }, 2000)
    }

    const {mutate:sendMessage} = useMutation({
        mutationFn: async ({text}: {text: string}) => {
            await client.messages.post({sender: username, text}, {
                query:{
                    roomId
                }
            })
        }
    })

    return (
        <main className="flex flex-col h-screen max-h-screen overflow-hidden">
            <header className="border-b border-zinc-800 p-4 flex items-center justify-between bg-zinc-900/30">
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-zinc-500 uppercase">
                             Room ID
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-green-500">{roomId}</span>
                            <button onClick={copyLink} className="text-[10px] bg-zinc-800 hover:bg-zinc-700 px-2 py-0.5 rounded-full text-zinc-400 hover:text-zinc-200 transition-colors">
                                {copyStatus}
                            </button>
                        </div>
                    </div>
                    <div className="h-8 border-zinc-800">
                        <div className="flex flex-col">
                            <span className="text-xs text-zinc-500 uppercase">Self-Destruct</span>
                            <span className={`text-sm font-bold flex items-center gap-2 ${time !== null && time < 60 ? "text-red-500" : "text-amber-500"}`}>{time !== null ? formatTime(time) : "--:--"}</span>
                        </div>
                    </div>
                </div>
                <button className="text-xs bg-zinc-800 hover:bg-red-600 px-3 py-1.5 rounded-full text-zinc-400 hover:text-white font-bold transition-all group flex items-center gap-2 disabled:opacity-50">Destroy Room</button>
            </header>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin"></div>

            <div className="p-4 border-t border-zinc-800 bg-zinc-900/30">
                <div className="flex gap-4">
                    <div className="flex-1 relative group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500 animate-pulse">{"Type"}</span>
                        <input type="text" value={input} onKeyDown={(e) => {if (e.key === "Enter" && input.trim()) {inputRef.current?.focus()}}} onChange={(e) => setInput(e.target.value)} className="w-full bg-black border border-zinc-800 focus:border-zinc-700 focus:outline-none transition-colors text-zinc-100 placeholder:text-zinc-700 py-3 pl-15 pr-4 text-sm rounded-full" placeholder="Type message..." />
                    </div>
                    <button className="bg-zinc-800 text-zinc-400 px-6 text-sm font-bold hover:text-zinc-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-full">Send</button>
                </div>
            </div>
        </main>
    )
}

export default Page