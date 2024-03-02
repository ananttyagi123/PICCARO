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

const imgs = [p1, p2, p3, p4, p5];

export const Pizza = () => {
  return (
    <>
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Pizzas</center>
      <div className="hover:h-90  w-auto flex flex-row  justify-center ">
        {imgs.map((imgSrc, index) => (
          <div className="group hover:bg-black  hover:m-3 hover:rounded-lg shadow-none hover:shadow-2xl hover:shadow-white">
            <img key={index} src={imgSrc} height="100px" width="250px" className="rounded-lg shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 hover: hover:pb-5 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
            <h1 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">Pizza</h1>
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
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Burgers</center>
      <div className="flex flex-row flex justify-center ">
        {imgs2.map((imgSrc, index) => (
          <img key={index} src={imgSrc} height="100px" width="250px" className="shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 hover: hover:pb-5 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
        ))
        }
      </div>
    </>
  );
};




const imgs3 = [f1, f2, f3, f4, f5];

export const Fries = () => {
  return (
    <>
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Fries</center>
      <div className="flex flex-row  flex justify-center ">
        {imgs3.map((imgSrc, index) => (
          <img key={index} src={imgSrc} height="200px" width="250px" className="shadow-2xl shadow-black hover:shadow-white  border-3 m-3 gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 hover: hover:pb-5 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
        ))
        }

      </div>
    </>
  );
};




const imgs4 = [pa1, pa2, pa3, pa4, pa5];

export const Pasta = () => {
  return (
    <>
      <center style={{ fontFamily: 'Permanent Marker' }} className="text-3xl mt-5 pt-5">Pasta</center>
      <div className="flex flex-row  justify-center ">
        {imgs4.map((imgSrc, index) => (
          <img key={index} src={imgSrc} height="200px" width="250px" className="shadow-2xl shadow-black hover:shadow-white  bg-white  border-3 m-3  gap gap-4  border-2 border-stone-900 bg-stone-900 transition-transform duration-300 transform hover:scale-90 hover: hover:pb-5 pacity-90" style={{}} alt={`Pizza ${index + 1}`} />
        ))
        }

      </div>
    </>
  );
};

