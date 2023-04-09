import './App.css';
import SecureButton from './Comp/SecureButton';
import Header from './Comp/Header';
import SignIn from './Comp/SignIn';
import SignUp from './Comp/SignUp';
import About from './Comp/About';
import {Route, Routes} from "react-router-dom";
import Upload from './Comp/Upload';
import 'remixicon/fonts/remixicon.css'


function App () {

  return (
    
    <div className="App">
      
      <Routes>
        <Route exact path='/' Component={Header} />
        <Route path='/about' Component={About} />
        <Route path='/signIn' Component={SignIn}/>
        <Route path='/signUp' Component={SignUp}/>
        <Route path='/secure' Component={SecureButton}/>
        <Route path='/upload' Component={Upload}/>

      </Routes>
      </div>

   
  );
}

export default App;
