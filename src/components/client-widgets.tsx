"use client"

import dynamic from "next/dynamic"

const AIChatWidget = dynamic(() => import("@/components/ai-chat-widget"), {
  ssr: false,
})

const MusicMode = dynamic(() => import("@/components/music-mode"), {
  ssr: false,
})

export default function ClientWidgets() {
  return (
    <>
      <AIChatWidget />
      <MusicMode />
    </>
  )
}