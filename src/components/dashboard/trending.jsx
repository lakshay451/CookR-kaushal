import React from "react";
import TrendingCard from "./trending-card";


function Trending(){
return <main id="main">
    <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
                <h2>Trending</h2>
                <p>Here are some dishes which are loved by most of the people</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="100">
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">Sugar Free</li>
                        <li data-filter=".filter-card">Dairy</li>
                        <li data-filter=".filter-web">High Protein</li>
                    </ul>
                </div>
            </div>
            <div clas="container">
                <div className="row card-deck">
                    <TrendingCard imgURL="assets/img/portfolio/portfolio-1.jpg" cardTitle="Noodles" cardFact="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <TrendingCard imgURL="assets/img/portfolio/portfolio-2.jpg" cardTitle="Gajar Ka Halwa" cardFact="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <TrendingCard imgURL="assets/img/portfolio/portfolio-3.jpg" cardTitle="Green Tea" cardFact="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    <TrendingCard imgURL="assets/img/portfolio/portfolio-4.jpg" cardTitle="Noodles" cardFact="Some quick example text to build on the card title and make up the bulk of the card's content." />
                </div>
            </div>

        </div>

    </section>


</main>
}


export default Trending;