import React from 'react';
import logo from "../assets/assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap- 5 m-4'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-accent'>Jaurnalism without Fear and favour</p>
            <p>{format(new Date(),"EEEE , MMMM MM , yyyy ")}</p>
            
        </div>
    );
};

export default Header;