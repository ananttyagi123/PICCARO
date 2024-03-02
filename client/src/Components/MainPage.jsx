import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Navigation from "./Navigation";
import img1 from '../Components/Image/img1.jpeg'
import img2 from '../Components/Image/img2.jpeg'
import img3 from '../Components/Image/img3.jpeg'
import burger1 from '../Components/Image/burger1.png'
import fries1 from '../Components/Image/fries1.jpeg'
import pizza1 from '../Components/Image/pizza1.png'
import salad1 from '../Components/Image/salad1.jpeg'
import pasta1 from '../Components/Image/pasta1.png'
import sweet from '../Components/Image/sweet.jpg'

import offer1 from '../Components/Image/offer1.jpeg'
import offer2 from '../Components/Image/offer2.jpeg'
import offer3 from '../Components/Image/offer3.jpeg'
import colddrink from '../Components/Image/colddrink.webp'

const imgs = [offer1, offer2, offer3];
const imgs2 = [burger1, fries1, pizza1, salad1, pasta1, sweet];

const MainPage = () => {

  return (<div>
    <Navigation></Navigation>
    <h1 className="text-5xl  font-bold text-black text-center p-2" style={{ fontFamily: 'Anta' }}>Offers And Discounts</h1>
    <header className="m-2 pb-4">
      <div className="flex flex-row w-full gap gap-5 p-3  ml-20 mt-4">
        {
          imgs.map((i) => {
            return <IMG className="hover:shadow-xl shadow-orange-700" img={i} />
          })
        }
        {
          imgs.map((i) => {
            return <IMG img={i} />
          })
        }
      </div>
    </header>

    <main>
      <div className="flex flex-row m-none p-none">
        <h1 className=" text-5xl text-bold  p-5" style={{ fontFamily: 'Anta' }}>What's in your Mind</h1>
        <div className="ml-auto mr-32">
          <button className="bg-white p-2 rounded-lg size-10 mx-2 my-5"><FaArrowLeft /></button>
          <button className="bg-white p-2 rounded-lg  size-10 my-5"><FaArrowRight /></button>
        </div>
      </div>


      <div className="flex flex-row w-full gap gap-5  p-4 mt-4 ml-40 ">
        {
          imgs2.map((i) => {
            return <IMG img={i} />
          })
        }
      </div>
    </main >

  </div >)
}
export default MainPage;

const IMG = ({ img }) => {
  return <img src={img} className="h-40 max-w-48 w-48 rounded-lg border-black border-2" />

}