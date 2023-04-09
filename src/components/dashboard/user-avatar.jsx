import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/user-avatar.css";
function UserAvatar(props) {
    const navigate = useNavigate();
    // const [status, updateStatus] = React.useState(-1);
    function logout() {
       
        const User = JSON.parse(localStorage.getItem('user'));
        var myHeaders = new Headers();
        
        var urlencoded = new URLSearchParams();
        urlencoded.append('username', User.username);
        urlencoded.append('password', User.password);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
        };

        fetch("https://cookr-backend-new.onrender.com/logout", requestOptions)
            .then(response => response)
            .then((result)=>{
                console.log(result);
                if(result.status==200){
                    console.log("logged out successfully");
                    localStorage.removeItem('user');
                    if(props.homePath=="./"){
                        window.location.reload();
                    }else{
                        navigate(props.homePath, {replace:true});
                    }
                }
            } )
            .catch(error => console.log('error', error));
    }
    
    return <div className="btn-group user-avatar">
    <button type="button" className="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://www.w3schools.com/howto/img_avatar.png" />
    </button>
    <div className="dropdown-menu dropdown-btn" >
      <a className="dropdown-item" onClick={()=>navigate(props.url[0])}>{props.title[0]}</a>
      <a className="dropdown-item" onClick={()=>navigate(props.url[1])}>{props.title[1]}</a>
      <a className="dropdown-item" onClick={()=>navigate(props.url[2])}>{props.title[2]}</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" onClick={logout}>Logout</a>
    </div>
  </div>
}

export default UserAvatar;