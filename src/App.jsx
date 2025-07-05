import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import SigninWithEmail from './pages/SigninWithEmail'
import SigninWithNumber from './pages/SigninWithNumber'
import AppLayout from './layouts/AppLayout'
import ContactUs from './pages/ContactUs'
import Terms from './pages/Terms'
import OtpValidation from './pages/OtpValidation'



function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout/>}>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/privacy-policy' element={<Terms/>}/>
            <Route path='/signin' element={<Signin/>}>
              <Route path='/signin' element={<SigninWithEmail/>}></Route>
              <Route path='/signin/number' element={<SigninWithNumber/>}></Route>
              <Route path='/signin/validate' element={<OtpValidation/>}></Route>
            </Route>
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App