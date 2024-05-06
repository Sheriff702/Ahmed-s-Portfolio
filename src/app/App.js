import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const keyframes = Array.from({ length: 33 }, (_, i) => {
      const positions = Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
      }));

      const animationName = `float-${i}`;

      const style = `
      @keyframes ${animationName} {
        0% { transform: translate(${positions[0].x}vw, ${positions[0].y}vh); }
        25% { transform: translate(${positions[1].x}vw, ${positions[1].y}vh); }
        50% { transform: translate(${positions[2].x}vw, ${positions[2].y}vh); }
        75% { transform: translate(${positions[3].x}vw, ${positions[3].y}vh); }
        100% { transform: translate(${positions[0].x}vw, ${positions[0].y}vh); } // Loop back to start for smoothness
      }
    `;

      return {
        animationName,
        style,
        size: Math.random() * (2 - 2),
      };
    });

    setStyles(keyframes);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <style>{styles.map((s) => s.style).join("")}</style>
      <div className="bubbles">
        {styles.map((s, i) => (
          <span
            key={i}
            className="span"
            style={{
              width: `${s.size}rem`,
              height: `${s.size}rem`,
              animation: `${s.animationName} 30s linear infinite`, // Longer duration for smoother transition
              boxShadow: "0px 0px 20px 10px rgba(10, 120, 173, 0.85)", // Significant light green shadow
            }}
          />
        ))}
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
        <ScrollToTop>
          <Headermain />
          <AppRoutes />
        </ScrollToTop>
      </div>
    </Router>
  );
}
