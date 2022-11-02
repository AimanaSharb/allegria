import React, {Suspense} from "react";
import Header from "./Layout/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./Layout/Footer/Footer";
import "./scss/style.scss"
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import {Routes, Route} from "react-router-dom"
import Layout from "./Layout/Layout";
import Custom from "./pages/Custom/Custom";
import NotFound from "./pages/NotFound/NotFound";
import Products from "./pages/Product/Products"
import "./i18n"
import Questions from "./pages/Questions/Questions";



function App() {
  return (
    <Suspense fallback={"...loading"}>

        <Routes>


            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='catalog' element={<Catalog/>}/>
                <Route path='questions' element={<Questions/>}/>
                <Route path='product/:id' element={<Products/>}/>
                <Route path='*' element={<NotFound/>}/>

            </Route>

            <Route path='/custom' element={<Custom/>}/>


        </Routes>


    </Suspense>
  );

    }
export default App;
