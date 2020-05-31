import React, { Component } from "react";
import "../../../assets/styles/pages/main.css";
import "../../../assets/styles/pages/animate.css";
import "../../../assets/styles/pages/main-mob.css";
import portfolioImage from "../../../assets/images/portfolio.jpg";
import ProjectsComponent from "../../Projects/Mobile/ProjectsComponent.js";
import ExperienceComponent from "../../Experiences/Mobile/ExperienceComponent.js";
import SkillsComponent from "../../Skills/Mobile/SkillsComponent.js";
import AboutComponent from "../../More/Mobile/AboutComponent.js";
import ContactComponent from "../../Contact/Mobile/ContactComponent.js";
import logoIcon from "../../../assets/images/testVector2.svg";
import logoDarkIcon from "../../../assets/images/testSvgreverse.svg";



export default class MainMobileComponent extends Component {
  constructor(props)
  {
	  super(props);
	  this.state = {
		  currentOpacityClass: "op-1"
	  }
  }

  componentDidMount() {
  setTimeout(()=>{
  //   const wow = new window.WOW({
  //   boxClass: 'wow',
  //   animateClass: 'animated'
  //  });
  // wow.init();
  document.getElementById("intro").style.display= "block";
}, 1000);
  }


  openSideMenu(){
    document.getElementById("side-menu").style.marginLeft = "0px";
    document.getElementsByClassName("over-toggle")[0].style.display= "block";
    document.getElementsByClassName("side-mob-black")[0].style.width="100%";
    window.$(".line-s").attr("style","transform: rotate(45deg); transform-origin: left top; width: 15px; margin-top: 14px; margin-left: 0px;");
    window.$(".line-l").attr("style","display: none; margin-top: 4px;");
    window.$(".line-s2").attr("style","transform: rotate(-45deg); transform-origin: left top; width: 15px; margin-top: 10px; margin-left: 0px;");
    
    document.getElementsByClassName("over-toggle")[0].addEventListener("click", function(){
    document.getElementsByClassName("side-mob-black")[0].style.width="0%";
    document.getElementById("side-menu").style.marginLeft = "-200px";
    document.getElementsByClassName("over-toggle")[0].style.display= "none";
    window.$(".line-s").attr("style","transform: rotate(0deg); transform-origin: left top; width: 12px; margin-top: 14px; margin-left: 3px;");
    window.$(".line-l").attr("style","display: block; margin-top: 4px;");
    window.$(".line-s2").attr("style","transform: rotate(0deg); transform-origin: left top; width: 12px; margin-top: 4px; margin-left: 3px;");
    
    })
  }

  hideProjectComponent = () =>{
   window.$("#mob-project").attr("style","left:-400px");
  }

  showProjectComponent = () =>{
   this.hideExperienceComponent();
   this.hideSkillsComponent();
   window.$("#mob-project").attr("style","left:0px");
   window.$(".nav-projects").attr("style","color: rgb(77, 77, 77);");
   window.$(".nav-home").attr("style","color: rgb(154, 154, 154);");
   window.$(".nav-exp").attr("style","color: rgb(154, 154, 154);");
   window.$(".nav-skills").attr("style","color: rgb(154, 154, 154);");
   window.$(".nav-more").attr("style","color: rgb(154, 154, 154);");
   window.$(".nav-contact").attr("style","color: rgb(154, 154, 154);");
   document.getElementsByClassName("over-toggle")[0].click();
  }

