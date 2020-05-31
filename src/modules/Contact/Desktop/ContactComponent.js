import React, { Component } from "react";

export default class ContactComponent extends Component {
  render() {
    var { currentOpacityClass, pageNum } = this.props;
    var opacityClass = currentOpacityClass;
    if(pageNum != 6){
        opacityClass="op-0";
    }
    return (
      <div className={"contact-outer "+opacityClass}>
        <div className="back-image-contact"> </div>

        <div
          className="project-title wow fadeInUp"
          data-wow-delay="0.8s"
         
        >
          Contact Me!
        </div>
        <div
          className="line-exp line-contact  wow slideInLeft"
          ></div>
        <div
          className="subtitle-pro  subtitle-contact wow fadeInDown"
          data-wow-delay="0.6s"
          >
          {" "}
          Let's have a talk!
        </div>

        <div
          className="container-form wow fadeInUp"
          >
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="loader-text" >
                Sending...
              </div>
              <form method="POST"  action="" id="contact-form">
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="vL1ETNQFN9xLYHeZe7F0mZmpowMS0CwG"
                />

                <input type="text" placeholder="Name*" id="name" required="" />
                <input
                  type="email"
                  placeholder="Email*"
                  id="email"
                  required=""
                />
                <textarea
                  placeholder="Message* "
                  id="msg"
                  required=""
                ></textarea>
                <br />
                <input type="submit" disabled={true} className="submit" id="submit_btn" />
                <div className="warn-msg" >
                  Please fill all the entries
                </div>
                <br />
              </form>

              {/* <a className="resume-link" href="#resume-link" target="_blank">
                <div className="resume">View Resume</div>
              </a> */}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="links-contact">
                <p
                  className="wow fadeInUp"
                 >
                  A little bit more about me!
                  <br />
                  <br />
                  I'm a great lover of minimalism and love to give them a life
                  by developing them. I do coding and have a good design sense.
                  Pixel perfect things is my rule and I follow it strictly.
                  <br />
                  <br /> Think! Design! Develop!
                  <br />
                </p>
                <div className="conts col-xs-12 ">
                  <i className="fa fa-envelope"></i>rishabh.jn141@gmail.com
                  <br />
                  <i className="fa fa-mobile"></i>+91 9990897726
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
