import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';  
import brain from './brain.png';

const Logo = () => {
    return(
       <div className='ma4 nt0'>
       <Tilt className="Tilt br4 shadow-2" options={{ max : 75 }} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner pa3"> <img style={{paddingTop: '2px'}} alt='logo' src={brain}/> </div>
       </Tilt>
       </div>
    );
}

export default Logo;