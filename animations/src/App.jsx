import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const animateVariant = {
    hidden: {
      y: -100,
    },
    visible: {
      y: 0,
    },
  };

  return (
    <motion.div
    // variants={animateVariant}
    // animate="visible"
    // initial="hidden"
    // transition={{
    //   duration: 2,
    // }}
    >
      <section id="center">
        <motion.div
          // variants={animateVariant}
          // animate="visible"
          // initial="hidden"
          // transition={{
          //   duration: 2,
          // }}
          // whileTap={{
          //   rotate: 360,
          //   scale: 1,
          // }}
          className="hero"
        >
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </motion.div>
        {/* <AnimatePresence>
          {show && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              Show
            </motion.h1>
          )}
        </AnimatePresence>
        <button onClick={() => setShow(!show)}>Show/hide</button> */}
        <div>
          <motion.h1
          // variants={animateVariant}
          // animate="visible"
          // initial="hidden"
          // transition={{
          //   duration: 2,
          // }}
          >
            Get started
          </motion.h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <motion.h1
        variants={animateVariant}
        initial="hidden"
        transition={{
          duration: 2,
        }}
        whileInView={{
          y: 0,
        }}
        viewport={{once:false}}
      >
        Scroll Animation
      </motion.h1>
    </motion.div>
  );
}

export default App;
