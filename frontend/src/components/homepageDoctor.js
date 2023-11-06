const DoctorHomepage = () =>{
    return(
        <><button type="submit" onClick={() => window.location.href = `/UpdateDoctor`}>Update Doctor info</button><button type="submit" onClick={() => window.location.href = `/updatepassworddoctor`}>Change Password</button><a href="http://localhost:3000/">Logout</a></>
    )
}
export default DoctorHomepage