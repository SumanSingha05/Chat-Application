import React from 'react'

const SendInput = () => {
  return (
    <form>
        <div>
            <input
            type='text'
            placeholder='Send a message...'
            className='border text-sm rounded-lg block w-full bg-gray-700 text-white'

            />
        </div>
    </form>
  )
}

export default SendInput