import Joi from 'joi';
import React, { useState } from 'react'
import $ from "jquery"
export default function Contact() {

    const [user, setUser] = useState({
        name:'',
        phone:'',
        age:'',
        email:'',
        password:'',
        repassword:''
    });
    const [errors, setErrors] = useState([]);


    function getUser(e) {
        setErrors([]);
    let newUser ={...user};
    let userValue= e.target.value;
    newUser[e.target.id] =userValue;
    setUser(newUser)
    // console.log(newUser);
    }


    function submitUser(e) {
        e.preventDefault();
        const schema=Joi.object({
        name:Joi.string().alphanum().max(30).min(3).required(),
        phone:Joi.number().min(11).required(),
        age: Joi.number().min(12).max(60).required(),
        email:Joi.string().email({minDomainSegments:2 , tlds:{allow: ["com","net"]}}).required(),        
        password:Joi.string().pattern(new RegExp("^[a-zA-Z0-9@#$%^&*/]{3,30}$")),
        repassword:Joi.ref('password'),
    })

    let validate= schema.validate(user,{abortEarly:false})
    // console.log(validate);
    if (validate.error==undefined) {
        // console.log("done");
        //mafe4 error
        $('button').removeClass('btn-outline-danger').addClass('btn-outline-info')
    }
    else{
        setErrors(validate.error.details)
        // console.log(validate.error.details);
    }
    }


    function sendKey(key) {
        if (errors.length !=0) {
            for (let i = 0; i < errors.length; i++) { 
               if (errors[i].context.key==key) {
                // console.log(errors[i].message);
                return errors[i].message
               }
            }
        }
    }



  return <>
  <div className='container p-5'>
    <form onSubmit={submitUser} className=' row ms-4 g-3'>

    <div className='col-md-6'>
        <div className="mb-2">
          <input onChange={getUser} type="text" id='name' className="form-control bg-transparent text-white" placeholder="Enter Your Name"/>
        {sendKey("name")? <div className='text-danger'>The Name is Incorrect</div>:""}
        </div>   
    </div>
    <div className='col-md-6'>
        <div className="mb-2">
          <input  onChange={getUser} type="number" id='phone' className="form-control bg-transparent text-white" placeholder="Enter Your Phone"/>
          {sendKey("phone")? <div className='text-danger'>Your Phone is Incorrect</div>:""}
        </div>   
    </div>
    <div className='col-md-6'>
        <div className="mb-3">
          <input  onChange={getUser} type="number" id='age' className="form-control bg-transparent text-white" placeholder="Enter Your Age"/>
          {sendKey("age")? <div className='text-danger'>The Age is Incorrect</div>:""}
        </div>   
    </div>
    <div className='col-md-6'>
        <div className="mb-2">
          <input  onChange={getUser} type="email" id='email' className="form-control bg-transparent text-white" placeholder="Enter Your Email"/>
          {sendKey("email")? <div className='text-danger'>The Email is Incorrect</div>:""}
        </div>   
    </div>
    <div className='col-md-6'>
        <div className="">
          <input  onChange={getUser} type="password" id='password' className="form-control bg-transparent text-white" placeholder="Enter Your Password"/>
          {sendKey("password")? <div className='text-danger'>The Password is Incorrect</div>:""}
        </div>   
    </div>
    <div className='col-md-6'>
        <div className="">
          <input  onChange={getUser} type="password" id='repassword' className="form-control bg-transparent text-white" placeholder="RePassword"/>
          {sendKey("repassword")? <div className='text-danger'>The RePassword is Incorrect</div>:""}
        </div>   
    </div>
    
        <button className='btn btn-outline-danger w-25 mx-auto mt-5'> submit</button>
    </form>
  </div>
  
  
  </>
}
