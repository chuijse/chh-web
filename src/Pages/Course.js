import React, { cloneElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import button from "../Components/Button";
import Button from "../Components/Button";

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
          "colleaguesData":colleagues[]->{_id, name, link},
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
          body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setCourseData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!courseData) return <div>Loading...</div>;

  console.log(courseData.ImageGalleryData);
  console.log(courseData.mainImage);

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
                {courseData.colleaguesData?.map((item, index) => (
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
            <BlockContent
              blocks={courseData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
