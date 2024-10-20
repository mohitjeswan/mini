import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/NavBar';

const RentNow = () => {
    const { carId } = useParams();

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Rent Now Page Content */}
                <div className="p-6 space-y-8">
                    <h2 className="text-2xl font-bold mb-4">Rent Car - ID: {carId}</h2>
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Ride Options */}
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                                Book Ride
                            </button>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
                                Cancel Ride
                            </button>
                        </div>

                        {/* Details Section */}
                        <div className="mt-6">
                            <h3 className="text-xl font-bold mb-2">Ride Details</h3>
                            <p className="text-gray-600">Fare: $50/day</p>
                            <p className="text-gray-600">Driver Name: John Doe</p>
                            <p className="text-gray-600">Car Type: Sedan | Automatic</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentNow;
