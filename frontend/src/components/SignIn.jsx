import React, { useState } from 'react';
import {logo} from '../assets/index'
import { styles } from './styles';
import cctv from "../assets/cctv.png"
import sigin from "../assets/sigin_bg.png"
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const [compulsoryMark , setCompulsoryMark] = useState({
    email:false,
    password: false
  })

  const handleInputChange = (event) => {
      const {name , value} = event.target;
      setCompulsoryMark({...compulsoryMark , [name] : true});
      setFormData({...formData, [name]: value});
  }


  const handleSignIn = () => {
    const allInputsValid = Object.values(compulsoryMark).every(input => input);
    if(allInputsValid){
      if(formData.email == 'intelldetectadmin24@gmail.com' && formData.password == 'Admin@101' ){
        navigate("/home");
      }
      else{
        alert("Enter correct Inputs");
      }
    }
    else{
      alert("Please fill all the fields.")
    }
  }
  return (
    <div className={`h-screen bg-primary flex items-center justify-center p-8`}>
        <div className='w-1/2 h-full flex flex-col items-center justify-evenly'>
          <div className='h-full w-full flex flex-col items-center justify-center gap-4'>
            <div className='flex gap-6 items-center justify-center'>
              <img src={logo} className='w-[121px] h-[131px]'></img>
              <div className='w-1 h-28 bg-white'></div>
              <span className='text-[29px] font-extrabold text-white font-underated'>intelli<br/>Detect</span>
            </div>
            <div>
                <span className='text-[28px] font-syne text-white font-normal'>"Predict. Prevent. Protect."</span>
            </div>
            <div className='text-center flex items-center justify-center'>
                <span className='text-[32px] text-white font-underated text-center'>
                Advancing Crime <br/> Detection with AI <br/> and ML
                </span>
            </div>
          </div>
          <div className='h-full w-full flex items-center justify-center mt-12'>
              <img src={cctv} className='h-[300px] object-fill w-[500px]'></img>
          </div>
        </div>
        <div className='w-1/2 h-full relative flex items-center justify-center'>
          <img src={sigin} className='h-full w-full object-cover rounded-2xl'></img>
          <div className='absolute w-[60%] h-fit bg-white rounded-3xl flex flex-col gap-6 items-center p-[35px] text-[#282828]'>
              <div className='w-full flex flex-col items-center justify-center gap-3'>
                <h1 className=' text-2xl'>Sign In</h1>
                <p className='text-[#949CA9] text-sm'>Enter details to Sign in</p>
              </div>
              <div className='w-full flex flex-col h-fit gap-4'>
                <div className='flex flex-col gap-2'>
                  <label className=''>Email Address</label>
                  <input name='email' onChange={handleInputChange} className='w-full h-12 p-3 rounded-md placeholder:text-[#949CA9] bg-white text-sm border border-[#E8E9EA]' placeholder='johndoe24@gmail.com'></input>
                </div>
                <div className='flex flex-col gap-2'>
                  <label>Password</label>
                  <input name='password' type='password' onChange={handleInputChange} className='w-full h-12 p-3 rounded-md placeholder:text-[#949CA9] bg-white text-sm border border-[#E8E9EA]' placeholder='Enter your password'></input>
                </div>
              </div>
              <div className='w-full h-12'>
                <button onClick={handleSignIn} className='w-full h-full bg-[#0D6EFD] rounded-md text-[white]'>Sign in</button>
              </div>
              <div className='w-full flex items-center justify-center text-sm'>
                <span>Don't have an account ? <a className='text-[#0D6EFD] cursor-pointer'>Sign up</a></span>
              </div>
          </div>
        </div>
    </div>
  )
}

export default SignIn