import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../App.css';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
