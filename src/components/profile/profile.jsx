import React from "react";
import Header from "../dashboard/header";
import Body from "./body";

function Profile(){
    const userAvatarDetails={
        title: ['DashBoard', 'WorkSpace'],
        url: ['../', '../workspace'],
        homePath: "../"
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails}/>
        <Body />
    </div>

}


export default Profile;