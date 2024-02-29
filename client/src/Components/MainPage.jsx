import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import img1 from '../Components/Image/img1.jpeg'
import img2 from '../Components/Image/img2.jpeg'
import img3 from '../Components/Image/img3.jpeg'

const MainPage = () => {
  return (<>
    <Navigation></Navigation>
    <header className="m-2 pb-4 border rounded-3xl bg-stone-600">
      <div className="flex flex-row w-full gap gap-5 p-3 mt-4  ">
        <img src={img1} className="h-40 max-w-48 w-48 rounded-lg border-black border-2" />
        <img src={img2} className="h-40 max-w-48 w-48 bg-green-500 rounded-lg border-black border-2" />
        <img src={img3} className="h-40 max-w-48 w-48 bg-green-500 rounded-lg border-black border-2" />
        <img src={img1} className="h-40 max-w-48 w-48 rounded-lg border-black border-2" />
        <img src={img2} className="h-40 max-w-48 w-48 bg-green-500 rounded-lg border-black border-2" />
        <img src={img3} className="h-40 max-w-48 w-48 bg-green-500 rounded-lg border-black border-2" />
        <img src={img3} className="h-40 max-w-48 w-48 bg-green-500 rounded-lg border-black border-2" />
      </div>
    </header>
    <main>
      <div className="flex flex-row w-full gap gap-5  p-4 mt-4 ml-40 ">
        <img src={img1} className="h-60 max-w-30 w-48 m-3 rounded-lg border-black border-2" />
        <img src={img1} className="h-60 max-w-30 w-48 m-3  rounded-lg border-black border-2" />
        <img src={img1} className="h-60 max-w-30 w-48 m-3  rounded-lg border-black border-2" />
        <img src={img1} className="h-60 max-w-30 w-48 m-3  rounded-lg border-black border-2" />
        <img src={img1} className="h-60 max-w-30 w-48 m-3  rounded-lg border-black border-2" />
      </div>
    </main>

  </>)
}
export default MainPage;