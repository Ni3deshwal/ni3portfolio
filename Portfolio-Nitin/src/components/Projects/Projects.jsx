import React, { useContext } from "react";
// import { Suspense } from "react";
// import { HashLoader } from "react-spinners";
// import MediumVideo from "./MediumVideo";
// import ModesensVideo from "./ModesensVideo";
import "./Projects.css";
import PharmaEasy from "./pharmaeasy.png";
import Rodan from "./Asos.png";
import Indeed from "./greenhouse.jpg";
import { themeContext } from "../../Context";
function Projects() {
  const {theme,mode,toggle}  = useContext(themeContext);
   const {darkmode,lightdarkmode,lightmode} = theme;
   
  return (
    <div className="projects" id="projects">
      <h1 className="p-title">PROJECTS</h1>
      <div className="project">
        <h1 className="project-heading">Flipkart Clone</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
            <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="redux"/>
            <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="material-ui" />
            <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styles-components" />
            <img src="https://img.shields.io/badge/-Chakra-green" alt="chakra" /> 
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
             
              <img src={"https://camo.githubusercontent.com/fdae98ad115f5ac478d95e537f239b070f24bb7ff310420d6c202e9ad26651f2/68747470733a2f2f692e6962622e636f2f66464b373252472f323032332d30312d30392d312e706e67"} alt="PharmaEasy" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://flipkart-clone-masai.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/PrathmeshVK/Flipkart_Clone"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
              This website is clone of well known E-commerce website "Flipkart". It is fully responsive and working collaborative project build within 6 day
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Sign Up | Login |Products Page - with Filter & Sort Functionality</li>
              <li>Single Product Page along with Add To Cart Feature</li>
              <li>Checkout | Payment Page along with all Functionality</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              {/* <li>Lead the Team and Manage the Project</li> */}
              <li>
              Developed Single Product Page along with all Functionality
              </li>
              <li>Developed Checkout Page along with all Functionality</li>
              <li>Developed Backend for Web App</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 4 Developers within 7 days.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Asos Clone</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
             
              <img src={Rodan} alt="Rodan" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://asos-clone-cw.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/nitika02/Asos"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            ASOS plc is a British online fashion and cosmetic retailer. The company was founded in 2000 in London, primarily aimed at young adults.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Sign Up | Login | Landing Page | Home Page | Products Page | Add To Cart Page</li>
              
              <li>Add To Cart Page| Add Products in Cart | Checkout</li>
              
              <li>Filter & Sort Products according to your need</li>
              
              <li>Checkout and Payment Page along with all Functionality</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Developed Products Page with filter and sort functionality </li>
              <li>
              Sign Up and Login Functionality
              </li>
              <li>
              Developed a Particular Products Page with all Functionality
              </li>
              <li>Developed Checkout & Payment Page along with all Functionality | Add Address and Apply Coupon Feature</li>
              <li>Developed Backend for Web App using JSON-Server</li>
              <li>Deployed the Project along with Frontend and Backend Deployment</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 5 Developers within 7 days.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Green House Clone</h1>
        <div className="project2">
          <div className="project-video-div">
            <div className="project-lang">
            <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
            </div>
            <div className="project-video-div-for-media">
              {/* <Suspense
                fallback={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "20px",
                      paddingBottom: "50px",
                      paddingTop: "50px",
                    }}
                  >
                    <HashLoader />
                  </div>
                }
              >
                <SudokuVideo />
              </Suspense> */}
             <img src={Indeed} alt="Indeed" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>  
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://greenhouseclone.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/Ni3deshwal/GreenHouseClone"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            Online job search website where users can search and apply any job and see about the products and solutions, community support .

            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Sign Up | Login</li>
              <li>Search Apply any Jobs</li>
              <li>Products and Solutions</li>
              <li>Blog Page</li>
              <li>See all applied job Pag</li>
              
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Lead the Team | Manage the Project | Deployment of Project</li>
              
              <li>Developed Comapny Reviews Page</li>
              
              <li>Search company in review page</li>
                            
              <li>Developed other supporting pages for website</li>
              <li>Creating data for website</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 4 Developers within 7 days.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
