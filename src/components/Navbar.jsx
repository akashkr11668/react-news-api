




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FetchDataa from './FetchDataa.css';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // do something with searchText, like fetch search results from API
    
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">NEWS Nation</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link text-white" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/technology">Tech</Link>
              </li>
              <li className="nav-item">
                <form className="d-flex" onSubmit={handleSearchSubmit}>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={handleSearchChange} />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Navbar;


