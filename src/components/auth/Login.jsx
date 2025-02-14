import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
            e.preventDefault();
            console.log("email is ", email)
            console.log("password is ", password)

            setEmail('')
            setPassword('')
        }

  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-2 border-cyan-400 p-20 rounded-xl   '>
            <form onSubmit={(e)=>{
                    submitHandler(e)
            }} 
            className='flex flex-col items-center justify-center'>
                <input value={email}
                onChange={(e)=>{
                   setEmail(e.target.value) 
                }}
                required 
                className='text-white outline-none bg-transparent border-2 border-cyan-400 text-xl rounded-full placeholder:text-grey-400 px-3 py-5' type='email' placeholder='Enter your email address' 
                />
                <input value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='text-white outline-none bg-transparent border-2 border-cyan-400 text-xl rounded-full px-3 py-5 placeholder:text-gray-400 mt-3'  type='password' placeholder='Enter password'
                 />
                <button className='text-white outline-none  border-none bg-cyan-400 text-xl rounded-full px-3 py-5 mt-5 '  type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
