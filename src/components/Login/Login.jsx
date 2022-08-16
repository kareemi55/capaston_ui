import * as React from "react";
import "./Login.css";
import axios from "axios";
import * as config from "../../config";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

export default function Login() {
  const username = React.createRef();
  const password = React.createRef();

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = async () => {
      try {
        console.log("Logging in");
        const res = await axios.post(`${config.API_BASE_URL}/login`, {
          username: username.current.value,
          password: password.current.value,
        });
        console.log("username: ", username.current.value);
        if(res.status === 200){
          Cookies.set("accessToken", res.data.user.sessionToken,)
          Cookies.set("objectId" , res.data.user.objectId)
          navigate('/searchPage')
        }
        console.log(res.data.user.sessionToken)
        
        
      } catch (err) {
        console.log(err);
      }
    };
    login();
  };

  return (
    <div className="loginFormCont">
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="inputCont loginHeading">
          <h2 >Log into Your Account</h2>
        </div>
        <div className="inputCont">
          <input ref={username} className="loginInputs"></input>
        </div>
        <div className="inputCont">
          <input type="password" ref={password} className="loginInputs"></input>
        </div>
        <div className="inputCont loginHeading">
          <button type="submit" className="loginBtn">
              Login
            </button>
        </div>
      </form>
      <p style={{color:"black"}}>
        Dont have an account ?<a href="/register">signUp</a>
      </p>
    </div>
  );
}
