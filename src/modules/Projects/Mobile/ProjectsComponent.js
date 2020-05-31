import React, { Component } from "react";
import zoom from "../../../assets/images/zoom.png";
import zeosmallLogo from "../../../assets/images/zeo-small-logo.png";
import founcLogoSmall from "../../../assets/images/founch-logo-small.png";
import msgupLogo from "../../../assets/images/msgup-logo.png";
import gmasLogo  from "../../../assets/images/gmas-logo-small.png";
import ymLogo  from "../../../assets/images/logo-ym.png";
import pmcLogoSmall  from "../../../assets/images/pmc-logo-small.png";
import ecLogoBig from "../../../assets/images/logo-ec-big.png";
import logoImg from "../../../assets/images/logo.png";



export default class ProjectComponent extends Component{

  render() {

    return (
      <div id="mob-project" className="mob-project " >
		<div className="project-head">
			<span className="wow fadeInUp" data-wow-delay="0.2s" >Case Studies</span>
		</div>
		<div className="project-cont" >
			<span className="wow fadeInDown top" data-wow-delay="0.2s" >
Because I love what I do &  do what I love!</span>
			<div className="wow fadeInDown project-card" data-wow-delay="0.2s" >
				<div className="zeo-overlay zeo ">

				</div>
				<div className="zeo-over-logo">
					<img alt="" src={zeosmallLogo}/>
				</div>
				<div className="zeo-text">
					<h3>Zeometree <img alt="" src={zoom}/></h3>Full Stack Role
				</div>

			</div>


			<div className="wow fadeInDown project-card" data-wow-delay="0.3s" >
				<div className="f-overlay founch ">

				</div>
				<div className="zeo-over-logo">
					<img alt="" src={founcLogoSmall}/>
				</div>
				<div className="zeo-text">
					<h3>Founch <img alt="" src={zoom}/></h3>Full Stack Role
				</div>

			</div>
			<div className="wow fadeInDown project-card" data-wow-delay="0.4s">

				<div className="msgup-overlay msgup ">

				</div>
				<div className="zeo-over-logo msg-over-logo">
					<img alt="" src={msgupLogo}/>
				</div>
				<div className="zeo-text">
					<h3>MessageUp.js <img alt="" src={zoom}/></h3>Javacript library
				</div>
			</div>
			<div className="wow fadeInDown project-card" data-wow-delay="0.5s" >
				<div className="msgup-overlay gmas ">

				</div>
				<div className="zeo-over-logo gmas-over-logo">
					<img alt="" src={gmasLogo} />
				</div>
				<div className="zeo-text">
					<h3>GetMeAShop <img alt="" src={zoom}/></h3>Full Stack Role
				</div>
			</div>
			<div className="wow fadeInDown project-card" data-wow-delay="0.6s" >
				<div className="msgup-overlay ym ">

				</div>
				<div className="zeo-over-logo ym-over-logo">
					<img alt="" src={ymLogo}/>
				</div>
				<div className="zeo-text">
					<h3>Yemmy Maids <img alt="" src={zoom}/></h3>Full Stack Role
				</div>
			</div>
			<div className="wow fadeInDown project-card" data-wow-delay="0.7s" >
				<div className="msgup-overlay pmc ">

				</div>
				<div className="zeo-over-logo pmc-over-logo">
					<img alt="" src={pmcLogoSmall}/>
				</div>
				<div className="zeo-text">
					<h3>PrepMyCar<img alt="" src={zoom}/></h3>Full Stack Role
				</div>
			</div>
			<div className="wow fadeInDown project-card" data-wow-delay="0.8s" >
				<div className="msgup-overlay ec ">

				</div>
				<div className="zeo-over-logo ec-over-logo">
					<img alt="" src={ecLogoBig}/>
				</div>
				<div className="zeo-text">
					<h3>Ecommerce<img alt="" src={zoom}/></h3>Full Stack Role
				</div>

			</div>
			<div className="wow fadeInDown project-card" data-wow-delay="0.9s" >
				<div className="msgup-overlay portfolio ">

				</div>
				<div className="zeo-over-logo portfolio-over-logo">
					<img alt="" src={logoImg}/>
				</div>
				<div className="zeo-text">
					<h3>Portfolio<img alt="" src={zoom}/></h3>Full Stack Role
				</div>
			</div>
			<span className="wow fadeInDown last" data-wow-delay="0.2s" >
More Coming Soon!</span>
		</div>
	</div>
          );
  }
}

