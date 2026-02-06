import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
             <h3 className="text-2xl font-semi-bold items-center">Login Your Account</h3>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
         
          <button className="btn btn-neutral mt-4">Login</button>
           <p className='font-semibold text-center'>Don't Have an account ? <Link className='text-red-500' to="/auth/register">Register</Link></p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;