import React from 'react';
import { Link } from 'react-router';
import UserIcon from "../icons/UserIcon";
import SettingIcon from "../icons/SettingIcon";
import LogoutIcon from "../icons/LogoutIcon";
import UserCollectionIcon from "../icons/UserCollectionIcon";
import { motion, AnimatePresence } from "framer-motion";

const UserDropdropdown = ({ animateState }) => {
  return (
    <AnimatePresence>
      {animateState && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          className="user-panel-wrapper w-fit h-fit absolute top-[4.3vw] right-0 z-50"
        >
          <div className="user-panel bg-[#1E1C21] p-[.8vw] rounded-[1vw] flex flex-col gap-[.8vw]">
            <Link
              className="whitespace-nowrap text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]"
            >
              <UserIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />
              Your Profile
            </Link>

            <Link
              className="whitespace-nowrap text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]"
            >
              <UserCollectionIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />
              Your Collections
            </Link>

            <Link
              className="whitespace-nowrap text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]"
            >
              <SettingIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />
              Settings
            </Link>

            <Link
              className="whitespace-nowrap text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]"
            >
              <LogoutIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />
              Logout
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserDropdropdown;
