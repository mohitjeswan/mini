import React, { useState } from 'react';
import Sidebar from '../components/Sidebar'; // Adjust path as necessary
import Navbar from '../components/Navbar'; // Adjust path as necessary

const Settings = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isEditing, setIsEditing] = useState(false); // State to track editing mode

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form submitted', formData);
        setIsEditing(false); // Disable editing after submit
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing); // Toggle editing mode
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Settings Content */}
                <div className="flex flex-col items-center justify-center flex-1 p-6">
                    <div className="bg-white rounded-lg shadow-md p-6 w-full  h-full">
                        <h2 className="text-2xl font-bold mb-6 text-center">Settings</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 ${isEditing ? '' : 'bg-gray-100'}`}
                                    placeholder="Enter your username"
                                    disabled={!isEditing} // Disable input if not editing
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 ${isEditing ? '' : 'bg-gray-100'}`}
                                    placeholder="Enter your email"
                                    disabled={!isEditing} // Disable input if not editing
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 ${isEditing ? '' : 'bg-gray-100'}`}
                                    placeholder="Enter your password"
                                    disabled={!isEditing} // Disable input if not editing
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500 ${isEditing ? '' : 'bg-gray-100'}`}
                                    placeholder="Confirm your password"
                                    disabled={!isEditing} // Disable input if not editing
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <button type="button" onClick={toggleEdit} className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                                    {isEditing ? 'Cancel' : 'Edit'}
                                </button>
                                <button type="submit" className={`ml-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 ${!isEditing && 'hidden'}`}>
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
