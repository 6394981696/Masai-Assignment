import React from 'react';
import DynamicEmailForm from './DynamicEmailForm';

const App = () => {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>Dynamic Email Form</h1>
      <DynamicEmailForm />
    </div>
  );
};

const styles = {
  appContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
};

export default App;

