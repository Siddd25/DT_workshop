// import React, { useState } from "react";

// const RegisterModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     organisation: "",
//     contact: "",
//     qualification: "",
//     accommodation: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Simplified qualification options
//   const qualifications = [
//     "High School",
//     "Diploma",
//     "B.Tech",
//     "B.E.",
//     "B.Sc.",
//     "BCA",
//     "BBA",
//     "M.Tech",
//     "M.E.",
//     "M.Sc.",
//     "MCA",
//     "MBA",
//     "Ph.D.",
//     "Other"
//   ];

//   // Validation functions
//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   };

//   const validateContact = (contact) => {
//     // Updated: Only accept exactly 10 digits
//     const contactRegex = /^[\d]{10}$/;
//     return contactRegex.test(contact.replace(/\s/g, ''));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
    
//     // Update form data
//     setFormData({ ...formData, [name]: value });
    
//     // Clear previous errors for this field
//     setErrors({ ...errors, [name]: "" });
    
//     // Real-time validation
//     if (name === 'email' && value) {
//       if (!validateEmail(value)) {
//         setErrors({ ...errors, email: "Please enter a valid email address" });
//       }
//     }
    
//     if (name === 'contact' && value) {
//       if (!validateContact(value)) {
//         setErrors({ ...errors, contact: "Please enter a valid Phone number" });
//       }
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }
    
//     if (!formData.contact.trim()) {
//       newErrors.contact = "Phone number is required";
//     } else if (!validateContact(formData.contact)) {
//       newErrors.contact = "Please enter a valid Phone number";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate form before submission
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     const API_URL = "https://script.google.com/macros/s/AKfycbxkXcZgFqIAF-ylWHcklLo4bx0l9_Ng3ysT43TajWnX_sJ4O_EjvCspUc_fpWIC1KiH/exec";
//     console.log("=== FORM SUBMISSION DEBUG ===");
//     console.log("🎯 Sending data to URL:", API_URL);
//     console.log("📦 Form data being sent:", formData);
    
//     try {
//       // Method 1: Try normal fetch first
//       console.log("🚀 Attempting normal fetch...");
      
//       let response = await fetch(API_URL, {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
      
//       if (response.ok) {
//         const result = await response.json();
//         console.log("✅ SUCCESS with normal fetch:", result);
        
//         if (result.status === "success") {
//           alert("✅ Registered Successfully! Data saved to sheet.");
//           setFormData({ name: "", email: "", organisation: "", contact: "", qualification: "", accommodation: "" });
//           setErrors({});
//           onClose();
//           return;
//         } else {
//           alert(`❌ Error: ${result.message}`);
//           return;
//         }
//       }
      
//     } catch (corsError) {
//       console.log("❌ CORS error with normal fetch, trying no-cors mode...");
      
//       try {
//         // Method 2: Use no-cors mode as fallback
//         await fetch(API_URL, {
//           method: "POST",
//           mode: "no-cors",
//           body: JSON.stringify(formData),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
        
//         console.log("✅ Request sent with no-cors mode (can't read response)");
//         alert("✅ Registration successful, we will contact you shortly!");
//         setFormData({ name: "", email: "", organisation: "", contact: "", qualification: "", accommodation: "" });
//         setErrors({});
//         onClose();
        
//       } catch (finalError) {
//         console.error("❌ Both methods failed:", finalError);
//         alert("❌ Failed to submit. Please try again or contact support.");
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-2xl p-10 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
//           disabled={isSubmitting}
//         >
//           &times;
//         </button>
        
//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
//           Workshop Registration
//         </h2>
        
//         <div className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name *
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               placeholder="Enter your name"
//               onChange={handleChange}
//               className={`w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
//                 errors.name ? 'border-red-500' : ''
//               }`}
//               required
//               disabled={isSubmitting}
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email *
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               placeholder="Enter your email"
//               onChange={handleChange}
//               className={`w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
//                 errors.email ? 'border-red-500' : ''
//               }`}
//               required
//               disabled={isSubmitting}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Organization
//             </label>
//             <input
//               type="text"
//               name="organisation"
//               value={formData.organisation}
//               placeholder="Your organization / college"
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               disabled={isSubmitting}
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Phone Number(whatsapp preferred) *
//             </label>
//             <input
//               type="tel"
//               name="contact"
//               value={formData.contact}
//               placeholder="Enter 10-digit phone number"
//               onChange={handleChange}
//               className={`w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
//                 errors.contact ? 'border-red-500' : ''
//               }`}
//               required
//               disabled={isSubmitting}
//             />
//             {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Highest Qualification
//             </label>
//             <select
//               name="qualification"
//               value={formData.qualification}
//               onChange={handleChange}
//               className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               disabled={isSubmitting}
//             >
//               <option value="">Select your qualification</option>
//               {qualifications.map((qual, index) => (
//                 <option key={index} value={qual}>
//                   {qual}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-3">
//               Do you need accommodation on IITB campus?
//             </label>
//             <div className="flex gap-6">
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="accommodation"
//                   value="yes"
//                   checked={formData.accommodation === "yes"}
//                   onChange={handleChange}
//                   className="mr-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
//                   disabled={isSubmitting}
//                 />
//                 <span className="text-sm text-gray-700">Yes</span>
//               </label>
//               <label className="flex items-center cursor-pointer">
//                 <input
//                   type="radio"
//                   name="accommodation"
//                   value="no"
//                   checked={formData.accommodation === "no"}
//                   onChange={handleChange}
//                   className="mr-2 w-4 h-4 text-blue-600 focus:ring-blue-500"
//                   disabled={isSubmitting}
//                 />
//                 <span className="text-sm text-gray-700">No</span>
//               </label>
//             </div>
//           </div>
          
