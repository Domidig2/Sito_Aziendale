import React from 'react';
import BaseLayout from './BaseLayout';

export default function PublicLayout({ children }) {
    return (
        <BaseLayout>
            <div className=" flex-1 text-white">
                {children}
            </div>
        </BaseLayout>
    );
}
