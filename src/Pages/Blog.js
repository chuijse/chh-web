import React, { useRef, useState, useEffect } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import Card from "../Components/Card";
import CardGrande from "../Components/CardGrande";
import { motion } from "framer-motion";

const Blog = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  //if (!postData) return <div>Loading...</div>;

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="mainBlog">
        <div className="intro">
          <span className="centerText">
            <h1>Blog posts</h1>
            <h2>Filtra por categoría</h2>
          </span>
        </div>

        <div className="blogGrid">
          <Card color={"card_primaryColor"} />
          <CardGrande />
          <Card color={"card_secondaryColor"} />
          <CardGrande />
          <Card color={"card_primaryColor"} />
          <Card color={"card_secondaryColor"} />
          <Card color={"card_primaryColor"} />
          <CardGrande />
          <Card color={"card_secondaryColor"} />
          <CardGrande />
          <Card color={"card_primaryColor"} />
          <Card color={"card_secondaryColor"} />
        </div>

        {/*<div className="blogPosts">
        {postData &&
          postData.map((post, index) => (
            <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
              <article
                className="blogCard"
                style={{
                  backgroundImage: `url('${post.mainImage.asset.url}')`,
                }}
              >
                <span key={index}>
                  <div className="cardTitle">
                    <h3>{post.title}</h3>
                  </div>
                  {
                    <img
                      className="blogImgs"
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />
                  }
                </span>
              </article>
            </Link>
          ))}
                </div>*/}
      </div>
    </motion.div>
  );
};

export default Blog;
