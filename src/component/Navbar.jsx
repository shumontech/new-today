import React from 'react';
import { NavLink } from 'react-router-dom';
import user from '../assets/assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="div"></div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/career"}>Career</NavLink>
            </div>
            <div className="login_btn flex gap-5">
                <img src={user} alt="" />
                <button className='btn btn-primary'>Login</button>
                </div>
            
        </div>
    );
};

export default Navbar;