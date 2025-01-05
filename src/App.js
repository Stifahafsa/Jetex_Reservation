import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VolsReservation from "./components/VolsReservation";
import VolsList from "./components/VolsList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <Navbar /> {/* Ajout du Navbar ici */}
            <Routes>
                <Route path="/" element={<VolsList />} />
                <Route path="/reservation" element={<VolsReservation />} />
            </Routes>
            <Footer /> {/* Ajout du Footer ici, à l'intérieur du Router */}
        </Router>
    );
}

export default App;
