// import logo from './logo.svg';
// import './App.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import { useEffect,useState } from 'react';
// import Navbar from "./navbar";
// import RegisterModal from "./register";
// import heroBackground from './assets/bg.jpg';

// function App() {
//   useEffect(() => {
//   AOS.init({ duration: 1000, once: true });
// }, []);


//   const [isOpen, setIsOpen] = useState(false);

//   return (

//     <div className="bg-gray-50 text-gray-900">
//       {/* Hero */}
//     <Navbar />
//   //    <section id ="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6">
//           <section
//         id="home"
//         className="min-h-screen flex flex-col items-center justify-center text-center text-white relative"
//         style={{
//           backgroundImage: `url(${heroBackground})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Add a semi-transparent overlay to make text more readable */}
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <h1 className="text-5xl font-extrabold mb-4">Workshop on Digital Twin</h1>
//         <p className="max-w-2xl text-lg mb-8">
//           Explore Digital Twin technologies, real-time data, AI integration, and industrial applications.
//         </p>
//         <div className="flex gap-4">
//           <button
//         onClick={() => setIsOpen(true)}
//         className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
//       >
//         Register
      
//         </button>
//         <RegisterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
//           <a
//             href="#about"
//             className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600"
//           >
//             Learn More
//           </a>
//         </div>
//       </section>


//       {/* About */}
//       <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">About the Workshop</h2>
//         <p className="text-lg text-gray-700 leading-relaxed text-center">
//           This workshop aims to bring together researchers, practitioners, and
//           industry experts to share insights and innovations in Digital Twin
//           technologies across domains like smart cities, healthcare, and industrial systems.
//         </p>
//       </section>

//       {/* Topics */}
//       <section id="topics" className="py-20 bg-gray-100 px-6">
//         <h2 className="text-3xl font-bold text-center mb-12"  data-aos="fade-up">Topics Covered</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {[
//             "Smart City Digital Twins",
//             "AI + Machine Learning",
//             "IoT & Cyber-Physical Systems",
//             "Healthcare Applications",
//             "Industrial Automation",
//             "Simulation & Visualization",
//           ].map((topic, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
//             >
//               {topic}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Speakers */}
//       <section id = "speakers" className="py-20 px-6 max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Speakers</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {["Dr. A. Kumar", "Prof. B. Mehta", "Dr. C. Lee"].map((name, idx) => (
//             <div
//               key={idx}
//               className="text-center bg-white p-6 rounded-2xl shadow hover:shadow-md"
//             >
//               <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
//               <h3 className="font-semibold text-xl">{name}</h3>
//               <p className="text-gray-500">Institution / Organization</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Registration */}
//       <section
//         id="register"
//         className="py-20 bg-blue-600 text-white text-center px-6"
//       >
//         <h2 className="text-3xl font-bold mb-6">Register Now</h2>
//         <p className="max-w-2xl mx-auto mb-8">
//           Reserve your seat and be part of the future of Digital Twin innovations.
//         </p>
       
//          <button
//         onClick={() => setIsOpen(true)}
//         className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
//       >
//         Register
      
//         </button>
//         <RegisterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      
//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center bg-gray-900 text-gray-400">
//         <p>© 2025 Workshop on Digital Twin. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }


// export default App;



import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import RegisterModal from "./register";
import heroBackground from './assets/bg2.jpg';

// --- Navbar Component (Moved outside for better performance) ---
const Navbar = ({ isNavOpen, setNavOpen }) => (
  <nav className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-40 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#home" className="font-bold text-xl text-gray-800">Digital Twin 2025</a>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#about" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#topics" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Topics</a>
            <a href="#speakers" className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Speakers</a>
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
          <a href="#about" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#topics" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Topics</a>
          <a href="#speakers" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Speakers</a>
          <a href="#register" className="text-gray-600 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Register</a>
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
  const [isNavOpen, setNavOpen] = useState(false); // State for mobile navbar

  return (
    <div className= "text-gray-900">
      <Navbar isNavOpen={isNavOpen} setNavOpen={setNavOpen} />

      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-end pb-24 text-center text-white relative overflow-hidden"
      >
        {/* The <img> tag now acts as the background */}
        <img 
          src={heroBackground} 
          alt="Digital and real-world technology collage"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        {/* This container properly layers content on top of the overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6">
          
          <p className="max-w-2xl text-lg mb-8">
            Join the Workshop on Digital Twin to explore Digital Twin technologies, real-time data, AI integration, and industrial applications.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setModalOpen(true)} // <-- FIXED: Was setIsOpen, now setModalOpen
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
            >
              Register
            </button>
            {/* REMOVED: Misplaced modal component was here */}
            <a
              href="#about"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" data-aos="fade-up">About the Workshop</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          This workshop aims to bring together researchers, practitioners, and industry experts to share insights and innovations in Digital Twin technologies across domains like smart cities, healthcare, and industrial systems.
        </p>
      </section>

      {/* --- Topics Section --- */}
      <section id="topics" className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">Topics Covered</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {["Smart City Digital Twins", "AI + Machine Learning", "IoT & Cyber-Physical Systems", "Healthcare Applications", "Industrial Automation", "Simulation & Visualization"].map((topic, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* --- Speakers Section --- */}
      <section id="speakers" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">Speakers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {["Dr. A. Kumar", "Prof. B. Mehta", "Dr. C. Lee"].map((name, idx) => (
            <div key={idx} className="text-center bg-white p-6 rounded-2xl shadow hover:shadow-md">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-xl">{name}</h3>
              <p className="text-gray-500">Institution / Organization</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Registration Section --- */}
      <section id="register" className="py-20 bg-blue-600 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Reserve your seat and be part of the future of Digital Twin innovations.
        </p>
        <button
          onClick={() => setModalOpen(true)} // <-- FIXED: Was setIsOpen, now setModalOpen
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
        >
          Register
        </button>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 text-center bg-gray-900 text-gray-400">
        <p>© 2025 Workshop on Digital Twin. All rights reserved.</p>
      </footer>
      
      {/* --- Modal (Correctly placed at the top level) --- */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;