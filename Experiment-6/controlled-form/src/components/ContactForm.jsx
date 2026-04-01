
import { useState } from "react";

function ContactForm() {
  // Step 3: useState to store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  // Step 4: handle input change events
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  // Step 5: submit the form with an event handler
  const handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh
    setSubmittedData({ name, email, message });

    // optional: clear fields after submit
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="input"
            type="text"
            value={name}              // controlled by state
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="input"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="textarea"
            rows="4"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message"
          />
        </div>

        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="output">
          <h2>Submitted Data</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </>
  );
}

export default ContactForm;