import React from 'react'

const Signup = () => {
  return (
    <div className='min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
      <h1 className='text-3xl font-bold text-center'>Signup</h1>
      <form action="">
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input
           className='w-full input input-bordered h-10'
           type="text" placeholder='Full Name'></input>
        </div>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input
           className='w-full input input-bordered h-10'
           type="text" placeholder='Username'></input>
        </div><div>
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input
           className='w-full input input-bordered h-10'
           type="password" placeholder='Suman'></input>
        </div><div>
          <label className='label p-2'>
            <span className='text-base label-text'>Confirm Password</span>
          </label>
          <input
           className='w-full input input-bordered h-10'
           type="password" placeholder='Suman'></input>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Signup