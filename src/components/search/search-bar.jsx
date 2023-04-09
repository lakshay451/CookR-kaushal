import React from "react";
import "../../css/search.css";



function SearchBar(props) {
    const [name, updateName] = React.useState('');
    const [list, updateList] = React.useState([]);
    

    function changeName(event) {
        const newValue = event.target.value;
        updateName(newValue);
        if (name.length > 0) {
            console.log('fetch');
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("names", name);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
            };

            fetch("https://cookr-backend-new.onrender.com/getIngredients", requestOptions)
                .then(response => response.text())
                .then(result => {
                    const newList = JSON.parse(result);
                    updateList([]);
                    newList.forEach(element => {
                        const newname = element.names;
                        updateList((prevValue) => {
                            return prevValue.concat(newname);
                        })
                        // console.log(list);
                    });

                })
                .catch(error => console.log('error', error));
        }
    }

    function searchSuggestion(item) {
        if (name.length > 0) {
            const newItem = item.toLowerCase();
            if (newItem.includes(name.toLowerCase())) {

                return <p className="search-suggestion" onClick={() => props.addItem(item)} name="search-suggestion" key={item} value={item}>&emsp;&emsp;&emsp;{item}&emsp;&emsp;</p>
            } else {
                return null;
            }
        } else {
            return null;
        }
    }



    return <div className="search-bar-parent">
        <div className="search-wrapper">
            <i className="fas fa-search"></i>
            <input autoComplete="off" className="search" name="name" value={name} onChange={changeName} />

        </div>
        <div className="search-suggestion-box">
            {list.map(searchSuggestion)}
        </div>
    </div>

}

export default SearchBar;