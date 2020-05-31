import React, { Component } from "react";

export default class ContactComponent extends Component {
  render() {
    
    return (
      <div className=" mob-contact " id="mob-contact" >
		<div className="contact-head ">
			<span className="wow fadeInUp" data-wow-delay="0.2s" >Contact</span>
		</div>
		<div className=" contact-cont" >
			<span className="wow fadeInDown top top-contact" data-wow-delay="0.2s" >
Let's have a talk!</span>

			<div className="container-form ">
				<div className="row">
					<div className="col-xs-12 col-md-6">
						<div className="loader-text">Sending...</div>
						<form method="POST" action="" id="contact-form"><input type="hidden" name="csrfmiddlewaretoken" value="AlPEna5STXcT5yMokXcBeYoGfrBQWM1K"/>

							<input type="text" placeholder="Name*" id="name" className="wow fadeInDown" data-wow-delay="0.2s" required="" />
							<input type="email" placeholder="Email*" id="email" className="wow fadeInDown" required="" data-wow-delay="0.3s" />
							<textarea placeholder="Message* " id="msg" className="wow fadeInDown" data-wow-delay="0.4s" required="" ></textarea>
							<br />
							<div>
								<input type="submit" disabled={true} className="submit wow fadeInDown" data-wow-delay="0.5s" id="submit_btn" />
							</div>
							<div className="warn-msg wow fadeInDown" data-wow-delay="0.6s" >
								Please fill out all the enteries!
							</div>
							<br />

						</form>


						{/* <a className="resume-link" href="/static/images/resume.pdf" target="_blank">
							<div className="resume wow fadeInDown" data-wow-delay="0.7s" >Resume</div>
						</a> */}
					</div>

				</div>
			</div>





			<span className="wow fadeInDown last last-skills last-contact wow fadeInDown" data-wow-delay="0.8s" >
Feel the difference on <i className="fa fa-desktop"></i></span>
		</div>
	</div>
          );
  }
}
