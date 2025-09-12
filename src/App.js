// import './App.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import { useEffect, useState } from 'react';
// import RegisterModal from "./register";

// // --- Navbar Component ---
// const Navbar = ({ isNavOpen, setNavOpen }) => (
//   <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 shadow-md">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex items-center justify-between h-16">
//         <div className="flex-shrink-0">
//           <a href="#home" className="font-bold text-xl text-gray-800">Digital Twin 2025</a>
//         </div>
//         <div className="hidden md:block">
//           <div className="ml-10 flex items-baseline space-x-4">
//             <a href="#about" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
//             <a href="#topics" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Topics</a>
//             <a href="#speakers" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Speakers</a>
//             <a href="#venue" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Venue</a>
//             <a href="#register" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Register</a>
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
//           <a href="#about" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
//           <a href="#topics" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Topics</a>
//           <a href="#speakers" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Speakers</a>
//           <a href="#venue" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Venue</a>
//           <a href="#register" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Register</a>
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
//         className="min-h-screen flex flex-col items-center justify-end pb-24 text-center text-white relative"
//       >
//         <div className="absolute inset-0 bg-black opacity-60"></div>
        
//         <div className="relative z-10 flex w-full flex-col items-center justify-center px-6">
//           <h1 className="text-5xl font-extrabold mb-4 text-shadow-lg">Digital Twin Modeling Workshop</h1>
//           <p className="max-w-2xl text-lg mb-6 text-shadow-md">
//             "The Digital Twin Modeling: Bridging Simulation Modelling and Real-World Systems" workshop offers an in-depth exploration of how Digital Twin technology revolutionizes how complex physical systems are designed, monitored, and optimized.
//           </p>

//           {/* ✅ Workshop Details in Hero */}
//           <div className="mb-8 space-y-2 text-lg font-medium">
//             <p className="px-4 py-2 rounded-xl bg-white/30 backdrop-blur-md shadow-md">
//   Oct 11-12, 2025 <span className="font-semibold"> &middot; IIT Bombay</span>
// </p>
//             {/*<p>📅 Dates: <span className="font-semibold">11th & 12th October 2025</span></p>
//             <p>⏰ Timings: <span className="font-semibold">9:30 AM – 5:30 PM</span></p>*/}
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
//       <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">About the Workshop</h2>
        
//         {/* --- Replaced paragraph with bullet points --- */}
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

//         {/* ✅ Dedicated Workshop Details Section (Unchanged) */}
//         <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center shadow-sm max-w-2xl mx-auto">
//           <h3 className="text-2xl font-semibold text-blue-700 mb-4">Workshop Details</h3>
//           <p className="text-lg mb-2">📍 Venue: <span className="font-medium">F.C Kohli Auditorium, IIT Bombay.</span></p>
//           <p className="text-lg mb-2">📅 Dates: <span className="font-medium">11th & 12th October 2025</span></p>
//           <p className="text-lg">⏰ Timings: <span className="font-medium">9:30 AM – 5:30 PM</span></p>
//         </div>
//       </section>

//       {/* --- Topics Section --- */}
//       <section id="topics" className="py-20 bg-gray-100 px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">Topics Covered</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {["Fundamentals and Concepts of Digital Twins.", "Data Integration and System Interoperability.", "Model Validation, Optimization, and Automation.", "Human Factors and Interaction in Digital Twins.", "AI and Decision Support in Digital Twins.", "Practical Applications and Hands-on Modeling."].map((topic, idx) => (
//             <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
//               {topic}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- Speakers Section --- */}
// <section id="speakers" className="py-20 px-6 max-w-5xl mx-auto">
//   <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
//     Speakers
//   </h2>

