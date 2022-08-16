import React from "react";
import { useState } from "react";
import "./updateUser.css";
import * as config from "../../../config";
import Cookies from 'js-cookie'
import girl1 from "../../../images/girl1.PNG"

import axios from 'axios'

const UpdateUser = ({ openUpdatePopup , userData}) => {
  const [updateInputs, setUpdateInputs] = useState({
    username : userData.username, email : userData.email, role : userData.role, skills : userData.skills , language : userData.language , country : userData.country
  });


  const loggedUser = Cookies.get('objectId');

  console.log(userData.objectId)

  const handleInputs = (e) => {
    const {name , value} = e.target;
  setUpdateInputs({...updateInputs ,[name] : value})
  }


  const HandleUpdate = (e) => {
      e.preventDefault();

      axios.put(`${config.API_BASE_URL}/update/users/:id`,{
        objectId : loggedUser,
        username : updateInputs.name,
        email : updateInputs.email,
        category : updateInputs.role,
        skills : updateInputs.skills,
        language : updateInputs.language,
        country : updateInputs.country
      })
      .then((res)=> {
        console.log(res)
      })
  }

  return (
    <div className="update-user">
      <div className="update-user-popup">
        <button className="close-button" onClick={openUpdatePopup}>
          X
        </button>
        <div className="mainContainer">
          <form className="user-update-form">
           <div className="labelAndInputs">
            <label className="label" htmlFor="name">
                <p className="formPara">Name:</p>
              </label>
              <input id="name" className="txtInputs" name="username" type="text" placeholder={!userData.username == "" ? userData.username : "username"} onChange={handleInputs}/>
           </div>
     
          

          <div className="labelAndInputs">
            <label className="label" htmlFor="email">
                <p className="formPara">Email:</p>
              </label>
              <input id="email" className="txtInputs" name="email" type="text" placeholder={!userData.email == "" ? userData.email : "email"} onChange={handleInputs}/>
          </div>

         
          <div className="labelAndInputs">
            <label className="label" htmlFor="country">
                <p className="formPara">Country:</p>
              </label>
              <input id="country" className="txtInputs" name="country" type="text" placeholder={!userData.country == "" ? userData.country : "Country"} onChange={handleInputs}/>
          </div> 

          <div className="labelAndInputs">
            <label className="label" htmlFor="city">
                <p className="formPara">City:</p>
              </label>
              <input id="city" className="txtInputs" name="city" type="text" placeholder={!userData.city == "" ? userData.city : "City"} onChange={handleInputs}/>
          </div>

          <div className="labelAndInputs">
            <label className="label" htmlFor="language">
                <p className="formPara">Language:</p>
              </label>
              <input id="language" className="txtInputs" name="language" type="text" placeholder={!userData.language == "" ? userData.language : "Language"} onChange={handleInputs}/>
         
          </div>

          <div className="labelAndInputs">
            <label className="label" htmlFor="profession">
                <p className="formPara">Profession:</p>
              </label>
              <input id="profession" className="txtInputs" name="profession" type="text" placeholder={!userData.profession == "" ? userData.profession : "profession"} onChange={handleInputs}/>
         
          </div>


          <div className="labelAndInputs">
            <label className="label" htmlFor="skills">
                <p className="formPara">Skills:</p>
              </label>
              <input id="skills" className="txtInputs" name="skills" type="text" placeholder={!userData.skills == "" ? userData.skills : "Skills"} onChange={handleInputs}/>
          </div>

          <div className="labelAndInputs">
            <label className="label" htmlFor="company">
                <p className="formPara">Company:</p>
              </label>
              <input id="company" className="txtInputs" name="company" type="text" placeholder={!userData.company == "" ? userData.company : "Company"} onChange={handleInputs}/>

          </div>

          <div className="labelAndInputs" style={{display:"flex"}}>
            <label className="label" htmlFor="">
                <p className="formPara">Role:</p>
              </label>
              <div className="radiobutton">
                <input className="input" type="radio" id="1" name="role" value="mentor" onChange={handleInputs}/><label>Mentor</label>
                
                <input className="input" type="radio" id="0" name="role" value="mantee" onChange={handleInputs}/><label>Mantee</label>
              </div>
          </div>
    
          <div className="labelTxtArea">
            <label className="label" htmlFor="description">
                <p className="formPara" style={{marginRight:"15px"}}>Description:</p>
              </label>
              <textarea id="company" className="txtInputs textArea" name="company"   placeholder={!userData.company == "" ? userData.company : "Company"} onChange={handleInputs}/>

          </div>
            
           
           
                   
          </form>
         <div className="imgContainer">
          <img src={girl1} className="updateProImg"/>
          <h4 style={{textAlign:"center", marginTop:"20px"}}>{!userData.description == "" ? userData.description : "lorem  lorem loremlorem lorem lorem loremlorem loremlorem lorem   lorem loremlorem lorem lorem loremlorem loremlorem lorem   lorem loremlorem lorem lorem loremlorem loremlorem lorem   lorem loremlorem lorem mlorem"}</h4>
         </div>
        </div>
       
        <button className="update-button" onClick={HandleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default UpdateUser;
