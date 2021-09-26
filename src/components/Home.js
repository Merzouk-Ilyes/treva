import React from "react";
import "../styles/home.sass";
import logo from "../assets/treva.svg";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="home">
      <div className="home-nav">
        <div className="logo">
          <img src={logo} alt="Treva" />
        </div>
        <div className="auth-btns">
          <button>Sign In</button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Sign Up
          </motion.button>
        </div>
      </div>
      <div className="home-body">
        <h1>Find Your Dream Job Here</h1>
        <p>
          Filium morte multavit si sine dubio praeclara sunt, explicabo nemo
          enim ad minima. Probabo, inquit, modo ista sis aequitate, quam ob
        </p>
        <div className="body-btns">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Hire
          </motion.button>

          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Home;
