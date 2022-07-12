import './App.css';
import LoginRegisterForm from './Components/LoginRegisterForm';
import Home from './Components/Home';
import Nav from './Components/Nav';
import { Routes, Route } from 'react-router-dom';
import {Auth} from "./auth/Auth";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='App'>
        <Nav />
        <ToastContainer />
        <Routes>
          <Route path='/login' element= {<LoginRegisterForm title={'LOG-IN'} />} />
          <Route path='/register' element= {<LoginRegisterForm title={'REGISTRATION'} />} />
          <Route path='/' element= {<LoginRegisterForm title={'LOG-IN'}/>} />
          <Route path='/home' element= {<Auth><Home /></Auth>} />
        </Routes>
    </div>
  );
}

export default App;
