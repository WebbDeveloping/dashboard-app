import React from "react";
import SearchBar from "./SearchBar";
import {FaBell, FaEnvelopeOpenText, FaUserCircle} from 'react-icons/fa'

export default function Navigation() {
  return (
    <div className="dashboard-nav">
      <div className="dashboard-nav__container">
        <div className="dashboard-nav__left-content">
          <div className="mr-24px">
            <p className="text__400--medium">Dashboard</p>
          </div>
          <div className="dashboard-top-search-bar-wrapper">
            <SearchBar />
          </div>
        </div>
        <div className="dashboard-nav__right-content">
          <div className="dashboard-nav__icon-wrapper">
            <FaBell className="dashboard-nav__icon-wrapper--notifications" size={18}/>
          </div>
          <div className="dashboard-nav__icon-wrapper">
            <FaEnvelopeOpenText className="dashboard-nav__icon-wrapper--notifications" size={18}/>
          </div>
            <div className="dashboard-nav__icon-wrapper--profile-details">
                    <FaUserCircle className="dashboard-nav__icon-wrapper--profile" size={28}/>
                    <div className="dashboard-nav__profile-details">
                        <p className="text__200--medium">Joe Dirt</p>
                        <p className="text__100--regular">Webb Developer</p>
                    </div>
            </div>

        </div>
      </div>
    </div>
  );
}
