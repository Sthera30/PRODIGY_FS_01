import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layouts from './layouts/Layouts.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import OurFoodPage from './pages/OurFoodPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Protected from './pages/Protected.jsx'
import OtpPage from './pages/OtpPage.jsx'
import VerifyEmailPage from './pages/VerifyEmailPage.jsx'
import ChangePasswordPage from './pages/ChangePasswordPage.jsx'

function App() {


  const router = createBrowserRouter(


    createRoutesFromElements(

      <Route path={"/"} element={<Layouts />}>

        <Route index element={<Protected><HomePage /></Protected>} />
        <Route path={"/about"} element={<Protected><AboutPage /></Protected>} />
        <Route path={"/our-food"} element={<Protected><OurFoodPage /></Protected> } />
        <Route path={"/contact"} element={<ContactPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/verify-otp"} element={<OtpPage />} />
        <Route path={"/change-password"} element={<ChangePasswordPage />} />
        <Route path={"verify-email"} element={<VerifyEmailPage />} />

      </Route>

    )

  )

  return (

    <RouterProvider router={router} />

  )
}

export default App
