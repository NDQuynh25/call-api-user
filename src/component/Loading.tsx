import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loading = () => {
  // Cài đặt kiểu cho lớp phủ mờ và loader
  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0)', // Nền trắng mờ
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0, // Đảm bảo lớp phủ nằm trên tất cả các phần tử khác
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
