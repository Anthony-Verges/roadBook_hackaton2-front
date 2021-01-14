import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
// import picto from "./ping.png";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [
  {
    title: "CURRENT TRIP",
    path: "/Dashboard",
  },
  {
    title: "PREVIOUS TRIPS",
    path: "/Dashboard",
  },
  {
    title: "NEW TRIP ",
    path: "/Dashboard",
  },
  {
    title: "FOLLOWERS",
    path: "/Dashboard",
  },
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem i={i} path={i.path} title={i.title} key={i} />
    ))}
  </motion.ul>
);
