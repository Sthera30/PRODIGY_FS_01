import React, { useEffect, useState } from 'react'
import { useUserContext } from '../context/userContext.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function Protected({ children }) {

    const { user, setUser } = useUserContext()
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    async function handle_get_user_info() {

        try {

            const res = await axios.get(`https://prodigy-fs-01-api.vercel.app/getUser`, { withCredentials: true }) //send cookies

            if (res.data.success) {
                setUser(res.data.data.user)
                console.log('Hello');

            }

            else {
                setUser(null)
            }

        } catch (error) {
            setUser(null)
            console.log(error);
        } finally {
            setIsLoading(false)
        }

    }

    useEffect(() => {

        handle_get_user_info()

    }, [])


    if (isLoading) {
        return <div>Loading...</div>
    }

    if(!user){
        navigate("/login", {replace: true})
        return null
    }

    return (
        <div>

            {children}

        </div>
    )
}

export default Protected
