import React from 'react'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router'

const Signout = () => {
    const navigate = useNavigate()

    const signout = ():void => {
        signOut(auth).then(() => {
            navigate('/login')
        }).catch((err) => {
            alert("Error, couldn't sign out, try again")
        })
    }

    return (
        <li onClick={signout}>Signout</li>
    )
}

export default Signout