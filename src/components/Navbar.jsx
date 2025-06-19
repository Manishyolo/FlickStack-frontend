import useNavbarState from "../hooks/useNavbarState";

import NavigationLinks from "./NavigationLinks";
import SearchPanel from "./SearchPanel";
import UserNavigation from "./UserNavigation";

const Navbar = () => {
  const NavbarState = useNavbarState();

  return (
    <>
      <div className="w-full h-[11vh] bg-[#0b0a0d34] relative pl-[2vw] pr-[2vw] flex flex-row items-center justify-between text-[#FCFAFF] ">
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
