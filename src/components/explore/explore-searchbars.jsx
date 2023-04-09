import react from "react";

function ExploreSearchBars(props){
    return <div className="row">

    <div className="col-lg-4">
      <h6>Search</h6>
      <div className="search-wrapper">
        <i className="fas fa-search"></i>
        <input autoComplete="off" className="search" name="name" value={props.name} onChange={(event)=>props.changeName(event)}/>
      </div>
    </div>

    <div className="col-lg-2">
      <h6>Type</h6>
      <select className="form-select select" aria-label="Default select example" name="type" onChange={(event)=>props.changeType(event)}>
        <option selected value="NA">Any</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="non vegetarian">Non Vegetarian</option>
      </select>
    </div>

    <div className="col-lg-2">
      <h6>Difficulty</h6>
      <select className="form-select select" aria-label="Default select example" name="difficulty" onChange={(event)=> props.changeDifficulty(event)}>
        <option selected value="NA">Any</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>

    <div className="col-lg-2">
      <h6>Preptime</h6>
      <select className="form-select select" aria-label="Default select example" name="time" onChange={(event)=>props.changeTime(event)}>
        <option selected value="NA">Any</option>
        <option value="< 15">{"< 15 mins"}</option>
        <option value="< 30">{"< 30 mins"}</option>
        <option value="< 45">{"< 45 min"}</option>
        <option value="< 60">{"< 60 min"}</option>
        <option value="< 90">{"< 90 min"}</option>
        <option value="> 90">{"> 90 min"}</option>
      </select>
    </div>
    
  </div>
}

export default ExploreSearchBars;