"use client"

import dynamic from "next/dynamic"

const AIChatWidget = dynamic(() => import("@/components/ai-chat-widget"), {
  ssr: false,
})

const MusicMode = dynamic(() => import("@/components/music-mode"), {
  ssr: false,
})

const BackToTop = dynamic(() => import("@/components/back-to-top"), {
  ssr: false,
})

export default function ClientWidgets() {
  return (
    <>
      <AIChatWidget />
      <MusicMode />
      <BackToTop />
    </>
  )
}