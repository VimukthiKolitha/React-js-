import React from 'react';

function Units({ img, ID, city, coutry }) {
    return (
        <div>
            <img src={img} alt="data" style={{ width: '100px', height: '100px' }} />
            <h3>{ID}</h3>
            <h3>{city}</h3>
            <h3>{coutry}</h3>
        </div>
    );
}

export default Units;
