import React, { useRef } from "react";
import "./Home.css";
import logo from "../images/Home/Bitmaplogo.png";
import Contact from "../images/Home/Group 11.png";
import para from "../images/Home/How much could you s.png";
import Service from "./Service";
import About from "./About";
import Process from "./Process";
import Blog from "./Blog";
import ContactForm from "./contactForm";
import Footer from "./footer";

function Home() {
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const contactUs = useRef(null);
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="home">
        <div className="navbar">
          <img src={logo} alt="Logo" />
          <nav>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <li className="navList" onClick={() => scrollToRef(serviceRef)}>
                <b style={{ fontWeight: "600" }}>Services</b>
              </li>
              <li className="navList" onClick={() => scrollToRef(aboutRef)}>
                About Us
              </li>
              <li className="navList" onClick={() => scrollToRef(blogRef)}>
                Blogs
              </li>
              <li
                className="navList"
                onClick={() => scrollToRef(caseStudiesRef)}
              >
                Case Studies
              </li>
              <li className="navList" onClick={() => scrollToRef(contactUs)}>
                <img src={Contact} alt="Contact" />
              </li>
            </ul>
          </nav>
        </div>
        <div className="para1">
          <img src={para} alt="para" />
          <div style={{ width: "100%", textAlign: "left" }}>
            Answer the questions below to get a fixed price quotation for us to
            take your accountancy hassles away from you.
          </div>
        </div>
        <div className="rectangle">
          <p style={{ width: "70%" }}>
            Is your turnover expected to be more than £85k?
          </p>
          <div className="button">
            <button className="yes">Yes</button>
            <button className="no">No</button>
          </div>
        </div>
      </div>
      <div ref={serviceRef}>
        <Service />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <Process />
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={caseStudiesRef}>
        <ContactForm />
      </div>
      <div ref={contactUs}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
