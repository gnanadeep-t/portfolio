import Nav from "./Nav";
import "./styles.css";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import Nc from "./Nc";

export default function App() {
  let [wdt, setWdt] = useState(window.innerWidth);
  let [bd, setBd] = useState();
  let [n, setN] = useState(false);
  useEffect(() => {
    let handleResize = () => {
      setWdt(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [wdt]);
  let barDisp = () => {
    if (wdt < 750) {
      setBd(true);
    } else {
      setBd(false);
    }
  };
  let navDisp = () => {
    if (wdt < 750) {
      if (n == false) {
        setN(true);
      } else {
        setN(false);
      }
    }
  };
  let obj = { wdt: wdt, bd: bd, navDisp: navDisp, n: n };
  return (
    <div className="App">
      <Nc.Provider value={obj}>
        <Nav />
        <div className="wrapper">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Nc.Provider>
    </div>
  );
}
