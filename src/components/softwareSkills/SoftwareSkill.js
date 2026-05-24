import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="software-skills-main-div">
      <div className="competency-grid">
        {skillsSection.softwareSkills.map((skills, i) => {
          return (
            <div key={i} className="competency-chip" name={skills.skillName}>
              <i className={skills.fontAwesomeClassname}></i>
              <span>{skills.skillName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
