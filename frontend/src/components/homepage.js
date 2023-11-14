const Homepage = () =>{
    return(
        <><button type="submit" onClick={() => window.location.href = `/AdminForm`}>Adminstrator</button><button type="submit" onClick={() => window.location.href = `/DoctorForm`}>Doctor</button><button type="submit" onClick={() => window.location.href = `/PatientForm`}>Patient</button></>
    )
}
export default Homepage