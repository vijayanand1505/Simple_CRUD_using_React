import React from "react";
import { useState } from "react";

function Get({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name : </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>{" "}
      <br />
      <div>
        <label htmlFor="lastName">Last Name : </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>{" "}
      <br />
      <div>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>{" "}
      <br />
      <button type="submit">
        <i class="fa fa-plus">Submit</i>
      </button>{" "}
      <br />
    </form>
  );
}

export default Get;
