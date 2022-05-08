import React from 'react';
import '../Components/Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <div className="picture">
                <img src= {props.picture} alt={props.name} />
            </div>
            <div className="desc-wrapper">
            <div className="description">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
            </div>
            <div className="links">
                <a href={props.link} target="_blank">To the page</a>
                <a href={props.code} target="_blank">Check my code</a>
            </div>

            </div>
            

        </div>
    )
}

export default Card