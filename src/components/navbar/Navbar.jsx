import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
        >
            Mahsa Portfolio
        </motion.span>
        <div className="social">
          <a href="https://github.com/m98hs98" target="_blank"><img src="/github-2.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/mahsa-haddadi/" target="_blank"><img src="/linkedin.png" alt="" /></a>
          {/* <a href="#"><img src="/facebook.png" alt="" /></a>
          <a href="#"><img src="/instagram.png" alt="" /></a>
          <a href="#"><img src="/youtube.png" alt="" /></a>
          <a href="#"><img src="/dribbble.png" alt="" /></a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;