import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (value) => {
    // must contain @ and end with .com / .in / other country code
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // simple pattern with TLD.[web:52][web:55]
    if (!value) return "Email is required";
    if (!regex.test(value)) {
      return "Email must contain @ and a valid domain (.com / .in / .country)";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (!value) return "Password is required";

    if (!/^[A-Z]/.test(value)) {
      return "Password should start with a capital letter";
    }
    if (!/[0-9]/.test(value)) {
      return "Password should contain at least one number";
    }
    if (!/[!@#$%^&*(),.?":{}|<>_\-+=]/.test(value)) {
      return "Password should contain at least one special character";
    }
    if (value.length < 5) {
      return "Password should have at least 5 characters";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    const newErrors = {};
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Form submitted successfully! All validations passed.");
      // here you would normally send data to server
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Start with Capital, include number & special char"
          />
          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>

      {successMessage && <p className="success-text">{successMessage}</p>}
    </>
  );
}

export default LoginForm;