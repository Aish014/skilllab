import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Carousel from "./components/Carousel";
import MoviesList from "./components/MoviesList";
import "./App.css";
import recommended1ImageSrc from "./recommended1.avif";
import recommended2ImageSrc from "./recommended2.avif";
import recommended3ImageSrc from "./recommended3.avif";
import recommended4ImageSrc from "./recommended4.avif";
import recommended5ImageSrc from "./recommended5.avif";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <div className="container-fluid">
            <Link className="navbar-brand text-danger fw-bold" to="/">book<span className="text-white">my</span>show</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/movies">Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/events">Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/offers">Offers</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="btn btn-outline-light me-2" to="/login">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-4">
          <Routes>
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/" element={
              <>
                <Carousel />
                <MoviesList />
              </>
            } />
          </Routes>
        </div>

        <div className="recommendedWrapper">

            <div className="recommendedCard">
              <img src={recommended1ImageSrc} className="recommendedImg" ></img>
              <h2>L2: Empuraan</h2>
              <p>Action/Crime/Thriller</p>
            </div>
            <div className="recommendedCard">
              <img src={recommended2ImageSrc} className="recommendedImg"></img>
              <h2>Sikandar</h2>
              <p>Action/Drama</p>
            </div>
            <div className="recommendedCard">
              <img src={recommended3ImageSrc} className="recommendedImg"></img>
              <h2>Chhaava</h2>
              <p>Action/Drama/Historical</p>  
            </div>
            <div className="recommendedCard">
              <img src={recommended4ImageSrc} className="recommendedImg"></img>
              <h2>The Diplomat</h2>  
              <p>Action/Thriller</p>
            </div>
            <div className="recommendedCard">
              <img src={recommended5ImageSrc} className="recommendedImg"></img>
              <h2>Snow White</h2>
              <p>Adventure/Drama/Family/Musical</p>
            </div>
            
        </div>
      </div>
    </Router>
  );
}

export default App;
