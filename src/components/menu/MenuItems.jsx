import React, { useState } from "react";
import Wrapper from "../helpers/Wrapper";
import { meals } from "./meals";
import styled from "./MenuItems.module.css";

const MenuItems = () => {
  //state
  const [selectedCourse, setSelectedCourse] = useState("Starters");

  // courses array
  const courses = ["Starters", "Main Dishes", "Desserts", "Drinks"];

  // function to set the course
  const handleCourse = (course) => setSelectedCourse(course);

  //filter the meals array by the selected course then map over the results
  const menu = meals
    .filter((item) => item.course === selectedCourse)
    .map((item) => {
      return (
        <article key={item.id} className={styled["meal-details"]}>
          {/* name and descption */}
          <div className={styled["meal-info"]}>
            <p>
              <b> {item.name}</b>
            </p>
            <p>
              <small>{item.description}</small>
            </p>
          </div>

          {/* price */}
          <p className={styled.price}>
            <b>$ {item.price}</b>
          </p>
        </article>
      );
    });

  return (
    <section>
      <Wrapper>
        <div className={styled.courses}>
          {/**
           * map over the courses
           * call function to set the course based on what the user clicked on
           */}
          {courses.map((course) => (
            <p
              key={course}
              onClick={() => handleCourse(course)}
              className={selectedCourse === course ? styled.active : ""}
            >
              {course}
            </p>
          ))}
        </div>

        <section className={styled.menu}>{menu}</section>
      </Wrapper>
    </section>
  );
};

export default MenuItems;
