import { motion } from "framer-motion";
import { TECollapse } from "tw-elements-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormPage from "../Form/FormPage";
export default function Balloon() {
  const [isClicked, setIsClicked] = useState(false);

  const balloonVariants = {
    initial: { scale: 1 },
    animate: { scale: [1, 2, 1.5, 2, 1] },
    transition: { duration: 2, repeat: Infinity, repeatDelay: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        className="bg-blue-500 rounded-full w-40 h-40"
        variants={balloonVariants}
        initial="initial"
        animate={isClicked ? "animate" : "initial"}
      />
      <br />
      <TECollapse className="" onClick={() => setIsClicked(!isClicked)}>
        <span className="cursor-pointer p-2 rounded-md  bg-purple-500 text-center pb-3 font-semibold   ">
          {" "}
          Click to inflate balloon
        </span>
      </TECollapse>
      <br />
      <br />
      <Link
        to={"/form"}
        className="cursor-pointer p-2 rounded-md  bg-purple-500 text-center pb-3 font-semibold "
      >
        Form Page
      </Link>
    </div>
  );
}
