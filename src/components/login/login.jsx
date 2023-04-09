import React from "react";
import {useNavigate} from "react-router-dom";


function Login(){
    const navigate=useNavigate();
    const [credential, updateCredential] = React.useState({username:"", password: ""});
    function changeCredential(event){
        const name=event.target.name;
        const value=event.target.value;
        updateCredential(prevValue=>{
            return {
                ...prevValue,
                [name]:value
            }
        });
    }

    function handleSubmit(event){

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", credential.username);
        urlencoded.append("password", credential.password);

        fetch('https://cookr-backend-new.onrender.com/login', { method: 'POST', headers: myHeaders, body: urlencoded }).then(function(response) {
        
        return response;  
      }).then(result=>{
          if(result.status==200){
              const userInfo = {
                  username: credential.username,
                  isloggedin: true
              }
              console.log(userInfo);
              localStorage.setItem('user', JSON.stringify(userInfo));
            //   sessionStorage.setItem('loginStatus', true);
            navigate("../", { replace: true, state:{loggedIn: true} });
          }
          return result;
          
      })
       
        event.preventDefault();
        
    }


    return <section className="sign-in signup_login" >
    <div className="container">
        <div className="signin-content">
            <div className="signin-image">
                <figure><img src="images/signin-image.jpg" alt="sing up image" /></figure>
                <a href="signup" className="signup-image-link">Create an account</a>
            </div>

            <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleSubmit} className="register-form" id="login-form">
                    <div className="form-group">
                        <label htmlFor="username"><i className="zmdi zmdi-account material-icons-name"></i></label>
                        <input onChange={changeCredential} value={credential.username} type="email" name="username" id="username" placeholder="example@gmail.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                        <input onChange={changeCredential} value={credential.password} type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="rememberMe" id="remember-me" className="agree-term"/>
                        <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                    </div>
                    <div className="form-group form-button">
                        <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
}

export default Login;