import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,darkMode]=useState('light');
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light')
    {
      darkMode('dark');
      document.body.style.backgroundColor='#041836';
      document.body.style.color='white';
      showalert('DarkMode has been activated','success');
    }
    else
    {
      darkMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert('LightMode has been activated','success');
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Nuix" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      <div className='container my-3'  >
        {/* <Routes> */}
          {/* <Route path="/" element={<TextForm showalert={showalert} heading="Formatter" />}/> */}
          {/* <Route path="/about" element={<About/>}/> */}
        {/* </Routes> */}
        <TextForm showalert={showalert}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
