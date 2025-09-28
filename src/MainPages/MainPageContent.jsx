import { motion } from "framer-motion";
import { useState } from "react";
import ResMainCon from "./responive/resMainCon"
import MainGraphBar from "./mainComponent/MainBarContent"
import { useNavigate} from "react-router-dom";
export default function MainPageContent() {
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const scrollToSection = (sectionIndex) => {
    setCurrentSection(sectionIndex);
    const element = document.getElementById(`section-${sectionIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop View - Original Design + Additional Section */}
      <div className="hidden sticky md:block">
        <div className="hide-scroll overflow-y-auto overflow-x-hidden flex md:-ml-65 md:-mt-5 flex-col items-center justify-start md:max-h-screen p-5 w-full md:w-370 mx-auto px-4 md:px-0 py-10">
          {/* Heading */}
          <div className="flex flex-col justify-center items-center text-center mb-20 mt-20">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl inter flex flex-wrap gap-5 justify-center items-center">
              <motion.div
                initial={{ y: -200, opacity: 0, rotate: 120 }}
                animate={{ y: 0, opacity: 1, rotate: 6 }}
                transition={{ duration: 2, type: "spring" }}
                exit={{ y: -200, opacity: 0, rotate: 120 }}
                className="back p-3 mb-4 rounded-lg rotate-6"
              >
                <motion.h1 className="inter -rotate-9">Benefits</motion.h1>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 2, type: "spring" }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-base inter sm:text-lg md:text-xl lg:text-2xl"
              >
                Of Our Services
              </motion.span>
            </h1>
          </div>

          <div className="flex flex-col sticky md:flex-row items-center p-5 justify-between w-full gap-6">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
              className="drop-shadow-sm drop-shadow-black rounded-2xl flex flex-col  md:flex-col md:flex-wrap wrap-normal lg:flex-row gap-5 p-1 bg-green-400 h-full md:full w-full"
            >
              <motion.div
                initial={{ y: 800, rotate: 120 }}
                animate={{ y: 0, rotate: -5 }}
                transition={{ duration: 4, type: "spring" }}
                className="w-100 md:ml-4 h-40 md:h-auto drone-back drop-shadow-xl drop-shadow-black opacity-100 rounded-2xl back -rotate-6"
              ></motion.div>

              <div className="flex-1 w-full gap-6 rounded-2xl flex flex-col justify-between">
                <div className="rounded-2xl p-1 flex flex-col gap-1 justify-center items-center md:mt-0 mt-5">
                  <h1 className="text-sm sm:text-base md:text-md lg:text-md p-1 font-bold mt-5">
                    Make Your Farm 100%
                    <span className="ml-1 p-1 rounded-lg bg-[#FFF44F] font-bold">
                      Organic & Full Automated
                    </span>
                  </h1>
                  <div className="mt-2 h-auto rounded-lg">
                    <h2 className="text-xs sm:text-sm font-bold md:text-base">
                      We are part of your farm and your life, committed to
                      bringing you organic and healthy living. With our trusted
                      service, we ensure fresh, chemical-free produce that
                      nurtures your family's well-being. Together, let's grow
                      naturally, live sustainably, and build a healthier
                      tomorrow—because your life deserves purity and care.
                    </h2>
                  </div>
                </div>
                <div className="p-5 rounded-2xl h-auto flex justify-center md:justify-start lg:justify-center items-center">
                  <button className="backBtn hover:bg-green-700 hover:scale-110 hover:text-white inter-normal drop-shadow-xl drop-shadow-black rounded-lg transition duration-300 ease-in-out">
                    <h1 className="h-full w-full rounded-lg backdrop-blur-[2px] text-white px-8 sm:px-10 py-1">
                      Learn More
                    </h1>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Right Graph */}
            <div className="border-2 bg-green-400 border-green-500 h-auto rounded-lg w-full md:w-1/2 flex justify-center items-center p-3">
            <MainGraphBar/>
            </div>
          </div>

          {/* How It Works Section - First */}
          <div className="w-full mt-17  p-5">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring"}}
              className="bg-gradient-to-r bg-green-400 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 inter">
                How Agro-Smart System Works
              </h2>
              
              {/* Data Flow Process */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6 text-center text-green-50">Data Flow & Control Process</h3>
                <div className="grid md:grid-cols-5 gap-4">
                  <motion.div
                  initial={{
                    opacity:0,
                    y:100
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                    transition:{
                      duration:2,
                      type:"spring"
                    }
                  }}
                   className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">📡</span>
                    </div>
                    <h4 className="font-semibold text-sm text-blue-700 mb-2">1. Sensors Collect</h4>
                    <p className="text-xs text-gray-600">IoT sensors monitor soil, weather, crop health in real-time</p>
                  </motion.div>

                  <motion.div
                                    initial={{
                    opacity:0,
                    y:100
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                    transition:{
                      duration:2,
                      type:"spring"
                    }
                  }}
                   className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🌐</span>
                    </div>
                    <h4 className="font-semibold text-sm text-purple-700 mb-2">2. Gateway Transmits</h4>
                    <p className="text-xs text-gray-600">IoT gateway sends data to cloud via Wi-Fi/LoRa networks</p>
                  </motion.div>

                  <motion.div 
                                    initial={{
                    opacity:0,
                    y:100
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                    transition:{
                      duration:2,
                      type:"spring"
                    }
                  }}className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🧠</span>
                    </div>
                    <h4 className="font-semibold text-sm text-orange-700 mb-2">3. AI Analyzes</h4>
                    <p className="text-xs text-gray-600">Machine learning algorithms process data and make decisions</p>
                  </motion.div>

                  <motion.div 
                  initial={{
                    opacity:0,
                    y:100
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                    transition:{
                      duration:2,
                      type:"spring"
                    }
                  }}className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">📱</span>
                    </div>
                    <h4 className="font-semibold text-sm text-green-700 mb-2">4. Dashboard Alerts</h4>
                    <p className="text-xs text-gray-600">Real-time notifications sent to farmer's mobile/web app</p>
                  </motion.div>

                  <motion.div
                                    initial={{
                    opacity:0,
                    y:100
                  }}
                  whileInView={{
                    opacity:1,
                    y:0,
                    transition:{
                      duration:2,
                      type:"spring"
                    }
                  }}
                   className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">⚡</span>
                    </div>
                    <h4 className="font-semibold text-sm text-red-700 mb-2">5. System Acts</h4>
                    <p className="text-xs text-gray-600">Automated irrigation, spraying, or climate adjustments execute</p>
                  </motion.div>
                </div>
              </div>

              {/* Automation Workflows */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{
                    opacity:0,
                    x:-100
                  }}
                  whileInView={{
                    opacity:1,
                    x:0,
                    transition:{
                      duration:2,
                      type:"spring"
                    }
                  }}className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-4 text-blue-700">Irrigation Workflow</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                      <div>
                        <p className="text-sm font-medium">Moisture Detection</p>
                        <p className="text-xs text-gray-600">Soil sensors detect low moisture levels</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                      <div>
                        <p className="text-sm font-medium">AI Analysis</p>
                        <p className="text-xs text-gray-600">System calculates optimal water amount and timing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                      <div>
                        <p className="text-sm font-medium">Automatic Irrigation</p>
                        <p className="text-xs text-gray-600">Valves open, drip system delivers precise water amount</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                      <div>
                        <p className="text-sm font-medium">Monitoring & Adjustment</p>
                        <p className="text-xs text-gray-600">Continuous monitoring ensures optimal soil moisture</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity:0,
                    x:100
                  }}
                  whileInView={{
                    opacity:1,
                    x:0,
                    transition:{
                      duration:2,
                      type:"spring"
                    }
                  }}
                 className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold mb-4 text-green-700">Pest Control Workflow</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                      <div>
                        <p className="text-sm font-medium">Drone Surveillance</p>
                        <p className="text-xs text-gray-600">Drones scan fields for pest activity and crop health</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                      <div>
                        <p className="text-sm font-medium">AI Recognition</p>
                        <p className="text-xs text-gray-600">Computer vision identifies pest types and affected areas</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                      <div>
                        <p className="text-sm font-medium">Targeted Treatment</p>
                        <p className="text-xs text-gray-600">Precision spraying drones treat only affected zones</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                      <div>
                        <p className="text-sm font-medium">Result Tracking</p>
                        <p className="text-xs text-gray-600">Follow-up monitoring ensures treatment effectiveness</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Semi-Automation Explanation */}
              <div className="mt-12 bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-amber-800 text-center">Semi-Automated Approach</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Automated Processes</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Soil and crop health monitoring</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Smart irrigation and fertigation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Pest detection and targeted spraying</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Climate control in greenhouses</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>Data analytics and reporting</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-700 mb-3">Manual Processes</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center space-x-2">
                        <span className="text-amber-600">○</span>
                        <span>Seed sowing and planting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-amber-600">○</span>
                        <span>Crop harvesting operations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-amber-600">○</span>
                        <span>Quality inspection and sorting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-amber-600">○</span>
                        <span>Equipment maintenance</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-amber-600">○</span>
                        <span>Strategic decision making</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-amber-800 italic">
                    This balanced approach ensures efficiency while maintaining farmer control over critical operations
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Desktop Section - System Architecture */}
          <div className="w-full mt-16 p-5">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring"}}
              className="bg-gradient-to-r bg-green-400 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 inter">
                System Architecture
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">IoT Monitoring System</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">📡</span>
                      </div>
                      <span className="text-sm">Soil pH, Moisture & Temperature Sensors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">🌡️</span>
                      </div>
                      <span className="text-sm">Climate Control & Weather Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">📱</span>
                      </div>
                      <span className="text-sm">Real-time Dashboard & Mobile App</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Automation Features</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">💧</span>
                      </div>
                      <span className="text-sm">Smart Drip Irrigation System</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">🚁</span>
                      </div>
                      <span className="text-sm">Drone-based Pest Detection & Spraying</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-sm">🧪</span>
                      </div>
                      <span className="text-sm">Automated Fertigation System</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cost Analysis Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring" }}
              className="bg-gradient-to-r bg-green-400 rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 inter">
                Investment & ROI Analysis
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold mb-4 text-purple-700">Initial Investment</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">IoT Sensors & Gateway</span>
                      <span className="font-semibold">$450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Irrigation & Fertigation</span>
                      <span className="font-semibold">$900</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Drones & Controllers</span>
                      <span className="font-semibold">$1600</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Software & Cloud</span>
                      <span className="font-semibold">$1200</span>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Total Investment</span>
                      <span className="text-green-600">~$5,000</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-semibold mb-4 text-green-700">Expected Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Water Savings</span>
                      <span className="font-semibold text-blue-600">41.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Yield Increase</span>
                      <span className="font-semibold text-green-600">36%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Labor Reduction</span>
                      <span className="font-semibold text-purple-600">64%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Payback Period</span>
                      <span className="font-semibold text-orange-600">2-3 Seasons</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700 font-medium">
                      Government subsidies and agri-tech grants may reduce initial costs by 30-50%
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Platform Section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, type: "spring"}}
              className="bg-gradient-to-r bg-green-400 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 inter">
                Why Choose Our Platform?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-green-700">100% Organic</h3>
                  <p className="text-sm text-gray-600">
                    Chemical-free farming with natural fertilizers and sustainable practices.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1.3 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-700">Semi-Automation</h3>
                  <p className="text-sm text-gray-600">
                    Automates monitoring, irrigation, and pest control while keeping sowing/harvesting manual.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-orange-700">Real-time Analytics</h3>
                  <p className="text-sm text-gray-600">
                    Track crop health, weather patterns, and yield predictions with AI-powered insights.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 1.7 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-700">Expert Support</h3>
                  <p className="text-sm text-gray-600">
                    24/7 agricultural expert support to maximize your farm's potential and ROI.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1.9 }}
                className="text-center mt-8"
              >
                <button
                onClick={()=>{
                  window.location.href = "http://localhost:3000"
                }}
                 className="bg-green-500 border hover:scale-103 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-400 ease-in-out shadow-lg hover:shadow-xl">
                  Start Your Smart Farming Journey
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile View - Vertical Scrollable Sections (Unchanged) */}
      <div className="md:hidden">
        <ResMainCon/>
      </div>
    </>
  );
}