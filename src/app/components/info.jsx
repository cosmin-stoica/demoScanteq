import React, { useState } from 'react';

const Info = ({ message }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showInfo && (
        <div
          style={{
            position: 'absolute',
            top: '-30px',
            left: '100%',
            transform: 'translateX(0%)',
            backgroundColor: '#f0f0f0',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            zIndex: '1',
            width: '300px',
          }}
        >
          {message}
        </div>
      )}
      <div
        style={{
          display: 'inline-block',
          width: '20px',
          height: '20px',
          backgroundColor: '#007bff',
          borderRadius: '50%',
          color: '#fff',
          textAlign: 'center',
          lineHeight: '20px',
          marginLeft: '10px',
        }}
      >
        ?
      </div>
    </div>
  );
};

export default Info;
