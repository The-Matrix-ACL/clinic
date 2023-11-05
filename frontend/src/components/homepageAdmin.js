const AdminHomepage = () =>{
    return(
        <><button type="submit" onClick={() => window.location.href = `/DeleteDoctor`}>Delete Doctor</button><button type="submit" onClick={() => window.location.href = `/DeletePatient`}>Delete Patient</button><button type="submit" onClick={() => window.location.href = `/DeleteAdmin`}>Delete Admin</button><button type="submit" onClick={() => window.location.href = `/ListDoctorsAdmin`}>View Doctors</button></>
    )
}
export default AdminHomepage