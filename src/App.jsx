

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MyBookings from './pages/Mybookings';
// import Dashboard from './pages/dashboard';
// import Settings from './pages/Settings';
// import Login from './pages/Login'; // Import Login
// import Signup from './pages/signup';
// import LandingPage from './pages/Landing';// Import Signup if you have a Signup component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<LandingPage />} />
//         <Route path="/home" element={<Dashboard />} />
//         <Route path="/my-bookings" element={<MyBookings />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/login" element={<Login />} /> {/* Route for Login */}
//         <Route path="/signup" element={<Signup />} /> {/* Route for Signup */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyBookings from './pages/Mybookings';
import Dashboard from './pages/dashboard';
import Settings from './pages/Settings';
import Login from './pages/Login'; // Import Login
import Signup from './pages/signup';
import LandingPage from './pages/Landing'; // Import LandingPage
import Cars from './pages/Cars'
import FeedbackForm from './pages/FeedbackForm';
import RentNow from './pages/Rentnow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} /> {/* Route for Login */}
        <Route path="/signup" element={<Signup />} /> {/* Route for Signup */}
        <Route path="/cars" element={<Cars />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/rent-now/:carId" element={<RentNow />} />
      </Routes>
    </Router>
  );
}

export default App;


