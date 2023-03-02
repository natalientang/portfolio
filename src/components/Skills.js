import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills;
      var languageSkills = skills.languages.map(function (skill, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile mb-5">
                <i className={skill.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center skills-styles"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skill.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var frontendSkills = skills.front_end.map(function (skill, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile mb-5">
                <i className={skill.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center skills-styles"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skill.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var backendSkills = skills.back_end.map(function (skill, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile mb-5">
                <i className={skill.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center skills-styles"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skill.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      var toolSkills = skills.tools.map(function (skill, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile mb-5">
                <i className={skill.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center skills-styles"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skill.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>Skills</span>
          </h1>
          </div>
          <div className="text-center">
            <h2 className="skill-category-title">Languages</h2>
            <ul className="list-inline mx-auto skill-icon">{languageSkills}</ul>
          </div>
          <div className="text-center">
            <h2 className="skill-category-title">Frontend</h2>
            <ul className="list-inline mx-auto skill-icon">{frontendSkills}</ul>
          </div>
          <div className="text-center">
            <h2 className="skill-category-title">Backend</h2>
            <ul className="list-inline mx-auto skill-icon">{backendSkills}</ul>
          </div>
          <div className="text-center">
            <h2 className="skill-category-title">Tools</h2>
            <ul className="list-inline mx-auto skill-icon">{toolSkills}</ul>
          </div>
        </div>
      </section>
       );
      }
    }

export default Skills;
