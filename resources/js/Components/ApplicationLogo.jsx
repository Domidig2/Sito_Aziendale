import React from 'react';
import urbanLabLogo from '@/assets/images-removebg-preview.png';

export default function ApplicationLogo(props) {
    return (
        <img
            {...props}
            src={urbanLabLogo}
            alt="Urban Lab"
        />
    );
}
