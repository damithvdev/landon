import React from "react";
// import menuLinkData from './data/menu_link.json'
import { useState, useEffect } from 'react';

const Header = () => {
    const[menuLinkData, setMenuLinkData] = useState([]);

    const loadMenuLinkData = async() => {
        const resp = await fetch('https://53hxa3i8c8.execute-api.us-east-1.amazonaws.com/production/menu_links');
        const jsonData = await resp.json();
        setMenuLinkData(jsonData);
    }

    useEffect(() => {
        loadMenuLinkData();
    }, []);

    return (
    <header id="intro">
        <article className="fullheight">
          <div className="hgroup">
            <h1>Landon Hotel</h1>
            <h2>West London</h2>
            <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/></a></p>
          </div>
        </article>
  
        <nav id="nav">
          <div className="navbar">
            <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
            <ul>{
                    menuLinkData.map((link) => 
                        <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                    )
                }
                
            </ul>
          </div>
        </nav>
      </header>
    );
}
export default Header;