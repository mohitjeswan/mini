import React, { useState, useEffect } from 'react';
import img1 from '../../public/images/corolla.png';
import img2 from '../../public/images/Screenshot 2024-08-21 212332.png';
import img3 from '../../public/images/Screenshot 2024-08-21 213032.png';
import img4 from '../../public/images/Screenshot 2024-08-21 214711.png';
import img5 from '../../public/images/Screenshot 2024-08-21 221102.png';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/NavBar';

const Dashboard = () => {
    // Static data for cars and reviews
    const cars = [
        { id: 1, name: 'Toyota Camry', type: 'Sedan | Automatic', price: '$50/day', image: img1 },
        { id: 2, name: 'Honda Accord', type: 'Sedan | Manual', price: '$45/day', image: img2 },
        { id: 3, name: 'BMW X5', type: 'SUV | Automatic', price: '$80/day', image: img3 },
        // { id: 4, name: 'Tesla Model 3', type: 'Electric | Automatic', price: '$90/day', image: img4 },
        // { id: 5, name: 'Ford Mustang', type: 'Sports | Automatic', price: '$100/day', image: img5 }
    ];

    const reviews = [
        { id: 1, user: 'John Doe', date: '1 week ago', comment: 'Great service and amazing selection of cars.', avatar: 'https://via.placeholder.com/50' },
        { id: 2, user: 'Jane Smith', date: '2 weeks ago', comment: 'The booking process was super easy. I love the car!', avatar: 'https://via.placeholder.com/50' },
        { id: 3, user: 'Michael Johnson', date: '3 days ago', comment: 'Highly recommend! Clean cars and friendly staff.', avatar: 'https://via.placeholder.com/50' },
        { id: 4, user: 'Emily Davis', date: '5 days ago', comment: 'Great experience overall, will rent again.', avatar: 'https://via.placeholder.com/50' }
    ];

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    // Slide reviews every 5 seconds
    useEffect(() => {
        const reviewInterval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 5000);

        return () => {
            clearInterval(reviewInterval);
        };
    }, [reviews.length]);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Dashboard Content */}
                <div className="p-6 space-y-8">
                    {/* Car Suggestions */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Car Suggestions</h2>
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cars.map(car => (
                                    <div key={car.id} className="bg-white p-4 shadow-md rounded-lg">
                                        <img
                                            src={car.image}
                                            alt={car.name}
                                            className="w-full h-40 object-cover rounded-md"
                                        />
                                        <h3 className="text-xl font-semibold mt-4">{car.name}</h3>
                                        <p className="text-gray-500">{car.type}</p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-lg font-bold">{car.price}</span>
                                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Rent Now</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Review Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                        <div className="bg-white p-4 shadow-md rounded-lg">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={reviews[currentReviewIndex].avatar}
                                    alt={reviews[currentReviewIndex].user}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <h4 className="font-bold">{reviews[currentReviewIndex].user}</h4>
                                    <p className="text-sm text-gray-500">{reviews[currentReviewIndex].date}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700">{reviews[currentReviewIndex].comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
