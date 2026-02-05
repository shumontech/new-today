import React from 'react';
import SocialLogin from './SocialLogin';
import JoinUs from './JoinUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className=' sticky top-1 h-screen overflow-y-auto '> 
            <SocialLogin></SocialLogin>
            <JoinUs></JoinUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;