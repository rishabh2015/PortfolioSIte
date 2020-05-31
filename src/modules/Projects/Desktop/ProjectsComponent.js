import React, { Component } from "react";
import zoom from "../../../assets/images/zoom.png";
import founch_logo from "../../../assets/images/founch-logo.png";
import gmas_logo from "../../../assets/images/gmas-logo.png";
import ym_logo from "../../../assets/images/ym-logo.png";
import z_logo from "../../../assets/images/z-logo.png";
import msg_logo from "../../../assets/images/msg-logo.png";
import portfolio_logo from "../../../assets/images/portfolio-logo.png";
import pmc_logo from "../../../assets/images/pmc-logo.png";
import tap_logo from "../../../assets/images/tap-logo.png";
import floatjsLogo from "../../../assets/images/floatjs-Logo.png";
import "../../../assets/styles/pages/project.css";

var $ = window.$;
export default class ProjectsComponent extends Component {
  handleLeftNavCLick = () => {
    $(".pro-outer").animate({ scrollLeft: "+=220" }, 400);
  };

  handleRightNavClick = () => {
    $(".pro-outer").animate({ scrollLeft: "-=220" }, 400);
  };

  render() {
    var { handleLeftNavCLick, handleRightNavClick } = this;
    var { currentOpacityClass, pageNum } = this.props;
    var oapcityClass=currentOpacityClass;
    if(pageNum != 2){
            oapcityClass="op-0";
    }

    return (
      <div className={"project-outer "+oapcityClass}>
        <div className="project-title wow fadeInUp" data-wow-delay="0.8s">
          Case Studies
        </div>
        <div className="line-pro wow slideInLeft"></div>
        <div className="subtitle-pro wow fadeInDown" data-wow-delay="0.6s">
          {" "}
          Because I love what I do and do what I love!
        </div>
        <div className="buttons">
          <div className="but" onClick={handleLeftNavCLick}>
            <i className="fa fa-angle-right fa-2x"></i>
          </div>
          <div className="but2" onClick={handleRightNavClick}>
            <i className="fa fa-angle-left fa-2x"></i>
          </div>
        </div>
        <div className="pro-outer wow fadeInUp" data-wow-delay="0.4s">
          <div className="pro-inner">
            <ul>
              <li className="inner-1 in">
                <div className="zoom zoom1">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv founch">
                  <img alt="" src={founch_logo} />
                </div>
              </li>

              <li className="inner-3 in">
                <div className="zoom zoom3">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv gmas">
                  <img alt="" src={gmas_logo} />
                </div>
              </li>
              <li className="inner-7 in">
                <div className="zoom zoom4">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv ym">
                  <img alt="" src={ym_logo} />
                </div>
              </li>
              <li className="inner-8 in">
                <div className="zoom zoom5">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv ki kilig">
                  <img alt="" src={z_logo} />
                </div>
              </li>
              <li className="inner-2 in">
                <div className="zoom zoom2">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv hitit">
                  <img alt="" src={msg_logo} />
                </div>
              </li>
              <li className="inner-5 in">
                <div className="zoom zoom8">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv portfolio">
                  <img alt="" src={portfolio_logo} />
                </div>
              </li>
              <li className="inner-4 in">
                <div className="zoom zoom6">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv pmc">
                  <img alt="" src={pmc_logo} />
                </div>
              </li>
              <li className="inner-9 in">
                <div className="zoom zoom7">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv tap">
                  <img alt="" src={tap_logo} />
                </div>
              </li>
              <li className="inner-10 in">
                <div className="zoom zoom8">
                  <img alt="" src={zoom} />
                </div>
                <div className="indiv fjs">
                  <img alt="" src={floatjsLogo} />
                  <p className="fjsCenter">Float Js</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="row wow fadeInDown " data-wow-delay="0.7s">
          <div className="left-text col-xs-5  col-xs-offset-1">
            6+<span className="spanit">Projects</span>
          </div>
          <div className="right-text col-xs-5">
            3 <span> Year Experience</span>
          </div>
        </div>
      </div>
    );
  }
}
