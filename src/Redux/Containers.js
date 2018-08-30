import { connect } from "react-redux";
import SideNav from "../Components/SideNav";
import { expandCollapseSideNav } from "./Actions";

//Map Redux state to Component props
function mapStateToProps(state) {
  return {
    isExpanded: state.isExpanded
  };
}

//Map Redux reducers to comp props
function mapDispatchToProps(dispatch) {
  return {
    clickToExpand: () => dispatch(expandCollapseSideNav)
  };
}

//connected Component
export const ExpandCollapse = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);
