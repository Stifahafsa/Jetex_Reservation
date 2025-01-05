import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VolsServices = () => {
    const navigate = useNavigate();
    const [selectedServices, setSelectedServices] = useState({
        repas: false,
        bagages: false,
        siegePremium: false,
        wifi: false,
    });

    const handleServiceChange = (e) => {
        const { name, checked } = e.target;
        setSelectedServices((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const calculateTotalPrice = (services) => {
        let total = 1500; // Prix de base du vol
        if (services.repas) total += 200;
        if (services.bagages) total += 500;
        if (services.siegePremium) total += 1000;
        if (services.wifi) total += 150;
        return total;
    };

    const goToReservation = () => {
        const flightDetails = {
            villedepart: "Paris",
            villearrivee: "New York",
            prix: 1500,
            services: selectedServices,
            totalPrice: calculateTotalPrice(selectedServices),
        };

        navigate("/reservation", { state: { flightDetails } });
    };

    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f8f9fa",
                padding: "20px",
                textAlign: "center",
            }}
        >
            <h2 style={{ color: "#007b5e", marginBottom: "20px" }}>
                Choisissez vos services supplémentaires
            </h2>
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    maxWidth: "400px",
                    margin: "0 auto",
                    gap: "15px",
                }}
            >
                <label
                    style={{
                        fontSize: "16px",
                        color: "#333",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    Repas (+200 MAD)
                    <input
                        type="checkbox"
                        name="repas"
                        checked={selectedServices.repas}
                        onChange={handleServiceChange}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
                <label
                    style={{
                        fontSize: "16px",
                        color: "#333",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    Bagages supplémentaires (+500 MAD)
                    <input
                        type="checkbox"
                        name="bagages"
                        checked={selectedServices.bagages}
                        onChange={handleServiceChange}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
                <label
                    style={{
                        fontSize: "16px",
                        color: "#333",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    Siège premium (+1000 MAD)
                    <input
                        type="checkbox"
                        name="siegePremium"
                        checked={selectedServices.siegePremium}
                        onChange={handleServiceChange}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
                <label
                    style={{
                        fontSize: "16px",
                        color: "#333",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    Wifi à bord (+150 MAD)
                    <input
                        type="checkbox"
                        name="wifi"
                        checked={selectedServices.wifi}
                        onChange={handleServiceChange}
                        style={{ marginLeft: "10px" }}
                    />
                </label>
            </form>

            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={goToReservation}
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#007b5e",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#005f47")
                    }
                    onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#007b5e")
                    }
                >
                    Confirmer la réservation
                </button>
            </div>
        </div>
    );
};

export default VolsServices;
