import React from "react";
import Header from "../dashboard/header";
import ExploreHeading from "../explore/explore-heading";
import Favourite from "./favourites";
import YourRecipe from "./your-recipe";

function Workspace(){
    const userAvatarDetails={
        title: ['Profile', 'Dashboard'],
        url: ['../profile', '../'],
        homePath: "../"
      }
    return <div>
        <Header userAvatarDetails={userAvatarDetails} />
        <ExploreHeading title="Workspace" />
        <Favourite />
        <YourRecipe />
    </div>
}

export default Workspace;