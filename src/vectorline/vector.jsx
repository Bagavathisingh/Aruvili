import { motion } from "framer-motion";

export default function Vector() {
  return (
    <>
      {/* Desktop View - Original Design (Unchanged) */}
      <div className="hidden md:block">
        <div className="h-177 w-420 absolute -ml-100 mt-10 overflow-hidden">
          <svg
            className="inset-0 h-full w-full rotate-24 mb-30"
            viewBox="0 0 1700 400"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 200 C 250 100, 500 376, 750 200 S 1450 300, 1700 150"
              stroke="green"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2000" 
              strokeDashoffset="2000"
              initial={{ strokeDashoffset: 2000 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </div>

      {/* Mobile View - Adjusted for mobile screens */}
      <div className="md:hidden">
        <div className="h-32 w-full absolute top-4 left-0 overflow-hidden">
          <svg
            className="inset-0 h-full w-full rotate-12"
            viewBox="0 0 800 200"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 100 C 150 50, 300 150, 500 80 S 700 120, 800 90"
              stroke="green"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="1000" 
              strokeDashoffset="1000"
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </div>
    </>
  );
}