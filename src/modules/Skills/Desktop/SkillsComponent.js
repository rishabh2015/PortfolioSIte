import React, { Component } from "react";
import ang_js_icon from "../../../assets/images/ang-js-skill.png";
import css_icon from "../../../assets/images/css-skill.png";
import react_icon from "../../../assets/images/react-skill.png";
import html_icon from "../../../assets/images/html-skill.png";
import sass_icon from "../../../assets/images/sass-skill.png";
import polymer_icon from "../../../assets/images/polymer-skill.png";
import ps_icon from "../../../assets/images/ps-skill.png";
import bs_icon from "../../../assets/images/bs-skill.png";
import ai_icon from "../../../assets/images/ai-skill.png";
import ae_icon from "../../../assets/images/ae-skill.png";
import bal_icon from "../../../assets/images/bal-skill.png";
import c2_icon from "../../../assets/images/c2-skill.png";
import json_icon from "../../../assets/images/json-skill.png";
import js_icon from "../../../assets/images/js-skill.png";
import jquery_icon from "../../../assets/images/jquery-skill.png";
import node_icon from "../../../assets/images/node-js-skill.png";
import redux_icon from "../../../assets/images/redux-skill.png";
import spring_icon from "../../../assets/images/spring-skill.png";
import java_icon from "../../../assets/images/java8-skill.png";
import mysql_icon from "../../../assets/images/mysql-skill.png";
import mongo_icon from "../../../assets/images/mongodb-skill.png";
import kafka_icon from "../../../assets/images/kafka-skill.png";
import redis_icon from "../../../assets/images/redis-skill.png";
import DSAlgo_icon from "../../../assets/images/DsAlgo-skill.jpg";
import hibernate_icon from "../../../assets/images/hibernate-skill.png";

import "../../../assets/styles/pages/skills.css";

var $=window.$;
export default class SkillsComponent extends Component{
    handleArrowUp = () => {
        
        $(".skills-out").animate({scrollTop:"+=110"},200);
        $(".skills-out").animate({scrollTop:"+=90"},200);
      };
    
      handleArrowDown = () => {
        $(".skills-out").animate({scrollTop:"-=110"},200);
        $(".skills-out").animate({scrollTop:"-=90"},200);
      };
    
