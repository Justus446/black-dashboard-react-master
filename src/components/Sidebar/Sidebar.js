/* eslint-disable */
import React, { useEffect,useState, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PerfectScrollbar from "perfect-scrollbar";
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import {
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

import {
  BackgroundColorContext,
  backgroundColors,
} from "contexts/BackgroundColorContext";

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = useRef(null);

  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };

  useEffect(() => {
    let ps;

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }

    return () => {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  }, []);

  const linkOnClick = () => {
    document.documentElement.classList.remove("nav-open");
  };

  const { routes,familyHealthRoutes,hiVProgramRoutes, rtlActive, logo } = props;
  let logoImg = null;
  let logoText = null;

  if (logo !== undefined) {
    if (logo.outterLink !== undefined) {
      logoImg = (
        <a
          href={logo.outterLink}
          className="simple-text logo-mini"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </a>
      );
      logoText = (
        <a
          href={logo.outterLink}
          className="simple-text logo-normal"
          target="_blank"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-mini"
          onClick={props.toggleSidebar}
        >
          <div className="logo-img">
            <img src={logo.imgSrc} alt="react-logo" />
          </div>
        </Link>
      );
      logoText = (
        <Link
          to={logo.innerLink}
          className="simple-text logo-normal"
          onClick={props.toggleSidebar}
        >
          {logo.text}
        </Link>
      );
    }
  }
  const [hiVProgramDropdownOpen, setHiVProgramDropdownOpen] = useState(false);

  const toggleHiVProgramDropdown = () => {
    setHiVProgramDropdownOpen(!hiVProgramDropdownOpen);
  };

  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <div className="sidebar" data={color}>
          <div className="sidebar-wrapper" ref={sidebarRef}>
            {logoImg !== null || logoText !== null ? (
              <div className="logo">
                {logoImg}
                {logoText}
              </div>
            ) : null}
            <Nav>
              {familyHealthRoutes.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                  <li
                    className={
                      activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      onClick={props.toggleSidebar}
                    >
                      <i className={prop.icon} />
                      <p>{rtlActive ? prop.rtlName : prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}

            </Nav>
            <hr></hr>
            <Nav>
              {routes.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                  <li
                    className={
                      activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      onClick={props.toggleSidebar}
                    >
                      <i className={prop.icon} />
                      <p>{rtlActive ? prop.rtlName : prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}

            </Nav>
            <hr></hr>
            <Nav>
            {hiVProgramRoutes.length > 0 ? (
                <Dropdown isOpen={hiVProgramDropdownOpen} toggle={toggleHiVProgramDropdown}>
                  <DropdownToggle caret 
                    color="dark">
                    HIV Program
                  </DropdownToggle>
                  <DropdownMenu dark>
                    {hiVProgramRoutes.map((route, index) => (
                      <DropdownItem
                      className={
                        activeRoute(route.path) + (route.pro ? " active-pro" : "")
                      }
                      key={index}
                      >
                    <NavLink
                      to={route.layout + route.path}
                      className="nav-link"
                      onClick={routes.toggleSidebar}
                    >
                      <i className={route.icon} />
                      <p>{rtlActive ? route.rtlName : route.name}</p>
                    </NavLink>
            
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              ) : null}

            </Nav>
            <hr></hr>
            <Nav>
            <UncontrolledDropdown>
                <DropdownToggle
                  caret
                  color="dark"
                >
                  Primary
                </DropdownToggle>
                <DropdownMenu dark>
                  <DropdownItem header>
                    Header
                  </DropdownItem>
                  <DropdownItem>
                    Some Action
                  </DropdownItem>
                  <DropdownItem text>
                    Dropdown Item Text
                  </DropdownItem>
                  <DropdownItem disabled>
                    Action (disabled)
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Foo Action
                  </DropdownItem>
                  <DropdownItem>
                    Bar Action
                  </DropdownItem>
                  <DropdownItem>
                    Quo Action
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </div>
        </div>
      )}
    </BackgroundColorContext.Consumer>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    text: PropTypes.node,
    imgSrc: PropTypes.string,
  }),
  familyHealthRoutes: PropTypes.arrayOf(PropTypes.object),
  hiVProgramRoutes: PropTypes.arrayOf(PropTypes.object),
};

export default Sidebar;

