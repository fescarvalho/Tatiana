import React, { useState } from "react";
import "./Slider2.css";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 1,
    };
  },
  animate: {
    x: 1,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 1000, damping: 100 },
      opacity: { duration: 0 },
    },
  },
  exit: () => {
    return {
      transition: {
        x: { type: "spring", stiffness: 800, damping: 100 },
        opacity: { duration: 0 },
      },
    };
  },
};

function App({ images }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className="container">
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={images[index]}
            alt="slides"
            className="slides"
            key={images[index]}
            custom={direction}
          />
        </AnimatePresence>
        <button className="prevButton" onClick={prevStep}>
          ◀
        </button>
        <button className="nextButton" onClick={nextStep}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default App;
