import React from "react";
import VolsServices from "./VolsServices";

const VolsDetails = ({ vol }) => {
    return (
        <div style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            margin: "20px auto",
        }}>
            <h4 style={{
                fontSize: "1.5rem",
                marginBottom: "15px",
                textAlign: "center",
                color: "#008080",
            }}>Détails du vol</h4>
            <p style={{
                fontSize: "1.1rem",
                marginBottom: "10px",
                color: "#333",
            }}>
                <strong>Ville de départ:</strong> {vol.villedepart}
            </p>
            <p style={{
                fontSize: "1.1rem",
                marginBottom: "10px",
                color: "#333",
            }}>
                <strong>Ville d'arrivée:</strong> {vol.villearrivee}
            </p>
            <p style={{
                fontSize: "1.1rem",
                marginBottom: "15px",
                color: "#333",
            }}>
                <strong>Prix initial:</strong> {vol.prix} MAD
            </p>

            {/* Passez la prop vol au lieu de flight */}
            <VolsServices flight={vol} />
        </div>
    );
};

export default VolsDetails;
