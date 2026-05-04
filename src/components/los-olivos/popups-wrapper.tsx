"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { AsistenciasPopup } from "./asistencias-popup"
import { FeedbackPopup } from "./feedback-popup"

export function PopupsWrapper() {
  const [asistenciasOpen, setAsistenciasOpen] = useState(true)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const t = setTimeout(() => setFeedbackOpen(true), 2000)
    return () => clearTimeout(t)
  }, [])

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
