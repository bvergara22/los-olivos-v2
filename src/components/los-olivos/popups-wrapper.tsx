"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AsistenciasPopup } from "./asistencias-popup"
import { FeedbackPopup } from "./feedback-popup"

export function PopupsWrapper() {
  const [asistenciasOpen, setAsistenciasOpen] = useState(true)
  const [feedbackOpen, setFeedbackOpen] = useState(true)
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = (asistenciasOpen || feedbackOpen) ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [asistenciasOpen, feedbackOpen])

  const anyOpen = asistenciasOpen || feedbackOpen

  return (
    <>
      {mounted && anyOpen && createPortal(
        <div className="fixed inset-0 z-[998] bg-black/50" />,
        document.body
      )}
      <AsistenciasPopup open={asistenciasOpen} onClose={() => setAsistenciasOpen(false)} />
      <FeedbackPopup open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  )
}
