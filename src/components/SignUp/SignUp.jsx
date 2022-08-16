import * as React from "react";
import "./SignUp.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import * as config from "../../config";
import LinkedinLogin from "../LinkedinLogin/LinkedinLogin";
import Login from "../Login/Login";

import imgOr from "../../images/or.PNG";


export default function SignUp() {
  const username = React.createRef();
  const password = React.createRef();
  const email = React.createRef();
  const radio = React.createRef();
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    const register = async () => {
      
      try {
        const res = await axios.post(`${config.API_BASE_URL}/register`, {
          username: username.current.value,
          password: password.current.value,
          email: email.current.value,
        });
        // handleLogin(res.data.user);

        if (res.status === 201) {
          console.log("Account has been created successfully.", "success");
          navigate('/login')
          //this is not being executed
        }

        // console.log("registered success")
        
      } catch (err) {
        alert(err);
        console.log(err);
        console.log('error')
      }
    };

    register();
  };
  const handleSwitch = () => {
    navigate('/login')
  }
// saeedddddddddddddddddddddddddddddddddddddddddddd
let myArr=["python", "php"];
let myArr2=[
  {
    name:"noor",
    age:"12",
    skill:"jana"
  },
  {
    name:"noor",
    age:"12",
    skill:"javascript"
  },
  {
    name:"ali",
    age:"12",
    skill:"python"
  },
  {
    name:"baig",
    age:"12",
    skill:"jana"
  },
  {
    name:"kareem",
    age:"12",
    skill:"php"
  },
  {
    name:"khan",
    age:"12",
    skill:"python"
  }
]
console.log(".......................................................")
let resultArr =[] 
myArr.forEach((ele)=>{
  console.log(ele)
  myArr2.forEach((innerEle) =>{
    // console.log(innerEle)
    if(ele === innerEle.skill){
      resultArr.push(innerEle);
    }
  })

})
console.log(resultArr)
// console.log(resultArr)
console.log(".......................................................")
// saeedddddddddddddddddddddddddddddddddddddddddddd
  return (
    <div className="submitFormCont">
      <form onSubmit={handleSubmit} className="submitForm">
        <div className="inputCont signupHeading">
          <h2 >Register</h2>
        </div>

        <div className="inputCont">
        <input type="text" ref={username} placeholder="Full Name" className="signupInputs"></input>
        </div>

        <div className="inputCont">
          <input type="email" ref={email} placeholder="Email" className="signupInputs"></input>
        </div>

        <div className="inputCont">
        <input type="password" ref={password} placeholder="Password" className="signupInputs"></input>
        </div>

        <div className="inputCont">
          <button type="submit" className="signupBtn">
            Register  
          </button>
        </div>

        
      </form>
        <div className="orDiv" style={{
          marginBottom:"18px"
        }}>
          <img src={imgOr} style={{
            width:"100%",
            height:"25px"

          }}/>
        </div>
      <div style={{
          marginBottom:"10px"
        }}>
      <LinkedinLogin />
      </div>
      <p className="loginPara" style={{color:"black"}}>
        Already Have an Account?{" "}
        <button className="" type="submit" onClick={handleSwitch} style={
          {border:"none",
          backgroundColor:"transparent",
          color:"blue",
          fontSize:"22px",
          textDecoration:"underline blue 2px"
          }
        }>
          Log In
        </button>
      </p>
    </div>
  );
}
