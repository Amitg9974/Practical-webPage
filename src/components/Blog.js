import React, { useEffect, useRef, useState } from "react";
import "./Blog.css";
import Testmonials from "../images/Blog/Testmonials.png";
import BlogPage from "./blogPage";
import axios from "axios";

function Blog() {
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL + "/blog/";
        const response = await axios.get(apiUrl);
        setBlogDetails(response.data.data);
      } catch (error) {
        console.error("Failed to fetch Blog details:", error);
      }
    };

    fetchBlogDetails();
  }, []);

  const scrollContainer = useRef(null);

  // Smooth scrolling function
  const smoothScroll = (element, direction, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, 25);
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      smoothScroll(scrollContainer.current, "right", 300, 120);
    }
  };

  return (
    <div className="blog">
      <div className="t_monial">
        <img
          style={{ width: "80%", marginTop: "5pc" }}
          src={Testmonials}
          alt="Testmonials"
        />
      </div>
      <div className="blog-arrow">
        <h1>Blogs</h1>
        <p onClick={scrollRight}>
          View All <i className="bi bi-arrow-right"></i>
        </p>
      </div>
      <div ref={scrollContainer} className="blog-page">
        {blogDetails.map((post) => (
          <BlogPage
            key={post.id}
            title={post.name}
            modifiedDate={post.createdAt}
            summary={post.short_description}
            imageUrl={post.image_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
