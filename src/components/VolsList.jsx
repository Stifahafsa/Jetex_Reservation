import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFlights } from "../reducers/VolsReducer";
import VolsDetails from "./VolsDetails";

const VolsList = () => {
    const dispatch = useDispatch();
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const vols = useSelector((state) => state.vols.vols);
    const status = useSelector((state) => state.vols.status);
    const error = useSelector((state) => state.vols.error);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchFlights());
        }
    }, [status, dispatch]);

    // Filtrer les vols en fonction des dates saisies
    const filteredFlights = vols.filter((vol) => {
        if (!startDate && !endDate) return true; // If no date is selected, show all flights
    
        // Convert vol.date to a Date object
        const volDate = new Date(vol.date);
        if (isNaN(volDate.getTime())) return false; // Ignore invalid dates
    
        const startDateObj = startDate ? new Date(startDate) : null;
        const endDateObj = endDate ? new Date(endDate) : null;
    
        // Check if vol.date is within the selected range
        const isAfterStartDate = startDateObj ? volDate >= startDateObj : true;
        const isBeforeEndDate = endDateObj ? volDate <= endDateObj : true;
    
        return isAfterStartDate && isBeforeEndDate;
    });    


    const handleSelectFlight = (vol) => {
        setSelectedFlight(vol);
    };

    const handleDateChange = (e) => {
        const { id, value } = e.target;
        if (id === "startDate") setStartDate(value);
        if (id === "endDate") setEndDate(value);
    };

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "failed") {
        return <p>Error: {error}</p>;
    }

    

    return (
        <div style={{ padding: "20px" }}>
            {/* Barre de filtrage par date */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px",
                backgroundColor: "#f1f1f1",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
            }}>
                <label htmlFor="startDate">Date de début:</label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={handleDateChange}
                    style={{
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        flex: 1,
                    }}
                />
                <label htmlFor="endDate">Date d'arrivée:</label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={handleDateChange}
                    style={{
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        flex: 1,
                    }}
                />
                <button
                    style={{
                        padding: "10px 10px",
                        backgroundColor: "#008080",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "20px",
                        maxWidth: "300px"
                    }}
                >
                    Rechercher
                </button>
            </div>

            {/* Affichage des vols filtrés */}
            <div style={{ display: "flex", gap: "20px" }}>
                <div style={{
                    flex: 8,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                }}>
                    {filteredFlights.length > 0 ? (
                        filteredFlights.map((vol) => (
                            <div
                                key={vol.id}
                                style={{
                                    flex: "1 1 calc(33.333% - 20px)",
                                    border: "1px solid #ddd",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    backgroundColor: "#fff",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                    textAlign: "center",
                                }}
                            >
                                {vol.image && (
                                    <img
                                        src={"airplane.png"}
                                        alt={`${vol.villedepart} to ${vol.villearrivee}`}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: "8px",
                                            marginBottom: "10px",
                                        }}
                                    />
                                )}
                                <p>{vol.villedepart} → {vol.villearrivee}</p>
                                <p><strong>Date:</strong> {vol.date}</p>
                                <p><strong>Prix:</strong> {vol.prix} MAD</p>
                                <button
                                    onClick={() => handleSelectFlight(vol)}
                                    style={{
                                        padding: "10px 10px",
                                        backgroundColor: "#008080",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        fontSize: "20px",
                                        maxWidth: "300px"
                                    }}
                                >
                                    Réserver
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Aucun vol trouvé pour ces dates.</p>
                    )}
                </div>

                {/* Détails du vol sélectionné */}
                <div style={{
                    flex: 4,
                    padding: "10px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}>
                    {selectedFlight ? (
                        <VolsDetails vol={selectedFlight} />
                    ) : (
                        <p>Sélectionnez un vol pour afficher les détails.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VolsList;
