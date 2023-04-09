import React from "react";
import "../../css/addRecipe.css";

function Body() {
    return <div className="add-recipe">
        <div className="col-md-9 body">
            <h2>Add Your Own Recipe!</h2>
            <br />
            <div className="col-md-6 form-body">
                <div class="form-group">
                    <div id="dish-name">
                        <label for="dishName">Name of the Dish</label>
                        <input type="text" class="form-control" id="dishName" aria-describedby="nameHelp" placeholder="Paneer Tikka" />
                        <small id="nameHelp" class="form-text text-muted">Tip: Try picking up a short and generic name, containing the name of main ingredient</small>
                    </div>
                    <br />
                    <div id="type-of-dish">
                    <label for="type-of-recipe">Type of Dish</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">Vegetarian</option>
                            <option value="2">Non Vegetarian</option>
                        </select>
                    </div>
                    <br />
                    <div id="cooking-time">
                    <label for="cooking-time">Cooking Time</label>
                    <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">0 - 15 mins</option>
                            <option value="2">15 - 30 mins</option>
                            <option value="3">30 - 45 mins</option>
                            <option value="3">45 - 60 mins</option>
                            <option value="3">60 - 90 mins</option>
                            <option value="3">More than 90 mins</option>
                        </select>
                        
                    </div>
                    <br />
                    <div id="difficultLevel">
                    <label for="difficulty-level">Difficulty Level</label>
                    <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">Easy</option>
                            <option value="2">Intermediate</option>
                            <option value="3">Hard</option>
                            <option value="3">Expert</option>
                        </select>
                    </div>
                    <br />
                    <button type="button" class="btn btn-success">Submit and Add Ingredients</button>
                </div>
            </div>
        </div>
    </div>
}

export default Body;