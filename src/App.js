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


export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:movieId" element={<MovieDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}
