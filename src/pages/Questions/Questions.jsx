import React from 'react';
import QuestionsItem from "./QuestionsItem/QuestionsItem";
import {questionsData} from "./QuestionsItem/question";

const Questions = () => {
    return (
        <section className="questions">
            <div className="container">

                <ul className="breadCrumbs">
                    <li className="breadCrumbs__item">Главная</li>
                    <li className="breadCrumbs__item">
                        Популярные вопросы
                    </li>


                </ul>
            </div>
            <div className="container-small">
                <div className="questions__content">
                    <h2 className="questions__title">
                        Популярные вопросы
                    </h2>
                    <ul className="questions__list">
                        <li className="questions__list-title">ПОКУПКИ</li>
                        {
                            questionsData.map((item) => (
                                <React.Fragment key={item.id}>
                                    <QuestionsItem item={item}/>
                                </React.Fragment>
                            ))
                        }
                    </ul>

                </div>
            </div>

        </section>
    );
};

export default Questions;