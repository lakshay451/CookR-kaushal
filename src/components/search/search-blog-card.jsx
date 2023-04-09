import { green } from "@mui/material/colors";
import React from "react";
import "../../css/explore.css";
import { useNavigate } from 'react-router-dom';


function SearchBlogCard(props){
  const navigate = useNavigate();
  const newpath = '../blogs' + props.id;
  console.log(newpath);
    const vegStyle = {
        boxShadow: "0 2px 20px green"
      }
      const nonVegStyle = {
        boxShadow: "0 2px 20px red"
      }
      const vegIngredient = {
        color: 'green'
      }
      const nonVegIngredient = {
        color: 'red'
      }
      const [shadowStyle, updateShadowStyle] = React.useState(props.type=='vegetarian'?vegStyle:nonVegStyle);
      function createIngredients(ingredient){
        if(props.globalItemList.includes(ingredient)){
          return <p style={vegIngredient}>{ingredient}</p>
        }else{
          return <p style={nonVegIngredient}>{ingredient}</p>
        }
      }
      return (
        <div className="col-lg-4 col-md-6">
          <div className="container blog-entry" key={props.id} style={shadowStyle}>
            <img src="https://content3.jdmagicbox.com/comp/allahabad/q5/0532px532.x532.181115190131.z9q5/catalogue/food-square-katra-allahabad-restaurants-klhq6ijf66.jpg" />
            <div className="container">
              <div className="blog-info-wrapper">
              <div className="row blog-info">
                <div className="col-sm-8">
                  <h4>{props.title}</h4>
                </div>
                <div className="col-sm-1">
                  <p>{props.likes}</p>
                </div>
                <div className="col-sm-2">
                  <i class="fas fa-heart"></i>
                </div>
              </div>
    
    
              
              <div className="row">
                <div className="col-sm-1">
                  <i className="fas fa-stopwatch"></i>
                </div>
                <div className="col-sm-10">
                  <p>{props.time} mins</p>
                </div>
              </div>
    
    
              <div className="row">
                <div className="col-sm-1">
                  <i class="fas fa-comments"></i>
                </div>
                <div className="col-sm-10">
                  <p>{props.comments} comments</p>
                </div>
              </div>
    
    
              <div className="row">
                <div className="col-sm-1">
                  <i class="fas fa-trophy"></i>
                </div>
                <div className="col-sm-10">
                  <p>{props.difficulty}</p>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-1">
                  <i class="fas fa-carrot"></i>
                </div>
                <div className="col-sm-10">
                  {props.recipeIngredients.map(createIngredients)}                
                </div>
              </div>
              </div>
              <button className="btn" onClick={()=>navigate(newpath)}>View</button>
            </div>
    
          </div>
        </div>
      );
}

export default SearchBlogCard;