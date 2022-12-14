import React, {useContext, useEffect} from 'react';
import {CustomContext} from "../../utils/context";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import SideBar from "./SideBar/SideBar";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import CatalogRow from "./CatalogRow/CatalogRow";
import CatalogFilter from "./CatalogFilter/CatalogFilter";

const Catalog = () => {
    const {category, getProducts, gender, price, brand} = useContext(CustomContext)


    useEffect(()=>{

        getProducts()
    }, [gender, category,price, brand])

    return (
        <section className="catalog">
            <div className="container">
                <BreadCrumbs/>
                <div className="catalog__content">
                    <SideBar/>
                    <div className="catalog__right">
                        <h2 className="catalog__content-title">

                            <CategoryTitle/>

                        </h2>
                        <CatalogFilter/>
                        <CatalogRow/>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;