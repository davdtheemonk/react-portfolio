import React from "react";
import "./styles.css"
import Homenav from "../Homenav";
export default function Home(){
    return(
        
        <div className="home_cont">
            <Homenav/>
            <div className="home__cont">
                
                <img src="/pic2.gif" className="home_donuts"/>
<div className="home_hello">
    <p>👋Hello,I'm David,a fullstack developer from Kenya</p>
</div>
<div className="home_info">
    <h3>David Mugalla</h3>
    <p>Software Developer</p>
       
</div>
<div className="Work">
    <h3>Work</h3>
    <div className="dash"></div>
<p>I build tools using React,React-Native,MongoDB,Node.js or Python</p> 
</div>
<button onClick={()=>{
        window.location ="/portfolio"
    }} className="port_btn">Portfolio</button>
<div className="Bio">
    <h3>Bio</h3>
    <div className="dash"></div>
 

<div className="det_box">
    <p className="det_year">2021</p>
    <p className="det_dets">Started Freelancing</p>
    </div>
  <div className="det_box">
    <p className="det_year">2022</p>
    <p className="det_dets">Joined Dupla-AI</p>
    </div>
  

<div className="interests">
    <h3>I❤️🚀</h3>
    <div className="dash"></div>
   
    <p>Reading,Photography,Nature walks,Machine Learning,Code code code</p>
</div>


</div>
<div className="socials">
 
    
   
    <img className="social-img" onClick={()=>{
        window.open("https://www.github.com/davdtheemonk")
    }} src="/github.svg">

    </img>
<img onClick={()=>{
        window.open("https://www.linkedin.com/in/david-mugalla-198149215/")
    }} className="social-img"src="/linkedin.svg"/>
</div>
<p className="more_home">More</p>
<div className="dash"></div>
<div className="read" onClick={()=>{
    window.open("https://what-the-bug.ml")
}}>
<p>What the bug blog</p>

    <img className="home_blog"src="/pic3.gif"/>
    
   <button className="blog_btn">My stories</button>
</div>
<p className="footer">© 2022 David Mugalla</p>
</div>


        </div>
    )
}
