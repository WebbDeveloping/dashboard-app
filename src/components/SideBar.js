import React from "react";

import {FaChevronRight} from 'react-icons/fa'

export default function SideBar() {
  const [links, setLinks] = React.useState([
    "Dashboard",
    "Features",
    "Users",
    "Pricing",
    "Integrations",
  ]);

  const [links2, setLinks2] = React.useState([
    "Settings",
    "Utility Pages",
    "Account"
  ]);
// console.log(FaChevronRight)
  const linkList = links.map((i, e) => {
    return (
      <li key={e} className="sidebar__nav-list-item">
        <div className="dropdown__wrapper">
          <div className="dropdown__toggle">
            <div className="sidebar__dropdown">
              <p className="paragraph-large">{i}</p>
            </div>
          <FaChevronRight className='dropdown__icon' size={10}/>
          </div>
        </div>
      </li>
    );
  });

  const linkList2 = links2.map((i, e) => {
    return (
      <li key={e} className="sidebar__nav-list-item">
        <div className="dropdown__wrapper">
          <div className="dropdown__toggle">
            <div className="sidebar__dropdown">
              <p className="paragraph-large">{i}</p>
            </div>
          <FaChevronRight className='dropdown__icon' size={10}/>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="sidebar sidebar__wrapper">
        <div className="sidebar__logo-section">
          <a href="/" className="sidebar__logo-wrapper--desktop">
            <img
              src="https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62a2868d53db6e22af723951_dashly-webflow-template-logo.svg"
              alt="icon"
              className="sidebar__logo--mobile"
            />
          </a>
          <div className="sidebar__logo-wrapper"></div>
          <div className="burger-icon burger-icon__wrapper">
            <div className="burger-icon burger-icon__inner-wrapper">
              <div className="burger-icon__bar"></div>
              <div className="burger-icon__bar"></div>
            </div>
          </div>
        </div>
        <div className="sidebar__content-section">
          <div className="sidebar__logo-section--mobile">
            <a href="/" className="sidebar__content--mobile-icon">
              <img
                src="https://uploads-ssl.webflow.com/6260849a6eab2a733e282630/62a2868d53db6e22af723951_dashly-webflow-template-logo.svg"
                alt="icon"
                className="image"
              />
            </a>
          </div>
          <div className="sidebar__nav-menu">
            <div className="sidebar__menu-wrapper">
              <div className="sidebar--list">
                <ul className="sidebar__nav-list">
                    {linkList}
                </ul>
                <div className="sidebar__divider"/>
                <ul className="sidebar__nav-list">
                    {linkList2}
                </ul>
              </div>
              <button className="mt-auto btn btn--primary">Try Now For Free</button>
            </div>
          </div>
        </div>
    </div>
  );
}
