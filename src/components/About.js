import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid position-relative">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="210px"
                    width="200px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <h3 className="polaroid-about-me mt-3">Hello, I'm Nat! :)</h3>
                </span>
                <div className="tape-top">
                  <img
                    src={require("../images/grey-tape.png")}
                    className="position-absolute"
                    width="70px"
                    style={{ top: 35, left: 50 }}
                    alt="Tape"
                  />
                </div>
                <div className="tape-bottom">
                  <img
                    src={require("../images/grey-tape.png")}
                    className="position-absolute"
                    width="70px"
                    style={{ bottom: 10, right: 50 }}
                    alt="Tape"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div
                    className="card-body font-montserrat text-center ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    {about}
                  </div>
                </div>
                <div className="text-center mt-5">
                  <a href={require("../resume/NatalieTangResume.pdf")} download>
                    <button className="resume-button">Download Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
