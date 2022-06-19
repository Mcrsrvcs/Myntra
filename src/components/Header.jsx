import React, { useState } from "react";
import {Link} from "react-router-dom";
import search from '../search.png'
import menu from '../menu.png'
import profile from '../profile.JPG'
import bag from '../bag.png'
import whislist from '../whislist.png'

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
                  <img src={menu} className="menuimg" alt=""/>
                </button>
              </div>
              <ul className="flex d-inline">
                <li className="search1">
                  <input className="search1input" type="text" name="" id="" placeholder="Search Products..." />
                </li><li class="mx-0 searchstimgli"><img src={search} alt="" className="searchst mx-0 " /></li>
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
                  <input className="my-2 mx-0 " type="text" name="" id="" placeholder="Search Products, Brands..."/></li><li class="mx-0 "><img src={search} alt="" className="searchimg" /></li>
                <li><img src={profile} alt="profile" className="icons "/><span class="iconstext">Profile</span></li>
                <li><img src={whislist} alt="" className="icons "/><span class="iconstext">Whishlist</span></li>
                <li><img src={bag} alt="" className="bag icons "/><span class="iconstext bagtext">Bag</span></li>
              </ul>
            </div>
          </nav>
        </header>
        <section id="headerpane" className="headerpane displayheaderpane">
          <nav className="nav flex uppercase baloo space-around items-center">
            <div className="left flex justify-center ">
              <div className="imgLogoDiv menuicondiv">
                <button
                  className="collapse-btn btnx "
                  onClick={() => setDisplayH("display")}
                >
                <img src={menu} className="menuimg" alt=""/>
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
