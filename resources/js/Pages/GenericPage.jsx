import React from 'react';
import BaseLayout from '@/Layouts/BaseLayout';
import ReservedSection from '@/Components/ReservedSection';
import ContactForm from '@/Components/ContactForm';

const GenericPage = ({ pageData }) => {
  return (
    <BaseLayout>
      {/* Prima sezione */}
      {(pageData.title || pageData.subtitle || pageData.logo) && (
        <section className="bg-white text-black py-16">
          <div className="container mx-auto">
            {pageData.title && <h1 className="text-4xl font-bold mb-4">{pageData.title}</h1>}
            {pageData.subtitle && <p className="text-lg mb-4">{pageData.subtitle}</p>}
            {pageData.logo && (
              <img src={pageData.logo} alt="Logo" className="w-32 h-auto" />
            )}
          </div>
        </section>
      )}

      {/* Sezione con il form: appare solo se formFields è presente */}
      {pageData.formFields && (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">{pageData.formTitle}</h2>
            <ContactForm formFields={pageData.formFields} />
          </div>
        </section>
      )}

      {/* Reserved Section */}
      <ReservedSection />
    </BaseLayout>
  );
};

export default GenericPage;
