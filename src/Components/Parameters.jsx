import React from 'react';
import { useParams } from 'react-router-dom';

const Parameters = () => {
    const {parameter, color1, color2} = useParams();
    return (
        <div 
            style={{
                backgroundColor: color2,
                color:color1
            }}>
            <h1>{parameter}</h1>
        </div>
    );
}

export default Parameters;