  showHomeComponent = () =>{
    this.hideProjectComponent();
    this.hideExperienceComponent();
    this.hideSkillsComponent();
    this.hideAboutComponent();
    this.hideContactComponent();
    window.$(".nav-projects").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-home").attr("style","color: rgb(77, 77, 77);");
    window.$(".nav-exp").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-skills").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-more").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-contact").attr("style","color: rgb(154, 154, 154);");
   document.getElementsByClassName("over-toggle")[0].click();
  }

  hideExperienceComponent = () =>{
    window.$("#mob-exp").attr("style","left:-400px");
  }
  hideSkillsComponent = () => {
    window.$("#mob-skills").attr("style","left:-400px");
  }
  hideAboutComponent = () => {
    window.$("#mob-about").attr("style","left:-400px");
  }
  hideContactComponent = () => {
    window.$("#mob-contact").attr("style","left:-400px");
  }

  showExperienceComponent = () =>{
    this.hideProjectComponent();
    this.hideSkillsComponent();
    this.hideAboutComponent();
    this.hideContactComponent();
    window.$("#mob-exp").attr("style","left:0px");
    window.$(".nav-projects").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-home").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-exp").attr("style","color: rgb(77, 77, 77);");
    window.$(".nav-skills").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-more").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-contact").attr("style","color: rgb(154, 154, 154);");
   document.getElementsByClassName("over-toggle")[0].click();
  }

  showSkillsComponent = () =>{
    this.hideProjectComponent();
    this.hideExperienceComponent();
    this.hideAboutComponent();
    this.hideContactComponent();
    window.$("#mob-skills").attr("style","left:0px");
    window.$(".nav-projects").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-home").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-exp").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-skills").attr("style","color: rgb(77, 77, 77);");
    window.$(".nav-more").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-contact").attr("style","color: rgb(154, 154, 154);");
   document.getElementsByClassName("over-toggle")[0].click();
  }

  showAboutComponent = () => {
    this.hideProjectComponent();
    this.hideExperienceComponent();
    this.hideSkillsComponent();
    this.hideContactComponent();
    window.$("#mob-about").attr("style","left:0px");
    window.$(".nav-projects").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-home").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-exp").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-skills").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-more").attr("style","color: rgb(77, 77, 77);");
    window.$(".nav-contact").attr("style","color: rgb(154, 154, 154);");
   document.getElementsByClassName("over-toggle")[0].click();
  }

  showContactComponent = () => {
    this.hideProjectComponent();
    this.hideExperienceComponent();
    this.hideSkillsComponent();
    this.hideAboutComponent();
    window.$("#mob-contact").attr("style","left:0px");
    window.$(".nav-projects").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-home").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-exp").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-skills").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-more").attr("style","color: rgb(154, 154, 154);");
    window.$(".nav-contact").attr("style","color: rgb(77, 77, 77);");
   document.getElementsByClassName("over-toggle")[0].click();
  }


  render() {
  var { currentOpacityClass} = this.state;
	var opacityClass = currentOpacityClass;
    return (
      <div className="portme">
        <div className="logo ">
          <img alt="" src={logoIcon}/>
        </div>

        <div id="side-menu" className="side-mob-white">
          <div className="side-img">
            <img alt="" src={logoDarkIcon} />
          </div>
          <div className="side-img-lg">
            <img alt="" src={portfolioImage} />
          </div>
          <div className="side-mob-nav">
            <ul>
              <li className="nav-home" onClick={this.showHomeComponent}>
                <i className="fa fa-home "></i> Home
              </li>
              <li className="nav-projects" onClick={this.showProjectComponent}>
                <i className="fa fa-object-group"></i>  Projects
              </li>
              <li className=" nav-exp" onClick={this.showExperienceComponent}>
                <i className="fa fa-tag "></i>  Experience
              </li>
              <li className="nav-skills" onClick={this.showSkillsComponent}>
                <i className="fa fa-line-chart"></i>  Skills
              </li>
              <li className="nav-more" onClick={this.showAboutComponent}>
                <i className="fa fa-line-chart"></i>  About
              </li>
              <li className="nav-contact" onClick={this.showContactComponent}>
                <i className="fa fa-coffee "></i>  Contact
              </li>
              <li className="side-con">
                {" "}
                +91 9990897726
                <br /> rishabh.jn141@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="side-mob-black"></div>
        <div className="nav-line " onClick={this.openSideMenu}>
        <ul>
          <li>
            <div className=" line-s "></div>
          </li>
          <li>
            <div className=" line-l "></div>
          </li>
          <li>
            <div className=" line-s2 "></div>
          </li>
        </ul>
      </div>
        <div className="nav-cross "></div>

        <div className="toggle-nav "></div>
        <div className="over-toggle"></div>

        <div className="links linkFooter">
          <h4 className={`link-head `}> Find me here!</h4>
          <ul>
            <a href="https://www.linkedin.com/in/rishabh-jain-379a80b2/" target="_blank">
              <li>
                <i className={`fa fa-linkedin  d-inline-block `}></i>
              </li>
            </a>
            <a href="https://github.com/rishabh2015" target="_blank">
              <li>
                <i className={`fa fa-github-alt d-inline-block `}></i>
              </li>
            </a>
            <a href="https://angel.co/u/rishabh-jain-24" target="_blank">
              <li>
                <i className={`fa fa-angellist d-inline-block `}></i>
              </li>
            </a>
            <a href="https://jain-rishabh.in/blogs/" target="_blank">
              <li className="clr-white">Blogs</li>
            </a>
          </ul>
        </div>

        <div className={"mainpage d-block "+ opacityClass}>
          <div  className="container-fluid intro-outer">
            <div className="row">
            <div id="intro"  className="col-md-8 intro-inner" >
					<div className="my-pic wow fadeInUp" data-wow-delay="0.1s" >
            <img alt="" src={portfolioImage}/></div>
					<div className="my-intro wow fadeInUp" data-wow-delay="0.1s" >
						<br/> Rishabh Jain
						<br/>Full Stack Developer</div>
					<div className="horiz-line wow fadeInLeftBig" data-wow-delay="-0.4s" ></div>
					<div className="my-detail wow fadeInDown" data-wow-delay="0.2s" >Think Design Develop!
					</div>
					<div className="wow fadeIn" >
						<div className="dia dia-1"></div>
						<div className="dia dia-2"></div>
						<div className=" dia dia-3"></div>
						<div className=" dia dia-4"></div>
						<div className=" dia dia-5"></div>
					</div>

				</div>
            </div>
          </div>
          <div className="home ">
            <div className="back-image "> </div>
          </div>
        </div>
        <ProjectsComponent />
        <ExperienceComponent />
        <SkillsComponent />
        <AboutComponent />
        <ContactComponent />
    </div>
    );
  }
}
