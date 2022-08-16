import React from "react";
import "./SearchPage.css";
import Multiselect from "multiselect-react-dropdown";
import MentorCard from "./MentorCard/MentorCard";
import Cookies from 'js-cookie'
import * as config from "../../config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import mentorData from './allData.json'
import io from 'socket.io-client'
import Chat from "../Chat/Chat";

const socket = io.connect("http://localhost:3001")

export default function SearchPage() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [filterMentors, setFilterMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [openChat, setOpenChat] = useState(false)

  // dropdown States
  const [ skillsDD, setSkillsDD] = useState(false)     
  const [ industryDD, setIndustryDD] = useState(false) 
  const [ professionDD, setProfessionDD] = useState(false) 
  const [ companyDD, setCompanyDD] = useState(false)
  const [ countryDD, setCountryDD] = useState(false) 
  const [ languageDD, setLanguageDD] = useState(false) 

  // filter array states

  const [ skills, setSkills] = useState([])     
  const [ industry, setIndustry] = useState([]) 
  const [ profession, setProfession] = useState([]) 
  const [ company, setCompany] = useState([])
  const [ country, setCountry] = useState([]) 
  const [ language, setLanguage] = useState([]) 

  //dropdown Handlers 

  const handleSkills = (e) => {
   setSkills([...skills,e.target.value]) 
  }
  const handleIndustry = (e) => {
   setIndustry([...industry,e.target.value]) 
  }
  const handleProfession = (e) => {
   setProfession([...profession,e.target.value]) 
  }
  const handleCompany = (e) => {
   setCompany([...company,e.target.value]) 
  }
  const handleCountry = (e) => {
   setCountry([...country,e.target.value]) 
  }
  const handleLanguage = (e) => {
   setLanguage([...language,e.target.value]) 
  }

  const ClearFilters = () => {
    setSearchTerm("")
    setSkills([])
    setIndustry([])
    setProfession([])
    setCompany([])
    setCountry([])
    setLanguage([])
    setSkillsDD(false)
    setIndustryDD(false)
    setProfessionDD(false)
    setCompanyDD(false)
    setCountryDD(false)
    setLanguageDD(false)
  }

  const navigate = useNavigate()

  const userId = Cookies.get("objectId");
  const appRoom = "m&m";

  const joinChat = (e) => {
    e.preventDefault();
    if(userId !== ""){
      socket.emit("join_room", appRoom)
    }
    setOpenChat(true)
  }

  

  const searching = (e) => {
    setSearchTerm(e.target.value)
  }
  const searching11 = (e) => {
    setSearchTerm(e.target.onSelect)
  }
  useEffect(() => {
    if(Cookies.get("accessToken")){
      axios.get(`${config.API_BASE_URL}/getUser`)
      .then(
        (result) => {
          setIsLoaded(true);
          setMentors(result.data);
          // console.log(result.data[1].username)
        }
      );
    }else{
      navigate('/login')
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <div className="main">
        <div className="search-bar">
          <h1>Find a Mentor</h1>
          <div className="search">
           
            <input
              className="search"
              placeholder="Search mentor by Name or Skill"
              value={searchTerm}
              onChange={searching }
             
            />
            {/* <button on>button</button> */}

            
          </div>
          <div className="search-filter">
          <div className="filters">
          <div className="filter-drops">
            <h4 className="like-button" onClick={()=> setSkillsDD(!skillsDD)}>Skills</h4>
            {skillsDD && <ul className="filter-ul">
              <li className="filter-li"><input type="checkbox" value="Engineering" defaultChecked={false} onChange={handleSkills}/>Engineering</li>
              <li className="filter-li"><input type="checkbox" value="UX&Design" defaultChecked={false} onChange={handleSkills}/>UX & Design</li>
              <li className="filter-li"><input type="checkbox" value="Data Science" defaultChecked={false} onChange={handleSkills}/>Data Science</li>
              <li className="filter-li"><input type="checkbox" value="Business&Management" defaultChecked={false} onChange={handleSkills}/>Business & Management</li>
              <li className="filter-li"><input type="checkbox" value="Product&Marketing" defaultChecked={false} onChange={handleSkills}/>Product & Marketing</li>
             </ul>}
            </div>
            <div className="filter-drops">
            <h4 className="like-button" onClick={()=> setIndustryDD(!industryDD)}>Industry</h4>
            {industryDD && <ul className="filter-ul">
              <li className="filter-li"><input type="checkbox"  defaultChecked={false} onChange={handleIndustry}/></li>
              <li className="filter-li"><input type="checkbox" defaultChecked={false} onChange={handleIndustry}/></li>
              <li className="filter-li"><input type="checkbox" defaultChecked={false} onChange={handleIndustry}/></li>
            </ul>}
            </div>
            <div className="filter-drops">
            <h4 className="like-button" onClick={()=> setProfessionDD(!professionDD)}>Profession</h4>
            {professionDD && <ul className="filter-ul">
              <li className="filter-li"><input type="checkbox" defaultChecked={false} onChange={handleProfession}/></li>
              <li className="filter-li"><input type="checkbox" defaultChecked={false} onChange={handleProfession}/></li>
              <li className="filter-li"><input type="checkbox" defaultChecked={false} onChange={handleProfession}/></li>
            </ul>}
            </div>
            <div className="filter-drops">
            <h4 className="like-button" onClick={()=> setCompanyDD(!companyDD)}>Company</h4>
            {companyDD && <ul className="filter-ul">
              <li className="filter-li"><input type="checkbox" defaultChecked={false} onChange={handleCompany}/></li>
              <li className="filter-li"><input type="checkbox" defaultChecked={false} onChange={handleCompany}/></li>
              <li className="filter-li"><input type="checkbox" defaultChecked={false} onChange={handleCompany}/></li>
            </ul>}
            </div>
            <div className="filter-drops">
            <h4 className="like-button" onClick={()=> setCountryDD(!countryDD)}>Country</h4>
            {countryDD && <ul className="filter-ul">
              <li className="filter-li"><input type="checkbox" value="China" defaultChecked={false} onChange={handleCountry}/></li>
              <li className="filter-li"><input type="checkbox" value="Poland" defaultChecked={false} onChange={handleCountry}/></li>
              <li className="filter-li"><input type="checkbox" value="Russia" defaultChecked={false} onChange={handleCountry}/></li>
            </ul>}
            </div>
            <div className="filter-drops">
            <h4 className="like-button" onClick={()=> setLanguageDD(!languageDD)}>Language</h4>
            {languageDD && <ul className="filter-ul">
              <li className="filter-li"><input type="checkbox" value="Urdu" defaultChecked={false} onChange={handleLanguage}/>Urdu</li>
              <li className="filter-li"><input type="checkbox" value="English" defaultChecked={false} onChange={handleLanguage}/>English</li>
              <li className="filter-li"><input type="checkbox" value="Hindi" defaultChecked={false} onChange={handleLanguage}/>Hindi</li>
            </ul>}
            </div>
          </div>
          <div className="clear-filters">
            <button onClick={ClearFilters}>Clear Filters</button> 
          </div>
            
          </div>
        </div>
        {/* <Menu/> */}
        
        
        <MentorCard mentors={mentors} searchTerm={searchTerm}
            drop1={skills}
            drop2={industry}
            drop3={profession}
            drop4={company}
            drop5={country}
            drop6={language}
            joinChat={joinChat}
        />
        {openChat ?
          <Chat socket={socket} username={userId} room={appRoom} setOpenChat={setOpenChat}/>
          :(null)
        }
        
      
      </div>
      </>
    );
  }
}
