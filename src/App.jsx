// import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";


const App = () => {
  return (
    <div>
      {/* <Test /> */}
      <section id="Homepage"> 
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type="services" /></section>
      <section id=""><Services /></section>
      <section id="Portfolio"><Parallax type="portfolio" /></section>
      <Portfolio />
      <section id="Contact"><Contact /></section> 
    </div> 
  );
};

export default App;