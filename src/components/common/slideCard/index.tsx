import { CourseType } from "@/services/courseService";

interface props {
    course: CourseType
}

const SlideCard: React.FC<props> = ({course}) => {
  return (
    <>
      <div className="">
        <img src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`} alt={course.name} className=""/>
        <p className="">{course.name}</p>
        <p className="">{course.synopsis}</p>
      </div>
    </>
  );
};

export default SlideCard;
