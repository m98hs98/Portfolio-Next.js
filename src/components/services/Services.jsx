import { useRef } from "react";
import "./Services.scss";
import { motion } from "framer-motion";


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};


const Services = () => {

    const ref = useRef();
    // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div 
        className="services" 
        variants={variants} 
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I focus on helping your brand grow
            <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.
            </h1>
            <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Elevate Your Brand Identity</h2>
            <p>
                We understand the power of a strong brand. Let us craft a unique identity that resonates with your audience and sets you apart from the competition.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Drive Growth Through Innovation</h2>
            <p>
                Stagnant ideas lead to stagnant results. We will help you develop fresh, creative marketing strategies that propel your business forward and achieve lasting success.
            </p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Maximise Customer Engagement</h2>
            <p>
                We believe in building meaningful connections with your customers. We will help you develop engaging content and experiences that convert them into loyal brand advocates.
            </p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;