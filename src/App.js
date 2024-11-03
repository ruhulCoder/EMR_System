import './App.css';
import { Switch, Route } from 'react-router-dom';
import Land from './Components/Land';
import Register from './Components/Register';
import Appointment from './Components/Appointment';
import Patient from './Components/Patient';
import Clinician from './Components/Clinician';
import Questionnaire from './Components/Questionnaire';

function App() {
  return (
    <>
    <div>
      <Switch>
        <Route exact path='/' component={Land}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/appointment' component={Appointment}/>
        <Route exact path='/patient' component={Patient}/>
        <Route exact path='/clinician' component={Clinician}/>
        <Route exact path='/questionnaire' component={Questionnaire}/>
      </Switch>
    </div>
    </>
  );
}

export default App;