import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PropTypes from 'prop-types';



const items = [
    {
        id: 1,
        title: "Instagram Clone",
        img: "insta.png",
        description: "This project is a web application built with React, ChakraUI, and Firebase that allows users to share photos and interact with each other, similar to Instagram. Accessible from any device (desktop, tablet, phone), users can create accounts, personalize their profiles, upload photos and captions, and engage with real-time features like following, liking, and commenting.",
        url: "https://main--musical-froyo-f424a6.netlify.app/",
    },
    {
        id: 2,
        title: "House Of Music (Work in Progress)",
        img: "music.png",
        description: "This is an ongoing project to redesign and rebuild the House of Music web application using Next.js and either ChakraUI or Framer-Motion (technology decision pending). The goal is to create a modern, interactive, and user-friendly platform for music lovers to explore the music school's offerings, including instrument classes, workshops, and performances.",
        url: "https://resonant-salamander-e26ec1.netlify.app",
    },
    {
        id: 3,
        title: "An app for bank accounting",
        img: "bankist.png",
        description: "The provided code is a Bank Application with features for user banking operations. It handles logging in, money transfers, loan requests, account closure, and movement sorting. The JavaScript code manages user interactions, data manipulation, and UI updates. It includes functions for formatting, displaying movements, calculating balances, and creating usernames. The code represents a basic banking system with account management and transaction capabilities. (User: js Password: 1111)",
        url: "https://m98hs98.github.io/Bankist/",
    },
    {
        id: 4,
        title: "mapty",
        img: "mapty.png",
        description: "This application is a JavaScript program for a fitness tracking application called Mapty. It defines classes for workouts,r workouts, specifically for running and cycling, with properties and methods to calculate pace, speed, and workout descriptions. The program utilizes a map library (Leaflet) to display the map, capture user input through a form, and render workout markers. It also implements local storage to persist workout data.",
        url: "https://m98hs98.github.io/mapty/",
    },
    {
        id: 5,
        title: "Pig Game",
        img: "pigy2.png",
        description: "The code implements a Pig game using JavaScript. It handles initializing the game, rolling the dice, updating scores, switching players, holding scores, and resetting the game. The game involves rolling a dice, accumulating scores, and reaching a winning score of 20. It provides the necessary functionality for playing and managing the game.",
        url: "https://m98hs98.github.io/Pig-Game/",
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
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img src={item.img} alt={item.title} />
                        </a>
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <button >See Demo</button>
                        </a>
                        
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
      url: PropTypes.string.isRequired,
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