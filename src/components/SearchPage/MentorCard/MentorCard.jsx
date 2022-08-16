import React from "react";
import "./MentorCard.css";
import pic from "../../../images/girl1.PNG"
export default function ({ mentors, searchTerm, drop1, drop2, drop3, drop4, drop5, drop6, joinChat}) {
  
  let arr=[];
  
  drop6.forEach(element => {
    mentors.forEach((ele)=>{
      if(element===ele.language){
        arr.unshift(ele);
      }
    })
  });
  drop1.forEach(element => {
    mentors.forEach((ele)=>{
      if(element===ele.skills){
        arr.unshift(ele);
      }
    })
  });

  // drop6.forEach(element => {
  //   mentors.forEach((ele)=>{
  //     if(element===ele.language){
  //       arr.unshift(ele);
  //     }
  //   })
  // });

 
  return (
    <div className="mentor-grid">
      {arr != "" ?
      <>
      {arr.filter((value)=>{
        return value.username.toLowerCase().includes(searchTerm.toLowerCase())
      }).map((mentor) => {
      return(
      <div className="results">
        <div className="innerCont">
          <img src={pic} />
         
          <div className="tCont" >
            <p className="nameAndDes1 pLineHight"><b>{mentor.username}</b></p>
            <p className="pLineHightAll" ><span>{mentor.city+", "}</span> <span>{mentor.country}</span> <span>{mentor.language}</span></p>
            <p className="nameAndDes2 pLineHight"> <span>{mentor.description}</span></p>
            <p className="name pLineHight" > <span>{mentor.skills}</span></p>
            {/* <p className="role">{mentor.role}</p>  */}
          </div>
          {/* <p className="bio">{mentor.description}</p> */}
          {/* <button className="tags">{mentor.tags}</button> */}
        </div>
        
          <button onClick={joinChat} className="matchBtn">Match</button>
        </div>
      )})
      }
      </>
      :
      <>
      {mentors.filter((value)=>{
        return value.username.toLowerCase().includes(searchTerm.toLowerCase())
      }).map((mentor) => {
      return(
      <div className="results">
        <div className="innerCont">
          <img src={pic} />
         
          <div className="tCont" >
            <p className="nameAndDes1 pLineHight"><b>{mentor.username}</b></p>
            <p className="pLineHightAll" ><span>{mentor.city+", "}</span> <span>{mentor.country}</span> <span>{mentor.language}</span></p>
            <p className="nameAndDes2 pLineHight"> <span>{mentor.description}</span></p>
            <p className="name pLineHight" > <span>{mentor.skills}</span></p>
            {/* <p className="role">{mentor.role}</p>  */}
          </div>
          {/* <p className="bio">{mentor.description}</p> */}
          {/* <button className="tags">{mentor.tags}</button> */}
        </div>
        
          <button onClick={joinChat} className="matchBtn">Match</button>
        </div>
      )})
      }
      </>}
      


      
    </div>
  );
}
