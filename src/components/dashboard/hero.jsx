import React from "react";
import { useNavigate } from "react-router-dom";

function Hero(){
    const navigate = useNavigate();
    return <section id="hero" className="d-flex align-items-center">

    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <div className="row">
        <div className="col-xl-6">
          <h1>Find recipes for the ingedrients you aldready have </h1>
          <h2>We suggest you the best dishes with easiest recipies that can be made with the available ingedrients in your kitchen.</h2>
          <a onClick={()=>navigate("./search")} className="btn-search scrollto"><i className="fas fa-search"></i>  Search</a>
          <a onClick={()=>navigate("./explore")} className="btn-explore scrollto"><i className="fas fa-dharmachakra"></i>  Explore</a>
        </div>
      </div>
    </div>

  </section>
}

export default Hero;