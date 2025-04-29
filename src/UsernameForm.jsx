import React, { useState } from "react";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
    setError(""); // clear error as user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setError("Username is required");
    } else {
      setError("");
      alert(`Submitted Username: ${username}`);
    }
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginTop: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  };

  const errorStyle = {
    color: "red",
    fontSize: "14px",
    marginTop: "-5px",
    marginBottom: "10px"
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter your username"
        style={inputStyle}
      />
      {error && <p style={errorStyle}>{error}</p>}
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default UsernameForm;
