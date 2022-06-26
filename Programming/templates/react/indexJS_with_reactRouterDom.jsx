import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react'
import Home from './eduwork/homepage/home'
import Register from './eduwork/register/register'
import Login from './eduwork/login/login'

import './App.css';
import request from './apiReq'

function App() {
  const [memory2, setMemory2] = useState({
    loggedIn: false,
    toBuy: false,
    selectedAlamat: false,
    confirmedBuy: false,
    toEditProfile: {
      allowed: false,
      email: false
    }
  })

  useEffect(() => {
    console.log('authenticate useeffect ran...');
    async function checkToken() {
      if (localStorage.getItem('token')) {
        try {
          // request function is a function that use axios to do a request
          const data = await request('auth', 'GET', null)
          setMemory2(prev => {
            if (data.loggedIn) {
              return { ...prev, loggedIn: 'token accepted' }
            } else {
              console.log(data);
              return { ...prev, loggedIn: 'token rejected' }
            }
          })
        } catch (error) {
          console.log('that error:');
          console.log(error.message)
        }
      } else {
        alert('no token found, need to login')
        setMemory2(prev => {
          return { ...prev, loggedIn: 'token rejected' }
        })
      }
    }
    checkToken()
  }, [])

  return (
    <BrowserRouter>
      {
        memory2.loggedIn ?
          <Routes>
            <Route path='/' element={
              <Home setMemory={setMemory2} topMemory={memory2} />
            } />
            <Route path='register' element={
              memory2.loggedIn === 'token accepted' ?
                <Navigate to={'/'} /> :
                <Register setMemory={setMemory2} topMemory={memory2} />
            } />
            <Route path='login' element={
              memory2.loggedIn === 'token accepted' ?
                <Navigate to={'/'} /> :
                <Login setMemory={setMemory2} topMemory={memory2} />
            } />
            <Route path='*' element={
              <Navigate to={'/'} />
            } />
          </Routes> :
          
          // show loading when verifying the user token
          <h1>Loading...</h1>
      }
    </BrowserRouter>
  );
}

export default App;
