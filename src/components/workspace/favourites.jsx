import React from "react";
import "../../css/workspace.css";



function Favourite() {
    const [allItems, updateAllItems] = React.useState([]);
    const [lastItemIndex, updateLastItemIndex] = React.useState(4);
    const [items, updateItems] = React.useState([]);
    const username = JSON.parse(localStorage.getItem('user')).username;
    React.useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch("https://cookr-backend-new.onrender.com/getfavourites", requestOptions)
            .then(response => response.text())
            .then(result => {
                const newResult = JSON.parse(result);
                updateAllItems(newResult);
                updateItems(newResult.slice(0, lastItemIndex)); 
            })
            .catch(error => console.log('error', error));
    }, [])


    function deleteItem(id) {
        console.log("pressed");
        updateItems(prev => {
            const newItems = items.filter((item) => item.id != id);
            console.log(newItems);
            const ret = [...newItems, allItems[lastItemIndex]];
            updateLastItemIndex(lastItemIndex + 1);
            return ret;
        });
    }
    // 
    function TableContent(item) {
        return <tr key={item.id} className="table-item">
            <td>&emsp;{item.name}</td>
            <td>{item.time} mins</td>
            <td>{item.difficulty}</td>
            <td>{item.likes}</td>
            <td>{item.comments}</td>
            <td className="table-icon" ><i className="fas fa-trash-alt" onClick={() => deleteItem(item.id)}></i></td>
            <td>&emsp;</td>
        </tr>
    }



    return <div className="favourites">
        <div className="container wrapper" >
            <h4>Favourites</h4><span><i className="fas fa-star"></i></span>
        </div>


        <div className="container workspace-container">
            <table className="table table-borderless workspace-table ">
                <div className="container table-container">
                    <thead>
                        <tr>
                            <th scope="col" className="col-md-8">&emsp; Name</th>
                            <th scope="col" className="col-md-1"><i className="fas fa-stopwatch"></i></th>
                            <th scope="col" className="col-md-1">Level</th>
                            <th scope="col" className="col-md-1"><i class="fas fa-heart"></i></th>
                            <th scope="col" className="col-md-1"><i class="fas fa-comments"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(TableContent)}
                    </tbody>
                </div>
            </table>
            <center><button type="button" class="btn btn-outline-primary">View All</button></center>
        </div>


    </div>
}

export default Favourite;