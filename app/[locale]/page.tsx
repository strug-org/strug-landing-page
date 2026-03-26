"use client"

import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import type { ComponentType } from "react"

const Scene: ComponentType<{}> = dynamic(() => import("@/components/scene"), { ssr: false })

export default function Home() {
    const t = useTranslations("landing")

    return (
        <div className="w-full h-screen bg-gradient-to-b from-black via-[#0B1F3A] to-[#0B1F3A] relative">
            <div className="fixed top-13 left-0 right-0 z-10 p-6">
                <h1 className="max-w-[900px] mx-auto text-white text-center font-instrument-serif px-6 md:text-6xl text-4xl tracking-tight font-normal">
                    <span className="block text-center">{t("line1")}</span>
                    <span className="block text-center">{t("line2")}</span>
                    <span className="block text-center">{t("line3")}</span>
                </h1>
            </div>
            <Scene />
        </div>
    )
}
