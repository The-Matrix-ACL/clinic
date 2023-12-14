import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientPrescriptions = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPatientPrescriptions = async () => {
            try {
                const response = await axios.get('http://localhost:8000/viewPatPres/652331c3442cef814fbaa1a3');
                setPrescriptions(response.data);
            } catch (error) {
                console.error('Error fetching patient prescriptions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPatientPrescriptions();
    }, []);

    return (
        <div>
            <h2>Patient Prescriptions</h2>
            {loading ? (
                <p>Loading prescriptions...</p>
            ) : (
                <ul>
                    {prescriptions.map((prescription) => (
                        <li key={prescription._id}>
                            <p>Patient Name : {prescription.PName}</p>
                            <p>Appointment Date : {prescription.AppointmentDate}</p>
                            <p>Prescription: {prescription.Prescription}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PatientPrescriptions;
