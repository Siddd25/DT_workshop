
// import React, { useState } from "react";

// const RegisterModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     organisation: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await fetch("https://script.google.com/macros/s/AKfycbwzp27tet8vu3tRdpeob1zpxp0laVloFceIeFqu-2B3o_1EZgV8QkGaGVGXDLpbSlBY/exec", {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       alert("✅ Registered Successfully!");
//       onClose();
//     } catch (error) {
//       alert(error)
//       alert("❌ Something went wrong!");
//     }
//   };



//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       {/* Bigger Modal Box */}
//       <div className="bg-white rounded-2xl p-10 w-full max-w-2xl shadow-2xl relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
//         >
//           &times;
//         </button>

//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
//           Workshop Registration
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Organization
//             </label>
//             <input
//               type="text"
//               name="organization"
//               placeholder="Your organization / college"
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone"
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterModal;




import React, { useState } from "react";

const RegisterModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    contact: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const API_URL = "https://script.google.com/macros/s/AKfycbyz5QcXNyreyWKMiUrqKMPNB7ErSBSUPjjbqFlYdm4Dcmvx82Kvddb74BeZmoYNQT0g/exec";
    
    console.log("=== FORM SUBMISSION DEBUG ===");
    console.log("🎯 Sending data to URL:", API_URL);
    console.log("📦 Form data being sent:", formData);
    
    try {
      // Method 1: Try normal fetch first
      console.log("🚀 Attempting normal fetch...");
      
      let response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log("✅ SUCCESS with normal fetch:", result);
        
        if (result.status === "success") {
          alert("✅ Registered Successfully! Data saved to sheet.");
          setFormData({ name: "", email: "", organisation: "", contact: "" });
          onClose();
          return;
        } else {
          alert(`❌ Error: ${result.message}`);
          return;
        }
      }
      
    } catch (corsError) {
      console.log("❌ CORS error with normal fetch, trying no-cors mode...");
      
      try {
        // Method 2: Use no-cors mode as fallback
        await fetch(API_URL, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        console.log("✅ Request sent with no-cors mode (can't read response)");
        alert("✅ Registration successfull, we will contact you shortly!");
        setFormData({ name: "", email: "", organisation: "", contact: "" });
        onClose();
        
      } catch (finalError) {
        console.error("❌ Both methods failed:", finalError);
        alert("❌ Failed to submit. Please try again or contact support.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-10 w-full max-w-2xl shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          disabled={isSubmitting}
        >
          &times;
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Workshop Registration
        </h2>
        
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Organization
            </label>
            <input
              type="text"
              name="organisation"
              value={formData.organisation}
              placeholder="Your organization / college"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled={isSubmitting}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              placeholder="Enter your phone"
              onChange={handleChange}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;