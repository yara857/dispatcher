import { Routes , Route } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing/Landing';
// import { Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
// import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <div>
      <Landing/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );

}

export default App;
