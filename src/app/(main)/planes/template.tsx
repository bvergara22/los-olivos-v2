import type { ReactNode } from "react"

export default function PlanesTemplate({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>
}
