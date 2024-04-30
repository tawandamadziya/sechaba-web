
import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";
import About_Us from "../img/About_Us.jpg";
import SidePhoto from "../img/MainAbout.jpg"
import SidePhoto3 from "../img/HandsOff.png"
import SidePhoto2 from "../img/pic2.jpg"





const About = () => {
    useEffect(() => {
        const elements = [".Beginning", ".ServiceCard",".Contact"];
        elements.forEach((element) => {
          ScrollReveal().reveal(element, {
            reset: true,
            distance: "60px",
            duration: 2500,
            delay: 400,
            origin: "bottom",
          });
        });
    
        const titles = [
          ".Title",
          ".Our_Story_left",
          ".Test",
          ".CardHolder_left",
          ".Image",
          
        ];
        titles.forEach((title) => {
          ScrollReveal().reveal(title, {
            reset: true,
            distance: "60px",
            duration: 2500,
            delay: 400,
            origin: title.includes("left") ? "left" : "bottom",
          });
        });
      }, []);
  return (
    
    <div className="About bg-[white] w-screen">
        {/* Your about section content */}
        <div className="ImageCon font-serif text-center">
          <img
            src={About_Us}
            alt=""
            className="h-[250px] w-screen object-cover"
          />
          <div className="Title text-center text-6xl absolute top-20 font-bold text-[#e4b13a] left-1/2 transform -translate-x-1/2">
            About Us <br />
            <p className="text-[20px]">
              We offer a comprehensive range of security solutions tailored to
              your needs.{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-evenly"> 
            <div className="text-center w-[50%] mt-10 Our_Story_left">
            <p>About Us</p>
            <h1 className="text-4xl mb-10">Our Story Our Life </h1>
            <p className="text-[grey]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eligendi possimus sed numquam atque maxime dolorem quia deleniti recusandae accusantium fugit, repellendus odit assumenda perspiciatis aspernatur error distinctio ducimus adipisci?</p>
            <button className="mt-10 border-b text-black ">Read More</button>
        </div>

        <div className="Image">
            <img src={SidePhoto} className="w-[600px] mt-10" alt="" />
        </div>
        
        </div> 
        
        <div className="flex justify-evenly"> 
     <div className="Image">
            <img src={SidePhoto3} className="w-[600px] mt-10" alt="" />
        </div>

            <div className="text-center w-[50%] mt-10 Our_Story_left">
            <p>What We Do</p>
            <h1 className="text-4xl mb-10">Protect & Serve <br />Our Customers</h1>
            <p className="text-[grey]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eligendi possimus sed numquam atque maxime dolorem quia deleniti recusandae accusantium fugit, repellendus odit assumenda perspiciatis aspernatur error distinctio ducimus adipisci?</p>
            <button className="mt-10 border-b text-black ">Read More</button>
            </div>
        

        
        
        </div>

        <div className="flex justify-evenly"> 
      
            <div className="text-center w-[50%] mt-10 Our_Story_left">
            <p>About Us</p>
            <h1 className="text-4xl mb-10">Meet The Team </h1>
            <p className="text-[grey]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, eligendi possimus sed numquam atque maxime dolorem quia deleniti recusandae accusantium fugit, repellendus odit assumenda perspiciatis aspernatur error distinctio ducimus adipisci?</p>
            <button className="mt-10 border-b text-black ">Read More</button>
        </div>

          <div className="Image">
            <img src={SidePhoto2} className="w-[600px] mt-10" alt="" />
        </div>

        
        </div>

       


        
       
      </div>
  )
}

export default About