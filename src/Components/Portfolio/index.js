import React from "react";
import "./styles.css"
import Homenav from "../Homenav";
export default function Portfolio(){
    return(
<div className="home_cont">

<button onClick={()=>{
    window.location="/"
}} className="home_btn">Home</button>
    <div className="projects">
        <div className="project_card">
        <img className="home_blog2"src="/LMS.png"/>
<h3>Eins board</h3>
<p>Interactive board for education.LMS for creating interactive courses.Built using the MERN stack</p>
       
        </div>
        <div className="project_card">
        <img className="home_blog2"src="/afr.jpg"/>
        <h3>Adven-tour</h3>
<p>Cross platform Journaling app.Built using React Native</p>
  
            
        </div>
        <div className="project_card">
        <img className="home_blog2"src="/pic3.gif"/>
        <h3>What the bug</h3>
<p>Blog app where I write my developer stories.Built using React</p>
  
            
        </div>
        <div className="project_card">
        <img className="home_blog2"src="/api.png"/>
        <h3>wtb-API</h3>
<p>Rest API that allows me to post new blogs to my blog App.It's a Django App.Built using Python</p>
  
            
        </div>
    </div>
    

</div>

    )}