
import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";
import About_Us from "../img/About_Us.jpg";
import SidePhoto from "../img/MainAbout.jpg"
import SidePhoto3 from "../img/HandsOff.png"
import SidePhoto2 from "../img/pic2.jpg"
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




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
          ".Container",
          ".Our_Story_left",
          ".Our",
          ".Number",
          ".Image",
          ".Numbers_left",
          
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

      function increasePeopleRating() {
        let currentRating = 0; // Starting rating
        const targetRating = 50; // Target rating
        const interval = 100; // Interval in milliseconds
      
        const ratingInterval = setInterval(() => {
          currentRating += 1; // Increase rating by 0.1
          document.getElementById("PeopleRating").textContent =
            currentRating.toFixed(1); // Update the rating display
      
          // Check if the target rating is reached
          if (currentRating >= targetRating) {
            clearInterval(ratingInterval); // Stop the interval
          }
        }, interval);
      }

      function increaseProjectRating() {
        let currentRating = 0; // Starting rating
        const targetRating = 1.2; // Target rating
        const interval = 100; // Interval in milliseconds
      
        const ratingInterval = setInterval(() => {
          currentRating += 0.1; // Increase rating by 0.1
          document.getElementById("ProjectRating").textContent =
            currentRating.toFixed(1); // Update the rating display
      
          // Check if the target rating is reached
          if (currentRating >= targetRating) {
            clearInterval(ratingInterval); // Stop the interval
          }
        }, interval);
      }

      useEffect(() => {
        increasePeopleRating();
      }, []);

      useEffect(() => {
        increaseProjectRating();
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
            <h1 className="text-4xl mb-10"><span className="font-bold">Protect & Serve</span><br />Our Customers</h1>
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

        <div className="w-screen mt-10 bg-black text-white text-center">
         <h1 className="Our text-4xl">Our Mission. <span>Our Promise</span></h1>
         <div className="Container flex mt-10 justify-evenly">
             <div className="Item mr-5">
                <h1 className="text-2xl mb-10 ">Ensure Peace of Mind</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas in ipsa aperiam eaque quis? Voluptate cupiditate qui, error magni officia voluptatum aliquam similique corporis natus, unde, veritatis doloribus praesentium velit!</p>
             </div>
             <div className="Item mr-5">
                <h1 className="text-2xl mb-10">Community Safety</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas in ipsa aperiam eaque quis? Voluptate cupiditate qui, error magni officia voluptatum aliquam similique corporis natus, unde, veritatis doloribus praesentium velit!</p>
             </div>
             <div className="Item mr-5">
                <h1 className="text-2xl mb-3">Protect Lives and Assets</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas in ipsa aperiam eaque quis? Voluptate cupiditate qui, error magni officia voluptatum aliquam similique corporis natus, unde, veritatis doloribus praesentium velit!</p>
             </div>
         </div>
         <div className="flex Numbers_left">
           <div className="mt-10">
            <div className="flex justify-start text-4xl ml-10">
              <div id="PeopleRating" className="text-white"></div>
              <p> K</p>
            </div>
            <p className="text-left ml-10">SATISFIED CUSTOMERS</p>
          </div> 
          <div className="mt-10">
            <div className="flex justify-start text-4xl ml-10">
              <div id="ProjectRating" className="text-white"></div>
              <p>K</p>
            </div>
            <p className="text-left ml-10">SUCCESSFUL PROJECTS</p>
          </div>
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

export default About