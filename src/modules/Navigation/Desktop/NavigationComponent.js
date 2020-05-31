import React, { Component } from "react";

export default class NavigationComponent extends Component {
  render() {
    var { pageName, pageNum  } = this.props;
    var lineBgClass = "", diamondClass = "";
    switch(pageNum){
      case "1" : lineBgClass = "lineb1";diamondClass = "diamond1";break;
      case "2" : lineBgClass = "lineb2";diamondClass = "diamond2";break;
      case "3" : lineBgClass = "lineb3";diamondClass = "diamond3";break;
      case "4" : lineBgClass = "lineb4";diamondClass = "diamond4";break;
      case "5" : lineBgClass = "lineb5";diamondClass = "diamond5";break;
      case "6" : lineBgClass = "lineb6";diamondClass = "diamond6";break;
    }
    return (
      <div className="header">
        <div className="nav-out ">
          <ul>
            <li className="nav-home">
              <div className={`dot-menu menu-active ${pageNum == "1" ? "activeNav":""}`}></div>
              <div className=" nav-name ">Home</div>
              <div className=" diamond home-nav "></div>
            </li>

            <li className="nav-projects">
              <div className={`dot-menu menu-inactive ${pageNum == "2" ? "activeNav":""}`}></div>
              <div className=" nav-name  ">Projects</div>
              <div className=" diamond projects "></div>
            </li>
            <li className=" nav-exp">
              <div className={`dot-menu menu-inactive ${pageNum == "3" ? "activeNav":""}`}></div>
              <div className=" nav-name ">Experience</div>
              <div className=" diamond skills "></div>
            </li>
            <li className="nav-skills ">
              <div className={`dot-menu menu-inactive ${pageNum == "4" ? "activeNav":""}`}></div>
              <div className=" nav-name ">Skills</div>
              <div className=" diamond experience "></div>
            </li>
            <li className="nav-more">
              <div className={`dot-menu menu-inactive ${pageNum == "5" ? "activeNav":""}`}></div>
              <div className=" nav-name ">More</div>
              <div className=" diamond contact "></div>
            </li>
            <li className="nav-contact">
              <div className={`dot-menu menu-inactive ${pageNum == "6" ? "activeNav":""}`}></div>
              <div className=" nav-name  ">Contact</div>
              <div className={" diamond contact "}></div>
            </li>
          </ul>
        </div>

        <div className={"line bg-default "+lineBgClass}></div>
        <div className="page-num d-block">{pageNum}</div>
        <div id="diamond" className={"brd-diamond-default "+diamondClass}></div>
        <div className="page-name d-block ">{pageName}</div>
        <div className={"line line2 bg-default "+lineBgClass}  ></div>
      </div>
    );
  }
}
