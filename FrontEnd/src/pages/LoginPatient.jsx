import React from 'react'
import Navbar from '../components/navbar'

const LoginPatient = () => {
    return (
        <div className='bg-background h-screen'>
            <Navbar />
            <div className="container mt-10 mx-auto  bg-white rounded-2xl p-6">
            <h1 className="text-primary text-3xl font-semibold mb-8">Login Patient</h1>
            </div>
        </div>
    )
}

export default LoginPatient