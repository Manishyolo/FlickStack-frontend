import React from 'react'
import AlertIcon from '../icons/AlertIcon'
import { motion, AnimatePresence } from 'framer-motion'

const NotificationDropdropdown = ({ animateState }) => {
  return (
    <AnimatePresence>
      {animateState && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="notification-panel absolute top-[4.5vw] right-0 bg-[#1E1C21] rounded-[1vw] flex flex-col gap-[.8vw] w-[25vw] h-[30vw] z-50"
        >
          <h2 className="headline h-fit pb-[.8vw] pl-[.8vw] pr-[.8vw] pt-[.8vw] text-[1.11vw] relative flex items-center justify-between">
            Your Notifications
            <span>
              <AlertIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />
            </span>
            <span className="underline absolute bottom-0 left-0 w-full h-[.1vh] bg-[#d8c1ff31]"></span>
          </h2>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NotificationDropdropdown
