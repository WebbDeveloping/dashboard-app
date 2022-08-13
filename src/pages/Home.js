import React from 'react'
import logo from '../styles/img/attorneyster-logo.svg';
import icon1 from '../styles/img/small-separator.svg';
import { Link, Outlet } from "react-router-dom";
import SideBar from '../components/SideBar';
import Navigation from '../components/Navigation';
import Products from './Products';



export default function Home() {
    return (
        <div className="dashboard dashboard-main">
            {/* <div className="sidebar-spacer"></div> */}
            <div className="dashboard-content">
                <div className="dashboard-nav-main-container">
                    <Navigation />
                </div>
                <div className="dashboard-main-content">
                    <Products />
                </div>
                <footer className="footer">Footer</footer>
            </div>
        </div>
    )
}
