import { motion } from "framer-motion";

export default function Oval() {
  return (
    <>
      {/* Left oval */}
      <motion.div
        initial={{ y: 500,
             opacity: 0
         }}
        animate={{
         y: 0, opacity: 1
         }}
        transition={{ 
            duration: 6,
            type:"spring"
         }}
        className="absolute  h-40 w-35 bg-green-300 rounded-full left-30 rotate-45 bottom-20"
      >
      </motion.div>

      {/* Right oval */}
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 6, type:"spring"}}
        className="absolute h-40 w-35 bg-green-300 rounded-full right-30 -rotate-45 md:block hidden top-20"
      >
      </motion.div>

      {/* Small circle */}
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 5, type:"spring" }}
        className="h-10 w-10 absolute bottom-4 bg-green-700 rounded-full right-30"
      >
      </motion.div>
    </>
  );
}
