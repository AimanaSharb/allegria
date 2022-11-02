import React from 'react';
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;