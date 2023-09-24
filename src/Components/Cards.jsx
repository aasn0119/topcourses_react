import Card from "./Card";
import React, { useState } from "react";

const Cards = (props) => {
  const { category, courses } = props; // Use destructuring to get props directly

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    // Check if category is not defined or set to "All"
    if (!category || category === "All") {
      let allCourses = [];
      Object.values(props.courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return props.courses[category] || []; // Return courses based on the selected category, or an empty array if undefined
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            course={course}
            key={course.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
