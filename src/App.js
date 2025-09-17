

// import './App.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import { useEffect, useState } from 'react';
// import RegisterModal from "./register";


// // --- Navbar Component ---
// const Navbar = ({ isNavOpen, setNavOpen }) => (
//   <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 shadow-md">
//     <div className="mx-auto px-1 sm:px-2 lg:px-4">
//       <div className="flex items-center justify-between h-16">
//         <div className="flex-shrink-0">
//           <a href="#home" className="flex items-center gap-3">
//             <img 
//               src={process.env.PUBLIC_URL + '/images/iitb.png'} 
//               alt="IIT Bombay Logo" 
//               className="h-14" 
//             />
//             <span className="font-bold text-xl text-gray-800">Digital Twin 2025, IEOR IITB</span>
//           </a>
//         </div>
//         <div className="hidden md:block">
//           <div className="ml-10 flex items-center space-x-4">
//             <a href="#about" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
//             <a href="#topics" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Topics</a>
//             <a href="#speakers" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Speakers</a>
//             <a href="#schedule" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Schedule</a>
//             <a href="#venue" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Venue</a>
//             <a href="#register" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Register</a>
//             <img 
//               src={process.env.PUBLIC_URL + '/images/ieor_logo.png'} 
//               alt="Second Logo" 
//               className="h-14" 
//             />
//           </div>
//         </div>
//         <div className="-mr-2 flex md:hidden">
//           <button
//             onClick={() => setNavOpen(!isNavOpen)}
//             type="button"
//             className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-300 focus:outline-none"
//             aria-controls="mobile-menu"
//             aria-expanded="false"
//           >
//             <span className="sr-only">Open main menu</span>
//             {!isNavOpen ? (
//               <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             ) : (
//               <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>

//     {isNavOpen && (
//       <div className="md:hidden" id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <a href="#about" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
//           <a href="#topics" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Topics</a>
//           <a href="#speakers" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Speakers</a>
//           <a href="#schedule" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Schedule</a>
//           <a href="#venue" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Venue</a>
//           <a href="#register" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Register</a>
//         <div className="pt-4 pb-2 border-t border-gray-200">
//             <div className="flex justify-center">
//               <img 
//                 src={process.env.PUBLIC_URL + '/images/ieor_logo.png'} 
//                 alt="Second Logo" 
//                 className="h-10" 
//               />
//             </div>
//           </div>


//         </div>
//       </div>
//     )}
//   </nav>
// );

// function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isNavOpen, setNavOpen] = useState(false);

//   return (
//     <div className="text-gray-900">
//       <Navbar isNavOpen={isNavOpen} setNavOpen={setNavOpen} />

//       {/* --- Hero Section --- */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col items-center justify-center pt-16 text-center text-white relative"
//       >
//         <div className="absolute inset-0 bg-black opacity-60"></div>

//         <div className="relative z-10 flex w-full flex-col items-center justify-center px-6">

        

//           <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-shadow-lg">Digital Twin Modeling Workshop</h1>
//           <p className="max-w-2xl text-lg mb-6 text-shadow-md">
//             "The Digital Twin Modeling: Bridging Simulation Modelling and Real-World Systems" workshop offers an in-depth exploration of how Digital Twin technology revolutionizes how complex physical systems are designed, monitored, and optimized.
//           </p>

//           <div className="mb-8 space-y-2 text-lg font-medium">
//             <p className="px-4 py-2 rounded-xl bg-white/30 backdrop-blur-md shadow-md">
//               Oct 11-12, 2025 <span className="font-semibold"> · IEOR, IIT Bombay</span>
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <button
//               onClick={() => setModalOpen(true)}
//               className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200 transition-transform transform hover:scale-105"
//             >
//               Register
//             </button>
//             <a
//               href="#about"
//               className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all"
//             >
//               Learn More
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* --- About Section --- */}
//       <section id="about" className="py-20 px-6 mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">About the Workshop</h2>

//         <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-left">
//           <li>
//             <strong>Explore Digital Twins:</strong> Dive into dynamic virtual models of physical systems, continuously updated with real-time data to drive smarter decision-making,predictive maintenance and system optimisation.
//           </li>
//           <li>
//             <strong>Build Practical Skills:</strong> Learn to create Digital Twins that effectively bridge the gap between simulation models and real-world applications through hands-on sessions.
//           </li>
//           <li>
//             <strong>Master Core Topics:</strong> Cover key areas including advanced simulation, real-time data integration, AI-driven analytics, and human-centered system design.
//           </li>
//           <li>
//             <strong>Solve Real-World Challenges:</strong> Tackle critical issues like model credibility, system interoperability, and integrating human-in-the-loop systems, designing human centric solutions.
//           </li>
//           <li>
//             <strong>Learn from Experts:</strong> Engage with leading researchers and industry practitioners through a mix of expert talks, panel discussions, and research presentations.
//           </li>
//           <li>
//             <strong>Broaden Your Impact:</strong> Gain insights to implement Digital Twin solutions across high-growth industries like manufacturing, logistics, healthcare, and smart infrastructure.
//           </li>
//         </ul>

//         <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center shadow-sm max-w-2xl mx-auto">
//           <h3 className="text-2xl font-semibold text-blue-700 mb-4">Workshop Details</h3>
//           <p className="text-lg mb-2">📍 Venue: <span className="font-medium">F.C Kohli Auditorium, IIT Bombay.</span></p>
//           <p className="text-lg mb-2">📅 Dates: <span className="font-medium">11th & 12th October 2025</span></p>
//           <p className="text-lg">⏰ Timings: <span className="font-medium">9:30 AM – 5:30 PM</span></p>
//         </div>
//       </section>

