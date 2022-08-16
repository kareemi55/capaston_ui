import React, { useEffect } from 'react'
import { useState } from 'react'
import '../Profile/Profile.css'
import UpdateUser from './popUp/updateUser'
import Cookies from 'js-cookie'
import * as config from "../../config";
import girl1 from "../../images/girl1.PNG"
import axios from 'axios'

const Profile = () => {

    const [updatePopup, setUpdatePopup] = useState(false);
    const [userData, setUserData] = useState([])
  const [noUser, setNoUser] = useState([])
    



    const openUpdatePopup = (uUser) => {
        setUpdatePopup(!updatePopup)
        setNoUser(uUser);
        // <PopupEditBtn PopupEHandler={PopupEHandler} ssuser={ssuser}/>
        console.log(`${uUser.username}`)
    }


    const loggedUser = Cookies.get('objectId');
    console.log(loggedUser)

    useEffect(() => {
        axios.get(`${config.API_BASE_URL}/getUser`)
        .then((res) => {
          setUserData(res.data);
        })
    },[])

    
  return (
    <>
    {
        userData
        .map((logUser) => {
            if(logUser.objectId == loggedUser){
            
            return(
                
            <div className='profile'>
                <div className='headCont'>
                    <h1>My Profile</h1>
                    {console.log(logUser)}
                </div>
                
                <div className='mainCont1'>
                    <div className="bio">
        

                        <label className='labe' htmlFor=""><h5>Name:</h5></label>
                        <p>{logUser.username}</p>

                        <label className='labe' htmlFor=""><h5>Email:</h5></label>
                        <p>{logUser.email}</p>
                        
                        <label className='labe' htmlFor=""><h5>Country:</h5></label>
                        <p>{logUser.country}</p>

                        <label className='labe' htmlFor=""><h5>City:</h5></label>
                        <p>{logUser.city}</p>

                        <label className='labe' htmlFor=""><h5>Language:</h5></label>
                        <p>{logUser.language}</p>

                        <label className='labe' htmlFor=""><h5>Profession:</h5></label>
                        <p>{logUser.profession}</p>

                        <label className='labe' htmlFor=""><h5>Skills:</h5></label>
                        <p>{logUser.skills}</p>

                        <label className='labe' htmlFor=""><h5>Company:</h5></label>
                        <p>{logUser.company}</p>

                        <label className='labe' htmlFor=""><h5>Role:</h5></label>
                        <p>{logUser.role}</p>
                    </div>
                    <div className='imgCont'>
                    <img src={girl1} className="proImg"/>
                    <h4 style={{textAlign:"center", marginTop:"20px"}}> {logUser.description}</h4>
                
                    </div>
                    
                </div>    
                

                <div className="editButton">
                    <button key={logUser.objectId} className='button' onClick={()=>openUpdatePopup(logUser)}><strong>Edit Profile</strong></button>
                </div>
                
                {updatePopup ?
                <UpdateUser openUpdatePopup={openUpdatePopup} userData={noUser}/>:
                null
                }
                
            </div>

            )}
        })
    }</>
  )
}

export default Profile