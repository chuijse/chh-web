//import { Router, Redirect, Location } from "@reach/router";
import { AnimatePresence, motion } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import About from "./Pages/About.js";
import Teaching from "./Pages/Teaching";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import TopBar from "./Components/TopBar";
import Article from "./Pages/Article";
import Course from "./Pages/Course";

import "./App.scss";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function App() {
  const location = useLocation();

  return (
    <>
      {/*<FadeTransitionRouter>
        <About path="/" />
        <Projects path="Projects" />
        <Blog path="/Blog" />
        <Article path="/:slugId" />
      </FadeTransitionRouter>*/}

      <TopBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route component={About} path="/" exact />
          <Route component={Projects} path="/projects" />
          <Route component={Course} path="/teaching/:slug" />
          <Route component={Teaching} path="/teaching" />
          <Route component={Article} path="/blog/:slug" />
          <Route component={Blog} path="/blog" />
        </Switch>
      </AnimatePresence>
    </>
  );
}

/*const FadeTransitionRouter = (props) => (
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
              the "old location" }
          <Router location={location}>{props.children}</Router>
        </motion.div>
      </AnimatePresence>
    )}
  </Location>
);
*/
export default App;
