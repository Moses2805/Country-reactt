import React from 'react';
import {useNavigate} from "react-router-dom"

const Card = (props) => {
    const navigate = useNavigate()

    return (
        <div className='col-6 col-md-4 col-lg-3 card-box mb-3'>

            {/* for the id of card */}

            <div onClick={() => navigate(`/${props.id}`)} className="card">
                
                <img src={props.img} className="img-fluid card-img-top" alt="..."/>
                <div className={props.darkMode ? "dark-mode-cards card-body" : "card-body"}>
                    <h5 className={props.darkMode ? "light-mode-select card-title" : "card-title"}>{props.title}</h5>
                    <p className={props.darkMode ? "light-mode-select card-text" : "card-text"}>Population: <span>{props.people}</span></p>
                    <p className={props.darkMode ? "light-mode-select card-text" : "card-text"}>Region: <span>{props.region}</span></p>
                    <p className={props.darkMode ? "light-mode-select card-text" : "card-text"}>Capital: <span>{props.capital}</span></p>

                </div>
            </div>

        </div>
    )
}

export default Card