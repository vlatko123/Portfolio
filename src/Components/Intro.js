import React from "react";
import "../Components/Intro.css";
import Typical from "react-typical";
import { useSpring, animated } from "react-spring";

const Intro = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div className="intro">
      <animated.h1 style={props}>Hello, my name is Vlatko</animated.h1>

      <p>
        <Typical
          steps={[
            "Thank you for visiting my portfolio",
            5000,
            "You can check my projects bellow",
            3000,
            "Enjoy!!!",
            5000,
          ]}
          loop={Infinity}
          wrapper="b"
        />
      </p>
    </div>
  );
};

export default Intro;
