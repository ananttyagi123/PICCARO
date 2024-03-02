
import { ReactDOM, useState } from "react";
import { TiTick } from "react-icons/ti";


import { Link } from "react-router-dom";
import p1 from '../Components/Image/p1.jpeg'
import p2 from '../Components/Image/p2.jpeg'
import p3 from '../Components/Image/p3.jpeg'
import p4 from '../Components/Image/p4.jpeg'
import p5 from '../Components/Image/p5.jpeg'

import b2 from '../Components/Image/b2.jpeg'
import b1 from '../Components/Image/b1.jpeg'
import b3 from '../Components/Image/b3.jpeg'
import b4 from '../Components/Image/b4.jpeg'
import b5 from '../Components/Image/b5.jpeg'



import f1 from '../Components/Image/f1.jpeg'
import f2 from '../Components/Image/f2.jpeg'
import f3 from '../Components/Image/f3.jpeg'
import f4 from '../Components/Image/f4.jpeg'
import f5 from '../Components/Image/f5.jpeg'



import pa1 from '../Components/Image/pa1.jpeg'
import pa2 from '../Components/Image/pa2.jpeg'
import pa3 from '../Components/Image/pa3.jpeg'
import pa4 from '../Components/Image/pa4.jpeg'
import pa5 from '../Components/Image/pa5.jpeg'

const pizza = [
  { src: p1, heading: "Margetita", description: "" },
  { src: p2, heading: "Onion and Garlic Pizza", description: "" },
  { src: p3, heading: "Thin Crust", description: "" },
  { src: p4, heading: "Double Cheese", description: "" },
  { src: p5, heading: "Onion and Capsicum", description: "" }
];

const burger = [
  { src: b1, heading: "Double Mac and Cheese", description: "" },
  { src: b2, heading: "MAc Maharaja", description: "" },
  { src: b3, heading: "Veggie Burger", description: "" },
  { src: b4, heading: "Tofu Tikki Burger", description: "" },
  { src: b5, heading: "Jalapeno & Cheese", description: "" }
];

const fries = [
  { src: f1, heading: "peri peri", description: "" },
  { src: f2, heading: "Mayo fries", description: "" },
  { src: f3, heading: "Masala Fries", description: "" },
  { src: f4, heading: "cream and Onion Fries", description: "" },
  { src: f5, heading: "pepper Fries", description: "" }
];

const pasta = [
  { src: pa1, heading: "Red Sauce", description: "" },
  { src: pa2, heading: "Cream & Onion", description: "" },
  { src: pa3, heading: "Pesto pasta", description: "" },
  { src: pa4, heading: "White Sauce", description: "" },
  { src: pa5, heading: "Roasted Bell pepper ", description: "" }
];






export const Pizza = () => {
  const [add, postAdd] = useState('ADD');
  const addEvent = (e) => {


    postAdd(<TiTick />);
  }
  return (
    <>
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Pizzas</center>
      <div className="hover:h-90  w-auto flex flex-row  justify-center ">
        {pizza.map((item, index) => (
          <div className="group hover:bg-black  hover:m-3 hover:rounded-lg shadow-none hover:shadow hover:shadow-xl transition-transform duration-700 ">
            <img key={index} src={item.src} className="size-48 rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 opacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <div class="pizza-info justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white">
              <h2 className="p-2  m-3 justify-center uppercase text-white text-center text-center">{item.heading}</h2>
              <div className="flex flex-row p-2">
                <button className="bg-white text-black bg-green-500 uppercase border-2xl rounded-lg p-2 flex justify-center mx-auto m-2 hover:bg-green-600 hover:text-white hover:border hover:border-white">Buy Now</button>
                <button id={index} onClick={addEvent} className="bg-white text-black bg-red-500 hover:opacity-1 border-2xl rounded-lg p-2  flex justify-center mx-auto m-2 hover:bg-red-600 hover:text-white hover:border hover:border-white">{add}</button>
              </div>
            </div>


          </div>
        ))
        }

      </div>
    </>
  );
};



const imgs2 = [b1, b2, b3, b4, b5];

export const Burger = () => {
  return (
    <>
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Burger</center>
      <div className="hover:h-90  w-auto flex flex-row  justify-center ">
        {burger.map((item, index) => (
          <div className="group hover:bg-black  hover:m-3 hover:rounded-lg shadow-none hover:shadow hover:shadow-xl">
            <img key={index} src={item.src} className=" size-48 rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90  pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <div class="pizza-info justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h2 className="p-2  m-3 justify-center uppercase ext-white text-center">{item.heading}</h2>
              <div className="flex flex-row p-2">
                <button className="bg-white text-black bg-green-500 uppercase border-2xl rounded-lg p-2 flex justify-center mx-auto m-2 hover:bg-green-600 hover:text-white hover:border hover:border-white">Buy Now</button>
                <button className="bg-white text-black bg-red-500 hover:opacity-1 border-2xl rounded-lg p-2  flex justify-center mx-auto m-2 hover:bg-red-600 hover:text-white hover:border hover:border-white">ADD</button>
              </div>
            </div>


          </div>
        ))
        }

      </div>
    </>
  );
};






export const Fries = () => {
  return (
    <>
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Fries</center>
      <div className="hover:h-90  w-auto flex flex-row  justify-center ">
        {fries.map((item, index) => (
          <div className="group hover:bg-black  hover:m-3 hover:rounded-lg shadow-none hover:shadow-xl ">
            <img key={index} src={item.src} className=" size-48 rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <div class="pizza-info justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h2 className="p-2  m-3 justify-center uppercase ext-white text-center">{item.heading}</h2>
              <div className="flex flex-row p-2">
                <button className="bg-white text-black bg-green-500 uppercase border-2xl rounded-lg p-2 flex justify-center mx-auto m-2 hover:bg-green-060 hover:text-white hover:border hover:border-white">Buy Now</button>
                <button className="bg-white text-black bg-red-500 hover:opacity-1 border-2xl rounded-lg p-2  flex justify-center mx-auto m-2 hover:bg-red-600 hover:text-white hover:border hover:border-white">ADD</button>
              </div>
            </div>


          </div>
        ))
        }

      </div>
    </>
  );
};






export const Pasta = () => {
  return (
    <>
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Pasta</center>
      <div className="hover:h-90  w-auto flex flex-row  justify-center ">
        {pasta.map((item, index) => (
          <div className="group hover:bg-black  hover:m-3 hover:rounded-lg shadow-none hover:shadow-2xl hover:shadow-white">
            <img key={index} src={item.src} className="justify-center size-48 rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90  opacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <div class="pizza-info justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h2 className="p-2  m-3 justify-center uppercase ext-white text-center">{item.heading}</h2>
              <div className="flex flex-row p-2">
                <button className="bg-white text-black bg-green-500 uppercase border-2xl rounded-lg p-2 flex justify-center mx-auto m-2 hover:bg-green-00 hover:text-white hover:border hover:border-white">Buy Now</button>
                <button className="bg-white text-black bg-red-500 hover:opacity-1 border-2xl rounded-lg p-2  flex justify-center mx-auto m-2 hover:bg-red-600 hover:text-white hover:border hover:border-white">ADD</button>
              </div>
            </div>
          </div>
        ))
        }

      </div>
    </>
  );
};

