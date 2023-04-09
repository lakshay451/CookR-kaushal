import React from "react";
import Header from "../dashboard/header";
import { useParams } from 'react-router-dom'
import ExploreHeading from "../explore/explore-heading";
import BlogBody from "./blog-body";
function Blogs() {
  const { handle } = useParams()
  console.log(handle);
  const [detail, updateDetail] = React.useState({});
  const [name, updateName] = React.useState('');
  const [hasInfo, updateHasInfo] = React.useState(false);
  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("id", handle);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };

    fetch("https://cookr-backend-new.onrender.com/getBlog", requestOptions)
      .then(response => response.text())
      .then(result => {
        const newDetail = JSON.parse(result);
        console.log(newDetail);
        updateName(newDetail.name);
        updateDetail(newDetail);
        updateHasInfo(true);
      })
      .catch(error => console.log('error', error));
  }, [handle])



  const userAvatarDetails = {
    title: ['Dashboard', 'WorkSpace'],
    url: ['../../', '../../workspace'],
    homePath: "../"
  }
  
  return <div>
    <Header userAvatarDetails={userAvatarDetails} />
    <ExploreHeading title={name} />
    {hasInfo===false?null: <BlogBody
    likes={detail.likes}
    type={detail.type}
    comments={detail.comments}
    ingredients = {detail.ingredients}
    directions = {detail.directions}
    url={detail.url}
    time={detail.time}
     />}
  </div>
}


export default Blogs;