import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { usePageTransition } from "../../../app/hooks/usePageTransition";
import { useNavigate } from "react-router";

interface MotionButtonProps {
  text_1: string;
  text_2:  string;
  link: string;
}
const MotionButton = ({ text_1, text_2, link} : MotionButtonProps) => {
  const [hovered, setHovered] = useState(false);

    const { startTransition } = usePageTransition();
    const navigate = useNavigate();
    
    const handleClick = (link: string) => {
        startTransition(navigate, link);
    }

  return (
    <motion.button
      className={`relative overflow-hidden hover:cursor-pointer flex flex-row items-center text-primary 
      ${ text_1 === "" ? "w-8 h-auto" : "w-1/2 h-auto"} border border-border-grey p-2 mt-4 justify-center gap-2
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => handleClick(link)}
    >
      <div className="flex w-full py-2 text-center items-center justify-center">
        <motion.span
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: hovered ? 20 : 0, opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute flex items-center w-auto"
        >
          {text_1}
        </motion.span>
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: hovered ? 0 : -20, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute flex items-center w-auto"
        >
          {text_2}
        </motion.span>
      </div>
          <motion.div
            initial={{rotate: 0, }}
            animate={{ rotate: hovered ? 135 : 0,  }}
            transition={{ duration: 0.3 }}
          >
            <FaPlus className="relative text-op-black-max text-[10px] " />
          </motion.div>
    </motion.button>
  );
};

export default MotionButton;
