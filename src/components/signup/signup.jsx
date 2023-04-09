import React from "react";
import  './../../css/style1.css';
import  './../../css/style2.css';
import { useNavigate } from 'react-router-dom';


function Signup(){
    const navigate = useNavigate();
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

        fetch('https://cookr-backend-new.onrender.com/signup', { method: 'POST', headers: myHeaders, body: urlencoded }).then(function(response) {
        
        return response;  
      }).then(result=>{
          if(result.status==200){
            const userInfo = {
                username: credential.username,
                isloggedin: true
            }
            console.log(userInfo);
            localStorage.setItem('user', JSON.stringify(userInfo));
            navigate("../profile", { replace: true });
          }
          return result;
          
      });
      event.preventDefault();
        
    }

    return <section className="signup signup_login">
    <div className="container">
        <div className="signup-content">
            <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form onSubmit={handleSubmit} className="register-form" id="register-form">


                    <div className="form-group">
                        <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                        <input onChange={changeCredential} type="email" name="username" id="name" placeholder="Your Email" value={credential.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                        <input onChange={changeCredential} type="password" name="password" id="pass" placeholder="Password" value={credential.password}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                    </div>


                    <div className="form-group form-button">
                        <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                    </div>
                </form>
            </div>
            <div className="signup-image">
                <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                <a onClick={()=> navigate('../login', {replace: true})} className="signup-image-link">I am already member</a>
            </div>
        </div>
    </div>
</section>
}

export default Signup;