import React from 'react';
import urbanLabLogo from '@/assets/urban scritta grande.png';

export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src={urbanLabLogo}
            alt="Urban Lab"
        />
    );
}
