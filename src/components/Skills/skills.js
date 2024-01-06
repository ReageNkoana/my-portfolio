import React from 'react'; 
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle"> What I do</span>
        <span className="skillDesc"> I am a skilled and passionate Computer Science student with experience in creating software programs and visually appealing and user friendly websites. I have a strong understanding of design ,I am a problem solver and I have a keen eye for detail. I am proficient in HTML, CSS, Javascript, Java, C++, C#, Python,Delphi, Visual Basic, as well as design software such as Adobe Photoshop and Capcut.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img className="skillBarImg" src={UIDesign} alt="UIDesign"/>
            <div className="skillBarText">

              <h2>UI/IX Design</h2>
              <p>demo text</p>

            </div>
          </div>
          <div className="skillBar">
            <img className="skillBarImg" src={WebDesign} alt="WebDesign"/>
            <div className="skillBarText">

              <h2>Website Design</h2>
              <p>Demo Text</p>
              
            </div>
          </div>
          <div className="skillBar">
            <img className="skillBarImg" src={AppDesign} alt="AppDesign"/>
            <div className="skillBarText">

              <h2>App Design</h2>
              <p>Demo Text</p>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills