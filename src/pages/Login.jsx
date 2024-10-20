// // src/pages/Login.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         // Handle login logic here (e.g., API call)
//         // Redirect to dashboard after successful login
//         navigate('/home'); // Redirect to the dashboard page
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-96">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//                 <form onSubmit={handleLogin}>
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
//                         Login
//                     </button>
//                 </form>
//                 <p className="mt-4 text-center">
//                     Don't have an account?{' '}
//                     <a href="/signup" className="text-blue-500 hover:underline">
//                         Signup
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
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
        if (!formData.email.includes("@")) formErrors.email = "Invalid email address";
        if (formData.password.length < 6) formErrors.password = "Password must be at least 6 characters";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted Successfully");
            navigate("/home"); // Navigate to the dashboard
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Left Side - Welcome Text */}
            <div className="flex-1 flex justify-center items-center text-center text-4xl font-bold text-gray-700 bg-white p-10">
                <h1>Welcome back<br />To Car Connect</h1>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold mb-6">Log In</h2>
                <div className="flex flex-col gap-4 mb-6">
                    <button className="flex items-center justify-center bg-red-600 text-white rounded-lg py-2 hover:bg-red-700 transition duration-200">
                        <FaGoogle className="mr-2" /> Continue with Google
                    </button>
                    <button className="flex items-center justify-center bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-200">
                        <FaFacebookF className="mr-2" /> Continue with Facebook
                    </button>
                </div>

                <div className="flex items-center justify-center text-gray-400 mb-6">
                    <span className="px-4 bg-gray-100">or</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                        Log in
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
                </p>

                <p className="text-center text-gray-600 mt-2">
                    Don't have an account? <a href="/Signup" className="text-blue-600 hover:underline">Signup Now.</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
