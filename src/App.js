import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';


export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetail />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/dang-nhap" element={<Login />} />
      </Routes>

      <Footer />
    </Router>
  );
}
