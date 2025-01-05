import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VolsReservation from "./components/VolsReservation";
import VolsList from "./components/VolsList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<VolsList />} />
                        <Route path="/reservation" element={<VolsReservation />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
