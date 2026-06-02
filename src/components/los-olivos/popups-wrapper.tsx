"use client"

import { FeedbackPopup } from "./feedback-popup"
import { useState } from "react"

export function PopupsWrapper() {
  const [feedbackOpen, setFeedbackOpen] = useState(true)

  return (
    <FeedbackPopup open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
  )
}