//       {/* --- Who Should Attend Section --- */}
// {/* --- Who Should Attend Section --- */}
// <section id="who-should-attend" className="py-20 bg-gray-100 px-6">
//   <div className="max-w-5xl mx-auto text-center">
//     <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
//       Who Should Attend?
//     </h2>
    
//     <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
//       This workshop is designed for a diverse audience of professionals, researchers, and students who are passionate about leveraging cutting-edge technology to model, analyze, and optimize complex systems.
//     </p>

//     {/* Sections are now stacked vertically and centered */}
//     <div className="space-y-12">

//       {/* Column 1: Industry */}
//       <div data-aos="fade-up" data-aos-delay="200">
//         <h3 className="text-2xl font-semibold text-blue-700 mb-4">Industry Professionals & Technologists</h3>
//         <div className="inline-block text-left">
//             <ul className="list-disc list-inside space-y-3 text-gray-800">
//               <li><strong>Engineers</strong> in Industrial, Systems, Mechanical, and Manufacturing fields.</li>
//               <li><strong>Data Scientists, Analysts, & ML Engineers</strong> developing predictive models.</li>
//               <li><strong>Software Developers & Solutions Architects</strong> building IT infrastructure.</li>
//               <li><strong>R&D, Product, & Operations Managers</strong> overseeing complex systems.</li>
//               <li><strong>Technology Strategists & Consultants</strong> advising on Industry 4.0.</li>
//             </ul>
//         </div>
//       </div>

//       {/* Column 2: Academia */}
//       <div data-aos="fade-up" data-aos-delay="300">
//         <h3 className="text-2xl font-semibold text-blue-700 mb-4">Academics & Researchers</h3>
//         <div className="inline-block text-left">
//             <ul className="list-disc list-inside space-y-3 text-gray-800">
//               <li><strong>Graduate Students</strong> (Master's and Ph.D.) in relevant fields.</li>
//               <li><strong>Faculty Members & Research Scholars</strong> exploring new frontiers.</li>
//               <li><strong>Senior Undergraduate Students</strong> with a strong interest in simulation.</li>
//             </ul>
//         </div>
//       </div>
      
//     </div>
//   </div>
// </section>

//       {/* --- Topics Section --- */}
//       <section id="topics" className="py-20 bg-gray-100 px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">Topics Covered</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
//           {["Fundamentals and Concepts of Digital Twins.", "Data Integration and System Interoperability.", "Model Validation, Optimization, and Automation.", "Human Factors and Interaction in Digital Twins.", "AI and Decision Support in Digital Twins.", "Practical Applications and Hands-on Modeling."].map((topic, idx) => (
//             <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
//               {topic}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- Speakers Section (MODIFIED) --- */}
//       <section id="speakers" className="py-20 px-6 mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
//           Speakers
//         </h2>

//         {(() => {
//           // ✅ CHANGE 1: Updated `imageUrl` to use local paths.
//           const speakers = [
//             { name: 'Mamadou Kaba Traoré', institution: 'University of Bordeaux, France', profileUrl: 'https://www.ims-bordeaux.fr/researchers-and-publications/traore-mamadou/', mode: 'In-person', imageUrl: process.env.PUBLIC_URL +'/images/s1.jpeg' },
//             { name: 'Lora Cavuoto', institution: 'University of Buffalo, USA', profileUrl: 'https://engineering.buffalo.edu/home/research/faculty/profiles.host.html/content/shared/engineering/industrial-systems/profiles/faculty/cavuoto-lora.html', mode: 'Hybrid', imageUrl: process.env.PUBLIC_URL +'/images/s2.jpg' },
//             { name: 'Navonil Mustafee', institution: 'University of Exeter, UK', profileUrl: 'https://experts.exeter.ac.uk/22797-nav-mustafee', mode: 'Hybrid', imageUrl: process.env.PUBLIC_URL +'/images/s3.jpeg' },
//             { name: 'Seunghan Lee', institution: 'Mississippi State University, USA', profileUrl: 'https://www.ise.msstate.edu/people/faculty/seunghan-lee/', mode: 'Hybrid', imageUrl: process.env.PUBLIC_URL +'/images/s4.jpeg' },
//             { name: 'Varun Ramamohan', institution: 'IIT Delhi, India', profileUrl: 'https://mech.iitd.ac.in/faculty-profile/189', mode: 'In-person', imageUrl: process.env.PUBLIC_URL + '/images/s5.jpg' },
//             { name: 'Souvik Barat', institution: 'TCS, India', profileUrl: 'https://www.linkedin.com/in/souvikbarat/', mode: 'In-person', imageUrl: process.env.PUBLIC_URL +'/images/s7.jpeg' },
//             { name: 'Jayendran Venkateswaran', institution: 'IIT Bombay, India', profileUrl: 'https://www.ieor.iitb.ac.in/~jayendran', mode: 'In-person', imageUrl: process.env.PUBLIC_URL + '/images/s8.jpg' },
//             { name: 'Saurabh Jain', institution: 'IIT Bombay, India', profileUrl: 'https://www.ieor.iitb.ac.in/saurabh', mode: 'In-person', imageUrl: process.env.PUBLIC_URL + '/images/s9.png' }
//           ];

