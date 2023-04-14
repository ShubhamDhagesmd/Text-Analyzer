import React, { useState } from 'react'; 
import './App.css';
import Navbar from './Components/Navbar';
import TextForm1 from './Components/TextForm1';
import Alert from './Components/Alert';
// import About from './Components/About';


function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert(
      {
        msg:message,
        type:type
      }
    )
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","Sucses");
      document.title = "Text Utility = Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Succes");
    document.title = "Text Utility = Light Mode"
    
    }
  }
  return (
    <>
    
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
          <div className="container" >
            <TextForm1  showAlert={showAlert}  heading="Enter the Text to Analyze" mode={mode} />
          </div>
            
          
    
    </>
);
    
}

export default App;
