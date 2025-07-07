import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropdownIcon from "../../icons/DropdownIcon.jsx";

const DynamicDropdownSelector = ({ data }) => {
  const [showDropDownSelector, setDropdownSelector] = useState(false);
  const [TitleValue, setTitleValue] = useState(data[0].value);

  const handleClickEvents = () => {
    setDropdownSelector((prev) => !prev);
  };
  const changeTitlehandler = (value) => {
    console.log(value);

    setTitleValue(value);
  };

  return (
    <>
      <div
        onClick={handleClickEvents}
        className="w-fit h-fit z-40 flex items-center cursor-pointer bg-[#252329] px-[1.3vw] py-[.7vw] rounded-[.9vw] selection-container relative"
      >
        <h2 className="ml-[.5vw] text-[1.2vw]">{TitleValue}</h2>
        <motion.span
          animate={{ rotate: showDropDownSelector ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className=" w-fit h-fit "
        >
          <DropdownIcon size="text-[2vw]"></DropdownIcon>
        </motion.span>

        <AnimatePresence>
          {showDropDownSelector && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className={`absolute top-[4vw] right-0 w-fit h-fit p-[.5vw] flex flex-col  gap-[.5vw] rounded-[1vw] bg-[#252329]`}
            >
              {data.map((item, index) => (
                <h2
                  onClick={() => {
                    changeTitlehandler(item.value);
                  }}
                  className="text-[1.2vw] hover:bg-[#403a4a3e] px-[1vw] py-[.4vw] rounded-[.6vw] flex flex-row items-center justify-start gap-[1vw]"
                >
                  {item.value}
                </h2>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default DynamicDropdownSelector;
