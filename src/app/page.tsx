
import CardsSection from "@/components/homeNoAuth/cardsSection"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth"
import PresentationSection from "@/components/homeNoAuth/presentationSection"
import SlideSection from "@/components/homeNoAuth/slideSection"
import CourseService, { CourseType } from "@/services/courseService"
import { GetServerSideProps } from "next"
import { Ultra } from "next/font/google"

import { ReactNode, use } from "react"


interface IndexPageProps{
  children?: ReactNode,
  course: CourseType[]

}

  export const result = async () => {
    const result = await (await fetch('https://rickandmortyapi.com/api/character/592')).json
    return result
  }

  

const Home = async ({result}: any) => {

  

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


export default Home
