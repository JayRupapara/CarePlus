import React from 'react'
import Navbar from '../components/navbar'
import HospitalImg from '../assets/hospitallogin.png'
import { Link } from 'react-router-dom'

const LoginHospital = () => {
    return (
        <div className='bg-background text-secondary h-screen'>
            <Navbar />
            <div className="container mt-10 mx-auto  bg-white rounded-2xl p-6">
                <section class=" body-font">
                    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                            <img src={HospitalImg} width={600} alt="" />
                            <h1 class="title-font mt-3 font-medium text-3xl">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                            <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                        </div>
                        <div class="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 class="text-primary font-semibold text-2xl title-font mb-5">Hospital Sign In</h2>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none py-1 px-3 leading-8 " />
                            </div>
                            <div class="relative mb-4">
                                <label for="password" class="leading-7 text-sm">Password</label>
                                <input type="password" id="password" name="password" class="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none py-1 px-3 leading-8 " />
                            </div>
                            <button class="text-white w-fit bg-primary border-primary border-0 py-2 px-8 focus:outline-none rounded-xl text-lg">Login</button>
                            <p class="mt-3">Don't Have an Account?<Link to={"/register-hospital"} className='text-primary'> Register Now</Link></p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default LoginHospital