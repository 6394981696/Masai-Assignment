import React, { useState } from 'react';

const DynamicEmailForm = () => {
  // State to store email inputs
  const [emails, setEmails] = useState([{ value: '', error: '' }]);

  // Function to handle adding a new email input
  const addEmailField = () => {
    setEmails([...emails, { value: '', error: '' }]);
  };

  // Function to handle input changes
  const handleEmailChange = (index, e) => {
    const updatedEmails = [...emails];
    updatedEmails[index].value = e.target.value;
    setEmails(updatedEmails);
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all emails
    let isValid = true;
    const updatedEmails = emails.map((emailObj) => {
      if (!validateEmail(emailObj.value)) {
        emailObj.error = 'Invalid email format';
        isValid = false;
      } else {
        emailObj.error = '';
      }
      return emailObj;
    });

    setEmails(updatedEmails);

    // If all emails are valid, display them
    if (isValid) {
      alert('Form submitted with emails: ' + emails.map((emailObj) => emailObj.value).join(', '));
    }
  };

  return (
    <div style={styles.container}>
      {/* <h2 style={styles.heading}>Dynamic Email Form</h2> */}
      <form onSubmit={handleSubmit} style={styles.form}>
        {emails.map((emailObj, index) => (
          <div key={index} style={styles.inputContainer}>
            <input
              type="text"
              value={emailObj.value}
              onChange={(e) => handleEmailChange(index, e)}
              placeholder="Enter email"
              style={styles.input}
            />
            {emailObj.error && (
              <div style={styles.error}>
                {emailObj.error}
              </div>
            )}
          </div>
        ))}
        <div style={styles.buttonContainer}>
          <button type="button" onClick={addEmailField} style={styles.addButton}>
            Add Email
          </button>
          <button type="submit" style={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>

      <h3 style={styles.enteredEmailsHeading}>Entered Emails:</h3>
      <ul style={styles.emailList}>
        {emails.map((emailObj, index) => (
          <li key={index} style={styles.emailItem}>
            {emailObj.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styling object
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px',
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  enteredEmailsHeading: {
    marginTop: '30px',
    fontSize: '18px',
    color: '#333',
  },
  emailList: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'left',
  },
  emailItem: {
    padding: '8px',
    borderBottom: '1px solid #ddd',
    fontSize: '16px',
    color: '#555',
  },
};

export default DynamicEmailForm;
