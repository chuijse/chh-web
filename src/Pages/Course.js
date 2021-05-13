import React, { cloneElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import Button from "../Components/Button";
import PortableText from "../Components/PortableText";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [courseData, setCourseData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "courses" && slug.current == $slug]{
          title,
          slug,
          semester,
          year,
          colleagues[]->{_id, name, link},
          "university": universities->name,
          mainImage{
            asset->{
              _id,
              url
             },
            caption,
           },
          "ImageGalleryData":imageGallery[].asset->{
               _id, 
               url
            },
            body[]{
              _key,
              _type,
              children,
              markDefs,
              style,
              caption,
              photo,
              videoUrl,
              video1{
                asset->,
                caption
              },
              video2{
                asset->,
                caption
              },
              video3{
                asset->,
                caption
              },	
            },
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setCourseData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!courseData) return <div>Loading...</div>;

  console.log(courseData.body);

  //console.log(courseData.colleaguesData);

  return (
    <div className="mainCourse">
      <div className="layout">
        <h1>{courseData.title}</h1>
        <h2>
          {courseData.year} / {courseData.semester}°semestre
        </h2>
        {/*<div>
          <img
            src={urlFor(courseData.authorImage).width(1300).url()}
            alt="Author is Kap"
          />
          <h4>{courseData.name}</h4>
        </div>*/}
        <img src={urlFor(courseData.mainImage).width(1200).url()} alt="" />
        <div className="courseInfo">
          <div className="stats">
            <div className="item">
              <div className="content">
                <h3>Profesores</h3>
                <p>{courseData.university}</p>
                {/*{colliguesNames.map((names, index) => (
                  <div key={index}>
                    <Button name={names}></Button>
                  </div>
                ))}*/}
                {courseData.colleagues?.map((item, index) => (
                  <span key={index}>
                    <Button name={item.name} link={item.link}>
                      {" "}
                    </Button>
                  </span>
                ))}
              </div>
            </div>
            <div className="item">
              <div className="content">
                <h3>Tecnologias</h3>
                <p>Software, herramienta o tecnica</p>
              </div>
            </div>
          </div>
          <div className="info">
            <h4>Descrpición</h4>
            <PortableText
              blocks={courseData.body}
              imageOptions={{ fit: "max" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
