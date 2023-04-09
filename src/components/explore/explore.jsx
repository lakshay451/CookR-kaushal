import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "./explore-heading";
import ExploreBody from "./explore-body";
import Footer from "../footer";

function Explore(){
    const userAvatarDetails={
        title: ['Profile', 'WorkSpace'],
        url: ['../profile', '../workspace'],
        homePath: "../"
      }
    
    return <div >
        <Header userAvatarDetails={userAvatarDetails}/>
        <ExploreHeading title="Explore" />
        <ExploreBody />
        <Footer />
    </div>
}


export default Explore;

