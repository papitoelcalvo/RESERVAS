import React from 'react';
import '../css/BruseBanner.css';

function BruseBanner({icon,color}) {

  return (
    <div className='banner' style={{backgroundColor: color}}>
        <div className="part">
            <p>nombre de la vaina</p>
            <h2>50,222</h2>
            <p>que se yo lo que dice abajo</p>
        </div>
        <div className="part2">
            {icon}
        </div>
    </div>
  );
}

export default BruseBanner;
