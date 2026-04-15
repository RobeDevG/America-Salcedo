import { Header } from "@/components/organisms/header"
import { Hero } from "@/components/organisms/hero"
import { About } from "@/components/organisms/about"
import { Services } from "@/components/organisms/services"
import { Experience } from "@/components/organisms/experience"
import { Contact } from "@/components/organisms/contact"
import { Footer } from "@/components/organisms/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
