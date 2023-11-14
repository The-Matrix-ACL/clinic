import {Routes, Route} from 'react-router-dom'
import SelectTimeSlot from './pages/SelectTimeSlot';
import DoctorScheduler from './pages/AddTimeSlots';
function App() {
  return (
    <div className="App">
     <div className="pages">
      <Routes>
        <Route>

        <Route 
        path="/AddTimeSlots/:Username"
        element={<DoctorScheduler/>}
        />
         <Route 
        path="/viewTimeSlots/:Username"
        element={<DoctorTimeSlots/>}
        />
        </Route>
      </Routes>
     </div>
    </div>
  );
}

export default App;
