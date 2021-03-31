import { Router } from "@reach/router";

import Work from "./Pages/Work";
import Teaching from "./Pages/Teaching";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import TopBar from "./Components/TopBar";

import "./App.scss";

function App() {
  return (
    <>
      <TopBar></TopBar>
      <Router primary={false}>
        <Work path="/" />
        <Teaching path="Teaching" />
        <About path="About" />
        <Blog path="Blog" />
        <Contact path="Contact" />
      </Router>
    </>
  );
}

export default App;
