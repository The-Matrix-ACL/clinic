const AdminHomepage = () =>{
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('docid');
    return(
        <><button type="submit" onClick={() => window.location.href = `/DeleteDoctor`}>Delete Doctor</button><button type="submit" onClick={() => window.location.href = `/DeletePatient`}>Delete Patient</button><button type="submit" onClick={() => window.location.href = `/DeleteAdmin`}>Delete Admin</button><button type="submit" onClick={() => window.location.href = `/ListDoctorsAdmin`}>View Doctors</button><button type="submit" onClick={() => window.location.href = `/Email`}>Email</button><button type="submit" onClick={() => window.location.href = `/updatepasswordadmin?docid=${userId}`}>Change Password</button><a href="http://localhost:3000/">Logout</a></>
    )
}
export default AdminHomepage