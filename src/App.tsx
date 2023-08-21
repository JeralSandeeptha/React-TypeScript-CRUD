import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import SingleUser from './pages/SingleUser';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/addnewcontact' Component={AddUser}/>
        <Route path='/updateUser/:id' Component={UpdateUser}/>
        <Route path='/users/:id' Component={SingleUser}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
