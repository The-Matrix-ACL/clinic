import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAdmin from './components/FormAdminstrator';
import CreateDoctor from './components/FormDoctor';
import CreatePatient from './components/FormPatient';
import FamilyMemberadd from './components/FamilyMemberAdd';
import UpdateDoctor from './components/UpdateDoctor';
import DeleteDoctor from './components/DeleteDoctor';
import DeleteAdmin from './components/DeleteAdminstrator';
import DeletePatient from './components/DeletePatient';
import Prescriptions from './components/Prescriptions';
import ListDoctor from './components/ListDoctors';
import InfoDoctor from './components/InfoDoctor';
import Homepage from './components/homepage';
import ListDoctorsAdmin from './components/ListDoctorsAdmin';
import AdminHomepage from './components/homepageAdmin';
import PatientHomepage from './components/homepagePatient';
import DoctorHomepage from './components/homepageDoctor';
import HealthRecordsAdd from './components/HealthRecordsAdd';
import Loginadmin from './components/LoginAdmin';
import Logindoctor from './components/LoginDoctor';
import Loginpatient from './components/LoginPatient';
import Updatepassadmin from './components/Updatepasswordadmin';
import Updatepassdoctor from './components/Updatepassworddoctor';
import Updatepasspatient from './components/Updatepasswordpatient';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/AdminForm"
        element={<CreateAdmin/>}/>
        <Route path="/DoctorForm"
        element={<CreateDoctor/>}/>
        <Route path="/PatientForm"
        element={<CreatePatient/>}/>
        <Route path="/addFamilyMember"
        element={<FamilyMemberadd/>}/>
        <Route path="/UpdateDoctor"
        element={<UpdateDoctor/>}/>
        <Route path="/DeleteDoctor"
        element={<DeleteDoctor/>}/>
        <Route path="/DeleteAdmin"
        element={<DeleteAdmin/>}/>
        <Route path="/DeletePatient"
        element={<DeletePatient/>}/>
        <Route path="/filter7"
        element={<Prescriptions/>}/>
        <Route path="/ListDoctors"
        element={<ListDoctor/>}/>
        <Route path="/filter9"
        element={<InfoDoctor/>}/>
        <Route path="/"
        element={<Homepage/>}/>
        <Route path="/ListDoctorsAdmin"
        element={<ListDoctorsAdmin/>}/>
        <Route path="/homepageAdmin"
        element={<AdminHomepage/>}/>
        <Route path="/homepagePatient"
        element={<PatientHomepage/>}/>
        <Route path="/homepagedoctor"
        element={<DoctorHomepage/>}/>
        <Route path="/addhealthrecords"
        element={<HealthRecordsAdd/>}/>
        <Route path="/loginadmin"
        element={<Loginadmin/>}/>
        <Route path="/logindoctor"
        element={<Logindoctor/>}/>
        <Route path="/loginpatient"
        element={<Loginpatient/>}/>
        <Route path="/updatepasswordadmin"
        element={<Updatepassadmin/>}/>
         <Route path="/updatepassworddoctor"
        element={<Updatepassdoctor/>}/>
         <Route path="/updatepasswordpatient"
        element={<Updatepasspatient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
