import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/profile_pic_name.png";

const descListItems = [
  "Applying for internships", 
  "Avid Gaming - Discord: Mikol#6138",
  "Music - Rap/Hip-Hop/Alt-Pop/Rock",
  "Accounting for half of StackOverflow traffic"
];
const descList = descListItems.map(item => {
  return (<li>{item}</li>)
})

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src={profilePic}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Michael Reynolds</div>
              <div className="brief_description">
                {"Software Engineer || Student @ SNHU || IBM Enthusiast"}
              
                <ul className="descList">
                  <div id="descListBreak">
                    {<hr/>}
                  </div>
                    {descList}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}