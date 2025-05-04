import React from 'react';
import { Outlet } from 'react-router-dom';

const Dashhboard = () => {
  return (
    <div>
      {/* Common layout (optional) */}
      <Outlet />
    </div>
  );
};

export default Dashhboard;
