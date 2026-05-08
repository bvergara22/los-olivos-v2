import { Footer } from "@/components/los-olivos/footer"
import { Header } from "@/components/los-olivos/header"
import { ScrollReset } from "@/components/los-olivos/scroll-reset"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollReset />
      <Header />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}
