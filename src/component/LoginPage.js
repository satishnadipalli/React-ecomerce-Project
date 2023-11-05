import React, { useState } from 'react'
import { UserData } from './LoginData';
import Password from './Password';
import Email from './Email';

const LoginPage = ({login,setisLogin}) => {
    const [emailexist,setEmailExist]=useState(false);
    const[goSign,setgosign] = useState(false);
    const [userData,setUserData] = useState({
        email :'',
        password : ''
    });

    function handleChange(event){
        const {name,value} = event.target;
        setUserData((previousValue)=>{
            return{
                ...previousValue,
                [name] : value
            }
        })
    }
    console.log(UserData)
    function handleSubmit(event) {
        event.preventDefault();
        console.log(emailexist)
        const storedData = JSON.parse(localStorage.getItem('user')) || [];
        
        const emailExists = storedData.some((element) => element.email === userData.email);
        const BothExists = storedData.some((element) => element.email === userData.email
         && element.password===userData.password);
        console.log(emailExists);
        if(userData.email==='' || userData.password===''){
            return
        }
        if(BothExists){
            setgosign(true);
            setEmailExist(false);
            setisLogin(false);
            return
        }
        if (emailExists) {
          setEmailExist(true);

          return
        } else {
            storedData.push(userData);
            localStorage.setItem('user', JSON.stringify(storedData));
            setUserData({ email: '',password:'' });
            setEmailExist(false);
            setisLogin(false);
          }  
    }

  return (
    <div className='p-10 border-2 w-96 h-96 flex align-center justify-center mt-44 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
        signup
        <form onSubmit={(event)=>handleSubmit(event)} className='flex items-center justify-center flex-col'>
           {goSign ? '' : (emailexist  ? <p className='w-46 text-sm'>Email already in use try with a new email</p> : '')}
            {goSign? <p>You have an account already go and login</p> : ''}
            <Email 
                handleChange={handleChange} 
                userData={userData} 
            />
            <Password 
                handleChange={handleChange} 
                userData={userData} 
            />
            <button type='submit' className='py-2 text-blue-100 bg-blue-700 rounded-xl px-7 text-sm  mr-2 ml-3 block mt-5'>
                signup
            </button>
            
        </form>
    </div>
  )
  }

export default LoginPage