//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
//               disabled={isSubmitting}
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </div>
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
    qualification: "",
    // --- ADDED ---
    designation: "",
    domain: "",
    accommodation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Data for the new dropdowns
  const qualifications = ["High School", "Diploma", "B.Tech", "B.E.", "B.Sc.", "BCA", "BBA", "M.Tech", "M.E.", "M.Sc.", "MCA", "MBA", "Ph.D.", "Other"];
  const designations = ["Student", "Researcher", "Faculty", "Industry Professional", "Other"];
  const domains = ["Mechanical Engineering", "Computer Science & IT", "Electrical Engineering", "Civil Engineering", "Chemical Engineering", "Aerospace Engineering", "Industrial Engineering", "Other"];

  // Validation functions
  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validateContact = (contact) => /^[\d]{10}$/.test(contact.replace(/\s/g, ''));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });

    if (name === 'email' && value && !validateEmail(value)) {
      setErrors({ ...errors, email: "Please enter a valid email address" });
    }
    if (name === 'contact' && value && !validateContact(value)) {
      setErrors({ ...errors, contact: "Please enter a valid 10-digit phone number" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Phone number is required";
    } else if (!validateContact(formData.contact)) {
      newErrors.contact = "Please enter a valid 10-digit phone number";
    }
    // --- ADDED VALIDATION FOR NEW FIELDS ---
    if (!formData.designation) newErrors.designation = "Designation is required";
    if (!formData.domain) newErrors.domain = "Field / Domain is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    const API_URL = "https://script.google.com/macros/s/AKfycbz7xvuR0XrxI_i34H4mrd7ZIAhCuApn2UxUzDUPy0wv5Kshjsi6AjPdAfpZqKGToQ_p/exec";
    
    try {
      let response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      
      if (response.ok) {
        const result = await response.json();
        if (result.status === "success") {
          alert("✅ Registered Successfully! Data saved to sheet.");
          // --- UPDATED RESET ---
          setFormData({ name: "", email: "", organisation: "", contact: "", qualification: "", designation: "", domain: "", accommodation: "" });
          setErrors({});
          onClose();
        } else {
          alert(`❌ Error: ${result.message}`);
        }
      }
    } catch (corsError) {
      try {
        await fetch(API_URL, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });
        alert("✅ Registration successful, we will contact you shortly!");
        // --- UPDATED RESET ---
        setFormData({ name: "", email: "", organisation: "", contact: "", qualification: "", designation: "", domain: "", accommodation: "" });
        setErrors({});
        onClose();
      } catch (finalError) {
        alert("❌ Failed to submit. Please try again or contact support.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-10 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl" disabled={isSubmitting}>
          &times;
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Workshop Registration
        </h2>
        
        <div className="space-y-5">
          {/* Name, Email, Organization, Phone... (no changes) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input type="text" name="name" value={formData.name} placeholder="Enter your name" onChange={handleChange} className={`w-full border p-3 rounded-lg outline-none ${errors.name ? 'border-red-500' : ''}`} required disabled={isSubmitting}/>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" name="email" value={formData.email} placeholder="Enter your email" onChange={handleChange} className={`w-full border p-3 rounded-lg outline-none ${errors.email ? 'border-red-500' : ''}`} required disabled={isSubmitting}/>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
            <input type="text" name="organisation" value={formData.organisation} placeholder="Your organization / college" onChange={handleChange} className="w-full border p-3 rounded-lg outline-none" disabled={isSubmitting}/>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input type="tel" name="contact" value={formData.contact} placeholder="Enter 10-digit phone number" onChange={handleChange} className={`w-full border p-3 rounded-lg outline-none ${errors.contact ? 'border-red-500' : ''}`} required disabled={isSubmitting}/>
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
          </div>
          
          {/* --- ADDED DESIGNATION FIELD --- */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Designation *</label>
            <select name="designation" value={formData.designation} onChange={handleChange} className={`w-full border p-3 rounded-lg outline-none ${errors.designation ? 'border-red-500' : ''}`} disabled={isSubmitting}>
              <option value="">Select your designation</option>
              {designations.map((item, index) => (<option key={index} value={item}>{item}</option>))}
            </select>
            {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
          </div>
          
          {/* --- ADDED DOMAIN FIELD --- */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Field / Domain *</label>
            <select name="domain" value={formData.domain} onChange={handleChange} className={`w-full border p-3 rounded-lg outline-none ${errors.domain ? 'border-red-500' : ''}`} disabled={isSubmitting}>
              <option value="">Select your field or domain</option>
              {domains.map((item, index) => (<option key={index} value={item}>{item}</option>))}
            </select>
            {errors.domain && <p className="text-red-500 text-sm mt-1">{errors.domain}</p>}
          </div>

          {/* Highest Qualification Field (no changes) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
            <select name="qualification" value={formData.qualification} onChange={handleChange} className="w-full border p-3 rounded-lg outline-none" disabled={isSubmitting}>
              <option value="">Select your qualification</option>
              {qualifications.map((qual, index) => (<option key={index} value={qual}>{qual}</option>))}
            </select>
          </div>
          
          {/* Accommodation Field (no changes) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Do you need accommodation on IITB campus?</label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="accommodation" value="yes" checked={formData.accommodation === "yes"} onChange={handleChange} className="mr-2" disabled={isSubmitting}/>
                Yes
              </label>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="accommodation" value="no" checked={formData.accommodation === "no"} onChange={handleChange} className="mr-2" disabled={isSubmitting}/>
                No
              </label>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-5 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50" disabled={isSubmitting}>
              Cancel
            </button>
            <button type="button" onClick={handleSubmit} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;