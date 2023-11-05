const PatientHomepage = () =>{
    return(
        <><button type="submit" onClick={() => window.location.href = `/ListDoctors`}>view all Doctors</button><button type="submit" onClick={() => window.location.href = `/addFamilyMember`}>Add Family Member</button></>
    )
}
export default PatientHomepage