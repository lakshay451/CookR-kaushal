import React from "react";
import Header from "../dashboard/header";
import Body from "./body";
function AddRecipe(){
    const userAvatarDetails={
        title: ['DashBoard', 'Profile', 'Favourites'],
        url: ['../', '../profile', '../favourite'],
        homePath: "../"
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails}/>
        <Body />
    </div>

}


export default AddRecipe;