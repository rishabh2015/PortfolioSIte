import React from "react";
import gmas_small_logo from "../../../assets/images/gmas-logo-small.png";
import pmc_small_logo from "../../../assets/images/pmc-logo-small.png";
import logo_f from "../../../assets/images/logo-f.png";
import ub_logo from "../../../assets/images/ub-logo.png";
import fm_logo from "../../../assets/images/fm-logo.png";
import pinnacle_logo from "../../../assets/images/pinnacle-logo.png";
import im_logo from "../../../assets/images/im-logo.png";
import yatra from "../../../assets/images/yatra.jpg";
import paytm from "../../../assets/images/Paytm_Logo.png";
import naukriLogo from "../../../assets/images/naukriLogo.jpg";
import "../../../assets/styles/pages/experiences.css";
import toatImage from "../../../assets/images/toatImage.jpg";

var $ = window.$;
export default class ExperienceComponent extends React.Component {
  handleArrowUp = () => {
    $(".left-exp").animate({ scrollTop: "-=80" }, 200);
  };

  handleArrowDown = () => {
    $(".left-exp").animate({ scrollTop: "+=80" }, 200);
  };

  render() {
    var { handleArrowDown, handleArrowUp } = this;
    var { currentOpacityClass, pageNum } = this.props;
        var opacityClass = currentOpacityClass;
        if(pageNum != 3){
            opacityClass="op-0";
        }
    return (
      <div className={"experience-outer "+opacityClass}>
        <div
          className="project-title wow fadeInUp vis-show anim-fadeInUp anim-delay-8"
          data-wow-delay="0.8s"
        >
          Experience
        </div>
        <div className="line-exp wow slideInLeft anim-slideInLeft vis-show"></div>
        <div
          className="subtitle-pro subtitle-exp wow fadeInDown vis-show anim-fadeInDown anim-delay-6"
          data-wow-delay="0.6s"
        >
          {" "}
          Because it proves me!
        </div>

        <div className="row">
          <div className="left-exp-outer col-xs-12 col-sm-6  wow fadeInUp">
            <div className="arrow-up" onClick={handleArrowUp}>
            <i className="fa fa-angle-up fa-2x"></i>
            </div>
            <div className="arrow-down" onClick={handleArrowDown}>
              <i className="fa fa-angle-down fa-2x"></i>
            </div>
            <div className="left-exp col-xs-12">
              <div className="left-exp-in">
              <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Dec-2018 - Dec -2023
                    <br /> 
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card pinnacle-card col-xs-7 col-md-8">
                    <div className="card-cover pinnacle-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img pinnacle-card-img mt-15">
                        <img alt="" src={naukriLogo}  className="wt-96"/>
                      </div>
                      <div className="gmas-card-content col-xs-9">
                        Naukri
                        <br />
                        <span>Lead Engineer/Tech Lead/Engineering Manager </span>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Nov-2017 - Dec-2018
                    <br /> 
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card pinnacle-card col-xs-7 col-md-8">
                    <div className="card-cover pinnacle-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img pinnacle-card-img mt-15">
                        <img alt="" src={yatra}  className="wt-96"/>
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        Yatra
                        <br />
                        <span>Senior Software Engineer </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Nov-2016 - Dec-2017
                    <br /> 
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card pinnacle-card col-xs-7 col-md-8">
                    <div className="card-cover pinnacle-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img pinnacle-card-img mt-15">
                        <img alt="" src={paytm}  className="wt-96"/>
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        Paytm
                        <br />
                        <span>Senior Software Engineer </span>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Jun 2015 - Oct-2016
                    <br /> 
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card pinnacle-card col-xs-7 col-md-8">
                    <div className="card-cover pinnacle-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img pinnacle-card-img mt-15">
                        <img alt="" src={im_logo}  className="wt-96"/>
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        Indiamart
                        <br />
                        <span>Software Developer </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Jun-2016 - Present
                    <br /> 
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card pinnacle-card col-xs-7 col-md-8">
                    <div className="card-cover pinnacle-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img pinnacle-card-img mt-15">
                        <img alt="" src={toatImage}  className="wt-96"/>
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        Toat: Customised TShirt Platform
                        <br />
                        <span>Founder </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Dec-Jan
                    <br /> 2016
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card col-xs-7 col-md-8">
                    <div className="card-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img ">
                        <img alt="" src={gmas_small_logo} />
                      </div>
                      <div className="gmas-card-content col-xs-6">
                        GetMeAShop (TIL)
                        <br />
                        <span>FullStack  Intern</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Nov-Dec
                    <br /> 2015
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card pmc-card col-xs-7 col-md-8">
                    <div className="card-cover pmc-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img pmc-card-img ">
                        <img alt="" src={pmc_small_logo} />
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        PrepMyCar
                        <br />
                        <span>FullStack Freelancer </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Jun-July
                    <br /> 2015
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card founch-card col-xs-7 col-md-8">
                    <div className="card-cover founch-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img founch-card-img">
                        <img alt="" src={logo_f} />
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        Founch (TLABS)
                        <br />
                        <span>FullStack Intern</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Feb-March
                    <br /> 2015
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card ub-card col-xs-7 col-md-8">
                    <div className="card-cover ub-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img ub-card-img ">
                        <img alt="" src={ub_logo} />
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        Urbanbinge
                        <br />
                        <span>FullStack Intern</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Nov-Dec
                    <br /> 2014
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card fm-card col-xs-7 col-md-8">
                    <div className="card-cover fm-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img fm-card-img ">
                        <img alt="" src={fm_logo} />
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        Fratmart
                        <br />
                        <span>JS Intern</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gmas-exp row">
                  <div className="gmas-date subtitle-date col-xs-3 col-md-3">
                    Jun-July
                    <br /> 2014
                  </div>
                  <div className="dot-line col-xs-1">
                    <div className="time-circle">
                      <div className="time-circle-small"> </div>
                    </div>
                    <div className="timeline"></div>
                  </div>
                  <div className="gmas-card pinnacle-card col-xs-7 col-md-8">
                    <div className="card-cover pinnacle-cover"></div>
                    <div className="row">
                      <div className="gmas-card-img pinnacle-card-img ">
                        <img alt="" src={pinnacle_logo} />
                      </div>
                      <div className="gmas-card-content col-xs-7">
                        Pinnacle Works
                        <br />
                        <span>Web Trainee </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="exp-last exp-last-mod row">
                  That's all folks!
                </div>
              </div>
            </div>
          </div>
          <div
            className="exp-cont col-xs-12 col-md-6  wow fadeInLeft vis-show anim-delay-4 anim-fadeInLeft"
            data-wow-delay="0.4s"
          >
            It's just a beginning!
            <br /> A long way to go...
          </div>
        </div>
      </div>
    );
  }
}
