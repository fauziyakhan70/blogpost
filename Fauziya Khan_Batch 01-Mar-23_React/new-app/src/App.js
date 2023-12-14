import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBlog from './components/AddBlog';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ViewBlog from './components/ViewBlog';
import EditBlog from './components/EditBlog';
import { LikeProvider } from './Context/LikeContext'; 

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
                <Home />
            }
          />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/blog/:blogId" element={<LikeProvider><ViewBlog /></LikeProvider>} />
          <Route path="/edit-blog/:blogId" element={<EditBlog />} />
        </Routes>
      </Router>
  );
}

export default App;