import React from "react";

import "./PopupWindow.scss";

const PopupWindow = ({children, loginPopupIsToggle, registerPopupIsToggle}) => {
  const className = loginPopupIsToggle || registerPopupIsToggle ? "popup-window" : "popup-window popup-window--hidden";
  return <div className={className}>{children}</div>;
};

export default PopupWindow;