//           return (
//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
//               {speakers.map((speaker, idx) => (
//                 <div key={idx} className="text-center bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col items-center justify-between">
//                   <div>
//                     {/* ✅ CHANGE 2: The <img> tag now uses the local path from your data. */}
//                     <img
//                       src={speaker.imageUrl}
//                       alt={`${speaker.name}`}
//                       className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-md"
//                     />
//                     <h3 className="font-semibold text-xl">{speaker.name}</h3>
//                     <p className="text-gray-500 mb-4">{speaker.institution}</p>
//                   </div>

//                   <div className="flex flex-col items-center">
//                     <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
//                       speaker.mode === 'Hybrid'
//                         ? 'bg-purple-100 text-purple-800'
//                         : 'bg-green-100 text-green-800'
//                     }`}>
//                       {speaker.mode}
//                     </span>

//                     <a
//                       href={speaker.profileUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors"
//                     >
//                       View Profile
//                     </a>
//                   </div>

//                 </div>
//               ))}
//             </div>
//           );
//         })()}
//       </section>

//       {/* --- Workshop Schedule Section --- */}
// <section id="schedule" className="py-20 bg-gray-100 px-6">
//   <div className="max-w-6xl mx-auto text-center">
//     <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
//       Workshop Schedule
//     </h2>

//     {/* --- Day 1 --- */}
//     <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
//       <h3 className="text-2xl font-semibold text-gray-800 mb-6">Day 1: Bridging Simulation modelling and Real-World Systems</h3>
//       <div className="overflow-x-auto rounded-lg shadow-md">
//         <table className="min-w-full text-left text-sm whitespace-nowrap">
//           <thead className="bg-gray-800 text-white uppercase tracking-wider">
//             <tr>
//               <th className="px-6 py-3 font-medium">Time</th>
//               <th className="px-6 py-3 font-medium">Content</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">09:00 AM - 09:15 AM</td>
//               <td className="px-6 py-4">Workshop Inauguration & Welcome Address</td>
//             </tr>
//             <tr className="bg-gray-50 border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">09:15 AM - 10:00 AM</td>
//               <td className="px-6 py-4">Lecture 1 – Introduction to Digital Twins: Concepts, Taxonomy, and Use Cases</td>
//             </tr>
//             <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">10:00 AM - 10:45 AM</td>
//               <td className="px-6 py-4">Lecture 2 – Core Simulation Methods: DES, ABM, System Dynamics, and Physics-Based Modeling</td>
//             </tr>
//             <tr className="bg-blue-50 border-b">
//               <td className="px-6 py-4 font-semibold text-blue-800">10:45 AM - 11:00 AM</td>
//               <td className="px-6 py-4 font-medium text-blue-800">Tea Break</td>
//             </tr>
//             <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">11:00 AM - 11:45 AM</td>
//               <td className="px-6 py-4">Lecture 3 – Real-Time Data Integration: Synchronous vs Asynchronous Coupling</td>
//             </tr>
//             <tr className="bg-gray-50 border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">11:45 AM - 12:30 PM</td>
//               <td className="px-6 py-4">Lecture 4 – Co-Simulation Architectures and Interoperability (HLA, RTI)</td>
//             </tr>
//             <tr className="bg-green-50 border-b">
//               <td className="px-6 py-4 font-semibold text-green-800">12:30 PM - 02:00 PM</td>
//               <td className="px-6 py-4 font-medium text-green-800">Lunch Break</td>
//             </tr>
//              <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">02:00 PM - 02:45 PM</td>
//               <td className="px-6 py-4">Lecture 5 – Verification & Validation in Digital Twin Environments: Ensuring Model Credibility</td>
//             </tr>
//              <tr className="bg-gray-50 border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">02:45 PM - 03:30 PM</td>
//               <td className="px-6 py-4">Lecture 6 – Integrating Simulation-Based Optimization in Digital Twin Frameworks for Complex Systems</td>
//             </tr>
//              <tr className="bg-blue-50 border-b">
//               <td className="px-6 py-4 font-semibold text-blue-800">03:30 PM - 04:00 PM</td>
//               <td className="px-6 py-4 font-medium text-blue-800">Tea Break</td>
//             </tr>
//              <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">04:00 PM - 04:45 PM</td>
//               <td className="px-6 py-4">Lecture 7 – Human-Centered Design and Human Factors in Digital Twins</td>
//             </tr>
//              <tr className="bg-gray-50 border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">04:45 PM - 05:30 PM</td>
//               <td className="px-6 py-4">Panel Discussion – “Digital Twins in Practice: Challenges and Human-Centered Perspectives”</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>

