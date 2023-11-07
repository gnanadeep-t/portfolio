import { useContext, useEffect, useState } from "react";

import Nc from "./Nc";
import SubNav from "./SubNav";
let Nav = () => {
  let obj = useContext(Nc);
  let [ht, setHt] = useState("0vh");
  useEffect(() => {
    let fun = () => {
      if (obj.n) {
        setHt("100vh");
      } else {
        setHt("0vh");
      }
    };
    fun();
  }, [obj.n]);

  return (

      <nav>
        <div className="nav-left">
          {obj.wdt < 750 && (
            <i className="fa-solid fa-bars" onClick={obj.navDisp}></i>
          )}
          <a>Gnanadeep</a>
        </div>
        <div className="nav-right" onClick={obj.navDisp}>
          {obj.wdt < 750 ? obj.n && <SubNav /> : <SubNav />}
        </div>
      </nav>
    

  );
};
export default Nav;
