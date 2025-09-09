import logo from './logo.svg';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect,useState } from 'react';
import Navbar from "./navbar";
import RegisterModal from "./register";

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);


  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="bg-gray-50 text-gray-900">
      {/* Hero */}
    <Navbar />
      <section id ="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6">
        <h1 className="text-5xl font-extrabold mb-4">Workshop on Digital Twin</h1>
        <p className="max-w-2xl text-lg mb-8">
          Explore Digital Twin technologies, real-time data, AI integration, and industrial applications.
        </p>
        <div className="flex gap-4">
          <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
      >
        Register
      
        </button>
        <RegisterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <a
            href="#about"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">About the Workshop</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          This workshop aims to bring together researchers, practitioners, and
          industry experts to share insights and innovations in Digital Twin
          technologies across domains like smart cities, healthcare, and industrial systems.
        </p>
      </section>

      {/* Topics */}
      <section id="topics" className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12"  data-aos="fade-up">Topics Covered</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            "Smart City Digital Twins",
            "AI + Machine Learning",
            "IoT & Cyber-Physical Systems",
            "Healthcare Applications",
            "Industrial Automation",
            "Simulation & Visualization",
          ].map((topic, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {topic}
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section id = "speakers" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Speakers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {["Dr. A. Kumar", "Prof. B. Mehta", "Dr. C. Lee"].map((name, idx) => (
            <div
              key={idx}
              className="text-center bg-white p-6 rounded-2xl shadow hover:shadow-md"
            >
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-xl">{name}</h3>
              <p className="text-gray-500">Institution / Organization</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration */}
      <section
        id="register"
        className="py-20 bg-blue-600 text-white text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-6">Register Now</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Reserve your seat and be part of the future of Digital Twin innovations.
        </p>
       
         <button
        onClick={() => setIsOpen(true)}
        className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow hover:bg-gray-200"
      >
        Register
      
        </button>
        <RegisterModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-gray-400">
        <p>© 2025 Workshop on Digital Twin. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
