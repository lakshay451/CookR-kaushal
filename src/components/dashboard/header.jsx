import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";
import UserAvatar from "./user-avatar";



function Header(props) {
  const userAvatarDetails = props.userAvatarDetails;

  let navigate = useNavigate();
  function navigateSignup() {
    navigate("./signup");
  }
  function navigateLogin() {
    navigate("./login");
  }
  const user = JSON.parse(localStorage.getItem('user'));
  const [status, updateStatus] = React.useState(user.isloggedin?200:-1);


  return <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><a href="index.html">CookR<span>.</span></a></h1>

      {status == 200 ? <UserAvatar homePath={userAvatarDetails.homePath} title={userAvatarDetails.title} url={userAvatarDetails.url} /> : <div>
        <a onClick={navigateSignup} className="get-started-btn scrollto">SignUp</a>
        <a onClick={navigateLogin} className="get-started-btnl scrollto">Login</a>
      </div>}

    </div>
  </header>
}

export default Header;