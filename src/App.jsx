// import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <div>
      {/* <Test /> */}
      <section id="Homepage"> 
        <Navbar />
        <Hero />
      </section>
      <section id="Services">Parallex</section>
      <section id="Services">Services</section>
      <section id="Services">Parallex</section>
      <section id="Portfolio">Portfolio1</section>
      <section id="Portfolio">Portfolio2</section>
      <section id="Portfolio">Portfolio3</section>
      <section id="Portfolio">Portfolio4</section>
      <section id="Contact">Contact</section> 
    </div> 
  );
};

export default App;