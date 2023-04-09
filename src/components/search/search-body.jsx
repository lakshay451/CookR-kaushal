import React from "react";
import SearchBar from "./search-bar";
import list from "./search-suggestion";
import "../../css/search.css";
import ResultPage from "./search-result.jsx";


function SearchBody() {
    const [itemList, updateItemList] = React.useState([]);
    const [result, updateResult] = React.useState([]);


    function addItem(item) {
        // console.log(item);
        const isPresent = itemList.find(existingItem => {
            return existingItem == item;
        })
        if (isPresent) {
            return null;
        } else {
            updateItemList(prevValue => {
                return [...prevValue, item];
            })
        }

    }

    function removeItem(item) {
        const name = item;
        updateItemList(prevValue => {
            const newItemList = prevValue.filter(existingValue => {
                return existingValue != name;
            })
            return newItemList;
        })

    }
    const [searchBtnClicked, updateSearchBtnClicked] = React.useState(false);
    function findRecipes() {
        updateSearchBtnClicked(true);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("ingredients", itemList);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch("https://cookr-backend-new.onrender.com/getRecipe", requestOptions)
            .then(response => response.text())
            .then(result => {
                const foundResults = JSON.parse(result);
                console.log(foundResults);
                updateResult(foundResults);
            })
            .catch(error => console.log('error', error));

    }


    function createList(item) {
        return <div className="item-list">
            <div className="row">
                <div className="col-sm-9">
                    {item}
                </div>
                <div className="col-sm-2">
                    <i className="far fa-times-circle" id={item} onClick={() => removeItem(item)}></i>
                </div>
            </div>
        </div>
    }

    return (
        <div className="container search-body-wrapper">
            <div className="row">
                <div className="col-3 ">
                    <h4>Items Present</h4>
                    <button className="btn search-btn" onClick={findRecipes}>Find Recipes</button>

                    <div className="item-list-wrapper">
                        {itemList.map(createList)}
                    </div>
                </div>
                <div className="col-9" >
                    <SearchBar addItem={addItem} itemList={itemList} searchBtnClicked={searchBtnClicked} />
                    <ResultPage result={result} itemList={itemList} searchBtnClicked={searchBtnClicked} />
                </div>

            </div>


        </div>

    );
}

export default SearchBody;