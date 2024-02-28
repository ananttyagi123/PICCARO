import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  const logo = "data:image/png;base64,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"
  return (<>
    <div className="bg-yellow-500 w-full h-90 p-4 border-1 border-black shadow-orange-300 box-shadow:2px 2px 3px 0px ">
      <img src={logo} className="img w-10 h-10 rounded-lg" />
      <Link to={'/MainPage'}>Main Page</Link>
    </div>
  </>)
}
export default Navigation;