
import CardsSection from "@/components/homeNoAuth/cardsSection"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth"
import PresentationSection from "@/components/homeNoAuth/presentationSection"
import SlideSection from "@/components/homeNoAuth/slideSection"
import CourseService, { CourseType } from "@/services/courseService"
import { GetServerSideProps } from "next"

import { ReactNode } from "react"


interface IndexPageProps{
  children?: ReactNode,
  course: CourseType[]

}

const getData = async () => {
  const course = CourseService.getFeaturedCourses()
  
  return course
}

const Home = async ({course}: IndexPageProps) => {
  return (
    <main>
      <div className="bg-hero-pattern bg-cover bg-center">
      <HeaderNoAuth/>
      <PresentationSection/>
      </div>
      <CardsSection/>
      <SlideSection newestCourses={course}></SlideSection>
    </main>
  )
}


export default Home
