"use client"

import Link from 'next/link'
import React from 'react'


function LoginPage() {
  return (

    // Basic Statement ---------------------------------
    // <div classNameName=" text-8xl text-center">
        
    //     LoginPage <br/>
    // <Link href={"/"}>Home Page </Link>    
        
    // </div>

    // Login Starts  =================================================

    <div className="max-w-[1166px] my-2 mx-auto bg-black flex flex-wrap rounded-lg justify-between items-center">
  {/* <!-- Left Section --> */}
  <div className="flex items-center shadow-md rounded-lg overflow-hidden justify-center w-[20rem] mx-6 md:w-auto my-4 basis-[50%]">
    <div className="text-muted hidden md:flex justify-center items-center flex-col h-dvh w-dvh">
      <h3 className="text-2xl font-semibold">Welcome!</h3>
      <p>Enter your personal details for login</p>
      <a href="/signout">
  
        <button className="border-zinc-500 text-zinc-300 hover:border-zinc-200 hover:text-zinc-200 transition-colors border rounded-full px-8">
          Sign up
        </button>
  
      </a>
    </div>
  </div>
  
  {/* Right Section ----------------------- */}
  <div className="px-4 py-4 my-4 mx-4 md:w-1/2 w-[20rem] bg-white rounded-lg h-dvh basis-[40%]">
    <h3 className="text-center text-2xl font-semibold">Sign In here</h3>
    
    {/* Social Media Sign In Buttons --------------- */}
    <div className="flex justify-center items-center my-3">
      <button className="rounded-full h-[2.5rem] w-[2.5rem] p-0 mx-2 border-zinc-400">
        {/* Google Icon Here ---------------------- */}
      </button>
      <button className="rounded-full h-[2.5rem] w-[2.5rem] p-0 mx-2 border-zinc-400">
        {/* Facebook Icon Here----------------------- */}
      </button>
    </div>
    
    <p className="text-center">or use this option</p>
    
    {/*  Sign In Form ------------------------- */}
    {/* form onSubmit="onSubmitHandler" */}

    <form >
      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input type="email" placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Password</label>
        <input type="password" placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"/>
      </div>
      
      <button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Login</button>

    </form>
  </div>
</div>

    // Login End  =================================================


  )
}

export default LoginPage