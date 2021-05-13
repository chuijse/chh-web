import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import Card from "../Components/Card";

const Teaching = () => {
  const [courseData, setCourse] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "courses"] | order(year desc) {
          title,
          slug,
          abstract,
          semester,
          year,
          "acronym": universities->acronym,
          "university": universities->name,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }  
      }`
      )
      .then((data) => setCourse(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="mainTeaching">
        <div className="intro">
          <span className="centerText">
            <h1>Mi carrera docente</h1>
            <h2>Filtra por Universidad</h2>
          </span>
        </div>

        {!courseData ? (
          <div>Loading...</div>
        ) : (
          <div className="teachingGrid">
            {courseData &&
              courseData.map((course, index) => (
                <Link
                  to={"/teaching/" + course.slug.current}
                  key={course.slug.current}
                >
                  <span key={index}>
                    <Card
                      color={
                        course.acronym === "UDD"
                          ? "card_UDD"
                          : course.acronym === "UDP"
                          ? "card_UDP"
                          : null
                      }
                      title={course.title}
                      mainImage={course.mainImage.asset.url}
                      university={course.university}
                      abstract={course.abstract}
                      year={course.year}
                      semester={course.semester}
                    />
                  </span>
                </Link>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Teaching;
