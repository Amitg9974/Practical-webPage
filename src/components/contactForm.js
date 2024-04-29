import React, { useState } from "react";
import "./contactForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  // Initial state for form
  const initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    budget: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `${process.env.REACT_APP_API_URL}/contact/send`;

    try {
      const response = await axios.post(apiUrl, formData);
    //   console.log("Submission Response:", response.data);

      // Show success toast
      toast.success("Data submitted successfully!");
      setFormData(initialState);
    } catch (error) {
      console.error("Failed to submit form:", error);
      toast.error("Failed to submit data.");
    }
  };

  return (
    <div className="contactForm">
      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="info">
        <h1>Let’s discuss more about your project</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="name">
          <input
            type="text"
            name="fname"
            required
            placeholder="Name"
            value={formData.fname}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="lname"
            required
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="email">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="budget">
          <select
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className="input"
          >
            <option value="" disabled>
              Select your budget
            </option>
            <option value="1000">1000</option>
            <option value="2000">2000</option>
            <option value="3000">3000</option>
            <option value="4000">4000</option>
          </select>
          <textarea
            name="description"
            required
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="input"
          />
        </div>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
