import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import UserRegister from './pages/UserRegister';
import UserList from './pages/UserList';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
