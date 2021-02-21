import React from 'react';
import Welcome from './Welcome';
import HotelInfo from './HotelInfo';

const Main = () => {
    return(
        <div className='main'>
            <Welcome/>
            <HotelInfo/>
        </div>  
    );
}

export default Main;