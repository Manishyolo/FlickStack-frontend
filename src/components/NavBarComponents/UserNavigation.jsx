import React from "react";
import NotificationDropdropdown from "../DropDownsComponents/NotificationDropdropdown.jsx";
import UserDropdropdown from "../DropDownsComponents/UserDropdropdown";
import BellIcon from "../../icons/BellIcon.jsx";
import ChatIcon from "../../icons/ChatIcon";

const UserNavigation = ({
  notificationDropdown,
  setNotificationDropdown,
  showDropDown,
  setShowDropdown,
}) => {
  return (
    <>
      <div className="user-navigation h-fit flex relative gap-[2vw] items-center justify-center">
        <ChatIcon size="text-[1.8vw]"></ChatIcon>
        <div
          className={`relative cursor-pointer ${
            notificationDropdown ? "bg-[#1E1C21] " : ""
          } p-[.9vw] rounded-full`}
          onMouseOver={() => setNotificationDropdown(true)}
          onMouseOut={() => setNotificationDropdown(false)}
        >
          <BellIcon size="text-[1.8vw] cursor-pointer"></BellIcon>
          <NotificationDropdropdown
            animateState={notificationDropdown}
          ></NotificationDropdropdown>
        </div>

        <div
          className="relative"
          onMouseOver={() => setShowDropdown(true)}
          onMouseOut={() => setShowDropdown(false)}
        >
          <div
            className={`absolute -inset-[5px] rounded-[1vw] blur-xl opacity-50 z-0
      
      ${
        showDropDown
          ? "bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-600 ease-in-out"
          : ""
      }
    `}
          ></div>
          <div className="w-[3.4vw] h-[3.4vw] cursor-pointer overflow-hidden relative rounded-[1vw] user-profile">
            <img
              src="https://avatars.githubusercontent.com/u/113233807?v=4"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <UserDropdropdown
            onMouseOver={() => setShowDropdown(true)}
            animateState={showDropDown}
          ></UserDropdropdown>
        </div>
      </div>
    </>
  );
};

export default UserNavigation;
