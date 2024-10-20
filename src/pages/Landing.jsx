import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            {/* Header */}
            <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
                <div className="text-xl font-bold">CarRentalCo</div>
                <nav className="flex space-x-4">
                    <Link className="px-4 hover:text-yellow-500 transition duration-200" to="/">
                        Home
                    </Link>
                    <Link className="px-4 hover:text-yellow-500 transition duration-200" to="/services">
                        Services
                    </Link>
                    <Link className="px-4 hover:text-yellow-500 transition duration-200" to="/about">
                        About Us
                    </Link>
                    <Link className="px-4 hover:text-yellow-500 transition duration-200" to="/contact">
                        Contact
                    </Link>
                    <Link
                        to="/login"
                        className="bg-yellow-500 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-200"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="bg-yellow-500 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-200"
                    >
                        Signup
                    </Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gray-800 text-white">
                <img
                    src="" // Add the car image URL here
                    alt="Car Rental"
                    className="w-full h-96 object-cover opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Rent the Car of Your Dreams
                    </h1>
                    <p className="mb-6 text-lg">
                        Affordable rates. Flexible bookings. Top models available.
                    </p>
                    <Link
                        to="/login"
                        className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition duration-200"
                    >
                        Book Now
                    </Link>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-100 text-gray-700">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4">Luxury Cars</h3>
                            <p>
                                Choose from a variety of luxury models for your special
                                occasions.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4">Affordable Rentals</h3>
                            <p>
                                We offer competitive pricing for daily, weekly, and monthly
                                rentals.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4">24/7 Customer Support</h3>
                            <p>
                                We provide round-the-clock support for all your rental needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-yellow-500 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Rent a Car?</h2>
                    <p className="mb-8">
                        Browse our selection and find the perfect car for your journey.
                    </p>
                    <Link
                        to="/login"
                        className="bg-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-200"
                    >
                        Book a Car Now
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white p-4 text-center">
                <p>© 2024 CarRentalCo. All rights reserved.</p>
                <div className="mt-2">
                    <Link className="px-2 hover:text-yellow-500" to="/privacy">
                        Privacy Policy
                    </Link>
                    <Link className="px-2 hover:text-yellow-500" to="/terms">
                        Terms & Conditions
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
