// import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";


const App = () => {
  return (
    <div>
      {/* <Test /> */}
      <section id="Homepage"> 
        <Navbar />
        <Hero />
      </section>
      <section id="Services"><Parallax type="services" /></section>
      <section id="">Services</section>
      <section id="Portfolio"><Parallax type="portfolio" /></section>
      <section id="">Portfolio1</section>
      <section id="">Portfolio2</section>
      <section id="">Portfolio3</section>
      <section id="">Portfolio4</section>
      <section id="Contact">Contact</section> 
    </div> 
  );
};

export default App;