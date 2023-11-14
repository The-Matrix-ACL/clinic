const DoctorHomepage = () =>{
    return(
        <><button type="submit" onClick={() => window.location.href = `/UpdateDoctor`}>Update Doctor info</button><button type="submit" onClick={() => window.location.href = `/Email`}>Email</button><button type="submit" onClick={() => window.location.href = `/updatepassworddoctor`}>Change Password</button><button type="submit" onClick={() => window.location.href = `/viewWallet`}>View Wallet</button><button type="submit" onClick={() => window.location.href = `/addhealthrecords`}>Add Health Records</button> <button type="submit" onClick={() => window.location.href = `/getHealthRecords`}>Get Health Records</button> <button type="submit" onClick={() => window.location.href = `/followup`}>Add followups</button><a href="http://localhost:3000/">Logout</a></>
    )
}
export default DoctorHomepage