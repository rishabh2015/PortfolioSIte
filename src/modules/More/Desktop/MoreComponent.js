import React, { Component } from 'react';
import me_car from "../../../assets/images/me-car.jpeg";
import "../../../assets/styles/pages/contact.css";


export default class MoreComponent extends Component{
    render(){
        var { currentOpacityClass, pageNum } = this.props;
        var opacityClass = currentOpacityClass;
        if(pageNum != 5){
            opacityClass="op-0";
        }
        return(
        <div className={" recom-outer "+ opacityClass} >
        <div className="project-title recom-title wow fadeInUp" data-wow-delay="0.8s" >Things around me.</div>
        <div className="line-exp line-recom  wow slideInLeft" ></div>
        <div className="subtitle-pro  subtitle-recom wow fadeInDown" data-wow-delay="0.6s" >That's complete my second site!</div>
        <div className="me-car">
            <img src={me_car} />
        </div>

        <div className="row">
            <div className="recom-cont">

                <div className="col-xs-6  col-xs-offset-5">
                    <div className="recom-more wow fadeInLeft" data-wow-delay="0.6s" >
                        <h3>more...</h3>
                        <h2>Developer Head of Nibble Computer Society </h2>
                        <h2>Founder at Toat fashion</h2>
                        <h2>I love travelling new places and shoot them out</h2>
                        <h2> And I love playing Guitar and photography  too</h2>
                    </div>
                </div>
            </div>


        </div>
    </div>);
    }
}