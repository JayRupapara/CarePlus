import React, { useState } from 'react';
import Navbar from '../components/navbar';
import PatientImg from '../assets/patientlogin.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const LoginPatient = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
  

        try {
            const response = await axios.post('http://'+ import.meta.env.VITE_DB_HOST +'/api/login-patient', {
                email,
                password
            });

            if (response.status === 200) {
                toast.success("Login Successfully !");
                const token = response.data.token;
                localStorage.setItem('PatientToken', token);
                navigate('/patient/dashboard');
            }
        } catch (err) {
            // Set error message from the server response or default message
            toast.error(err.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div className='bg-background text-secondary h-screen'>
            <Navbar />
            <div className="container my-10 mx-auto bg-white rounded-2xl p-6">
                <section className="body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <img src={PatientImg} width={500} alt="Patient" />
                            <h1 className="title-font mt-3 font-medium text-3xl">
                                Slow-carb next level shoindcgoitch ethical authentic, poko scenester
                            </h1>
                            <p className="leading-relaxed mt-4">
                                Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.
                            </p>
                        </div>
                        <div className="lg:w-2/6 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-primary font-semibold text-2xl title-font mb-5">Patient Sign In</h2>
                           
                            <form onSubmit={handleLogin}>
                                <div className="relative mb-4">
                                    <label htmlFor="email" className="leading-7 text-sm">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none py-1 px-3 leading-8"
                                        required
                                    />
                                </div>
                                <div className="relative mb-4">
                                    <label htmlFor="password" className="leading-7 text-sm">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none py-1 px-3 leading-8"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="text-white w-fit bg-primary border-primary border-0 py-2 px-8 focus:outline-none rounded-xl text-lg"
                                >
                                    Login
                                </button>
                            </form>
                            <p className="mt-3">
                                Don't Have an Account?
                                <Link to="/register-patient" className='text-primary'> Register Now</Link>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default LoginPatient;
