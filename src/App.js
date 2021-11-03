
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

const [mode, setmode] = useState('light');  //whether dark mode is enabled or not
const [alert, setAlert] = useState(null);
const showAlert = (message, type)=>{
  setAlert({
    msg:message,
    type:type
  })
setTimeout(() => {
  setAlert(null);
}, 1500);
}


const toggleMoe = ()=>{
  if(mode === 'light'){
    setmode('dark');
    document.body.style.backgroundColor = 'black';
    showAlert('Dark Mode Has Been Enabled','success')
    // document.title = 'TextFun - Dark Mode';
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('Light Mode Has Been Enabled','success')
    // document.title = 'TextFun - Light Mode';
  }
}
  return (
    <>
     <Router>
      <Navbar title = 'TextFun' aboutText = 'About Us' services = 'Our Services' mode = {mode} toggleMoe = {toggleMoe}></Navbar>
     <Alert alert ={alert}/>
     <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode = {mode} />
          </Route>
          <Route exact path="/">
          <TextForm heading = 'Try TextFun - Word Counter, Character Counter, Remove Extra Spaces and Many More.' mode={mode} showAlert = {showAlert} />
          </Route>
        </Switch>
     </div>
    </Router>

    </>
  );
}
export default App;