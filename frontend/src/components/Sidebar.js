import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar}>
        {isOpen ? '≪' : '≫'}
      </button>
      {isOpen && (
        <ul>
          <li><Link to="/register">👤 ユーザー登録</Link></li>
          <li><Link to="/users">📋 ユーザー一覧</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
