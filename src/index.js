import React from "react";
import ReactDOM from "react-dom";
import { ExpandCollapse } from "./Redux/Containers";
import { onExpandCollapse } from "./Redux/Reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Nav, { NavIcon, NavText } from "./Components/Nav";

import "./styles.css";

function App() {
  return (
    <ExpandCollapse highlightBgColor="#00bcd4">
      <Nav>
        <NavIcon> </NavIcon>
        <NavText> Dashboard </NavText>
        <Nav>Profile </Nav>
        <Nav> Setting </Nav>
        <Nav> Params </Nav>
      </Nav>
      <Nav>
        <NavIcon> </NavIcon>
        <NavText> eLabs </NavText>
      </Nav>
      <Nav>
        <NavIcon> </NavIcon>
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
