import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
// import SignUpShipper from './Pages/SignUpShipper/SignUpShipper';
import SignUp from './Pages/SignUp/SignUp';
// import ShipperHome from './Pages/Shipper/ShipperHome';
// import ShipperCreateAd from './Pages/Shipper/ShipperCreateAd';
import Landing from './Pages/Landing/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
  );

}

export default App;
