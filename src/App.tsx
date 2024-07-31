import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './pages/user/UserManagement';


function App() {
  return (
    <Router> {/* Bao bọc các route trong Router */}
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <a href="/user">click me</a>
            </div>
          } />
          <Route path="/user" element={<UserManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
