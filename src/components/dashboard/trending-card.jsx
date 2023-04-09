import React from "react";

function TrendingCard(props){
    return <div className="card card-columns text-center" style={{"width": "18rem" }}>
    <img className="card-img-top" src={props.imgURL} alt="Card image cap" />
    <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardFact}</p>
    </div>
    <div className="card-body">
        <a href="#" className="card-link">Explore</a>
    </div>
</div>
}

export default TrendingCard;