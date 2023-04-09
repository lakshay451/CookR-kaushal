import React from "react";
import "../../css/explore.css";

import ExploreBlogs from "./explore-blogs";
import ExploreSearchBars from "./explore-searchbars";
import Pagination from '@mui/material/Pagination';

function ExploreBody() {
  const [name, updateName] = React.useState("");
  const [type, updateType] = React.useState("NA");
  const [time, updateTime] = React.useState("NA");
  const [difficulty, updateDifficulty] = React.useState("NA");
  const [index, updateIndex] = React.useState(1);
  const [pageCount, updatePageCount] = React.useState(1);
  function changeName(event) {
    const newValue = event.target.value;
    updateName(newValue);
    updateIndex(1);
  }
  function changeType(event) {
    const newType = event.target.value;
    updateType(newType);
    updateIndex(1);
  }
  function changeTime(event) {
    const newTime = event.target.value;
    updateTime(newTime);
    updateIndex(1);
  }
  function changeDifficulty(event) {
    const newDifficulty = event.target.value;
    updateDifficulty(newDifficulty);
    updateIndex(1);
  }
  function changeIndex(event, newValue) {
    updateIndex(newValue)
  }

  function changePageCount(newValue) {
    updatePageCount(newValue)
  }


  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    if(difficulty!='NA'){
      urlencoded.append("difficulty", difficulty);
    }
    if(type!='NA'){
      urlencoded.append("type", type);
    }
    if(time!='NA'){
      urlencoded.append("time", time);
    }

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("http://localhost:4000/getPageCount", requestOptions)
      .then(response => response.text())
      .then(result => {
        const newResult = JSON.parse(result);
        console.log(newResult.length);
        updatePageCount(Math.ceil(newResult.length/8));
      })
      .catch(error => console.log('error', error));
  }, [name, difficulty, type, time])



  console.log(index);
  return <section id="blog" className="blog">
    <div className="container explore-body" data-aos="fade-up">
      <ExploreSearchBars
        name={name} changeName={changeName}
        changeType={changeType}
        changeTime={changeTime}
        changeDifficulty={changeDifficulty}
      />
      <ExploreBlogs name={name}
        type={type}
        time={time}
        difficulty={difficulty}
        index={index}
       
      />
      <Pagination count={pageCount} variant="outlined" shape="rounded" color="secondary"
        page={index}
        onChange={changeIndex}
      />
    </div>
  </section>
}

export default ExploreBody;