//   {(() => {
//     // This is the full speaker list you provided
//     const speakers = [
//       { name: 'Mamadou Kaba Traoré', institution: 'University of Bordeaux, France', profileUrl: 'https://www.ims-bordeaux.fr/researchers-and-publications/traore-mamadou/', mode: 'In-person' },
//       { name: 'Lora Cavuoto', institution: 'University of Buffalo, USA', profileUrl: 'https://engineering.buffalo.edu/home/research/faculty/profiles.host.html/content/shared/engineering/industrial-systems/profiles/faculty/cavuoto-lora.html', mode: 'Hybrid' },
//       { name: 'Navonil Mustafee', institution: 'University of Exeter, UK', profileUrl: 'https://experts.exeter.ac.uk/22797-nav-mustafee', mode: 'Hybrid' },
//       { name: 'Seunghan Lee', institution: 'Mississippi State University, USA', profileUrl: 'https://www.ise.msstate.edu/people/faculty/seunghan-lee/', mode: 'Hybrid' },
//       { name: 'Varun Ramamohan', institution: 'IIT Delhi, India', profileUrl: 'https://mech.iitd.ac.in/faculty-profile/189', mode: 'In-person' },
//       { name: 'Neha Karanjkar', institution: 'IIT Goa, India', profileUrl: 'https://nehakaranjkar.github.io/', mode: 'In-person' },
//       { name: 'Souvik Barat', institution: 'TCS, India', profileUrl: 'https://www.linkedin.com/in/souvikbarat/', mode: 'In-person' },
//       { name: 'Jayendran Venkateswaran', institution: 'IIT Bombay, India', profileUrl: 'https://www.ieor.iitb.ac.in/~jayendran', mode: 'In-person' },
//       { name: 'Saurabh Jain', institution: 'IIT Bombay, India', profileUrl: 'https://www.ieor.iitb.ac.in/saurabh', mode: 'In-person' }
//     ];

