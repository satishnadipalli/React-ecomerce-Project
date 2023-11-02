import React from 'react'

const Password = ({handleChange,userData,type,name}) => {
  return (
    <input 
        className='border-2 border-gray-300 block mr-2 ml-3 block mt-5 w-52' 
        type='password'
        name='password'
        placeholder='password'
        value={userData.password}
        onChange={handleChange}
    />
  )
}

export default Password
