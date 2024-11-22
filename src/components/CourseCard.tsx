import React from "react";
import { Link } from "react-router-dom";

interface CourseCardProp {
  course: {
    id?: string;
    name: string;
    completed: number;
    uncompleted: number;

    image: string;
  };
  isGrid: boolean;
}
const CourseCard: React.FC<CourseCardProp> = ({ course, isGrid }) => {
  const course_total = course.completed + course.uncompleted;
  return (
    <Link
      to={`/student/dashboard/${course.id}`}
      style={{ boxShadow: "0px 1px 10.4px 0px #0000000F" }}
      className={`max-w-1/2  bg-white border border-[#66708538] space-y-3 rounded-md ${
        !isGrid ? "p-6" : "p-0 min-h-[22.75rem] h-full"
      }`}
    >
      <div
        className={` flex items-center flex-wrap gap-5 ${isGrid && "h-[60%]"}`}
      >
        <img
          src={course.image}
          alt=""
          className={` ${
            !isGrid ? "w-9 h-9" : "w-full h-[7.8125rem]"
          } object-contain md:object-cover`}
        />
        <p
          className={`${
            !isGrid ? "text-[2rem]" : "px-3 text-[1.7rem]"
          } text-[#242222] leading-9 font-medium`}
        >
          {course.name}
        </p>
      </div>

      <div
        className={`relative w-full min-h-10 flex ${
          !isGrid ? "flex-col gap-3" : "px-3 flex-row items-center gap-2"
        }`}
      >
        <progress
          id="progress-bar"
          value={course.completed}
          max={course_total}
          // max={course.total}
        />
        <p className="text-2xl font-medium text-[#667085]">
          {Math.floor(
            (course.completed / course_total) * 100
            // (course.total === 0 ? 0 : course.completed / course.total) * 100
          )}
          %
        </p>

        <p
          className={`text-2xl text-[#667085] flex items-center gap-2 absolute  ${
            !isGrid ? "left-14 bottom-0" : "left-3 -bottom-5"
          }`}
        >
          <span className="w-[14px] h-[14px] rounded-full bg-[#d9d9d9]" />
          Completed {course.completed}/{course_total}
          {/* {course.completed}/{course.total === 0 ? "N/A" : course.total} */}
          {/* Completed {course_total === 0 ? 0 : course.completed / course_total} */}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
