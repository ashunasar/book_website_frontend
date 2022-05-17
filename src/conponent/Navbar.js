import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import Api from "../utils/api_config";
function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    async function checkAuth() {
      try {
        await Api.get("/isauthenticated");
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  const [searchText, setSearhText] = useState("");

  function onSearchTextChange(e) {
    setSearhText(e.target.value);
  }

  function scrollToAbout() {
    const divElement = document.getElementById("about");
    divElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-pri'>
        <div className='container-fluid navbar-container'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <div className='d-flex w-100 search-form search me-4'>
              <input
                className='form-control'
                type='search'
                placeholder='Search'
                aria-label='Search'
                value={searchText}
                onChange={onSearchTextChange}
              />
              <button type='button'>
                <Link to={"/search/" + searchText}>
                  <i className='fa-solid fa-magnifying-glass'></i>
                </Link>
              </button>
            </div>
            {!isAuthenticated ? (
              <Link to='/login' className='btn-main'>
                login
              </Link>
            ) : (
              ""
            )}
            <ul className='navbar-nav mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' onClick={scrollToAbout}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
