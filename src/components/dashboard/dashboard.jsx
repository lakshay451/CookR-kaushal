import React from "react";
import Header from "./header";
import Hero from "./hero";
import Trending from "./trending";
import Footer from "../footer";
import BackToTop from "./back-to-top";
import "../../css/style.css"; 
//TODO: Fix BackToTop button

function Dashboard() {
  const userAvatarDetails={
    title: ['Profile', 'WorkSpace'],
    url: ['./profile', './workspace'],
    homePath: "./"
  }
  const userInfo={
    username: "",
    isloggedin: false
  }
  if(localStorage.getItem('user')==null){
    localStorage.setItem('user', JSON.stringify(userInfo));
  }
  return <div>
    <Header userAvatarDetails={userAvatarDetails}/>
    <Hero />
    <Trending />
    <Footer />
    <BackToTop />    
  </div>
}

export default Dashboard;
