import React, { useRef } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import InvestSection from '@/Components/InvestSection';
import FormSection from '@/Components/FormSection';
import MainSection from '@/Components/MainSection';
import ReservedSection from '@/Components/ReservedSection';

export default function Welcome() {

    const formRef = useRef(null);

    return (
        <>

            <InvestSection formRef={formRef} />

            <div ref={formRef}>
                <FormSection />
            </div>
            <MainSection />
            <ReservedSection />
        </>
    );
}

Welcome.layout = (page) => <PublicLayout>{page}</PublicLayout>;
