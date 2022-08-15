import React, { useEffect, useState } from "react";
import axios from 'axios';
import SideBar from '../components/SideBar';
import Navigation from '../components/Navigation';
import Products from './Products';



export default function Home(props) {
// console.log(props)

    return (  
        <div className="dashboard__main">
            <div className="sidebar-spacer w-30">
                <SideBar />
            </div>
            <div className="dashboard__content w-70">
                <div className="dashboard__nav-main-container">
                    <Navigation />
                </div>
                <div className="dashboard__main-content">
                    <div className="container-default">
                            <Products loading={props.loading}  />
                    </div>
                </div>
                <footer className="footer">Footer</footer>
            </div>
        </div>
    )
}
