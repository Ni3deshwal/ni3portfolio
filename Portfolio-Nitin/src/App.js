import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
// import { useContext } from "react";
// import { themeContext } from "./Context";
import Skills from "./components/Skills/Skills";
import GoToTop from "./components/GotoTop/GotoTop";
import Projects from "./components/Projects/Projects";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
   const {theme,mode,toggle}  = useContext(themeContext);
   const {darkmode,lightdarkmode,lightmode} = theme;
  // const darkMode = themedarkMode;
  return (
    <div
      className="App"
      style={mode?darkmode:lightmode}
    >
      
      <Navbar />
      <Intro />
      <Services />
      <About/>
      <Skills/>
      <Projects/>
      {/* <Experience /> */}
      
      {/* <Works /> */}
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      <Contact />
      <GoToTop/>
      <Footer />
    </div>
  );
}

export default App;
