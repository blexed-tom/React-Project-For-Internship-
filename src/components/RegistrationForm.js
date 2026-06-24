import React, { useState } from "react";

function RegistrationForm({ addParticipant }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addParticipant(formData);

    setFormData({
      name: "",
      email: "",
      workshop: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="workshop"
        placeholder="Workshop Name"
        value={formData.workshop}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;