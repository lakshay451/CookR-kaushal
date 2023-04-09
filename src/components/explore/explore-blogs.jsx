import React, { Component } from "react";
import ExploreBlogCard from "./explore-blog-cards";


function ExploreBlogs(props) {

    const [items, updateItems] = React.useState([{}]);
    React.useEffect(() => {
        window.scrollTo(0, 0)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("index", props.index);
        urlencoded.append("time", props.time);
        urlencoded.append("difficulty", props.difficulty);
        urlencoded.append("type", props.type);
        urlencoded.append("name", props.name.length == 0 ? 'NA' : props.name);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch("https://cookr-backend-new.onrender.com/explore", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result != 'error') {
                    const newResult = JSON.parse(result)
                    // console.log(newResult.length);
                    updateItems(newResult);

                } else {
                    updateItems([]);
                }
            })
            .catch(error => console.log('error', error));

    }, [props.name, props.type, props.time, props.difficulty, props.index])

    function createBlogCards(item) {
        return <ExploreBlogCard
            id = {item.id}
            key={item.id}
            title={item.name}
            time={item.time}
            comments={item.comments}
            likes={item.likes}
            difficulty={item.difficulty}
            type={item.type}
        />


    }
    return <div className="blogs-container" >
        <div className="row" >
            {items.map(createBlogCards)}
        </div>
    </div>
}

export default ExploreBlogs;