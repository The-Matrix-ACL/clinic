import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorPrescriptions = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctorPrescriptions = async () => {
            try {
                const response = await axios.get('http://localhost:8000/viewDrPres/651ecbbcbee4f34ff48376d3');
                setPrescriptions(response.data);
            } catch (error) {
                console.error('Error fetching doctor prescriptions:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDoctorPrescriptions();
    }, []);

    return (
        <div>
            <h2>Doctor Prescriptions</h2>
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

export default DoctorPrescriptions;
