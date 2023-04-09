import React from "react";
import SearchBlogCard from "./search-blog-card";

function SearchResult(props){

    const resultList = props.result;

    function createResult(item){
        return <SearchBlogCard 
            id={item.id}
            type={item.type} 
            title= {item.name}
            difficulty= {item.difficulty}
            time = {item.time}
            likes = {item.likes}
            comments = {item.comments}
            globalItemList = {props.itemList}
            recipeIngredients = {item.uniqueIngredients}
        />
    }
    
    return <div className="search-results">
        {resultList.length>0? <h2>Recipes Found!</h2>: props.searchBtnClicked? <h2>Can't find any recipe</h2>: <h2>Add available ingredients and find recipe!!</h2>}
        {resultList.length>0? resultList.map(createResult): null}
    </div>
}



export default SearchResult;