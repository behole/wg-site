import React from 'react';

const TestLayout = () => {
  return (
    <div style={{
      position: 'fixed',
      right: 0,
      top: 0,
      width: '100px',
      height: '100vh',
      backgroundColor: 'red',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      zIndex: 9999
    }}>
      <div>Test Top</div>
      <div style={{ marginTop: 'auto' }}>Test Bottom</div>
    </div>
  );
};

export default TestLayout; 