//     {/* --- Day 2 --- */}
//     <div data-aos="fade-up" data-aos-delay="200">
//       <h3 className="text-2xl font-semibold text-gray-800 mb-6">Day 2: Advanced Topics and Hands-on Sessions</h3>
//        <div className="overflow-x-auto rounded-lg shadow-md">
//         <table className="min-w-full text-left text-sm whitespace-nowrap">
//           <thead className="bg-gray-800 text-white uppercase tracking-wider">
//             <tr>
//               <th className="px-6 py-3 font-medium">Time</th>
//               <th className="px-6 py-3 font-medium">Content</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">09:00 AM - 09:45 AM</td>
//               <td className="px-6 py-4">Lecture 8 – A Hybrid Approach to Automated Model Generation for Digital Twins</td>
//             </tr>
//             <tr className="bg-gray-50 border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">09:45 AM - 10:30 AM</td>
//               <td className="px-6 py-4">Lecture 9 – Human-in-the-Loop and Hardware-in-the-Loop Integration</td>
//             </tr>
//             <tr className="bg-blue-50 border-b">
//               <td className="px-6 py-4 font-semibold text-blue-800">10:30 AM - 10:45 AM</td>
//               <td className="px-6 py-4 font-medium text-blue-800">Tea Break</td>
//             </tr>
//             <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">10:45 AM - 11:30 AM</td>
//               <td className="px-6 py-4">Lecture 10 – AI-Driven Digital Twins: Learning, Adaptation, and Decision Support</td>
//             </tr>
//             <tr className="bg-gray-50 border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">11:30 AM - 12:15 PM</td>
//               <td className="px-6 py-4">Panel Discussion – “Future Research Horizons in Digital Twin Modeling”</td>
//             </tr>
//             <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">12:15 PM - 01:00 PM</td>
//               <td className="px-6 py-4">Student Research Presentations – Session</td>
//             </tr>
//             <tr className="bg-green-50 border-b">
//               <td className="px-6 py-4 font-semibold text-green-800">01:00 PM - 02:00 PM</td>
//               <td className="px-6 py-4 font-medium text-green-800">Lunch Break</td>
//             </tr>
//              <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">02:00 PM - 03:15 PM</td>
//               <td className="px-6 py-4">Hands on Session - Digital Twin Modelling</td>
//             </tr>
//              <tr className="bg-blue-50 border-b">
//               <td className="px-6 py-4 font-semibold text-blue-800">03:15 PM - 03:30 PM</td>
//               <td className="px-6 py-4 font-medium text-blue-800">Tea Break</td>
//             </tr>
//              <tr className="bg-gray-50 border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">03:30 PM - 05:00 PM</td>
//               <td className="px-6 py-4">Hands on Session - Digital Twin Modelling</td>
//             </tr>
//             <tr className="border-b">
//               <td className="px-6 py-4 font-semibold text-gray-800">05:00 PM - 05:30 PM</td>
//               <td className="px-6 py-4">Concluding Remarks and Certificate Distribution</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </section>
  

//   {/* --- Organisers Section --- */}
// <section id="organisers" className="py-20 px-6">
//   <div className="max-w-5xl mx-auto text-center">
//     <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
//       Meet the Organisers
//     </h2>
    
//     {/* Faculty Advisor */}
//     <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
//       <h3 className="text-2xl font-semibold text-blue-700 mb-6">Faculty Advisor</h3>
//       <div className="inline-block">
//         <img
//           src={process.env.PUBLIC_URL + '/images/s9.png'}
//           alt="Faculty Advisor"
//           className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
//         />
//         <a 
//           href="#" 
//           target="_blank" 
//           rel="noopener noreferrer" 
//           className="text-xl font-semibold text-gray-800 hover:underline"
//         >
//           Saurabh Jain
//         </a>
//         <p className="text-gray-600">Assistant Professor, IEOR, IITB.</p>
//       </div>
//     </div>

//     {/* Student Organising Committee */}
//     <div data-aos="fade-up" data-aos-delay="200">
//       <h3 className="text-2xl font-semibold text-blue-700 mb-6">Student Organising Committee</h3>
      
//       {/* Container for student profiles with images */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 max-w-4xl mx-auto">
        
//         {/* Student 1 */}
//         <div className="flex flex-col items-center">
//           <img src={process.env.PUBLIC_URL + '/images/varinder.jpg'} alt="Varinder Singh" className="w-24 h-24 rounded-full object-cover shadow-md mb-2"/>
//           <a href="https://www.linkedin.com/in/varinder-singh-9185552a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">Varinder Singh</a>
//         </div>
        
//         {/* Student 2 */}
//         <div className="flex flex-col items-center">
//           <img src={process.env.PUBLIC_URL + '/images/Priyansh.jpg'} alt="Priyansh Srivastava" className="w-24 h-24 rounded-full object-cover shadow-md mb-2"/>
//           <a href="https://www.linkedin.com/in/priyansh-srivastava-2b67891bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">Priyansh Srivastava</a>
//         </div>

//         {/* Student 3 */}
//         <div className="flex flex-col items-center">
//           <img src={process.env.PUBLIC_URL + '/images/sid.png'} alt="Siddhesh Madkaikar" className="w-24 h-24 rounded-full object-cover shadow-md mb-2"/>
//           <a href="https://www.linkedin.com/in/siddhesh-madkaikar-122037242/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">Siddhesh Madkaikar</a>
//         </div>

//         {/* Student 4 */}
//         <div className="flex flex-col items-center">
//           <img src={process.env.PUBLIC_URL + '/images/chanchal.jpeg'} alt="Chanchal Rai" className="w-24 h-24 rounded-full object-cover shadow-md mb-2"/>
//           <a href="https://www.linkedin.com/in/chanchal-rai-b62bb0212/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">Chanchal Rai</a>
//         </div>

       
//       </div>
//     </div>
//   </div>
// </section>



