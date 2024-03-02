import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  const logo = "https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
  return (<>
    <div className="flex flex-row border-b-2 border-white shadow-xl shadow-gray-500 mb-10 w-full h-90 p-4 border-1 border-black shadow-orange-300 box-shadow:2px 2px 3px 0px">
      <img src={logo} className="w-10 h-10 rounded-lg" />
      <div className="ml-auto ">
        <Link className="text-white m-2 text-bold hover:underline underline-offset-2" to="/Signup">Signup</Link>
        <Link className="text-white m-2 text-bold hover:underline underline-offset-2" to="/Signin">Signin</Link>
        <Link className="text-white m-2 text-bold hover:underline underline-offset-2" to="/AboutUs">About Us</Link>
      </div>

    </div>
  </>)
}

export default Navigation;