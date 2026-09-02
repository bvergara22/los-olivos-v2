import { BlogAdmin } from "@/components/blog/blog-admin"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Administración del blog",
  robots: { index: false, follow: false, nocache: true },
}

export default function BlogAdministrationPage() {
  return <BlogAdmin />
}
