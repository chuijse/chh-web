import { Router, Redirect, Location } from "@reach/router";
import { AnimatePresence, motion } from "framer-motion";

import About from "./Pages/About";
import Teaching from "./Pages/Teaching";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import TopBar from "./Components/TopBar";

import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <TopBar></TopBar>

      <FadeTransitionRouter>
        <About path="/" />
        <Projects path="Projects" />
        <Blog path="/Blog" />
      </FadeTransitionRouter>
    </>
  );
}

const FadeTransitionRouter = (props) => (
  <Location>
    {({ location }) => (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={location.key}
          initial={{ delay: 1, opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* the only difference between a router animation and
              any other animation is that you have to pass the
              location to the router so the old screen renders
              the "old location" */}
          <Router location={location} className="router">
            {props.children}
          </Router>
        </motion.div>
      </AnimatePresence>
    )}
  </Location>
);

export default App;
