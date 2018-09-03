export const expandCollapseSideNav = { type: "EXPAND_COLLAPSE_SIDENAV" };
export const isCollapsedNav = { type: "COLLAPSE_NAV_ITEM" };

export const extendSubNav = (id, parent) => {
  return { type: "COLLAPSE_NAV_ITEM", id, parent };
};
