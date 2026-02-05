import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 '>
            <p className='text-2xl bg-secondary p-2 '>Latest</p>

            <Marquee className='gap-16 ' pauseOnHover={true} speed={40}>
                 <p>Lorem ipsum dolor sit amet consectetur elit. Unde, autem?</p>
                 <p>Lorem ipsum dolor sit amet consectetur elit. Unde, autem?</p>
                 <p>Lorem ipsum dolor sit amet consectetur elit. Unde, autem?</p>
                 <p>Lorem ipsum dolor sit amet consectetur elit. Unde, autem?</p>

            </Marquee>
           
        </div>
    );
};

export default LatestNews;