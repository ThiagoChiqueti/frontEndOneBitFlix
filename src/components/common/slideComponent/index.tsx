import { CourseType } from "@/services/courseService";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import SlideCard from "../slideCard";
import { getStaticProps } from "next/dist/build/templates/pages";

interface props {
  course: CourseType[];
}

const SlideComponent: React.FC<props> = ({ course }) => {
  return (
    <>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: "4",
            perMove: "1",
            pagination: false,
          }}
        >
          {course?.map((course) => (
            <SplideSlide key={course.id}>
              <SlideCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};


export default SlideComponent;
