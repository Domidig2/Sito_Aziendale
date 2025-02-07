import React from 'react';
import CustomNavbar from '@/Components/CustomNavbar';
import Footer from '@/Components/Footer';

export default function BaseLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <CustomNavbar />
            <main className="flex-1 w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
