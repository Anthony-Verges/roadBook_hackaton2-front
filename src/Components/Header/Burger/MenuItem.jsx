import * as React from "react";
import { motion } from "framer-motion";
import icon from "./ping.png";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ path, title }) => {
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={icon}
          alt="TRAVELR your new travel partner all around the word"
        />
        <a className="styleMenuItems" href={path}>
          <span>{title}</span>
        </a>
      </motion.li>
    </>
  );
};
