import { motion } from "framer-motion";

export default function MainGraphBar() {
  const bars = [
    { label: "Health", value: "85%", color: "bg-green-600" },
    { label: "Organic", value: "95%", color: "bg-green-600" },
    { label: "Toxic", value: "15%", color: "bg-red-500" },
    { label: "Waste", value: "10%", color: "bg-red-500" },
  ];

  return (
    <>
      <motion.div
        className="border-2 bg-gray-50 border-green-600 backdrop-blur-lg flex items-center p-4 justify-center h-full rounded-lg w-full"
      >
        <div className="h-full flex flex-col gap-6 w-full">
          {bars.map((bar, i) => (
            <div
              key={i}
              className="h-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 relative"
            >
              {/* Label */}
              <h1 className="text-xs sm:text-sm font-medium text-gray-800">
                {bar.label}
              </h1>

              {/* Progress Bar */}
              <div className="border h-3 w-full sm:w-4/5 rounded-lg overflow-hidden bg-gray-100">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: bar.value }}
                  transition={{ duration: 5, type: "spring" }}
                  className={`h-full ${bar.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
