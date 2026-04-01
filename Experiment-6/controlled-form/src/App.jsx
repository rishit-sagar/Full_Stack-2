import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submittedData, setSubmittedData] = useState(null); // ✅ FIXED
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);   // Save submitted data
    setIsSubmitted(true);         // Trigger glow + confetti

    setFormData({
      name: "",
      email: "",
      message: ""
    });

    // Remove glow + confetti after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="app-root">

      {/* Form Card */}
      <div className={`app-card ${isSubmitted ? "success-glow" : ""}`}>
        <h2 className="app-title">Contact Form</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Name</label>
            <input
              className="input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label>Message</label>
            <textarea
              className="textarea"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>

      {/* Confetti */}
      {isSubmitted && <div className="confetti-container"></div>}

      {/* Output Card */}
      {submittedData && (
        <div className="output-card">
          <h3>Form Record Saved</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Message:</strong> {submittedData.message}</p>
        </div>
      )}

    </div>
  );
}

export default App;