import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ height: '10vh' }}>
      <div className="container">
        <h1 className="navbar-heading">
          <Link to="/" className="nav-link" style={{ color : 'white'}}>Blog Post App</Link>
        </h1>
        <Link to="/add-blog" className="btn btn-primary ml-auto">Add Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
