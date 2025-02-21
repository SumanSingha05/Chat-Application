import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers';
const OtherUsers = () => {

  useGetOtherUsers();

  return (
    <div className='overflow-auto'>
      <OtherUser/>
      <OtherUser/>
      <OtherUser/>
      <OtherUser/>
      <OtherUser/>
      <OtherUser/>
      <OtherUser/>
      <OtherUser/>
      <OtherUser/>

    </div>
  )
}

export default OtherUsers