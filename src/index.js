import React from "react";
import ReactDOM from "react-dom";
import { ExpandCollapse } from "./Redux/Containers";
import { onExpandCollapse } from "./Redux/Reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Nav, { NavIcon, NavText } from "./Components/Nav";
import SvgIcon from 'react-icons-kit';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { ic_business_center } from 'react-icons-kit/md/ic_business_center';
import { ic_format_list_bulleted } from 'react-icons-kit/md/ic_format_list_bulleted';
import { ic_people } from 'react-icons-kit/md/ic_people';
import { ic_shopping_cart } from 'react-icons-kit/md/ic_shopping_cart';
const Icon20 = props => <SvgIcon size={props.size || 50} icon={props.icon} />;

function App() {
  return (
    <ExpandCollapse highlightBgColor="#00bcd4">
      <Nav>
        <NavIcon><Icon20 icon={ic_aspect_ratio} /></NavIcon>
        <NavText> Dashboard </NavText>
        <Nav>Profile </Nav>
        <Nav> Setting </Nav>
        <Nav> Params </Nav>
      </Nav>
      <Nav>
        <NavIcon><Icon20 icon={ic_people}/> </NavIcon>
        <NavText> eLabs </NavText>
      </Nav>
      <Nav>
        <NavIcon><Icon20 icon={ic_business_center}/> </NavIcon>
        <NavText> eClinics </NavText>
      </Nav>
    </ExpandCollapse>
  );
}

//Store
const store = createStore(onExpandCollapse);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
