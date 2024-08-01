import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loading = () => {
  
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999, 
  };

  const loaderStyle: React.CSSProperties = {
    display: 'inline-block',
  };

  return (
    <div style={overlayStyle}>
      <div style={loaderStyle}>
        <HashLoader color="#36d7b7" />
      </div>
    </div>
  );
};

export default Loading;
