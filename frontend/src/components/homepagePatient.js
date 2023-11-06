const PatientHomepage = () =>{
    return(
        <><button type="submit" onClick={() => window.location.href = `/ListDoctors`}>view all Doctors</button><button type="submit" onClick={() => window.location.href = `/addFamilyMember`}>Add Family Member</button><button type="submit" onClick={() => window.location.href = `/updatepasswordpatient`}>Change Password</button><a href="http://localhost:3000/">Logout</a></>
    )
}
export default PatientHomepage