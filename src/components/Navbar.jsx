import useNavbarState from "../hooks/useNavbarState";

import NavigationLinks from "./NavBarComponents/NavigationLinks";
import SearchPanel from "./NavBarComponents/SearchPanel";
import UserNavigation from "./NavBarComponents/UserNavigation";

const Navbar = () => {
  const NavbarState = useNavbarState();

  return (
    <>
      <div className="w-full h-[11vh] fixed top-0 bg-[#0b0a0d0a] backdrop-blur-md  pl-[2vw] pr-[2vw] flex items-center justify-between text-[#FCFAFF] z-50 ">
        <NavigationLinks
          showExplore={NavbarState.ShowExploreDropdown}
          setShowExplore={NavbarState.setExploreShowDropDown}
        ></NavigationLinks>

        <SearchPanel
          showSearchPanel={NavbarState.ShowSearchPanel}
          setShowSearchPanel={NavbarState.SetSearchPanel}
          formatDropdownShow={NavbarState.formatDropdownShow}
          setFormatDropdownShow={NavbarState.setformatDropdownShow}
          format={NavbarState.format}
          formatHandler={NavbarState.formatHandler}
        ></SearchPanel>

        <UserNavigation
          notificationDropdown={NavbarState.NotificationDropdown}
          setNotificationDropdown={NavbarState.setNotificationDropdown}
          showDropDown={NavbarState.ShowDropDown}
          setShowDropdown={NavbarState.SetShowDropDown}
        ></UserNavigation>
      </div>
    </>
  );
};

export default Navbar;
