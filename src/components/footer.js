import React, { useEffect, useState } from "react";
import "./footer.css";
import logo from "../images/Home/Bitmaplogo.png";
import axios from "axios";

function Footer() {
    const [frontendDetails, setFrontendDetails] = useState({});
  useEffect(() => {
    const fetchFrontendDetails = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL + '/settings/fetch-frontend-details';
        const response = await axios.get(apiUrl);
        setFrontendDetails(response.data.data);
      } catch (error) {
        console.error("Failed to fetch frontend details:", error);
      }
    };

    fetchFrontendDetails();
  }, []);
//   useEffect(() => {
//     console.log('Updated frontendDetails: ', frontendDetails);
//   }, [frontendDetails]);

  return (
    <div className="footer">
      <div className="upper">
        <div className="left">
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h5>
          <h5 style={{ color: "#00D5F8" }}>{frontendDetails.inquiry_mail}</h5>
        </div>
        <div className="right">
          <div className="address">
            <h5>Address</h5>
            <p>{frontendDetails.address}</p>
          </div>
          <div className="contact">
            <h5>Contacts</h5>
            <p>{frontendDetails.contact_mail}</p>
            <p>{frontendDetails.contact_no}</p>
          </div>
        </div>
      </div>
      <div className="navbar1">
        <img src={logo} alt="Logo" />
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <li className="navList1">
            <a href="/">About Us</a>
          </li>
          <li className="navList1">
            <a href="/">Blogs</a>
          </li>
          <li className="navList1">
            <a href="/">Contact</a>
          </li>
          <li className="navList1">
            <a href="/">Service</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