    render(){
        var { handleArrowDown, handleArrowUp } = this;
        var { currentOpacityClass, pageNum } = this.props;
        var opacityClass = currentOpacityClass;
        if(pageNum != 4){
            opacityClass="op-0";
        }
        return(
                <div className={" skills-outer "+opacityClass}>
                 <div className="project-title wow fadeInUp" data-wow-delay="0.8s">Skills Stack</div>
                <div className="line-exp line-skills  wow slideInLeft"></div>
                <div className="subtitle-pro  subtitle-skills wow fadeInDown" data-wow-delay="0.6s"> Without them, I'm incomplete!</div>

                <div className="row">
                <div className="col-xs-12 col-md-5">
                <div className="row">
                <div className="chart col-xs-5 col-xs-offset-1 col-md-5 col-md-offset-1 wow fadeInLeft">
                <div className="row">
                <div className="code-chart col-xs-6">
                <h4>Code<br/>
                {"</>"}</h4>
                </div>
                <div className="design-chart col-xs-6">
                <h4>Design<br/>
                <i className="fa fa-pencil"></i></h4>
                </div>
                </div>
                </div>
                <div className="skills-content col-xs-4 wow fadeInLeft" data-wow-delay="0.4s">
                <h2>I Do</h2>
                <h4>Backend Development</h4>
                <h4>Database Management</h4>
                <h4>Frontend Development</h4>
                <h4>Prototyping</h4>
                <h4>Responsive Web Designs</h4>
                </div>
                </div>
                </div>
                <div className="align-space col-xs-11 col-md-6 wow fadeInUp">
                <div className=" skills-up" onClick={handleArrowUp}>
                <i className="fa fa-angle-up fa-2x"></i>
                </div>
                <div className=" skills-down" onClick={handleArrowDown}>
                <i className="fa fa-angle-down fa-2x"></i>
                </div>
                <div className="skills-out ">

                <div className="skills-in col-xs-12">
                <div className="row">
                
                

                <div className="col-xs-3">

                <div className="skills-card ">
                <div className="skill-cover">
                </div>
                <img alt="" src={java_icon}/>
                <div>JAVA 8</div>
                </div>

                </div>
                <div className=" col-xs-3">

                <div className="skills-card even">

                <div className="skill-cover">
                </div>
                <img alt="" src={spring_icon}/>
                <div>Spring Boot</div>
                </div>
                </div>
                <div className="col-xs-3">

                <div className="skills-card ">
                <div className="skill-cover ">
                </div>
                <img alt="" src={mysql_icon}/>
                <div>MySql</div>
                </div>

                </div>

                <div className="col-xs-3">
                <div className="skills-card even">
                <div className="skill-cover ">
                </div>
                <img alt="" src={mongo_icon}/>
                <div>Mongo DB</div>
                </div>
                </div>

                <div className="col-xs-3">

                <div className="skills-card ">
                <div className="skill-cover">
                </div>
                <img alt="" src={kafka_icon}/>
                <div>kafka</div>
                </div>

                </div>
                <div className=" col-xs-3">

                <div className="skills-card even">

                <div className="skill-cover">
                </div>
                <img alt="" src={redis_icon}/>
                <div>Redis</div>
                </div>
                </div>
                <div className="col-xs-3">

                <div className="skills-card ">
                <div className="skill-cover">
                </div>
                <img alt="" src={DSAlgo_icon}/>
                <div>Data Structures And Algorithm</div>
                </div>

                </div>
                <div className=" col-xs-3">

                <div className="skills-card even">

                <div className="skill-cover">
                </div>
                <img alt="" src={hibernate_icon}/>
                <div>Hibernate</div>
                </div>
                </div>

                <div className=" col-xs-3">

                <div className="skills-card">

                <div className="skill-cover skill-html">
                </div>
                <img alt="" src={html_icon}/>
                <div>HTML5</div>
                </div>
                </div>


                <div className="col-xs-3">

                <div className="skills-card even">
                <div className="skill-cover skill-css">
                </div>
                <img alt="" src={css_icon}/>
                <div>CSS</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card">
                <div className="skill-cover  skill-js">
                </div>
                <img alt="" src={js_icon}/>
                <div>Javascript</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card even">
                <div className="skill-cover  skill-jq">
                </div>
                <img alt="" src={jquery_icon}/>
                <div>jQuery</div>
                </div>

                </div>
                </div>


                <div className="row">

                <div className="col-xs-3">

                <div className="skills-card even">
                <div className="skill-cover skill-bs">
                </div>
                <img alt="" src={bs_icon}/>
                <div>Bootstrap</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card ">
                <div className="skill-cover skill-ang-js">
                </div>
                <img alt="" src={ang_js_icon}/>
                <div>Angular JS</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card even">
                <div className="skill-cover  skill-json">
                </div>
                <img alt="" src={json_icon}/>
                <div>JSON</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card ">
                <div className="skill-cover  skill-sass">
                </div>
                <img alt="" src={sass_icon}/>
                <div>SASS</div>
                </div>

                </div>
                </div>

                <div className="row">
                
                <div className="col-xs-3">
                <div className="skills-card ">
                <div className="skill-cover skill-react">
                </div>
                <img alt="" src={react_icon}/>
                <div>React</div>
                </div>
                </div>

                <div className="col-xs-3">
                <div className="skills-card ">
                <div className="skill-cover skill-node">
                </div>
                <img alt="" src={node_icon}/>
                <div>Node</div>
                </div>
                </div>

                <div className="col-xs-3">
                <div className="skills-card ">
                <div className="skill-cover skill-redux">
                </div>
                <img alt="" src={redux_icon}/>
                <div>Redux</div>
                </div>
                </div>
 
                <div className="col-xs-3">
                <div className="skills-card ">
                <div className="skill-cover skill-redux">
                </div>
                <img alt="" src={redux_icon}/>
                <div>Redux</div>
                </div>
                </div>
                
                </div>

                <div className="row">

                <div className="col-xs-3">

                <div className="skills-card ">
                <div className="skill-cover skill-polymer">
                </div>
                <img alt="" src={polymer_icon}/>
                <div>Polymer</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card even ">
                <div className="skill-cover skill-ps">
                </div>
                <img alt="" src={ps_icon}/>
                <div>Photoshop</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card ">
                <div className="skill-cover  skill-ai">
                </div>
                <img alt="" src={ai_icon}/>
                <div>Illustrator</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card even">
                <div className="skill-cover  skill-ae">
                </div>
                <img alt="" src={ae_icon} className="special-effect"/>
                <div>After Effects</div>
                </div>

                </div>
                </div>

                <div className="row">

                <div className="col-xs-3">

                <div className="skills-card even">
                <div className="skill-cover skill-bal">
                </div>
                <img alt="" src={bal_icon}/>
                <div>Balsamiq</div>
                </div>

                </div>

                <div className="col-xs-3">

                <div className="skills-card  ">
                <div className="skill-cover skill-c2">
                </div>
                <img alt="" src={c2_icon}/>
                <div>Construct2</div>
                </div>

                </div>
                




                </div>
                <div className="exp-last skills-last row">
                More coming soon...
                </div>
                </div>

                </div>
                </div>
                </div>
                </div>

        );
    }
}
