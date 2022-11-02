import React, {useContext} from 'react';

import {CustomContext} from "../../../utils/context";
import SideBarItem from "./SideBarItem";

const SideBar = () => {

    const{gender, changeGender, category, changeCategory}=useContext(CustomContext)

    return (
        <aside className="sidebar">
            <div className="sidebar__lang">
                <p onClick={()=>changeGender('woman')} className={`sidebar__lang-item ${gender === 'woman' ? 'active' : ''}`} >Женщины</p>
                <p onClick={()=>changeGender('men')}  className={`sidebar__lang-item ${gender === 'men' ? 'active' : ''}`}>Мужчины</p>
            </div>
            <ul className="sidebar__menu">
                <li onClick={()=>changeCategory('t-short')} className={`sidebar__menu-item ${category === 'Футболки' ? 'active':''}`}>Футболки</li>
                <li onClick={()=>changeCategory('sweatshirts')} className={`sidebar__menu-item ${category === 'Кофты' ? 'active':''}`} >Кофты</li>

                <li onClick={()=>changeCategory('pants')} className={`sidebar__menu-item ${category === 'Штаны' ? 'active':''}`} >Штаны</li>

                <li onClick={()=>changeCategory('shoes')} className={`sidebar__menu-item ${category === 'Обувь' ? 'active':''}`}>Обувь</li>


                {/*<SideBarItem value={'t-short'} text='Футболки'/>*/}
                {/*<SideBarItem value={'sweatshirts'} text='Кофты'/>*/}
                {/*<SideBarItem value={'pants'} text='Штаны'/>*/}
                {/*<SideBarItem value={'shoes'} text='Обувь'/>*/}
            </ul>
        </aside>
    );
};

export default SideBar;