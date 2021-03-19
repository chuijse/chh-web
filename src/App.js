import logo from "./logo.svg";

import { Router } from "@reach/router";

import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Teaching from "./Pages/Teaching";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";

import TopBar from "./Components/TopBar";

function App() {
  return (
    <>
      <TopBar></TopBar>
      <Router>
        <Home path="/" />
        <Work path="Work" />
        <Teaching path="Teaching" />
        <About path="About" />
        <Blog path="Blog" />
        <Contact path="Contact" />
      </Router>
    </>
  );
}

export default App;
