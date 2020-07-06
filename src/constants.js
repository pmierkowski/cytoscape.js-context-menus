export const DEFAULT_OPTS = {
    // Customize event to bring up the context menu
    // Possible options https://js.cytoscape.org/#events/user-input-device-events
    evtType: 'cxttap',
    // List of initial menu items
    menuItems: [
      /*
      {
        id: 'remove',
        content: 'remove',
        tooltipText: 'remove',
        selector: 'node, edge',
        onClickFunction: function () {
          console.log('remove element');
        },
        hasTrailingDivider: true
      },
      {
        id: 'hide',
        content: 'hide',
        tooltipText: 'remove',
        selector: 'node, edge',
        onClickFunction: function () {
          console.log('hide element');
        },
        disabled: true
      }*/
    ],
    // css classes that menu items will have
    menuItemClasses: [
      // add class names to this list
    ],
    // css classes that context menu will have
    contextMenuClasses: [
      // add class names to this list
    ]
};

export const MENUITEM_CSS_CLASS = 'cy-context-menus-cxt-menuitem';
export const DIVIDER_CSS_CLASS = 'cy-context-menus-divider';