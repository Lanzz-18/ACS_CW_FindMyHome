import React, {useState} from 'react';
import SearchPage from './components/SearchPage';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from './components/Footer';
import PropertyDetails from './components/PropertyDetails';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className="App"> 
        <NavBar />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="search-page" element={<SearchPage />}/>
            <Route path="property/:id" element={<PropertyDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;