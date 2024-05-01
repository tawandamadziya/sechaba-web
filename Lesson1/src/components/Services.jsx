import React from 'react'
import Service from "../img/Service.jpg";
import Serve1 from "../img/Service1.png";
import Serve2 from "../img/Service2.png";
import Serve3 from "../img/Service3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
const Services = () => {
  return (
    <div className="Services  w-screen h-auto relative bg-white text-black">
        {/* Your services section content */}
        <div className="ImageCon font-serif text-center">
          <img
            src={Service}
            alt=""
            className="h-[250px] w-screen object-cover"
          />
          <div className="Title text-center text-6xl absolute top-20 text-[#ffb700] left-1/2 transform -translate-x-1/2">
            Services <br />
            <p className="text-[20px]">
              We offer a comprehensive range of security solutions tailored to
              your needs.{" "}
            </p>
          </div>
        </div>
        <div className="Beginning text-center items-center font-serif">
          <p className="mb-4">Our Services</p>
          <h1 className="text-4xl">Explore Our Services</h1>
          <h1 className="text-4xl mb-5">Find Your Solution</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa
            sunt sit, soluta ad excepturi? Architecto, eaque mollitia iure sit
            dignissimos distinctio impedit ut itaque porro quas. Magnam, rerum
            nesciunt.
          </p>
        </div>
        <div className="Services flex flex-col smallS xl:flex-row justify-evenly items-center">
          <div className="ServiceCard bg-black text-white text-center m-10 flex-grow flex-1">
            <h1 className="text-2xl mb-5">Risk Management</h1>
            <p className="mb-10 text-[grey]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum et
              accusamus asperiores tempora adipisci hic atque mollitia quis
              quibusdam, iure ducimus ex! Magnam neque aliquam maiores impedit
              quos libero voluptate.
            </p>
            <img src={Serve1} alt="" className="mx-auto h-[240px] w-[90%]" />
          </div>
          <div className="ServiceCard bg-black text-white text-center m-10 flex-grow flex-1">
            <h1 className="text-2xl mb-5">Crisis Management</h1>
            <p className="mb-10 text-[grey]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum et
              accusamus asperiores tempora adipisci hic atque mollitia quis
              quibusdam, iure ducimus ex! Magnam neque aliquam maiores impedit
              quos libero voluptate.
            </p>
            <img src={Serve2} alt="" className="mx-auto h-[240px] w-[90%]" />
          </div>
          <div className="ServiceCard bg-black text-white text-center m-10 flex-grow flex-1">
            <h1 className="text-2xl mb-5">Security Management</h1>
            <p className="mb-10 text-[grey]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum et
              accusamus asperiores tempora adipisci hic atque mollitia quis
              quibusdam, iure ducimus ex! Magnam neque aliquam maiores impedit
              quos libero voluptate.
            </p>
            <img src={Serve3} alt="" className="mx-auto h-[240px] w-[90%]" />
          </div>
        </div>
        <div className="Services flex flex-col smallS xl:flex-row justify-evenly items-center">
          <div className="ServiceCard bg-black text-white text-center m-10 flex-grow flex-1">
            <h1 className="text-2xl mb-5">Risk Management</h1>
            <p className="mb-10 text-[grey]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum et
              accusamus asperiores tempora adipisci hic atque mollitia quis
              quibusdam, iure ducimus ex! Magnam neque aliquam maiores impedit
              quos libero voluptate.
            </p>
            <img src={Serve1} alt="" className="mx-auto h-[240px] w-[90%]" />
          </div>
          <div className="ServiceCard bg-black text-white text-center m-10 flex-grow flex-1">
            <h1 className="text-2xl mb-5">Crisis Management</h1>
            <p className="mb-10 text-[grey]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum et
              accusamus asperiores tempora adipisci hic atque mollitia quis
              quibusdam, iure ducimus ex! Magnam neque aliquam maiores impedit
              quos libero voluptate.
            </p>
            <img src={Serve2} alt="" className="mx-auto h-[240px] w-[90%]" />
          </div>
          <div className="ServiceCard bg-black text-white text-center m-10 flex-grow flex-1">
            <h1 className="text-2xl mb-5">Security Management</h1>
            <p className="mb-10 text-[grey]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum et
              accusamus asperiores tempora adipisci hic atque mollitia quis
              quibusdam, iure ducimus ex! Magnam neque aliquam maiores impedit
              quos libero voluptate.
            </p>
            <img src={Serve3} alt="" className="mx-auto h-[240px] w-[90%]" />
          </div>
        </div>
         
         <div className='text-white  bg-black'>
             <div>
            <div className='text-white  bg-black flex justify-evenly'>
        <div className='mt-10'>
            <h1 className='text-3xl'>We Protect You,Your Business <br />Your Assets</h1>
        </div>
        <div className='mt-10'>
             <h1 className='text-1xl font-bold mt-2'>Address</h1>
        <p className=''>South Africa <br />870 Street ,Office 759 <br /> Cape Town,8100</p>
        </div>

        <div className='mt-10'>
            <h1 className='font-bold text-1xl mt-2'>Drop Us A Message</h1>
            <p>info@gmail.com <br />+1840 841 25 79</p>
        </div>
       </div>
         </div>
         <div className="media-icons mt-[100px] flex justify-center">
              <a
                href="#"
                className="icon text-white text-2em m-60px mr-20 text-2xl "
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="icon mr-20 text-2xl ">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="icon mr-20 text-2xl ">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
         </div>
        
       
      </div>
  )
}

export default Services