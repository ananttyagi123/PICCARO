import React from "react";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import Picado from '../Components/Image/Picado.jpeg'
const Navigation = () => {
  const logo = "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"

  return (<>
    <div className="flex flex-row border-b-2 border-white shadow-xl shadow-gray-500 mb-10 w-full h-90 p-4 border-1 border-black shadow-black-300 box-shadow:2px 2px 3px 0px">

      <img src={logo} className="w-10 h-10 rounded-lg shadow shadow-black " />
      <div className="flex  ml-auto">

      </div>
      <h1 className="ml-96 text-6xl" style={{ fontFamily: 'Honk' }}>Piccaro</h1>

      <div className="ml-auto">
        <div className=" flex flex-row">
          <input type="text" className="rounded-lg shadow shadow-black p-2 mr-2 bg-grey-200" />
          <FcSearch className="bg-white h-10 w-12 shadow shadow-black rounded-lg p-1 m-1"></FcSearch>

          <Link className="text-black m-2 text-bold hover:underline underline-offset-2" to="/Signup">Signup</Link>
          <Link className="text-black m-2 text-bold hover:underline underline-offset-2" to="/Signin">Signin</Link>
          <Link className="text-black m-2 text-bold hover:underline underline-offset-2" to="/AboutUs">About Us</Link>
        </div>
      </div>
    </div>
  </>)
}

export default Navigation;