//       <section id="venue" className="py-20 bg-gray-100 px-6">
//         <div className="mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">
//             Workshop Venue
//           </h2>
//           <p className="text-lg text-gray-700 text-center mb-8" data-aos="fade-up" data-aos-delay="100">
//             F.C Kohli Auditorium, KReSIT Building, IIT Bombay, Powai, Mumbai, Maharashtra 400076
//           </p>
//           <div className="rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="200">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4803266649387!2d72.91324967520671!3d19.130440782085454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f697939a83%3A0xbda25f655512b26e!2sF.C.%20Kohli%20Auditorium!5e0!3m2!1sen!2sin!4v1758105199740!5m2!1sen!2sin"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="F.C Kohli Auditorium, IIT Bombay"
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       <section
//         id="register"
//         className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-600 text-white text-center px-6"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
//         <p className="max-w-2xl mx-auto mb-8">
//           Reserve your seat and be part of the future of Digital Twin innovations.
//         </p>
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
//         >
//           Register
//         </button>
//       </section>

//       {/* --- Footer --- */}
//       <footer className="py-12 bg-gray-900 text-gray-400">
//   <div className="mx-auto px-4 sm:px-6 lg:px-8">

//     {/* Logos Container */}
//     <div className="flex justify-center items-center gap-x-12 mb-8">
//       {/* IITB Logo */}
//       <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer">
//         <img 
//           src={process.env.PUBLIC_URL + '/images/iitb.png'} 
//           alt="IIT Bombay Logo"
//           // Subtle styling: grayscale, semi-transparent, and brightens on hover
//           className="h-14 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//         />
//       </a>
//       {/* IEOR Logo */}
//       <a href="https://www.ieor.iitb.ac.in/" target="_blank" rel="noopener noreferrer">
//         <img 
//           src={process.env.PUBLIC_URL + '/images/ieor_logo.png'} 
//           alt="IEOR Department Logo"
//           className="h-14 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//         />
//       </a>
//     </div>

//     {/* Footer Text */}
//     <p className="text-center text-sm">
//       © 2025 Digital Twin Workshop | Department of IEOR, IIT Bombay
//     </p>

//   </div>
// </footer>

//       <RegisterModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//     </div>
//   );
// }

// export default App;









import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import RegisterModal from "./register";


