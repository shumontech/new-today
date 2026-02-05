import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const JoinUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className="join join-vertical w-full space-y-2">
                <button className="btn join-item flex items-center gap-2 bg-[#1877F2] hover:bg-[#145DBF] text-white">
                    <FaFacebookF /> Facebook
                </button>
                <button className="btn join-item flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#0d8ddb] text-white">
                    <FaTwitter /> Twitter
                </button>
                <button className="btn join-item flex items-center gap-2 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white">
                    <FaInstagram /> Instagram
                </button>
            </div>
        </div>
    );
};

export default JoinUs;
