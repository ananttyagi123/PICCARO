import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navigation from './Components/Navigation'
import MainPage from './Components/MainPage';

function App() {


  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path='/MainPage'element={<MainPage/>}></Route>
          {/* <Route path="Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/About" element={<AboutUs/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
