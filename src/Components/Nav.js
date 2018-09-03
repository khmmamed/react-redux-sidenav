import React, { Children, Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { extendSubNav } from "../Redux/Actions";

const NavItemStyled = styled.div`
     padding: 8px 12px;
     cursor: pointer;
     position: relative;
     background: ${props =>
       props.isHighlighted ? props.highlightBgColor : "inherit"};
     color: ${props =>
       props.isHighlighted ? props.highlightColor : "inherit"};
     &:hover {
        color: ${props =>
          props.hoverColor || props.highlightColor || "inherit"} !important;
        background: ${props =>
          props.hoverBgColor || props.highlightBgColor || "inherit"} !important;
     }
`;

export const NavIcon = () => {
  throw new Error("Should not render");
};
export const NavText = () => {
  throw new Error("Should not render");
};

const findComponent = ComponentToFind => children => {
  return Children.toArray(children).reduce((found, next) => {
    if (found === null && next !== null && next.type === ComponentToFind) {
      return next;
    }
    return found;
  }, null);
};

const findIcon = findComponent(NavIcon);
const findText = findComponent(NavText);

const NavIconCont = styled.div`
    vertical-align: middle;
    display: inline-flex;
    width: 42px;
`;

const NavTextCont = styled.div`
    vertical-align: middle;
    display: inline-flex;
    padding-right: 16px;
`;
const hasChildNav = children => {
  return Children.toArray(children).reduce((partial, next) => {
    return partial === false ? next.type === Nav : partial;
  }, false);
};

const CollapsedIndicator = styled.div`
    &:before {
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        content: '';
        display: inline-block;
        height: ${props => (props.size ? props.size : "0.25em")};
        left: 0;
        position: relative;
        top: 0.15em;
        transform: rotate(${props => (!props.collapsed ? "135deg" : "45deg")});
        vertical-align: top;
        width: ${props => (props.size ? props.size : "0.25em")};
    }
`;

class Nav extends Component {
  render() {
    const { children, extendNavItems, isExtendToSubNav, parent } = this.props;
    const icon = findIcon(children);
    const text = findText(children);

    console.log(isExtendToSubNav + "  " + parent);
    return (
      <div>
        <NavItemStyled
          highlightBgColor="#00bcd4"
          onClick={(e, data) => {
            console.log(e.target.innerHTML);
            console.log(data);
            extendNavItems(e.target.innerHTML, parent);
          }}
        >
          <NavIconCont>
            {icon && icon.props ? icon.props.children : null}
          </NavIconCont>
          <NavTextCont>
            {text && text.props ? text.props.children : null}
          </NavTextCont>

          {hasChildNav(children) ? (
            <div
              style={{
                position: "absolute",
                right: "16px",
                bottom: "4px"
              }}
            >
              {<CollapsedIndicator collapsed={isExtendToSubNav} />}{" "}
            </div>
          ) : null}
        </NavItemStyled>
        <div
          style={{
            marginLeft: 10
          }}
        >
          {Children.toArray(children)
            .filter(child => child.type === Nav && !isExtendToSubNav)
            .map((child, idx) => {
              const sicon = findIcon(child.props.children);
              const stext = findText(child.props.children);
              return (
                <NavItemStyled>
                  <NavIconCont>
                    {sicon ? sicon.props.children : null}
                  </NavIconCont>
                  <NavTextCont>
                    {stext ? stext.props.children : null}
                  </NavTextCont>
                </NavItemStyled>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Nav;