// --- Navbar Component ---
const Navbar = ({ isNavOpen, setNavOpen }) => (
  <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 shadow-md">
    <div className="mx-auto px-1 sm:px-2 lg:px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center gap-3">
            <img 
              src={process.env.PUBLIC_URL + '/images/iitb.png'} 
              alt="IIT Bombay Logo" 
              className="h-14" 
            />
            <span className="font-bold text-xl text-gray-800">Digital Twin 2025, IEOR IITB</span>
          </a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-4">
            <a href="#about" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#topics" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Topics</a>
            <a href="#speakers" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Speakers</a>
            <a href="#schedule" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Schedule</a>
            <a href="#venue" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Venue</a>
            <a href="#register" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Register</a>
            <img 
              src={process.env.PUBLIC_URL + '/images/ieor_logo.png'} 
              alt="Second Logo" 
              className="h-14" 
            />
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={() => setNavOpen(!isNavOpen)}
            type="button"
            className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-300 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isNavOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    {isNavOpen && (
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#topics" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Topics</a>
          <a href="#speakers" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Speakers</a>
          <a href="#schedule" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Schedule</a>
          <a href="#venue" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Venue</a>
          <a href="#register" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Register</a>
        <div className="pt-4 pb-2 border-t border-gray-200">
            <div className="flex justify-center">
              <img 
                src={process.env.PUBLIC_URL + '/images/ieor_logo.png'} 
                alt="Second Logo" 
                className="h-10" 
              />
            </div>
          </div>


        </div>
      </div>
    )}
  </nav>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="text-gray-900">
      <Navbar isNavOpen={isNavOpen} setNavOpen={setNavOpen} />

      {/* --- Hero Section --- */}
       <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center pt-16 text-center text-white relative overflow-hidden"
      >
        {/* ✅ --- VIDEO ELEMENT ADDED HERE --- ✅ */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={process.env.PUBLIC_URL + '/images/vid.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 flex w-full flex-col items-center justify-center px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-shadow-lg">Digital Twin Modeling Workshop</h1>
          <p className="max-w-2xl text-lg mb-6 text-shadow-md">
            "The Digital Twin Modeling: Bridging Simulation Modelling and Real-World Systems" workshop offers an in-depth exploration of how Digital Twin technology revolutionizes how complex physical systems are designed, monitored, and optimized.
          </p>
          <div className="mb-8 space-y-2 text-lg font-medium">
            <p className="px-4 py-2 rounded-xl bg-white/30 backdrop-blur-md shadow-md">
              Oct 11-12, 2025 <span className="font-semibold"> · IEOR, IIT Bombay</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200 transition-transform transform hover:scale-105"
            >
              Register
            </button>
            <a
              href="#about"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-20 px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">About the Workshop</h2>

        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-left">
          <li>
            <strong>Explore Digital Twins:</strong> Dive into dynamic virtual models of physical systems, continuously updated with real-time data to drive smarter decision-making,predictive maintenance and system optimisation.
          </li>
          <li>
            <strong>Build Practical Skills:</strong> Learn to create Digital Twins that effectively bridge the gap between simulation models and real-world applications through hands-on sessions.
          </li>
          <li>
            <strong>Master Core Topics:</strong> Cover key areas including advanced simulation, real-time data integration, AI-driven analytics, and human-centered system design.
          </li>
          <li>
            <strong>Solve Real-World Challenges:</strong> Tackle critical issues like model credibility, system interoperability, and integrating human-in-the-loop systems, designing human centric solutions.
          </li>
          <li>
            <strong>Learn from Experts:</strong> Engage with leading researchers and industry practitioners through a mix of expert talks, panel discussions, and research presentations.
          </li>
          <li>
            <strong>Broaden Your Impact:</strong> Gain insights to implement Digital Twin solutions across high-growth industries like manufacturing, logistics, healthcare, and smart infrastructure.
          </li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center shadow-sm max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Workshop Details</h3>
          <p className="text-lg mb-2">📍 Venue: <span className="font-medium">F.C Kohli Auditorium, IIT Bombay.</span></p>
          <p className="text-lg mb-2">📅 Dates: <span className="font-medium">11th & 12th October 2025</span></p>
          <p className="text-lg">⏰ Timings: <span className="font-medium">9:30 AM – 5:30 PM</span></p>
        </div>
      </section>

      {/* --- Who Should Attend Section --- */}
{/* --- Who Should Attend Section --- */}
<section id="who-should-attend" className="py-20 bg-gray-100 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
      Who Should Attend?
    </h2>
    
    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
      This workshop is designed for a diverse audience of professionals, researchers, and students who are passionate about leveraging cutting-edge technology to model, analyze, and optimize complex systems.
    </p>

    {/* Sections are now stacked vertically and centered */}
    <div className="space-y-12">

      {/* Column 1: Industry */}
      <div data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Industry Professionals & Technologists</h3>
        <div className="inline-block text-left">
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              <li><strong>Engineers</strong> in Industrial, Systems, Mechanical, and Manufacturing fields.</li>
              <li><strong>Data Scientists, Analysts, & ML Engineers</strong> developing predictive models.</li>
              <li><strong>Software Developers & Solutions Architects</strong> building IT infrastructure.</li>
              <li><strong>R&D, Product, & Operations Managers</strong> overseeing complex systems.</li>
              <li><strong>Technology Strategists & Consultants</strong> advising on Industry 4.0.</li>
            </ul>
        </div>
      </div>

      {/* Column 2: Academia */}
      <div data-aos="fade-up" data-aos-delay="300">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Academics & Researchers</h3>
        <div className="inline-block text-left">
            <ul className="list-disc list-inside space-y-3 text-gray-800">
              <li><strong>Graduate Students</strong> (Master's and Ph.D.) in relevant fields.</li>
              <li><strong>Faculty Members & Research Scholars</strong> exploring new frontiers.</li>
              <li><strong>Senior Undergraduate Students</strong> with a strong interest in simulation.</li>
            </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>

      {/* --- Topics Section --- */}
      <section id="topics" className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">Topics Covered</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
          {["Fundamentals and Concepts of Digital Twins.", "Data Integration and System Interoperability.", "Model Validation, Optimization, and Automation.", "Human Factors and Interaction in Digital Twins.", "AI and Decision Support in Digital Twins.", "Practical Applications and Hands-on Modeling."].map((topic, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* --- Speakers Section (MODIFIED) --- */}
      <section id="speakers" className="py-20 px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Speakers
        </h2>

        {(() => {
          // ✅ CHANGE 1: Updated `imageUrl` to use local paths.
          const speakers = [
            { name: 'Mamadou Kaba Traoré', institution: 'University of Bordeaux, France', profileUrl: 'https://www.ims-bordeaux.fr/researchers-and-publications/traore-mamadou/', mode: 'In-person', imageUrl: process.env.PUBLIC_URL +'/images/s1.jpeg' },
            { name: 'Lora Cavuoto', institution: 'University of Buffalo, USA', profileUrl: 'https://engineering.buffalo.edu/home/research/faculty/profiles.host.html/content/shared/engineering/industrial-systems/profiles/faculty/cavuoto-lora.html', mode: 'Hybrid', imageUrl: process.env.PUBLIC_URL +'/images/s2.jpg' },
            { name: 'Navonil Mustafee', institution: 'University of Exeter, UK', profileUrl: 'https://experts.exeter.ac.uk/22797-nav-mustafee', mode: 'Hybrid', imageUrl: process.env.PUBLIC_URL +'/images/s3.jpeg' },
            { name: 'Seunghan Lee', institution: 'Mississippi State University, USA', profileUrl: 'https://www.ise.msstate.edu/people/faculty/seunghan-lee/', mode: 'Hybrid', imageUrl: process.env.PUBLIC_URL +'/images/s4.jpeg' },
            { name: 'Varun Ramamohan', institution: 'IIT Delhi, India', profileUrl: 'https://mech.iitd.ac.in/faculty-profile/189', mode: 'In-person', imageUrl: process.env.PUBLIC_URL + '/images/s5.jpg' },
            { name: 'Souvik Barat', institution: 'TCS, India', profileUrl: 'https://www.linkedin.com/in/souvikbarat/', mode: 'In-person', imageUrl: process.env.PUBLIC_URL +'/images/s7.jpeg' },
            { name: 'Jayendran Venkateswaran', institution: 'IIT Bombay, India', profileUrl: 'https://www.ieor.iitb.ac.in/~jayendran', mode: 'In-person', imageUrl: process.env.PUBLIC_URL + '/images/s8.jpg' },
            { name: 'Saurabh Jain', institution: 'IIT Bombay, India', profileUrl: 'https://www.ieor.iitb.ac.in/saurabh', mode: 'In-person', imageUrl: process.env.PUBLIC_URL + '/images/s9.png' }
          ];

          return (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="text-center bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col items-center justify-between">
                  <div>
                    {/* ✅ CHANGE 2: The <img> tag now uses the local path from your data. */}
                    <img
                      src={speaker.imageUrl}
                      alt={`${speaker.name}`}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-md"
                    />
                    <h3 className="font-semibold text-xl">{speaker.name}</h3>
                    <p className="text-gray-500 mb-4">{speaker.institution}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
                      speaker.mode === 'Hybrid'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {speaker.mode}
                    </span>

                    <a
                      href={speaker.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors"
                    >
                      View Profile
                    </a>
                  </div>

                </div>
              ))}
            </div>
          );
        })()}
      </section>

      {/* --- Workshop Schedule Section --- */}
<section id="schedule" className="py-20 bg-gray-100 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
      Workshop Schedule
    </h2>

    {/* --- Day 1 --- */}
    <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Day 1: Bridging Simulation modelling and Real-World Systems</h3>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-800 text-white uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3 font-medium">Time</th>
              <th className="px-6 py-3 font-medium">Content</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">09:00 AM - 09:15 AM</td>
              <td className="px-6 py-4">Workshop Inauguration & Welcome Address</td>
            </tr>
            <tr className="bg-gray-50 border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">09:15 AM - 10:00 AM</td>
              <td className="px-6 py-4">Lecture 1 – Introduction to Digital Twins: Concepts, Taxonomy, and Use Cases</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">10:00 AM - 10:45 AM</td>
              <td className="px-6 py-4">Lecture 2 – Core Simulation Methods: DES, ABM, System Dynamics, and Physics-Based Modeling</td>
            </tr>
            <tr className="bg-blue-50 border-b">
              <td className="px-6 py-4 font-semibold text-blue-800">10:45 AM - 11:00 AM</td>
              <td className="px-6 py-4 font-medium text-blue-800">Tea Break</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">11:00 AM - 11:45 AM</td>
              <td className="px-6 py-4">Lecture 3 – Real-Time Data Integration: Synchronous vs Asynchronous Coupling</td>
            </tr>
            <tr className="bg-gray-50 border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">11:45 AM - 12:30 PM</td>
              <td className="px-6 py-4">Lecture 4 – Co-Simulation Architectures and Interoperability (HLA, RTI)</td>
            </tr>
            <tr className="bg-green-50 border-b">
              <td className="px-6 py-4 font-semibold text-green-800">12:30 PM - 02:00 PM</td>
              <td className="px-6 py-4 font-medium text-green-800">Lunch Break</td>
            </tr>
             <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">02:00 PM - 02:45 PM</td>
              <td className="px-6 py-4">Lecture 5 – Verification & Validation in Digital Twin Environments: Ensuring Model Credibility</td>
            </tr>
             <tr className="bg-gray-50 border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">02:45 PM - 03:30 PM</td>
              <td className="px-6 py-4">Lecture 6 – Integrating Simulation-Based Optimization in Digital Twin Frameworks for Complex Systems</td>
            </tr>
             <tr className="bg-blue-50 border-b">
              <td className="px-6 py-4 font-semibold text-blue-800">03:30 PM - 04:00 PM</td>
              <td className="px-6 py-4 font-medium text-blue-800">Tea Break</td>
            </tr>
             <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">04:00 PM - 04:45 PM</td>
              <td className="px-6 py-4">Lecture 7 – Human-Centered Design and Human Factors in Digital Twins</td>
            </tr>
             <tr className="bg-gray-50 border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">04:45 PM - 05:30 PM</td>
              <td className="px-6 py-4">Panel Discussion – “Digital Twins in Practice: Challenges and Human-Centered Perspectives”</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* --- Day 2 --- */}
    <div data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Day 2: Advanced Topics and Hands-on Sessions</h3>
       <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-800 text-white uppercase tracking-wider">
            <tr>
              <th className="px-6 py-3 font-medium">Time</th>
              <th className="px-6 py-3 font-medium">Content</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">09:00 AM - 09:45 AM</td>
              <td className="px-6 py-4">Lecture 8 – A Hybrid Approach to Automated Model Generation for Digital Twins</td>
            </tr>
            <tr className="bg-gray-50 border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">09:45 AM - 10:30 AM</td>
              <td className="px-6 py-4">Lecture 9 – Human-in-the-Loop and Hardware-in-the-Loop Integration</td>
            </tr>
            <tr className="bg-blue-50 border-b">
              <td className="px-6 py-4 font-semibold text-blue-800">10:30 AM - 10:45 AM</td>
              <td className="px-6 py-4 font-medium text-blue-800">Tea Break</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">10:45 AM - 11:30 AM</td>
              <td className="px-6 py-4">Lecture 10 – AI-Driven Digital Twins: Learning, Adaptation, and Decision Support</td>
            </tr>
            <tr className="bg-gray-50 border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">11:30 AM - 12:15 PM</td>
              <td className="px-6 py-4">Panel Discussion – “Future Research Horizons in Digital Twin Modeling”</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">12:15 PM - 01:00 PM</td>
              <td className="px-6 py-4">Student Research Presentations – Session</td>
            </tr>
            <tr className="bg-green-50 border-b">
              <td className="px-6 py-4 font-semibold text-green-800">01:00 PM - 02:00 PM</td>
              <td className="px-6 py-4 font-medium text-green-800">Lunch Break</td>
            </tr>
             <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">02:00 PM - 03:15 PM</td>
              <td className="px-6 py-4">Hands on Session - Digital Twin Modelling</td>
            </tr>
             <tr className="bg-blue-50 border-b">
              <td className="px-6 py-4 font-semibold text-blue-800">03:15 PM - 03:30 PM</td>
              <td className="px-6 py-4 font-medium text-blue-800">Tea Break</td>
            </tr>
             <tr className="bg-gray-50 border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">03:30 PM - 05:00 PM</td>
              <td className="px-6 py-4">Hands on Session - Digital Twin Modelling</td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 font-semibold text-gray-800">05:00 PM - 05:30 PM</td>
              <td className="px-6 py-4">Concluding Remarks and Certificate Distribution</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
  

  {/* --- Organisers Section --- */}
<section id="organisers" className="py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12" data-aos="fade-up">
      Meet the Organisers
    </h2>
    
    {/* Faculty Advisor */}
    <div className="mb-16" data-aos="fade-up" data-aos-delay="100">
      <h3 className="text-2xl font-semibold text-blue-700 mb-6">Faculty Advisor</h3>
      <div className="inline-block">
        <img
          src={process.env.PUBLIC_URL + '/images/s9.png'}
          alt="Faculty Advisor"
          className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
        />
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-xl font-semibold text-gray-800 hover:underline"
        >
          Saurabh Jain
        </a>
        <p className="text-gray-600">Assistant Professor, IEOR, IITB.</p>
      </div>
    </div>

    {/* Student Organising Committee */}
    <div data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-2xl font-semibold text-blue-700 mb-6">Student Organising Committee</h3>
      
      {/* Container for student profiles with images */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 max-w-4xl mx-auto">
        
        {/* Student 1 */}
        <div className="flex flex-col items-center">
          <img src={process.env.PUBLIC_URL + '/images/varinder.jpg'} alt="Varinder Singh" className="w-24 h-24 rounded-full object-cover shadow-md mb-2"/>
          <a href="https://www.linkedin.com/in/varinder-singh-9185552a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">Varinder Singh</a>
        </div>
        
        {/* Student 2 */}
        <div className="flex flex-col items-center">
          <img src={process.env.PUBLIC_URL + '/images/Priyansh.jpg'} alt="Priyansh Srivastava" className="w-24 h-24 rounded-full object-cover shadow-md mb-2"/>
          <a href="https://www.linkedin.com/in/priyansh-srivastava-2b67891bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">Priyansh Srivastava</a>
        </div>

        {/* Student 3 */}
        <div className="flex flex-col items-center">
          <img src={process.env.PUBLIC_URL + '/images/sid.png'} alt="Siddhesh Madkaikar" className="w-24 h-24 rounded-full object-cover shadow-md mb-2"/>
          <a href="https://www.linkedin.com/in/siddhesh-madkaikar-122037242/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">Siddhesh Madkaikar</a>
        </div>

        {/* Student 4 */}
        <div className="flex flex-col items-center">
          <img src={process.env.PUBLIC_URL + '/images/chanchal.jpeg'} alt="Chanchal Rai" className="w-24 h-24 rounded-full object-cover shadow-md mb-2"/>
          <a href="https://www.linkedin.com/in/chanchal-rai-b62bb0212/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:underline">Chanchal Rai</a>
        </div>

       
      </div>
    </div>
  </div>
</section>



      <section id="venue" className="py-20 bg-gray-100 px-6">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">
            Workshop Venue
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8" data-aos="fade-up" data-aos-delay="100">
            F.C Kohli Auditorium, KReSIT Building, IIT Bombay, Powai, Mumbai, Maharashtra 400076
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4803266649387!2d72.91324967520671!3d19.130440782085454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f697939a83%3A0xbda25f655512b26e!2sF.C.%20Kohli%20Auditorium!5e0!3m2!1sen!2sin!4v1758105199740!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="F.C Kohli Auditorium, IIT Bombay"
            ></iframe>
          </div>
        </div>
      </section>

      <section
        id="register"
        className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-600 text-white text-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Reserve your seat and be part of the future of Digital Twin innovations.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
        >
          Register
        </button>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 bg-gray-900 text-gray-400">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">

    {/* Logos Container */}
    <div className="flex justify-center items-center gap-x-12 mb-8">
      {/* IITB Logo */}
      <a href="https://www.iitb.ac.in/" target="_blank" rel="noopener noreferrer">
        <img 
          src={process.env.PUBLIC_URL + '/images/iitb.png'} 
          alt="IIT Bombay Logo"
          // Subtle styling: grayscale, semi-transparent, and brightens on hover
          className="h-14 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </a>
      {/* IEOR Logo */}
      <a href="https://www.ieor.iitb.ac.in/" target="_blank" rel="noopener noreferrer">
        <img 
          src={process.env.PUBLIC_URL + '/images/ieor_logo.png'} 
          alt="IEOR Department Logo"
          className="h-14 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        />
      </a>
    </div>

    {/* Footer Text */}
    <p className="text-center text-sm">
      © 2025 Digital Twin Workshop | Department of IEOR, IIT Bombay
    </p>

  </div>
</footer>

      <RegisterModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;