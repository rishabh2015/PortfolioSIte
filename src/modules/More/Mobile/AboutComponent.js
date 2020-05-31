import React, { Component } from 'react';
import "../../../assets/styles/pages/contact.css";


export default class MoreComponent extends Component{
    render(){
        
        return(
          <div className=" mob-about " id="mob-about">
          <div className="about-head ">
            <span className="wow fadeInUp" data-wow-delay="0.2s" >About</span>
          </div>
          <div className=" about-cont" >
            <span className="wow fadeInDown top" data-wow-delay="0.2s" >
      My definition!</span>
      <div className="skills-text about-text wow fadeInDown" data-wow-delay="0.3s" >
              <ul>
                <li>Thinking! <span >evokes my curiosity.</span></li>
                <li>Desigining! <span >gives shades to my creativity.</span></li>
                <li>Developing!<span > is the soul of my creativity.</span></li>
              </ul>
      
      
            </div>
            <span className="wow fadeInDown last last-skills last-about wow fadeInDown" data-wow-delay="0.4s" >
      Roles!</span>
            <div className="skills-text about-text wow fadeInDown" data-wow-delay="0.5s" >
              <ul>
                <li>Developer head of Nibble Computer Society</li>
                <li>Founder and CEO at Toat Fashion</li>
                <li>And I love palying Guitar and shoot great photos as well</li>
              </ul>
      
            </div>
            <span className="wow fadeInDown last last-skills last-about wow fadeInDown" data-wow-delay="0.6s" >
      A little bit more about me!</span>
            <div className="skills-text about-text summary wow fadeInDown" data-wow-delay="0.7s" >
      
              I'm a Computer Science Graduate. The prospect of new technologies always excites me and add value to my skills. I'm a self learner and waiting for the opportunities where I can do my best and can learn as much as possible.
      
      
            </div>
            <span className="wow fadeInDown last last-skills wow fadeInDown" data-wow-delay="0.8s" >
      Think Design Develop!</span>
          </div>
        </div>);
    }
}