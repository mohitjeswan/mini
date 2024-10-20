import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-white p-4 shadow-md">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Dashboard</div>
                <div>
                    <input
                        type="text"
                        className="border p-2 rounded-lg"
                        placeholder="Search cars..."
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Profile</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
