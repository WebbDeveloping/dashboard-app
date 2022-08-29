import React from "react";
import { FaChevronRight } from 'react-icons/fa'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    Outlet
} from 'react-router-dom';

import SideBar from '../components/SideBar';
import Navigation from '../components/Navigation';
import Products from './Products';
import Login from "../components/auth/Login";
import Pricing from '../pages/Pricing'
import ProfilePage from "../components/profile/ProfilePage";
export default function Home(props) {

    const [links, setLinks] = React.useState([
        "Dashboard",
        "Features",
        "Account",
        "Pricing",
        "Products",
    ]);

    const [links2, setLinks2] = React.useState([
        "Settings",
        "Utility Pages",
        "Account"
    ]);
    
    return (
        <div className="dashboard__main">
            <div className="sidebar-spacer w-30">
                {/* <SideBar /> */}
                <div className="sidebar sidebar__wrapper">
                    <div className="sidebar__logo-section">
                        <a href="/" className="sidebar__logo-wrapper--desktop">
                            <img
                                src="http://ones.flatheme.net/assets/images/client-3.png"
                                alt="icon"
                                className="logo sidebar__logo--mobile"
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
                                     src="logo http://ones.flatheme.net/assets/images/client-3.png"
                                    alt="icon"
                                    className="image"
                                />
                            </a>
                        </div>
                        <div className="sidebar__nav-menu">
                            <div className="sidebar__menu-wrapper">
                                <div className="sidebar--list">
                                    <ul className="sidebar__nav-list">
                                        {links.map((i, e) => {
                                            return (
                                                <Link key={e} className="sidebar__nav-list-item" to={`/${i}`} element={`</${i} />`}>
                                                    <div className="dropdown__wrapper">
                                                        <div className="dropdown__toggle">
                                                            <div className="sidebar__dropdown">
                                                                <p className="paragraph-large">{i}</p>
                                                            </div>
                                                            <FaChevronRight className='dropdown__icon' size={10} />
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                    <div className="sidebar__divider" />
                                    <ul className="sidebar__nav-list">
                                        {links2.map((i, e) => {
                                            return (
                                                <li key={e} className="sidebar__nav-list-item">
                                                    <div className="dropdown__wrapper">
                                                        <div className="dropdown__toggle">
                                                            <div className="sidebar__dropdown">
                                                                <p className="paragraph-large">{i}</p>
                                                            </div>
                                                            <FaChevronRight className='dropdown__icon' size={10} />
                                                        </div>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <button className="mt-auto btn btn--primary">Try Now For Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard__content w-70">
                <div className="dashboard__nav-main-container">
                    <Navigation />
                </div>
                <div className="dashboard__main-content">
                    <div className="container-default">
                        <Routes>
                            <Route path="/" element={Home} />
                            <Route path="/Products" element={<Products />} />
                            <Route path="/Pricing" element={<Pricing />} />
                            <Route path="/Account" element={<ProfilePage />} />
                            {/* <Route path="/Account" element={<ProfilePage />} /> */}
                        </Routes>
                    </div>
                </div>
                <footer className="footer">Footer</footer>
            </div>
        </div>
    )
}
