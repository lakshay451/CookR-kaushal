import React from "react";
import "../../css/blogs.css";
function BlogBody(props) {
    const ingredients = props.ingredients;
    const directions = props.directions;
    function createList(item, index){
        return <p key={index}>{item}</p>
    }
    function createDirections(item, index){
        return <p key={index}>Step {index+1}: {item}</p>
    }
    return <div className=" container blog-body-wrapper">
        <div className="row">
            <div className="col-lg-3">
                <div className="information-wrapper">
                    <div className="information">
                        <h6>Type</h6>
                        <p>{props.type}</p>
                    </div>
                    <div className="information">
                        <h6>Difficulty</h6>
                        <p>{props.difficulty}</p>
                    </div>
                    <div className="information">
                        <h6>Prep Time</h6>
                        <p>{props.time}</p>
                    </div>
                    <div className="information">
                        <h6>Ingredients</h6>
                        {ingredients.length>0?ingredients.map((item, index)=> createList(item, index)): null}
                    </div>
                </div>
            </div>
            <div className="col-lg-8">
                <h1>Directions</h1>
                <div className="directions">
                    {directions.length>0?directions.map((item, index) => createDirections(item, index)):null}
                </div>
            </div>
        </div>

    </div>
}

export default BlogBody;