import { motion } from "framer-motion";
import { useState } from "react";
import MainGraphBar from "../mainComponent/MainBarContent";
export default function ResMainCon() {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (sectionIndex) => {
    setCurrentSection(sectionIndex);
    const element = document.getElementById(`section-${sectionIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
          className="overflow-y-auto h-screen"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {/* Section 1: Header + Content Card */}
          <div
            id="section-0"
            className="w-full snap-start min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-green-100"
          >
            {/* Header */}
            <div className="flex flex-col justify-center items-center text-center p-5 pt-10">
              <h1 className="text-2xl sm:text-3xl inter flex flex-wrap gap-3 justify-center items-center">
                <motion.div
                  initial={{ y: -200, opacity: 0, rotate: 120 }}
                  animate={{ y: 0, opacity: 1, rotate: 6 }}
                  transition={{ duration: 2, type: "spring" }}
                  exit={{ y: -200, opacity: 0, rotate: 120 }}
                  className="back p-3 rounded-lg rotate-6"
                >
                  <motion.h1 className="inter -rotate-9 text-lg">
                    Benefits
                  </motion.h1>
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 2, type: "spring" }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-base inter"
                >
                  Of Our Services
                </motion.span>
              </h1>
            </div>

            {/* Left Content Card */}
            <div className="flex-1 px-4 pb-4">
              <motion.div
                initial={{ opacity: 0, x: 500 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
                className="drop-shadow-sm drop-shadow-black rounded-2xl flex flex-col gap-4 p-1 bg-green-400 min-h-96"
              >
                <motion.div
                  initial={{ y: 800, rotate: 120 }}
                  animate={{ y: 0, rotate: -5 }}
                  transition={{ duration: 4, type: "spring" }}
                  className="w-full h-60 drone-back drop-shadow-xl drop-shadow-black opacity-100 rounded-2xl back -rotate-6"
                ></motion.div>

                <div className="flex-1 w-full rounded-2xl flex flex-col justify-around p-2">
                  <div className="rounded-2xl p-1 flex flex-col gap-2 justify-center items-center">
                    <h1 className="text-sm font-bold text-center">
                      Make Your Farm 100%
                      <span className="ml-1 p-1 rounded-lg bg-[#FFF44F] font-bold">
                        Organic & Full Automated
                      </span>
                    </h1>
                    <div className="mt-2 h-auto rounded-lg">
                      <h2 className="text-xs font-bold text-center">
                        We are part of your farm and your life, committed to
                        bringing you organic and healthy living. With our
                        trusted service, we ensure fresh, chemical-free produce
                        that nurtures your family's well-being.
                      </h2>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl h-auto flex justify-center items-center">
                    <button className="backBtn hover:bg-green-700 hover:scale-110 hover:text-white inter-normal drop-shadow-xl drop-shadow-black rounded-lg transition duration-300 ease-in-out">
                      <h1 className="h-full w-full rounded-lg backdrop-blur-[2px] text-white px-6 py-1">
                        Learn More
                      </h1>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Section 2: Right Graph Section */}
          <div
            id="section-1"
            className="w-full snap-start min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-blue-100 p-4"
          >
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-center mb-6 inter">
                Analytics Dashboard
              </h2>

              <div className="flex-1 border-2 bg-green-400 border-green-500 rounded-lg flex justify-center items-center p-3 max-h-96">
                <div className="w-full h-full bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-700 font-semibold">Main Graph Bar</span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Farm Analytics
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Track your farm's performance and growth metrics
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-700">
                    Organic Production
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Monitor organic certification and quality standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: How It Works */}
          <div
            id="section-2"
            className="w-full snap-start min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-green-100 p-4"
          >
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-center mb-6 inter">
                How It Works
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-blue-700 mb-2">5-Step Process</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">📡</span>
                      <span className="text-xs text-gray-600">1. Sensors collect soil/weather data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">🌐</span>
                      <span className="text-xs text-gray-600">2. Gateway transmits to cloud</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">🧠</span>
                      <span className="text-xs text-gray-600">3. AI analyzes & decides</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">📱</span>
                      <span className="text-xs text-gray-600">4. Dashboard alerts farmer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">⚡</span>
                      <span className="text-xs text-gray-600">5. System takes action</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-green-700 mb-2">Automation Examples</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">💧</span>
                      <span className="text-xs text-gray-600">Smart irrigation based on soil moisture</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">🚁</span>
                      <span className="text-xs text-gray-600">Drone pest detection & treatment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">🌡️</span>
                      <span className="text-xs text-gray-600">Climate control in greenhouses</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="text-sm font-bold text-amber-800 mb-2">Semi-Automated Approach</h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-medium text-green-700">Automated:</p>
                      <p className="text-gray-600">Monitoring, irrigation, pest control</p>
                    </div>
                    <div>
                      <p className="font-medium text-amber-700">Manual:</p>
                      <p className="text-gray-600">Sowing, harvesting, maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: System Architecture */}
          <div
            id="section-3"
            className="w-full snap-start min-h-screen flex flex-col bg-gradient-to-b from-cyan-50 to-cyan-100 p-4"
          >
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-center mb-6 inter">
                System Architecture
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-blue-700 mb-2">
                    IoT Monitoring System
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">📡</span>
                      <span className="text-xs text-gray-600">Soil pH, Moisture & Temperature Sensors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">🌡️</span>
                      <span className="text-xs text-gray-600">Climate Control & Weather Monitoring</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-green-700 mb-2">
                    Automation Features
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">💧</span>
                      <span className="text-xs text-gray-600">Smart Drip Irrigation System</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">🚁</span>
                      <span className="text-xs text-gray-600">Drone-based Pest Detection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Investment & ROI Analysis */}
          <div
            id="section-3"
            className="w-full snap-start min-h-screen flex flex-col bg-gradient-to-b from-orange-50 to-orange-100 p-4"
          >
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-center mb-6 inter">
                Investment & ROI
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-purple-700 mb-3">Initial Investment</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>IoT Sensors & Gateway</span>
                      <span className="font-semibold">$450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Irrigation System</span>
                      <span className="font-semibold">$900</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Drones & Controllers</span>
                      <span className="font-semibold">$1600</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-sm">
                      <span>Total Investment</span>
                      <span className="text-green-600">~$5,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-green-700 mb-3">Expected Benefits</h3>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">41.7%</div>
                      <div>Water Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">36%</div>
                      <div>Yield Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">64%</div>
                      <div>Labor Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-orange-600">2-3</div>
                      <div>Payback Seasons</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Why Choose Us */}
          <div
            id="section-4"
            className="w-full snap-start min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-purple-100 p-4 relative"
          >
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-xl font-bold text-center mb-6 inter">
                Why Choose Us?
              </h2>

              <motion.div
                initial={{
                  x: 300,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
                className="space-y-4 flex-1"
              >
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-green-700 mb-2">
                    100% Organic
                  </h3>
                  <p className="text-xs text-gray-600">
                    Chemical-free farming with natural fertilizers and
                    sustainable practices for healthier produce.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-blue-700 mb-2">
                    Semi-Automation
                  </h3>
                  <p className="text-xs text-gray-600">
                    Automates monitoring, irrigation, and pest control while keeping sowing/harvesting manual.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-orange-700 mb-2">
                    Real-time Analytics
                  </h3>
                  <p className="text-xs text-gray-600">
                    Track crop health, weather patterns, and yield predictions
                    with AI-powered insights.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="text-sm font-bold text-purple-700 mb-2">
                    Expert Support
                  </h3>
                  <p className="text-xs text-gray-600">
                    24/7 agricultural expert support to maximize your
                    farm's potential and ROI.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Back to top button */}
            <button
              onClick={() => scrollToSection(0)}
              className="h-16 w-16 rounded-full bg-green-400 hover:bg-green-500 absolute bottom-6 right-6 shadow-lg flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-white text-2xl">↑</span>
            </button>
          </div>
        </div>
    </>
  );
}
