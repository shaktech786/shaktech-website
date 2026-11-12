"use client"

import dynamic from "next/dynamic"


const BackToTop = dynamic(() => import("@/components/back-to-top"), {
  ssr: false,
})

export default function ClientWidgets() {
  return (
    <>

      <BackToTop />
    </>
  )
}
