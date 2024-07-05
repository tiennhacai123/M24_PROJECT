import React from 'react'
import SignInSignUp from './auth/SignInSignUp'
import MainPage from './pages/MainPage'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/register' element={<SignInSignUp></SignInSignUp>} ></Route>
      </Routes>
    </div>
  )
}
