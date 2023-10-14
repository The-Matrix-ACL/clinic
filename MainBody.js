import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DoctorSearch from './components/DoctorSearch';
import DoctorFilter from './components/DoctorFilter';
import DoctorDetails from './components/DoctorDetails';

function MainBody() {
  return (
    <div>
      <Switch>
        <Route path="/doctors" component={DoctorSearch} />
        <Route path="/filter" component={DoctorFilter} />
        <Route path="/doctors/:doctorId" component={DoctorDetails} />
      </Switch>
    </div>
  );
}

export default MainBody;
