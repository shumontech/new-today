import React from 'react';
import img from '../../assets/assets/class.png'
import img2 from '../../assets/assets/playground.png'
import img3 from '../../assets/assets/swimming.png'
import img4 from '../../assets/assets/bg.png'


const Qzone = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 w-full'>Qzone</h2>
            <div>
                <img className='w-full' src={img} alt="" srcset="" />
                <img className='w-full' src={img2} alt="" srcset="" />
                <img className='w-full' src={img3} alt="" srcset="" />
            </div>
            <div>
                <img className='w-full mt-8' src={img4} alt="" />
            </div>
        </div>
    );
};

export default Qzone;