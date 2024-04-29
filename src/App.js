import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import QRCodeGenerator from './Components/QRCodeGenerator';
import QRScanner from './Components/QRScanner';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar'
import Register from './Components/Register.jsx';
import Dashboard from './Components/Dashboard.jsx';
import AddStudent from './Components/AddStudent.jsx';
import AddTeacher from './Components/AddTeacher.jsx';
import Login from './Components/Login.jsx';

import './Components/cvr.ts';
function App() {
  return (
    <>
    <BrowserRouter >
    <Navbar />
    <Routes >
      <Route path="/login" element={<Login />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/' element={<Home />} />
      <Route path='/addStudent' element={<AddStudent />} />
      <Route path='/register' element={<Register />} />
      <Route path="/qrcode" element={<QRCodeGenerator />} />
      <Route path="/auth" element={<QRScanner />} />
      <Route path="/addTeacher" element={<AddTeacher />}/>
    </Routes>
</BrowserRouter>
    </>
  )
}

export default App