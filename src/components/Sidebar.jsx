import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-md flex flex-col justify-between h-screen">
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Car Rental</h1>
                <ul className="space-y-4">
                    <li>
                        <Link to="/home" className="hover:bg-gray-200 p-2 rounded-md block">Dashboard</Link>
                    </li>
                    <hr />
                    <li>
                        <Link to="/my-bookings" className="hover:bg-gray-200 p-2 rounded-md block">My Bookings</Link>
                    </li>
                    <hr />
                    <li>
                        <Link to="/cars" className="hover:bg-gray-200 p-2 rounded-md block">Cars</Link>
                    </li>
                    <hr />
                    <li>
                        <Link to="/settings" className="hover:bg-gray-200 p-2 rounded-md block">Settings</Link>
                    </li>
                    <hr />
                    <li>
                        <Link to="/" className="hover:bg-gray-200 p-2 rounded-md block">Logout</Link>
                    </li>
                    <hr />
                </ul>
            </div>

            {/* Feedback button at the bottom */}
            <div className="p-6">
                <Link to="/feedback" className="bg-blue-500 text-white py-2 px-4 rounded-md block text-center hover:bg-blue-600">
                    Feedback
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
