import React, { useState } from "react";

export default function RegistrationForm() {
  const [error, setErrors] = useState([])
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { username, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email){setErrors("Please enter a username"||null)}    /*if (!email) */
    if (!formData.username){setErrors("Please enter username"||null)}   /*if (!username) */
    if (!formData.password){setErrors("Please enter password"||null)}   /*if (!password) */
    console.log("Form Data: ", formData);
  };
  return (
    <div>
      RegistrationForm
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <div>{error[1] && <p>{error[1]}</p>}</div>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username} /* value={username} */
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}   /* value={email} */
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}  /* value={password} */
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
