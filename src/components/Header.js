import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header id="home">
        <Navbar className="navbar" fixed="top" style={{ zIndex: 1000 }}>
          <Navbar.Brand>
            <Switch
              checked={this.state.checked}
              onChange={this.onThemeSwitchChange}
              offColor="#f0ede8"
              onColor="#353535"
              className="react-switch mx-auto"
              width={60}
              height={25}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="ri:moon-clear-fill"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 20,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="ph:sun-fill"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 20,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "white",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </Navbar.Brand>

          <Nav className="ml-auto" style={{ fontSize: "14px" }}>
            <Link
              to="about"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              About Me
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Skills
            </Link>
            <Link
              to="resume"
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Experience
            </Link>
          </Nav>
        </Navbar>
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <img src={require("../images/memoji.png")} width="300px" />
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
            </div>
          </div>
        </div>
        <img
          src={require("../images/totoro-walk.gif")}
          className="moving-gif"
        />
      </header>
    );
  }
}

export default Header;
