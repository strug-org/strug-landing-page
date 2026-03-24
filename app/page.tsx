"use client"

import dynamic from "next/dynamic"

const Scene = dynamic(() => import("@/components/scene"), { ssr: false })

export default function Home() {
    return (
        <div className="w-full h-screen bg-black relative">
            <div className="fixed top-20 left-0 right-0 z-10 p-6">
                <h1 className="max-w-[750px] mx-auto text-white text-center font-instrument-serif px-6 md:text-6xl text-4xl tracking-tight font-normal">
                    The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.
                </h1>
            </div>

            <Scene />
        </div>
    )
}