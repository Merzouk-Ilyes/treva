import React from "react";
import "../styles/footer.sass";
import { motion } from "framer-motion";
function Sub() {
  return (
    <div className="sub">
      <div className="sub-title">
        <h1>Subscribe Us</h1>
        <p>
          Filium morte multavit si sine dubio praeclara sunt, explicabo nemo
          enim ad minima. Probabo, inquit,
        </p>
        <div className="sub-input">
          <input type="email" className="" />
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            subscribe
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Sub;
