import React from "react";
import Navigation from './Navigation'
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



const Buy = () => {
  return (<>
    <Navigation></Navigation>
    <div className="h-96 w-auto border border-xl bg-stone-100 shadow shadow-xl mx-20 mt-10 flex flex-row  rounded-lg" style={{ fontFamily: 'Oswald' }}>
      <div>
        <img src={pa1} className="size-68 m-4 p-2 shadow shadow-xl rounded-lg" alt="" />
        <h1 className="ml-4 text-3xl font-bold "> Red Pepper Pasta</h1>
        <h2 className="font-semibold text-2xl my-2 mx-4">Price : <span className="text-blue-400">499 ₹</span></h2>
      </div>
      <div className="ml-60 mt-10" >

        <h1 className="font-bold pb-5">Red Pepper Pasta </h1>

        <p className="" style={{ fontFamily: 'Oswald' }}>Prepare to be whisked away on a culinary journey unlike any other with our sensational Red pepper pasta
          <br /> Picture this: tender strands of al dente pasta dancing in a velvety symphony of flavors, each mouthful bursting <br />with a harmonious blend of sun-kissed tomatoes, fragrant basil, and a hint of garlic that's downright irresistible. <br />
        </p>


        <h2 className="font-bold p-2">Ingredients:</h2>
        <div className="flex flex-col gap gap-2 ">
          <ul className="list-disc gap gap-5 ml-2 flex flex-row">

            <li>Pepper</li>
            <li>tomato</li>
            <li>Garlic</li>
            <li>Basil</li>
            <li>Pepper</li>
            <li></li>
          </ul>
        </div>
        
        <h2 className="p-2 mt-3 font-semibold">Serving Size:</h2>
        <span>1 person</span>
        <div className="pt-5 flex justify-center ">
          <button className="bg-green-600 shadow shdow-black shadow-lg px-4 py-1 rounded-lg hover:shadow-white hover:shadow-lg hover:border-lg hover:border-black  hover:opacity-4">Pay</button>
        </div>
        
      </div>
    </div >


  </>)
}

export default Buy;
