import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && ( // Render only when isOpen is true
        <motion.div
          key="accordion" // Ensure a unique key for the animated component
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-[#ffffff] text-[#2d3436] font-semibold rounded-3xl flex flex-col justify-center items-center gap-3 p-5 w-full"
        >
          <NavLink to={"/"}>HOME</NavLink>
          <div>PAGES</div>
          <div>PRODUCTS</div>
          <div>BLOG</div>
          <div>SHOP</div>
          <NavLink to={"/contact-us"}>CONTACT US</NavLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Accordion;
