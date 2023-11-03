import SlideComponent from "@/components/common/slideComponent";
import Container from "@/components/container";
import { CourseType } from "@/services/courseService";
import Link from "next/link";

interface props {
    newestCourses: CourseType[]
}

const SlideSection = function ({newestCourses}: any) {
    return <>
    <Container>
        <p className="">Aulas já disponíveis</p>
        <SlideComponent course={newestCourses}/>
        <Link href="/register" >
            <button className="bg-transparent border border-white">Se cadastre agora</button>
        </Link>
    </Container>
    </>;
}

export default SlideSection