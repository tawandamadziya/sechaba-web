import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faAngleDown,
  faQuoteLeft,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "scrollreveal";
import BackImage from "../img/Home.jpg";
import About_Us from "../img/About_Us.jpg";
import Service from "../img/Service.jpg";
import Serve1 from "../img/Service1.png";
import Serve2 from "../img/Service2.png";
import Serve3 from "../img/Service3.png";

// Function to gradually increase star rating
function increaseStarRating() {
  let currentRating = 0; // Starting rating
  const targetRating = 4.8; // Target rating
  const interval = 100; // Interval in milliseconds

  const ratingInterval = setInterval(() => {
    currentRating += 0.1; // Increase rating by 0.1
    document.getElementById("starRating").textContent =
      currentRating.toFixed(1); // Update the rating display

    // Check if the target rating is reached
    if (currentRating >= targetRating) {
      clearInterval(ratingInterval); // Stop the interval
    }
  }, interval);
}

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

const handleMenuHover = (className) => {
  const dropMenu = document.querySelector(className);
  dropMenu.classList.add("visible");
  setTimeout(() => {
    dropMenu.classList.remove("visible");
  }, 2500);
};



const Home = () => {
  const handleMenuHoverA = () => handleMenuHover(".DropMenuAboutUs");

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
      ".main-title",
      ".Testimony_Holder",
      ".Test",
      ".CardHolder_left",
      ".image",
      ".textbox",
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

  useEffect(() => {
    increaseStarRating();
  }, []);

  useEffect(() => {
    increasePeopleRating();
  }, []);

  return (
    <div className="bg-black text-white w-screen Home">
      {/* Header */}
      <div className="flex justify-between">
        <div className="text-3xl font-serif">
          <h1 className="Onhover">
            SECHABA<span className="text-[#ffb300]">.</span>
          </h1>
        </div>
        <div className="flex font-serif flex-wrap justify-evenly pr-10">
          <div className="mr-10 Onhover">
            <FontAwesomeIcon icon={faPhone} /> +27 67 656 9851 |
          </div>
          <p className="Onhover">
            <FontAwesomeIcon icon={faEnvelope} /> sechaba_protection@gmail.com
          </p>
        </div>
      </div>
      <hr />
      {/* Navigation */}
      <div className="NavBar flex justify-center xl:justify-between smallI">
        <div className="Tabs">
          <ul className="hidden xl:flex small">
            <li className="p-5 Active Scalar ">
              <a href="/">Home</a>
            </li>
            <li className="p-5 Scalar" onMouseEnter={handleMenuHoverA}>
              <a href="/">
                About Us <FontAwesomeIcon icon={faAngleDown} />
              </a>
            </li>
            <li
              className="p-5 Scalar"
              onMouseEnter={() => handleMenuHover(".DropMenuServices")}
            >
              <a href="/">
                Services <FontAwesomeIcon icon={faAngleDown} />
              </a>
            </li>
            <li className="p-5 Scalar">
              <a href="/">Page</a>
            </li>
            <li className="p-5 Scalar">
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="Socials mr-2 ml-2 text-2xl ">
          <FontAwesomeIcon icon={faFacebook} className="p-5 Onhover_Icons" />
          <FontAwesomeIcon icon={faInstagram} className="p-5 Onhover_Icons" />
          <FontAwesomeIcon icon={faTwitter} className="p-5 Onhover_Icons" />
        </div>
      </div>
      {/* Hero Section */}
      <div className="ImageCon w-screen h-screen relative">
        {/* Your hero section content */}
        <img src={BackImage} alt="" className="w-full h-full object-cover" />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-[30%] left-20">
          <p>Shielding assets</p>
          <p>Fortifying futures.</p>
          <h1 className="mt-20 text-7xl">
            <span className="text-[#e9b935]">SESHABA</span> PROTECTION{" "}
          </h1>
          <h1 className=" text-7xl">SERVICES</h1>
          <button className="mt-10 text-[22px] rounded-[50px] w-[200px] bg-[#e9b935] h-20">
            Learn More <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          </button>
        </div>
        <div className="DropMenuServices w-[150px] h-[150px] bg-white absolute top-[-27px] left-[210px] DropDown">
          <ul className="text-[12px]">
            <li className="p-5 Active Scalar ">
              <a href="/">Physical Security Solutions</a>
            </li>
            <li className="p-5 Active Scalar ">
              <a href="/">Risk Management Services</a>
              
            </li>
          </ul>
        </div>
        <div className="DropMenuAboutUs w-[130px] h-[150px] bg-white absolute top-[-27px] left-[80px] DropDown">
          <ul className="text-[12px]">
            <li className="p-5 Active Scalar ">
              <a href="/">Our Mission Statement</a>
            </li>
            <li className="p-5 Active Scalar ">
              <a href="/">Meet Our Team</a>
            </li>
          </ul>
        </div>
      </div>
      {/* About Section */}
      <div className="About bg-[black] w-screen">
        {/* Your about section content */}
        <section className="sec-01 relative flex justify-center text-white px-100 py-40">
          <div className="container relative flex justify-center items-center flex-col">
            <h2 className="main-title text-[4em] mb-[50px] ">About Us</h2>
            <div className="content relative w-[1150px] flex justify-center items-center">
              <div className="image relative w-[800px] h-[400px] overflow-hidden">
                <img
                  className="z-[111] absolute top-0 left-0 w-[100%] h-[100%] object-cover rounded-[10px]"
                  src={About_Us}
                  alt=""
                />
              </div>
              <div className="textbox z-[222] bg-[111222] blur-background p-[40px] max-w-[400px] border-2 border-[#111222] rounded-10px Shift ">
                <h3 className="text-[2em] mb-[10px]">Our Pride,Our Way</h3>
                <p>
                  Sechaba Protection Services is a leading security company
                  specializing in safeguarding assets and properties, tailored
                  to meet your unique needs. With expertise in industrial,
                  commercial, and retail sectors, we provide professional
                  security solutions. Our commitment extends beyond traditional
                  boundaries; we respond promptly and effectively to any
                  security challenge, ensuring peace of mind for our clients.
                </p>
                <p>
                  Your Security Partner, Anytime, Anywhere,
                  <br />
                  <span className="text-[#fcc83a] font-bold">
                    No Risk Too Great
                  </span>
                </p>
                <button className="mt-10 w-[150px] h-[50px] buttonAni bg-[#ffffff45] rounded-[25px]">
                  Learn More
                </button>
              </div>
            </div>
            <div className="media-icons mt-[100px] items-center">
              <a
                href="#"
                className="icon text-white text-2em m-60px mr-10 text-2xl "
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="icon mr-10 text-2xl ">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="icon mr-10 text-2xl ">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <div className="Services  w-screen h-auto relative bg-white text-black">
        {/* Your services section content */}
        <div className="ImageCon font-serif text-center">
          <img
            src={Service}
            alt=""
            className="h-[250px] w-screen object-cover"
          />
          <div className="Title text-center text-6xl absolute top-20 text-white left-1/2 transform -translate-x-1/2">
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
          <button className="w-[200px] h-[50px] bg-[#e9b935] rounded-[50px] left">
            See All Services
          </button>
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
      </div>
      {/* Best Choice Section */}
      <div className="bg-white text-black w-screen h-[650px]">
        {/* Your best choice section content */}
        <h1 className="Best text-5xl font-serif flex flex-wrap w-1/2 m-10 mt-0">
          Why We Are The<span className="text-[#d8a632]"> Best</span> Choice For
          You
        </h1>
        <div className="CardHolder_left flex flex-wrap">
          <div className="Card w-[30%] m-10">
            <div className="w-6 h-5 bg-black text-white items-center flex justify-center">
              <FontAwesomeIcon icon={faShield} />
            </div>
            <h1 className="text-2xl">Expertise in Security</h1>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="Card w-[30%] m-10">
            <div className="w-6 h-5 bg-black text-white items-center flex justify-center">
              <FontAwesomeIcon icon={faShield} />
            </div>
            <h1 className="text-2xl">Expertise in Security</h1>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="Card w-[30%] m-10">
            <div className="w-6 h-5 bg-black text-white items-center flex justify-center">
              <FontAwesomeIcon icon={faShield} />
            </div>
            <h1 className="text-2xl">Expertise in Security</h1>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div className="Card w-[30%] m-10">
            <div className="w-6 h-5 bg-black text-white items-center flex justify-center">
              <FontAwesomeIcon icon={faShield} />
            </div>
            <h1 className="text-2xl">Expertise in Security</h1>
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Testimony Section */}
      <div className="Testimony bg-[black] w-screen">
        {/* Your testimony section content */}

        <h1 className="Test text-5xl text-left m-10 mb-10 italic ">
          <span className="text-[#e0a331]">What People</span> Say About Us
        </h1>

        <div className=" Testimony_Holder w-[80%] overflow-hidden smallT   m-10 inline-flex">
          <div className=" Main  w-[600px] flex-none justify-start flex  ml-2 mr-2   ">
            <div className="text-center w-[600px] flex-shrink-0    ">
              <div className="testimonial w-[100%]">
                <h1 className="text-[#e8b53c] text-6xl text-left ml-10">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </h1>
                <p className="whitespace-normal ml-10 mt-3 text-left font-serif text-[grey] flex-wrap ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="flex justify-start items-center m-10">
                  <div className="rounded-[50px] bg bg-yellow-400 w-[60px] h-[60px] text-center text-5xl font-bold mr-4 ">
                    A
                  </div>
                  <p className="mr-10 text-1xl">Alban.T.Gwesu</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" Main  w-[600px] flex-none justify-start flex  ml-2 mr-2   ">
            <div className="text-center w-[600px] flex-shrink-0   ">
              <div className="testimonial ">
                <h1 className="text-[#e8b53c] text-6xl text-left ml-10">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </h1>
                <p className="whitespace-normal ml-10 mt-3 text-left font-serif text-[grey] ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className="flex justify-start items-center m-10">
                  <div className="rounded-[50px] bg bg-yellow-400 w-[60px] h-[60px] text-center text-5xl font-bold mr-4 ">
                    A
                  </div>
                  <p className="mr-10 text-1xl">Alban.T.Gwesu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div>
            <div className="flex justify-start text-4xl ml-10">
              <div id="starRating" className="text-white">
                0
              </div>
              <p>+</p>
            </div>
            <p className="ml-10">STAR RATING</p>
          </div>

          <div>
            <div className="flex justify-start text-4xl ml-10">
              <div id="PeopleRating" className="text-white"></div>
              <p> K</p>
            </div>
            <p className="ml-10">SATISFIED CUSTOMERS</p>
          </div>
        </div>

        <button className="w-[200px] ml-10 mt- h-[50px] bg-[#e9b935] rounded-[50px] left">
            See All Services
          </button>



      </div>

      <div className="flex justify-center items-center bg-black">{/*Contact Us*/}
      <div className=" Contact bg-white text-black text-center  mt-20">
         <h2 className="text-[15px font-serif]">Contact Us</h2>
         <h1 className="text-4xl">Take the First Step <br /> Towards Your  <br /> Peace Of Mind</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam doloribus corrupti? Inventore sit veniam quaerat magni tenetur? Laborum, labore perferendis tempore dolorum nulla vitae quisquam minus non officia beatae!</p>
         <button className="w-[200px] h-[50px] bg-[#e9b935] rounded-[50px] left">
            Take The First Step
          </button>
      </div>
      <hr />
       
      
      </div>

      <div className="w mt-10 flex  flex-col smallS xl:flex-row justify-evenly items-center">
        {/*Footer*/}
        <hr className="my-hr" />
          <div className="Name_Title w-[50%] border-2 border-[red] m-10  ">
      <h1 className="Onhover text-3xl">
            SECHABA<span className="text-[#ffb300]">.</span>
          </h1>
          p
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit magnam autem laudantium alias saepe! Praesentium ut veritatis nobis quod expedita aliquam sit possimus incidunt, repellendus molestiae nam, alias autem maiores!
      </div>
     <div className="flex w-[100%] justify-evenly">
        <div className=" NavigationF w-[30%] border-2 border-green-500">
        <h1 className="text-2xl">Navigation</h1>
        <ul>
        <li className="p-5 Active Scalar ">
              <a href="/">Home</a>
            </li>
            <li className="p-5 Scalar">
              <a href="/">
                About Us
              </a>
            </li>
            <li
              className="p-5 Scalar"
             
            >
              <a href="/">
                Services
              </a>
            </li>
            <li className="p-5 Scalar">
              <a href="/">Contact Us</a>
            </li>
        </ul>
      </div>

      <div className="Service_F ">
        <h1 className="text-2xl ">Services</h1>
        <ul>
        <li className="p-5 Active Scalar ">
              <a href="/">Risk Management Services</a>
            </li>
            <li className="p-5 Scalar">
              <a href="/">
              Physical Security Solutions
              </a>
            </li>
        </ul>
      </div>
     </div>
     <hr className="border-[white]" />
        </div>
        <div className="text-center mt-10">
      <h1>Copyrigt © 2024 Sechaba| Design by The Loved Muscle</h1>
      <div className="Socials mr-2 ml-2 text-2xl ">
          <FontAwesomeIcon icon={faFacebook} className="p-5 Onhover_Icons" />
          <FontAwesomeIcon icon={faInstagram} className="p-5 Onhover_Icons" />
          <FontAwesomeIcon icon={faTwitter} className="p-5 Onhover_Icons" />
        </div>

     </div>
    </div>
  );
};

export default Home;
