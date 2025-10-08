import React, { useState } from "react";
import { object } from "yup";

export default function RegistrationForm() {
  const [error, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Please enter a username";
    } /*if (!email) */
    if (!formData.username) {
      newErrors.username = "Please enter username";
    } /*if (!username) */
    if (!formData.password) {
      newErrors.password = "Please enter password";
    } /*if (!password) */

    setErrors(newErrors);

    if (Object.values(newErrors).length === 0) {
      console.log("Form Data: ", formData);
    }
  };
  return (
    <div>
      RegistrationForm
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username} /* value={username} */
            onChange={handleChange}
          />
          <div>{error.username && <p className="text-red-600">{error.username}</p>}</div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email} /* value={email} */
            onChange={handleChange}
          />
          <div>{error.email && <p className="text-red-600">{error.email}</p>}</div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password} /* value={password} */
            onChange={handleChange}
          />
          <div>{error.password && <p className="text-red-600">{error.password}</p>}</div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
