import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navigation from './Components/Navigation'
import MainPage from './Components/MainPage';
import Signin from './Components/Singin';
import Signup from './Components/Signup';
import AboutUs from './Components/AboutUs';
import FoodItems from './Components/FoodItems';
import Buy from './Components/Buy';


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path="/Fooditems" element={<FoodItems />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/buy" element={<Buy/>}></Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
