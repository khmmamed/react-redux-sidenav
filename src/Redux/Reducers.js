//Reducers
import { combineReducers } from "redux";

const onExpandCollapse = (state = false, action) => {
  switch (action.type) {
    case "EXPAND_COLLAPSE_SIDENAV":
      return !state;
    default:
      return state;
  }
};

function onExtendToSubNav(state = true, action) {
  console.log(action.id + " -- " + action.parent);
  if (action.id === action.parent && action.type === "COLLAPSE_NAV_ITEM")
    return !state;
  else return state;
}

export default combineReducers({
  isExpanded: onExpandCollapse,
  isExtendedToSubNav: onExtendToSubNav
});
