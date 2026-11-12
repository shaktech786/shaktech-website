import { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Get in touch with Shakeel Bhamani at ShakTech Labs about investing, a product build, or a partnership. Replies within one business day.",
  "/contact"
)

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
