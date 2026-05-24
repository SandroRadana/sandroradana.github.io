import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import sayaIdoImage from "../../assets/images/SAYA I DO.png";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main skills-section" : "main skills-section"} id="skills">
      <Fade bottom duration={900} distance="24px">
        <div className="skills-panel">
          <div className="skills-visual-card">
            <img alt="Professional communication illustration" src={sayaIdoImage}></img>
            <div className="skills-visual-caption">
              <span>Communication Portfolio</span>
              <strong>PR • Event • Content</strong>
            </div>
          </div>

          <div className="skills-content-card">
            <p className="section-eyebrow">Professional Focus</p>
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>

            <SoftwareSkill />

            <div className="skills-action-grid">
              {skillsSection.skills.map((skills, i) => {
                return (
                  <div key={i} className="skills-action-card">
                    <span className="skills-action-number">0{i + 1}</span>
                    <p
                      className={
                        isDark
                          ? "dark-mode subTitle skills-text"
                          : "subTitle skills-text"
                      }
                    >
                      {skills}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
