import { connect } from "react-redux";
import SideNav from "../Components/SideNav";
import { expandCollapseSideNav, extendSubNav } from "./Actions";

//Map Redux state to Component props
function mapStateToProps(state) {
  return {
    isExpanded: state.isExpanded,
    isExtendToSubNav: state.isExtendedToSubNav
  };
}

//Map Redux reducers to comp props
function mapDispatchToProps(dispatch) {
  return {
    clickToExpand: () => dispatch(expandCollapseSideNav),
    extendNavItems: (id, parent) => dispatch(extendSubNav(id, parent))
  };
}

//connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);
