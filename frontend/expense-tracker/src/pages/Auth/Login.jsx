import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {}


  return (

    <AuthLayout>
      <div className='lg:w-[70%] h-3/4 m:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>
          Welcome Back
        </h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to login
        </p>

        <form onSubmit={handleLogin}>
          <Input value={email} onChange={({target}) => setEmail(target.value)} label="Email Address" placeholder="example@email.com"></Input>
        </form>
      </div>
    </AuthLayout>
  )
}

export default Login
