import React, { useState } from 'react'
import { FaUtensils, FaBars } from 'react-icons/fa'
import '../css/navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/userContext.jsx'
import axios from 'axios'
import toast from 'react-hot-toast'



function Navbar() {


    const navigate = useNavigate()

    const { user, setUser } = useUserContext()

    const [isClicked, setIsClicked] = useState(false)

    async function handle_logout() {

        try {

            const { data } = await axios.post('https://prodigy-fs-01-server.vercel.app/logout', {}, { withCredentials: true })

            if (data.success) {
                setUser(null)
                toast.success(data.message)
                navigate("/login", { replace: true })
            }

            else {
                toast.error(data.error)
                navigate('/login', { replace: true })

            }

        } catch (error) {
            console.log(error);
        }

    }

    return (

        <>

            <div className='header'>

                <div className='food-icon-container'>

                    <div className='left-container'>

                        <NavLink to={"/"}>

                            <FaUtensils style={{ color: '#fff', cursor: 'pointer', fontSize: '1.4rem' }} />

                        </NavLink>

                    </div>

                    <div className='right-container'>

                        <span style={{ fontSize: '1.2rem', color: '#fff' }}>Food Eats</span>

                    </div>


                </div>

                <div className={`nav ${isClicked? ("show") : ("hide")}`}>

                    <NavLink to={""} >Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/our-food"} >Our Food</NavLink>
                    <NavLink to={"/contact"} >Contact</NavLink>

                </div>

                <div className='login-containe'>

                    {user ? (
                        <button onClick={handle_logout} className='btnLogin'>Logout</button>
                    ) : (

                        <NavLink to={"/login"} className='btnLogin'>Login</NavLink>


                    )}

                    <div className='bars-icon'>

                        <a><FaBars onClick={() => setIsClicked(prev => !prev)} className='bars' style={{ cursor: 'pointer' }} /></a>

                    </div>


                </div>


            </div >


        </>

    )
}

export default Navbar
