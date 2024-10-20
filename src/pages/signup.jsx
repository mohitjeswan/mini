// // src/pages/Signup.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSignup = (e) => {
//         e.preventDefault();
//         // Handle signup logic here (e.g., API call)
//         // Redirect to login page after successful signup
//         navigate('/login'); // Redirect to the login page
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-96">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
//                 <form onSubmit={handleSignup}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             className="w-full p-2 border border-gray-300 rounded"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             className="w-full p-2 border border-gray-300 rounded"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
//                     >
//                         Signup
//                     </button>
//                 </form>
//                 <p className="mt-4 text-center">
//                     Already have an account?{' '}
//                     <a href="/login" className="text-blue-500 hover:underline">
//                         Login
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Signup;



import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.username.trim()) formErrors.username = "Username is required";
        if (!formData.email.includes("@")) formErrors.email = "Invalid email address";
        if (!formData.phone.match(/^\d{10}$/)) formErrors.phone = "Phone number must be 10 digits";
        if (formData.password.length < 6) formErrors.password = "Password must be at least 6 characters";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form data
            console.log("Form Submitted Successfully");
            navigate("/login"); // Navigate to the login page
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Side - Welcome Text */}
            <div className="flex-1 flex justify-center items-center text-center text-4xl font-bold text-gray-700">
                <h1>Welcome To Car Connect</h1>
            </div>

            {/* Right Side - Signup Form */}
            <div className="flex-1 max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Create an account</h2>
                <p className="mb-6 text-gray-600">Connect with your friends today!</p>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div className="relative">
                        <FaUser className="absolute left-3 top-2.5 text-blue-500" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Your Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                        {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                    </div>

                    <div className="relative">
                        <FaEnvelope className="absolute left-3 top-2.5 text-blue-500" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>

                    <div className="relative">
                        <FaPhoneAlt className="absolute left-3 top-2.5 text-blue-500" />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                    </div>

                    <div className="relative">
                        <FaLock className="absolute left-3 top-2.5 text-blue-500" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                        Sign Up
                    </button>
                </form>

                <div className="flex items-center justify-center my-4">
                    <div className="flex-1 border-b border-gray-300"></div>
                    <span className="mx-2 text-gray-500">Or With</span>
                    <div className="flex-1 border-b border-gray-300"></div>
                </div>

                <div className="flex flex-col gap-2">
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                        Signup with Facebook
                    </button>
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200">
                        Signup with Google
                    </button>
                </div>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
