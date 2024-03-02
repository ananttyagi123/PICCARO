import React from "react";
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
  { src: pa1, heading: "White Sauce", description: "" },
  { src: pa2, heading: "Pesto pasta", description: "" },
  { src: pa3, heading: "Cream and Onion", description: "" },
  { src: pa4, heading: "Chicken Alferido", description: "" },
  { src: pa5, heading: "Roasted Bell pepper Pasta", description: "" }
];




export const Pizza = () => {
  return (
    <>
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Pizzas</center>
      <div className="hover:h-90  w-auto flex flex-row  justify-center ">
        {pizza.map((item, index) => (
          <div className="group hover:bg-black  hover:m-3 hover:rounded-lg shadow-none hover:shadow-2xl hover:shadow-white">
            <img key={index} src={item.src} height="100px" width="250px" className="rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 hover: hover:pb-5 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <div class="pizza-info justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white">
              <h2 className="p-2  m-3 justify-center uppercase ext-white text-center text-center">{item.heading}</h2>
              <button className="bg-white text-red-800 border-2xl rounded-lg p-1 flex justify-center mx-auto m-4">Buy Now</button>
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
          <div className="group hover:bg-black  hover:m-3 hover:rounded-lg shadow-none hover:shadow-2xl hover:shadow-white">
            <img key={index} src={item.src} height="100px" width="250px" className="rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 hover: hover:pb-5 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <div class="pizza-info justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h2 className="p-2  m-3 justify-center uppercase ext-white text-center">{item.heading}</h2>
              <button className="bg-white text-red-800 border-2xl rounded-lg p-1 flex justify-center mx-auto m-2 text-center">Buy Now</button>
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
          <div className="group hover:bg-black  hover:m-3 hover:rounded-lg shadow-none hover:shadow-2xl hover:shadow-white">
            <img key={index} src={item.src} height="100px" width="250px" className="rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 hover: hover:pb-5 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <div class="pizza-info justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h2 className="p-2  m-3 justify-center uppercase ext-white text-center">{item.heading}</h2>
              <button className="bg-white text-red-800 border-2xl rounded-lg p-1 flex justify-center mx-auto m-2 ">Buy Now</button>
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
            <img key={index} src={item.src} height="100px" width="250px" className="rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 hover: hover:pb-5 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <div class="pizza-info justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h2 className="p-2  m-3 justify-center uppercase ext-white text-center">{item.heading}</h2>
              <button className="bg-white text-red-800 border-2xl rounded-lg p-1 flex justify-center mx-auto m-2">Buy Now</button>
            </div>


          </div>
        ))
        }

      </div>
    </>
  );
};

