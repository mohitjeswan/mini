import React from 'react';
import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';

const MyBookings = () => {
    // Sample booking data
    const bookings = [
        { id: 1, car: 'Toyota Camry', date: '2024-10-01', price: '$50/day', status: 'Confirmed' },
        { id: 2, car: 'Honda Accord', date: '2024-10-05', price: '$45/day', status: 'Pending' },
        { id: 3, car: 'BMW X5', date: '2024-10-10', price: '$80/day', status: 'Cancelled' },
        { id: 4, car: 'Tesla Model 3', date: '2024-10-15', price: '$90/day', status: 'Confirmed' }
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* My Bookings Content */}
                <div className="p-6 space-y-8">
                    <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Car</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                                    <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr key={booking.id} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{booking.car}</td>
                                        <td className="border border-gray-300 px-4 py-2">{booking.date}</td>
                                        <td className="border border-gray-300 px-4 py-2">{booking.price}</td>
                                        <td className="border border-gray-300 px-4 py-2">{booking.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
