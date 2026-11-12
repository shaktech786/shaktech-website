export const bookingUrl = "https://calendly.com/shakeel-bhamani/catch-up"

export const momentumEvent = {
  name: "IPN Momentum",
  place: "Austin",
  dates: "Nov 13–15, 2026",
  offerDeadline: "November 30",
  bannerEndsAt: Date.parse("2026-11-23T06:00:00Z"),
}

export const isMomentumBannerLive = () => Date.now() < momentumEvent.bannerEndsAt
