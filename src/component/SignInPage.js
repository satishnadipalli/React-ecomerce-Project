import React, { useState } from 'react';
import { UserData } from './LoginData';
import Password from './Password';
import Email from './Email';

const SignUpPage = ({ signUp, setSignup, setisLogin }) => {
  const [emailexist, setEmailExist] = useState(false);
  const [goSign, setgosign] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData((previousValue) => {
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('user')) || [];
    const BothExists = storedData.some(
      (element) =>
        element.email === userData.email && element.password === userData.password
    );

    if (BothExists) {
      setgosign(true);
      setEmailExist(false);
      setSignup(true);
      return;
    } else {
      setSignup(false);
    }
  }

  function handleLogPage() {
    setisLogin(false);
  }

  return (
    <div className="p-10 border-2 w-96 h-auto sm:w-96 sm:h-96 md:w-96 md:h-96 flex flex-col items-center justify-center mt-10 shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Login</h2>
      <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col items-center justify-center">
        {goSign ? (
          ''
        ) : emailexist ? (
          <p className="text-red-600 text-sm mb-4">
            Email already in use. Please try with a new email.
          </p>
        ) : (
          ''
        )}
        {goSign ? (
          <p className="text-blue-600">
            You already have an account. Please go and login.
          </p>
        ) : (
          ''
        )}
        <Email handleChange={handleChange} userData={userData} />
        <Password handleChange={handleChange} userData={userData} />
        <button
          type="submit"
          className="py-3 px-8 text-white bg-blue-600 rounded-full text-lg mt-6 transition-transform transform hover:scale-105"
        >
          Login
        </button>
        <button
          onClick={handleLogPage}
          className="py-3 px-8 text-white bg-blue-600 rounded-full text-lg mt-3 transition-transform transform hover:scale-105"
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;

