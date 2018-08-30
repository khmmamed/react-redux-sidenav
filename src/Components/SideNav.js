import React, { Component, Children } from "react";
import styled from "styled-components";

const Sidenav = styled.div`
	
	position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1006;
    min-width: ${props => (props.expanded ? "240px" : "64px")};
    background: #db3d44;
    transition: min-width .15s;
`;

class SideNav extends Component {
  render() {
    const { children, isExpanded, clickToExpand } = this.props;

    return (
      <Sidenav expanded={isExpanded}>
        <button onClick={clickToExpand}>Expand</button>

        {Children.toArray(children).map(child => {
          return child;
        })}
      </Sidenav>
    );
  }
}

export default SideNav;
