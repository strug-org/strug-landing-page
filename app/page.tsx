"use client"

import dynamic from "next/dynamic"
import type { ComponentType } from "react"

const Scene: ComponentType<{}> = dynamic(() => import("@/components/scene"), { ssr: false })

export default function Home() {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-black via-[#0B1F3A] to-[#0B1F3A] relative">
            <div className="fixed top-13 left-0 right-0 z-10 p-6">
                <h1 className="max-w-[900px] mx-auto text-white text-center font-instrument-serif px-6 md:text-6xl text-4xl tracking-tight font-normal">
                    <span className="block text-center">We understand your struggle.</span>
                    <span className="block text-center">We know life is hard.</span>
                    <span className="block text-center">That is why we are changing how everything works.</span>
                </h1>
            </div>
            <Scene />
        </div>
    )
}
