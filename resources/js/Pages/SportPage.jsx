import React from 'react';
import GenericPage from '@/Pages/GenericPage';
import BaseLayout from '@/Layouts/BaseLayout';

const pageData = {
  title: "Esplora il Mondo Digitale",
  subtitle: "Scopri tutte le opportunità che il digitale può offrire!",
  logo: '/resources/js/assets/images/logos/Logo arancio-b bookmarks.jpg',
  formTitle: "Modulo di Contatto",
  formFields: [
    { name: 'FirstName', label: 'Nome', type: 'text', placeholder: 'Inserisci il tuo nome' },
    { name: 'SurName', label: 'Cognome', type: 'text', placeholder: 'Inserisci il tuo cognome' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Inserisci la tua email' },
    { name: 'phoneNumber', label: 'Telefono', type: 'tel', placeholder: 'Inserisci il tuo numero di telefono' },
    { name: 'message', label: 'Messaggio', type: 'textarea', placeholder: 'Scrivi il tuo messaggio', rows: 5 }
  ]
};

const SportPage = () => {
  return <GenericPage pageData={pageData} />;
};
SportPage.layout = (page) => <BaseLayout>{page}</BaseLayout>;


export default SportPage;
