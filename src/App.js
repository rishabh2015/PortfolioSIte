import React, { Component } from "react";
import MainComponent from "./modules/Main/Desktop/MainComponent";
import MainMobileComponent from "./modules/Main/Mobile/MainComponent";

export default class App extends Component {
  

  componentDidMount() {
    if(window.screen.width <= 780){
    document.body.classList.add("mobile");
    }
  }

  render() {
    return (
      <div>
       {window.screen.width > 780 ? <MainComponent />: <MainMobileComponent />}
      </div>
    );
  }
}
