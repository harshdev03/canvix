"use client"

import React from "react"
import { WavyBackground } from "./ui/wavy-background"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const Hero =()=> {
  const router = useRouter()

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 px-4">
      <div className="flex flex-col gap-6 items-center text-white">
        <p className="text-2xl md:text-4xl lg:text-7xl font-bold text-center">
          Draw Your Vision with Precision
        </p>
        <p className="text-base md:text-lg text-center max-w-2xl mt-8">
          Capture your ideas and bring them to life on a clean, responsive drawing canvas built for creativity and focus.
        </p>
        <p className="text-sm text-center text-gray-200 max-w-md mt-2">
          Built with the powerful open-source tools from{" "}
          <a
            href="https://tldraw.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            tldraw.dev
          </a>
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button variant="default" className="cursor-pointer hover:bg-neutral-700/60" onClick={() => router.push("/draw")}>
            Start Drawing
          </Button>
        </div>
      </div>
    </WavyBackground>
  )
}
export default Hero