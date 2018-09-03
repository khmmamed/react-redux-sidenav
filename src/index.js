import React from "react";
import ReactDOM from "react-dom";

import SideNav from "./Redux/Containers";

import rootReducer from "./Redux/Reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Nav, { NavIcon, NavText } from "./Components/Nav";
import SvgIcon from "react-icons-kit";
import { ic_aspect_ratio } from "react-icons-kit/md/ic_aspect_ratio";
import { ic_business } from "react-icons-kit/md/ic_business";
import { ic_business_center } from "react-icons-kit/md/ic_business_center";
import { ic_format_list_bulleted } from "react-icons-kit/md/ic_format_list_bulleted";
import { ic_people } from "react-icons-kit/md/ic_people";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon} />;

function App() {
  return (
    <SideNav highlightBgColor="#00bcd4">
      <Nav parent=" Dashboard ">
        <NavIcon>
          <Icon20 icon={ic_aspect_ratio} />
        </NavIcon>
        <NavText> Dashboard </NavText>
        <Nav>
          <NavIcon>
            <Icon20 icon={ic_format_list_bulleted} />
          </NavIcon>
          <NavText>Profile </NavText>
        </Nav>
        <Nav>
          <NavText>Setting </NavText>
        </Nav>
        <Nav>
          <NavText>Params </NavText>
        </Nav>
      </Nav>
      <Nav>
        <NavIcon>
          <Icon20 icon={ic_shopping_cart} />
        </NavIcon>
        <NavText> eLabs </NavText>
      </Nav>
      <Nav>
        <NavIcon>
          <Icon20 icon={ic_business_center} />{" "}
        </NavIcon>
        <NavText> eClinics </NavText>
      </Nav>
    </SideNav>
  );
}

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
//Store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
