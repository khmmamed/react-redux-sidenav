//Reducers
export function onExpandCollapse(state = { isExpanded: false }, action) {
  const { isExpanded } = state;

  switch (action.type) {
    case "EXPAND_COLLAPSE_SIDENAV":
      return { isExpanded: !isExpanded };
    default:
      return state;
  }
}
