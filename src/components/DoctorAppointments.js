import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './jss.css'
const backendURL = 'http://localhost:8000';

const Appointment =({appointment,fetchDoctorAppointments})=>{
    const [re, setRe] = useState(false);
    const [pres, setPres] = useState(false);
    const [rescheduleData, setRescheduleData] = useState({
        appID: appointment._id,
        AppointmentDate:'',
        Did:  appointment.Did,
    });
    const handleRescheduleChange = (e) => {
        const { name, value } = e.target;
        setRescheduleData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRescheduleSubmit = async (e) => {
        e.preventDefault();
        console.log(rescheduleData)
        try {
            const response = await axios.post(`${backendURL}/rescheduleApp`, rescheduleData);
            console.log('Appointment rescheduled:', response.data);
            fetchDoctorAppointments()
            setRe(false)
            setPres(false)

        } catch (error) {
            console.error('Error rescheduling appointment:', error);
        }
    };



    const [prescriptionData, setPrescriptionData] = useState({
        DName: appointment.DName,
        PName:  appointment.PName,
        Did:  appointment.Did,
        Pid:  appointment.Pid,
        AppointmentID:  appointment._id,
        Prescription: '',
        AppointmentDate:  appointment.AppointmentDate,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPrescriptionData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePrescriptionSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/addPres', prescriptionData);
            console.log('Prescription added:', response.data);
            // Handle success, reset the form, or navigate to another page if needed
   
                setRe(false)
                setPres(false)
         
        } catch (error) {
            console.error('Error adding prescription:', error);
            // Handle error, show an error message to the user, etc.
        }
    };

    return (
    <>
        <p>Patient Name: {appointment.PName}</p>
        <p>Appointment Date: {appointment.AppointmentDate}</p>
    <div className='buttons'>
        
        <button type="submit" onClick={()=>{
            setRe(true)
            setPres(false)
        }}>Reschedule Appointment</button>
        <button type="submit"  onClick={()=>{
            setRe(false)
            setPres(true)
        }}>Write a prescription</button>
        </div>

        {re && <form onSubmit={handleRescheduleSubmit}>
            <label htmlFor="AppointmentDate">Reschedule Date:</label>
            <input
                type="text"
                id="AppointmentDate"
                name="AppointmentDate"
                value={rescheduleData.AppointmentDate}
                onChange={handleRescheduleChange}
            />
            <input type="hidden" name="appID" value={appointment._id} />
            <input type="hidden" name="Did" value={appointment.Did} />
            <button type="submit">Reschedule</button>
        </form>  }      
        {pres &&
        <form onSubmit={handlePrescriptionSubmit}>
        <label htmlFor="Prescription">Prescription:</label>
            <textarea
                id="Prescription"
                name="Prescription"
                rows="4"
                cols="50"
                onChange={handleInputChange}
                value={prescriptionData.Prescription}
            />

            <button type="submit">Add Prescription</button>
        </form>

        }      
      </>
)
}


const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchDoctorAppointments = async () => {
        try {
            const response = await axios.get(`${backendURL}/getDrApp/651ecbbcbee4f34ff48376d3`);
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        

        fetchDoctorAppointments();
    }, []);


    return (
        <div>
            <h2>Doctor Appointments</h2>
            {loading ? (
                <p>Loading appointments...</p>
            ) : (
                <ul>
                    {appointments.map((appointment) => (
                        <li key={appointment._id} style={{ "list-style": "none"}}>
                            <Appointment appointment={appointment} fetchDoctorAppointments={fetchDoctorAppointments}/>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default DoctorAppointments