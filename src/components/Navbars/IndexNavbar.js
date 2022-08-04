import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="warning">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="./#/index"
              target="_blank"
              id="navbar-brand"
              style={{"font-size": "18px"}}
            >
              Home
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              GISSO Home Page
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                  style={{"font-size": "18px"}}
                >
                  {/* <i className="fa fa-caret-down fa-2x"></i> */}
                  <p >Menu</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="./#/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    About us!
                  </DropdownItem>
                  <DropdownItem
                    href="https://sites.google.com/a/umn.edu/gisso/calendar?authuser=0"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Calendar
                  </DropdownItem>
                  <DropdownItem
                    href="https://sites.google.com/a/umn.edu/gisso/gis-day?authuser=0"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    GIS Day
                  </DropdownItem>
                  <DropdownItem
                    href="https://sites.google.com/a/umn.edu/gisso/fair?authuser=0"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    GIS Networking & Career Fair
                  </DropdownItem>
                  <DropdownItem
                    href="https://sites.google.com/a/umn.edu/gisso/resources?authuser=0"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Resources
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                  style={{"font-size": "18px"}}
                >
                  {/* <i className="fa fa-caret-down fa-2x"></i> */}
                  <p>News</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="https://sites.google.com/a/umn.edu/gisso/news/working-group?authuser=0" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36 mr-1"></i>
                    Working Group
                  </DropdownItem>
                  <DropdownItem
                    href="https://sites.google.com/a/umn.edu/gisso/news/2022-career-fair?authuser=0"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    2022 Career Fair
                  </DropdownItem>
                  <DropdownItem
                    href="https://sites.google.com/a/umn.edu/gisso/news/spring-2022-kick-off-meeting?authuser=0"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67 mr-1"></i>
                    Spring 2022 Kick-off Meeting
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink
                  href="https://www.facebook.com/groups/gissoumn"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square fa-2x"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Join us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/gissoumn"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="mailto:gisso@umn.edu"
                  target="_blank"
                  id="email-tooltip"
                >
                  <i className="fa fa-envelope fa-2x"></i>
                  <p className="d-lg-none d-xl-none">Email</p>
                </NavLink>
                <UncontrolledTooltip target="#email-tooltip">
                  Email Us
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
