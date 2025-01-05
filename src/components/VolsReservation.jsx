import React from "react";
import { useLocation } from "react-router-dom";
import './VolsReservation.css'; // Importer le fichier CSS

const VolsReservation = () => {
    const location = useLocation();
    const { flightDetails } = location.state || {};

    if (!flightDetails) {
        return <div>Erreur: Aucun vol sélectionné</div>;
    }

    return (
        <div className="ticket-container">
            <img src="lg.png" alt="Logo" className="ticket-logo" />
            <h2>Réservation confirmée</h2>
            <h3>Détails du vol :</h3>
            <div className="ticket-details">
                <p><strong>Ville de départ:</strong> {flightDetails.villedepart}</p>
                <p><strong>Ville d'arrivée:</strong> {flightDetails.villearrivee}</p>
                <p><strong>Prix initial:</strong> {flightDetails.prix} MAD</p>


                <h4>Services supplémentaires :</h4>
                {Object.keys(flightDetails.services).length > 0 ? (
                    <ul className="services-list">
                        {Object.keys(flightDetails.services).map((service, index) => (
                            flightDetails.services[service] && (
                                <li key={index}>{service} (+{getServicePrice(service)} MAD)</li>
                            )
                        ))}
                    </ul>
                ) : (
                    <p>Aucun service supplémentaire sélectionné.</p>
                )}

                <p className="total-price"><strong>Prix total:</strong> {flightDetails.totalPrice} MAD</p>
            </div>
            {/* Bouton d'impression */}
            <button onClick={() => window.print()}>Imprimer le billet</button>
        </div>
    );
};

// Fonction pour obtenir le prix d'un service
const getServicePrice = (service) => {
    switch (service) {
        case "repas":
            return 200;
        case "bagages":
            return 500;
        case "siegePremium":
            return 1000;
        case "wifi":
            return 150;
        default:
            return 0;
    }
};

export default VolsReservation;