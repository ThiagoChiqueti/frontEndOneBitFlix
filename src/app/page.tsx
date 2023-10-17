import CardsSection from "@/components/homeNoAuth/cardsSection"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth"
import PresentationSection from "@/components/homeNoAuth/presentationSection"

export default function Home() {
  return (
    <main>
      <div className="bg-hero-pattern bg-cover bg-center">
      <HeaderNoAuth/>
      <PresentationSection/>
      </div>
      <CardsSection/>
    </main>
  )
}
