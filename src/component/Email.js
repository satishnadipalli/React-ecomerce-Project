import React from 'react'

const Email = ({userData,handleChange}) => {
  return (
    <input
        className='border-2 border-gray-300 mr-2 ml-3 block w-52 ' 
        type='email'
        name='email'
        placeholder='User Email'
        value={userData.email}
        onChange={handleChange}
    />
  )
}

export default Email
