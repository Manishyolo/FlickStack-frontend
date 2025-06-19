import React from "react";
import { useState } from "react";

const useNavbarState = () => {
  const [ShowExploreDropdown, setExploreShowDropDown] = useState(false);
  const [ShowDropDown, SetShowDropDown] = useState(false);
  const [ShowSearchPanel, SetSearchPanel] = useState(false);
  const [NotificationDropdown, setNotificationDropdown] = useState(false);
  const [formatDropdownShow, setformatDropdownShow] = useState(false);
  const [format, setformat] = useState("Photos");

  const formatHandler = (e) => {
    let format = e.target.innerText;

    setformat(format);
  };

  return {
    ShowExploreDropdown,
    setExploreShowDropDown,
    ShowDropDown,
    SetShowDropDown,
    ShowSearchPanel,
    SetSearchPanel,
    NotificationDropdown,
    setNotificationDropdown,
    formatDropdownShow,
    setformatDropdownShow,
    format,
    formatHandler
  };
};

export default useNavbarState;
