import React, {useContext, useState} from 'react';
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../../utils/context";
import {Link} from "react-router-dom"

const CatalogRow = () => {
    const {products, size, page, setPage}=useContext(CustomContext)


    const{i, i18n}=useTranslation()

    if (products.error.length){
        return <h2>{products.error.message}</h2>
    }
    return (
        <>
            <div className="catalog__row">{
                products.data && products.data.filter((item)=>{

                    return size? item.sizes.find((el)=>size  ? el.size === size :el).inStock : item

                }).filter((item, idx)=>{
                     return page === 1 ? idx<6 :   idx < page *6 && idx > page *6 -7

                }).map((item)=>(
                    <div key={item.id} className="catalog__card">
                         <Link to={`/product/${item.id}`}>\
                             <img src={`../${item.img[0]}`} alt={item.title} className="catalog__card-img"/>
                         </Link>

                        <h3 className="catalog__card-title">{item.title} </h3>
                        <p className="catalog__card-category">{item.category}</p>
                        <p className="catalog__card-brand">{item.brand}</p>
                        <p className="catalog__card-price">
                            {i18n.language === 'en' ? item.price : item.price*85}
                            {
                                i18n.language=== 'ru'? ' руб.' : ' $'
                            }</p>
                    </div>

                ))
            }


                {/*<div className="catalog__card">*/}
                {/*    <img src="" alt="hello" className="catalog__card-img"/>*/}
                {/*    <h3 className="catalog__card-title">bcjsab </h3>*/}
                {/*    <p className="catalog__card-category">fef</p>*/}
                {/*    <p className="catalog__card-brand">fefe</p>*/}
                {/*    <p className="catalog__card-price">123 {*/}
                {/*            i18n.language=== 'ru'? ' руб.' : ' $'*/}
                {/*    }</p>*/}
                {/*</div>*/}
            </div>
            <ul className="catalog__pagination">

                {
                    Math.ceil(products.dataLength / 6) >1 && new Array(Math.ceil(products.dataLength / 6)).fill(null).map((item, idx)=>(
                        <li onClick={()=> setPage(idx+1)} key={idx} className={`catalog__page ${page === idx+ 1 ? 'active' : ""}`}>
                            {idx+1}
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default CatalogRow;