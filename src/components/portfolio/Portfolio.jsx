import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PropTypes from 'prop-types';



const items = [
    {
        id: 1,
        title: "mapty",
        img: "https://images.pexels.com/photos/20646979/pexels-photo-20646979/free-photo-of-small-world.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        description: "This application is a JavaScript program for a fitness tracking application called Mapty. It defines classes for workouts,r workouts, specifically for running and cycling, with properties and methods to calculate pace, speed, and workout descriptions. The program utilizes a map library (Leaflet) to display the map, capture user input through a form, and render workout markers. It also implements local storage to persist workout data.",
    },
    {
        id: 2,
        title: "An app for bank accounting",
        img: "https://images.pexels.com/photos/20701236/pexels-photo-20701236.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        description: "The provided code is a Bank Application with features for user banking operations. It handles logging in, money transfers, loan requests, account closure, and movement sorting. The JavaScript code manages user interactions, data manipulation, and UI updates. It includes functions for formatting, displaying movements, calculating balances, and creating usernames. The code represents a basic banking system with account management and transaction capabilities. (User: js Password: 1111)"
    },
    {
        id: 3,
        title: "An application for ordernig healthy food",
        img: "https://images.pexels.com/photos/20801057/pexels-photo-20801057/free-photo-of-a-person-holding-a-cup-of-tea-on-a-wooden-deck.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        description: "The code enhances a nutrition application using JavaScript. It adds a sticky navigation bar, smooth scrolling animations, and animations for visible elements. It also includes a mobile navigation feature. These interactive features improve the usability and engagement of the application.",
    },
    {
        id: 4,
        title: "Playing game",
        img: "https://images.pexels.com/photos/388830/pexels-photo-388830.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "The code implements a Pig game using JavaScript. It handles initializing the game, rolling the dice, updating scores, switching players, holding scores, and resetting the game. The game involves rolling a dice, accumulating scores, and reaching a winning score of 20. It provides the necessary functionality for playing and managing the game.",
    },
];

const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


Single.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
};



const Portfolio = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });


  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Portfolio;