import React, { useState } from 'react';
import car1 from '../../public/car1.jpg';
import car2 from '../../public/car2.jpg';
import car3 from '../../public/car3.jpg';
import car4 from '../../public/car4.jpg';
import car5 from '../../public/car5.jpg';
import car6 from '../../public/car5.jpg';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/NavBar';
// Custom car data (7 cars with detailed info)
const carData = [
    {
        name: 'Sedan',
        image: car1,
        info: 'A comfortable sedan with high fuel efficiency. Known for smooth rides and spacious interiors, sedans are popular for both city driving and long trips.',
        details: 'Fuel type: Petrol, Diesel | Top speed: 220 km/h | Seats: 5 | Popular brands: Toyota, Honda, BMW',
    },
    {
        name: 'SUV',
        image: car2,
        info: 'An SUV perfect for off-road adventures and family trips. SUVs are known for their powerful engines and high ground clearance.',
        details: 'Fuel type: Petrol, Diesel | Top speed: 180 km/h | Seats: 7 | Popular brands: Ford, Jeep, Range Rover',
    },
    {
        name: 'Coupe',
        image: car3,
        info: 'A stylish coupe with a sporty look and high performance. Ideal for those who enjoy fast driving with sleek design.',
        details: 'Fuel type: Petrol | Top speed: 240 km/h | Seats: 2 | Popular brands: Mercedes, Audi, Lexus',
    },
    {
        name: 'Sports',
        image: car4,
        info: 'High-performance sports car with excellent speed and design. Designed for driving enthusiasts.',
        details: 'Fuel type: Petrol | Top speed: 320 km/h | Seats: 2 | Popular brands: Ferrari, Lamborghini, Porsche',
    },
    {
        name: 'Traveller',
        image: car5,
        info: 'Ideal for large groups, offering lots of space and comfort for long-distance travels.',
        details: 'Fuel type: Diesel | Top speed: 160 km/h | Seats: 15 | Popular brands: Force, Tata, Toyota',
    },
    {
        name: 'Luxury',
        image: car6,
        info: 'A luxurious car offering premium comfort and advanced features. Perfect for a high-end lifestyle.',
        details: 'Fuel type: Petrol, Hybrid | Top speed: 260 km/h | Seats: 5 | Popular brands: Rolls-Royce, Bentley, Mercedes',
    },
    // {
    //     name: 'Hatchback',
    //     image: car7,
    //     info: 'A compact car, great for city driving with fuel efficiency and affordability.',
    //     details: 'Fuel type: Petrol, Diesel | Top speed: 160 km/h | Seats: 5 | Popular brands: Hyundai, Suzuki, Ford',
    // },
];

const CarGallery = () => {
    const [hoveredCar, setHoveredCar] = useState(null);
    const [selectedCar, setSelectedCar] = useState(null);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <Navbar />

                {/* Dashboard Content */}
                <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Different Types of Cars</h1>
                    <p className="text-lg text-gray-600 mb-8">Click on any car to learn more about its features, specifications, and why it might be the right choice for you.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {carData.map((car, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-end items-center w-full max-w-xs bg-white shadow-lg rounded-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                                onMouseEnter={() => setHoveredCar(index)}
                                onMouseLeave={() => setHoveredCar(null)}
                                onClick={() => setSelectedCar(car)}
                            >
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className={`w-full h-48 object-cover transition-transform duration-300 ${hoveredCar === index ? 'scale-105' : ''}`}
                                />
                                <div className="text-lg font-semibold text-gray-800 mb-2">{car.name}</div>
                            </div>
                        ))}
                    </div>

                    {selectedCar && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-lg w-96 text-center">
                                <h3 className="text-2xl font-semibold text-gray-800">{selectedCar.name}</h3>
                                <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-64 object-cover mt-4 mb-2" />
                                <p className="text-gray-600">{selectedCar.info}</p>
                                <h4 className="font-semibold mt-4">Specifications</h4>
                                <p className="text-gray-600">{selectedCar.details}</p>
                                <button onClick={() => setSelectedCar(null)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Close</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarGallery;
