import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import img1 from '../Components/Image/img1.jpeg'
import img2 from '../Components/Image/img2.jpeg'
import img3 from '../Components/Image/img3.jpeg'
import burger1 from '../Components/Image/burger1.png'
import fries1 from '../Components/Image/fries1.jpeg'
import pizza1 from '../Components/Image/pizza1.png'
import salad1 from '../Components/Image/salad1.jpeg'
import pasta1 from '../Components/Image/pasta1.png'
import offer1 from '../Components/Image/offer1.jpeg'
import offer2 from '../Components/Image/offer2.jpeg'
import offer3 from '../Components/Image/offer3.jpeg'

const imgs = [offer1, offer2, offer3];
const imgs2 = [burger1, fries1, pizza1, salad1, pasta1];

const MainPage = () => {

  return (<div className="bg-teal-500">
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
    <h1 className="text-center text-5xl  font-bold  text-black" style={{ fontFamily: 'Anta' }}>Food Items</h1>
    <main>
      <div className="flex flex-row w-full gap gap-5  p-4 mt-4 ml-40 ">
        {
          imgs2.map((i) => {
            return <IMG img={i} />
          })
        }
      </div>
    </main>

  </div >)
}
export default MainPage;

const IMG = ({ img }) => {
  return <img src={img} className="h-40 max-w-48 w-48 rounded-lg border-black border-2" />

}