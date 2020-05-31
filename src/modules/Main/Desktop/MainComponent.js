import React, { Component } from "react";
import NavigationComponent from "../../Navigation/Desktop/NavigationComponent";
import "../../../assets/styles/pages/main.css";
import "../../../assets/styles/pages/animate.css";
import ProjectsComponent from "../../Projects/Desktop/ProjectsComponent";
import ExperienceComponent from "../../Experiences/Desktop/ExperienceComponent";
import SkillsComponent from "../../Skills/Desktop/SkillsComponent";
import MoreComponent from "../../More/Desktop/MoreComponent";
import ContactComponent from "../../Contact/Desktop/ContactComponent";
import portfolioImage from "../../../assets/images/portfolio.jpg";
import logoIcon from "../../../assets/images/testVector2.svg";



var $ = window.$;
export default class MainComponent extends Component {
  constructor(props)
  {
	  super(props);
	  this.state = {
		  pageNum: "1",
		  pageName: "Home",
		  currentOpacityClass: "op-1"
	  }
  }

  componentDidMount() {
//   const wow = new window.WOW({
//     boxClass: 'wow',
//     animateClass: 'animated'
// });
//   wow.init();
  
	document.addEventListener('scroll', () => {
        var windowHeight = $(window).height();
		var windowScrollTop = $(window).scrollTop();
       if(((windowScrollTop)%(windowHeight)) == 0 ){
		   this.setState({currentOpacityClass:"op-1"});
	   }
	   else if(((windowScrollTop)%(windowHeight)) < 0.75*(windowHeight)){
           this.setState({currentOpacityClass: "op-1"});
	   }
	   else if(((windowScrollTop)%(windowHeight)) < 0.50*(windowHeight)){
		   this.setState({currentOpacityClass:"op-50" });
	   }
	   else if(((windowScrollTop)%(windowHeight)) < 0.25*(windowHeight)){
		   this.setState({currentOpacityClass:"op-25"});
	   }
	   if(windowScrollTop > 5*windowHeight -350){
       
		this.setState({pageNum: "6", pageName:"Contact"});   
	   }
	   else if(windowScrollTop > 4*windowHeight -350){
       
		this.setState({pageNum: "5", pageName:"More"});
	   }
       else if(windowScrollTop > 3*windowHeight -350){
         
       this.setState({pageNum: "4", pageName:"Skills"});
	   }
       else if(windowScrollTop>2*windowHeight-350){
         
		this.setState({pageNum:"3", pageName:"Experience"});
		}
		else if(windowScrollTop > windowHeight-400)
		{
			this.setState({pageNum:"2", pageName: "Projects"});
		}
		else{
			this.setState({pageNum:"1", pageName:"Home"});
		}
	});
  }


  render() {
  var { pageNum, pageName , currentOpacityClass} = this.state;
	var opacityClass = currentOpacityClass;
	if(pageNum != 1){
	  opacityClass="op-0";
  }
    return (
      <div className="portme">
        <div className="logo ">
          <img alt="" src={logoIcon} />
        </div>

        <div className="side-mob-white">
          <div className="side-img">
          </div>
          <div className="side-img-lg">
            <img alt="" src={portfolioImage} />
          </div>
          <div className="side-mob-nav">
            <ul>
              <li className="nav-home">
                <i className="fa fa-home "></i>Home
              </li>
              <li className="nav-projects">
                <i className="fa fa-object-group"></i> Projects
              </li>
              <li className=" nav-exp">
                <i className="fa fa-tag "></i> Experience
              </li>
              <li className="nav-skills">
                <i className="fa fa-line-chart"></i> Skills
              </li>
              <li className="nav-more">
                <i className="fa fa-line-chart"></i>More
              </li>
              <li className="nav-contact">
                <i className="fa fa-coffee "></i>contact
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
        <NavigationComponent pageName={pageName} pageNum={pageNum} />
        <div className="nav-line " >
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
          <h4 className={`link-head ${pageNum != 1 ? "d-none":""}`}> Find me here!</h4>
          <ul>
            <a href="https://www.linkedin.com/in/rishabh-jain-379a80b2/" target="_blank">
              <li>
                <i className={`fa fa-linkedin  d-inline-block ${pageNum != 1 ? "d-none":""}`}></i>
              </li>
            </a>
            <a href="https://github.com/rishabh2015" target="_blank">
              <li>
                <i className={`fa fa-github-alt d-inline-block ${pageNum != 1 ? "d-none":""}`}></i>
              </li>
            </a>
            <a href="https://angel.co/u/rishabh-jain-24" target="_blank">
              <li>
                <i className={`fa fa-angellist d-inline-block ${pageNum != 1 ? "d-none":""}`}></i>
              </li>
            </a>
            <a href="https://jain-rishabh.in/blogs/" target="_blank">
              <li className="clr-white">Blogs</li>
            </a>
          </ul>
        </div>

        <div className={"mainpage d-block "+ opacityClass}>
          <div className="container-fluid intro-outer">
            <div className="row">
              <div className="col-md-8 intro-inner">
                <div className="my-pic wow fadeInUp" data-wow-delay="1.4s">
                  <img alt="" src={portfolioImage} />
                </div>
                <div className="my-intro wow fadeInUp"  data-wow-delay="1.4s">
                  <h2>
                    Hi !
                    <br /> I'm Rishabh Jain
                    <br />
                    Full Stack Developer
                  </h2>
                </div>
                <div
                  className="horiz-line wow fadeInLeftBig"
                   data-wow-delay="0.8s"
                ></div>
                <div className="my-detail wow fadeInDown"  data-wow-delay="1.2s">
                  Thinking!
                  <span className="red-intro"> evokes my curiosity</span>
                  <br /> Designing!
                  <span className="red-intro">
                    {" "}
                    gives shades to my creativity
                  </span>
                  <br /> Developing!{" "}
                  <span className="red-intro">
                    {" "}
                    is the soul of my masterpiece{" "}
                  </span>
                </div>
                <div className="wow fadeIn">
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
        {/*Projects Done */}
        <ProjectsComponent currentOpacityClass={currentOpacityClass} pageNum={pageNum} />
        {/*Experience Done*/}
        <ExperienceComponent currentOpacityClass={currentOpacityClass} pageNum={pageNum} />
        {/*Skills Done */ }
        <SkillsComponent currentOpacityClass={currentOpacityClass} pageNum={pageNum} />
        {/*More Done*/}
        <MoreComponent currentOpacityClass={currentOpacityClass} pageNum={pageNum} />
        <ContactComponent currentOpacityClass={currentOpacityClass} pageNum={pageNum} />
	  </div>
    );
  }
}