//     return (
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {speakers.map((speaker, idx) => (
//           <div key={idx} className="text-center bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col items-center justify-between">
//             <div>
//               <h3 className="font-semibold text-xl">{speaker.name}</h3>
//               <p className="text-gray-500 mb-4">{speaker.institution}</p>
//             </div>

//             <div className="flex flex-col items-center">
//               {/* --- ADDED THIS PART --- */}
//               <span className={`text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${
//                 speaker.mode === 'Hybrid'
//                   ? 'bg-purple-100 text-purple-800'
//                   : 'bg-green-100 text-green-800'
//               }`}>
//                 {speaker.mode}
//               </span>
              
//               <a
//                 href={speaker.profileUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-blue-100 text-blue-800 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors"
//               >
//                 View Profile
//               </a>
//             </div>
            
//           </div>
//         ))}
//       </div>
//     );
//   })()}
// </section>
    

//      <section id="venue" className="py-20 bg-gray-100 px-6">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">
//             Workshop Venue
//           </h2>
//           <p className="text-lg text-gray-700 text-center mb-8" data-aos="fade-up" data-aos-delay="100">
//             F.C Kohli Auditorium, KReSIT Building, IIT Bombay, Powai, Mumbai, Maharashtra 400076
//           </p>
//           <div className="rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="200">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.480211004412!2d72.91324967425321!3d19.130445850262905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f697939a83%3A0xbda25f655512b26e!2sF.C.%20Kohli%20Auditorium!5e0!3m2!1sen!2sin!4v1757667228185!5m2!1sen!2sin"
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
//   id="register"
//   className="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-600 text-white text-center px-6"
// >
//   <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
//   <p className="max-w-2xl mx-auto mb-8">
//     Reserve your seat and be part of the future of Digital Twin innovations.
//   </p>
//   <button
//     onClick={() => setModalOpen(true)}
//     className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
//   >
//     Register
//   </button>
// </section>

//       {/* --- Footer --- */}
//       <footer className="py-8 text-center bg-gray-900 text-gray-400">
//         <p>@Digital Twin Worksop. IIT Bombay.</p>
//       </footer>
      
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
// --- Navbar Component ---
const Navbar = ({ isNavOpen, setNavOpen }) => (
  <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="#home" className="font-bold text-xl text-gray-800">Digital Twin 2025, IEOR IITB</a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#about" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#topics" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Topics</a>
            <a href="#speakers" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Speakers</a>
            <a href="#venue" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Venue</a>
            <a href="#register" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Register</a>
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
              <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="http://googleusercontent.com/images.google.com/9" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="http://googleusercontent.com/images.google.com/10" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    {/* This is the mobile menu section */}
    {isNavOpen && (
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* --- CHANGES APPLIED HERE --- */}
          <a href="#about" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#topics" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Topics</a>
          <a href="#speakers" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Speakers</a>
          <a href="#venue" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Venue</a>
          <a href="#register" onClick={() => setNavOpen(false)} className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Register</a>
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
        // --- CHANGE HERE: Centered content vertically and added top padding ---
        className="min-h-screen flex flex-col items-center justify-center pt-16 text-center text-white relative"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6">
          {/* --- CHANGE HERE: Made font size responsive --- */}
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
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
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

      {/* --- Topics Section --- */}
      <section id="topics" className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">Topics Covered</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Fundamentals and Concepts of Digital Twins.", "Data Integration and System Interoperability.", "Model Validation, Optimization, and Automation.", "Human Factors and Interaction in Digital Twins.", "AI and Decision Support in Digital Twins.", "Practical Applications and Hands-on Modeling."].map((topic, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* --- Speakers Section --- */}
      <section id="speakers" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Speakers
        </h2>

        {(() => {
          const speakers = [
            { name: 'Mamadou Kaba Traoré', institution: 'University of Bordeaux, France', profileUrl: 'https://www.ims-bordeaux.fr/researchers-and-publications/traore-mamadou/', mode: 'In-person' },
            { name: 'Lora Cavuoto', institution: 'University of Buffalo, USA', profileUrl: 'https://engineering.buffalo.edu/home/research/faculty/profiles.host.html/content/shared/engineering/industrial-systems/profiles/faculty/cavuoto-lora.html', mode: 'Hybrid' },
            { name: 'Navonil Mustafee', institution: 'University of Exeter, UK', profileUrl: 'https://experts.exeter.ac.uk/22797-nav-mustafee', mode: 'Hybrid' },
            { name: 'Seunghan Lee', institution: 'Mississippi State University, USA', profileUrl: 'https://www.ise.msstate.edu/people/faculty/seunghan-lee/', mode: 'Hybrid' },
            { name: 'Varun Ramamohan', institution: 'IIT Delhi, India', profileUrl: 'https://mech.iitd.ac.in/faculty-profile/189', mode: 'In-person' },
            { name: 'Neha Karanjkar', institution: 'IIT Goa, India', profileUrl: 'https://nehakaranjkar.github.io/', mode: 'In-person' },
            { name: 'Souvik Barat', institution: 'TCS, India', profileUrl: 'https://www.linkedin.com/in/souvikbarat/', mode: 'In-person' },
            { name: 'Jayendran Venkateswaran', institution: 'IIT Bombay, India', profileUrl: 'https://www.ieor.iitb.ac.in/~jayendran', mode: 'In-person' },
            { name: 'Saurabh Jain', institution: 'IIT Bombay, India', profileUrl: 'https://www.ieor.iitb.ac.in/saurabh', mode: 'In-person' }
          ];

          return (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
              {speakers.map((speaker, idx) => (
                <div key={idx} className="text-center bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col items-center justify-between">
                  <div>
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

      <section id="venue" className="py-20 bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">
            Workshop Venue
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8" data-aos="fade-up" data-aos-delay="100">
            F.C Kohli Auditorium, KReSIT Building, IIT Bombay, Powai, Mumbai, Maharashtra 400076
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl" data-aos="fade-up" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.480211004412!2d72.91324967425321!3d19.130445850262905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f697939a83%3A0xbda25f655512b26e!2sF.C.%20Kohli%20Auditorium!5e0!3m2!1sen!2sin!4v1757667228185!5m2!1sen!2sin"
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
      <footer className="py-8 text-center bg-gray-900 text-gray-400">
        <p>@Digital Twin Worksop. IEOR, IIT Bombay.</p>
      </footer>

      <RegisterModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;