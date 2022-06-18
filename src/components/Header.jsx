import React, { useState } from "react";
import {Link} from "react-router-dom";

function Header(props) {
  let {logo} = props;
  const [displayH, setDisplayH] = useState("display");

  return (
    <div>
      {" "}
      <main>
        <header id="header" className={`container ${displayH} flex header`}>
          <nav className="nav flex w-100 d-inline uppercase baloo space-around items-center">
            <div className="left flex d-inline justify-center ">
              <div className="imgLogoDiv">
                <Link to="/"><img src={logo} className="imgLogo" alt="Logo" /></Link>
                <div className="logotext">Myntra</div>
                <button
                  className="collapse-btn"
                  onClick={() => setDisplayH("displaynone")}
                >
                  E
                </button>
              </div>
              <ul className="flex d-inline">
                <li className="search1">
                  <input className="borderst" type="text" name="" id="" />
                </li>
                <Link style={{textDecoration: 'none'}} to="/Men"><li>Men</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Women"><li>Women</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Kids"><li>Kids</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Living"><li>Living</li></Link>
                <li>Beauty</li>
                <li>Studio</li>
              </ul>
            </div>
            <div className="right ">
              <ul className="flex d-inline items-center">
                <li className="search2">
                  <input className="my-2" type="text" name="" id="" />
                </li>
                <li>profile</li>
                <li>whislist</li>
                <li>Bag</li>
              </ul>
            </div>
          </nav>
        </header>
        <section id="headerpane" className="headerpane displayheaderpane">
          <nav className="nav flex uppercase baloo space-around items-center">
            <div className="left flex justify-center ">
              <div className="imgLogoDiv">
                <button
                  className="collapse-btn"
                  onClick={() => setDisplayH("display")}
                >
                  E
                </button>
              </div>
              <ul className="flex ">
                <Link style={{textDecoration: 'none'}} to="/"><li>Home</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Men"><li>Men</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Women"><li>Women</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Kids"><li>Kids</li></Link>
                <Link style={{textDecoration: 'none'}} to="/Living"><li>Living</li></Link>
              </ul>
            </div>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default Header;
