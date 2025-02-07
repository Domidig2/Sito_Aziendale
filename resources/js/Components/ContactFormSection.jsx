import React from 'react';
import ContactForm from '@/Components/ContactForm';

const ContactFormSection = ({ formFields, formTitle, onSubmit }) => {
  return (
    <section className="bg-[#f4b44b] text-black py-8 min-h-[60vh] flex flex-wrap">
      <div className="w-full md:w-2/3 px-5 mx-auto">
        <div className="pt-8">
          <h1 className="text-4xl font-bold mb-4">{formTitle}</h1>

          <ContactForm formFields={formFields} onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

