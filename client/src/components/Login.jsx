import React, { useState } from 'react'
import imgLogo from '../assets/logo.png'
import '../css/login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import {FaUtensils} from 'react-icons/fa'
import { useUserContext } from '../context/userContext'

function Login() {

    const [data, setData] = useState({ email: '', password: '' })
    const navigate = useNavigate()


    async function handle_login(e) {

        e.preventDefault()

        const { email, password } = data

        try {
                                                                                                       //SEND COOKIES
            const { data } = await axios.post("https://prodigy-fs-01-api.vercel.app/login", { email, password }, {withCredentials: true})

            if (data.error) {
                toast.error(data.error)
            }

            else {
                toast.success("Success!")
                navigate('/')
                
            }


        } catch (error) {
            console.log(error);

        }

    }


    return (
        <div className='login-container'>


            <div className='login'>

                <div className='logo-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                <FaUtensils style={{ color: 'green', fontSize: '2.6rem', marginBottom: '1rem' }} />
                <span style={{fontSize:'2rem', maxWidth: '15rem', margin:'1.2rem 0rem', textAlign:'center'}}>Welcome to Food Eats</span>
                <p style={{color: '#333', fontWeight: '300', fontSize: '1rem'}}>Where greate food meets convenience </p>

                </div>

                <form onSubmit={handle_login}>

                    <label>Email</label>
                    <input type="text" name='email' placeholder='Enter your email' onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <label>Password</label>
                    <input type="password" name='password' placeholder='Enter your password' onChange={(e) => setData({ ...data, password: e.target.value })} />


                    <div className='pass-con'>

                        <div className='pass-left'>


                        </div>

                        <div className='pass-right'>

                            <NavLink style={{textDecoration: 'none'}} to={"/reset-password"}>

                                <NavLink to={"/verify-email"} style={{ marginBottom: '1rem', textDecoration: 'none', color: 'green' }}>Forgot password ?</NavLink>


                            </NavLink>

                        </div>

                    </div>

                    <button type='submit' className='btnSignIn'>Sign In</button>

                    <NavLink to={"/register"} style={{color: '#333', textDecoration: 'none'}}>Need an account? &nbsp; <span className='sign-up'>SIGN UP</span></NavLink>

                </form>

            </div>

            </div>

    )
}

export default Login
