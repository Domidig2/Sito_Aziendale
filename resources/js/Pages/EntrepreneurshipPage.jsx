import React from 'react';
import GenericPage from '@/Pages/GenericPage';
import BaseLayout from '@/Layouts/BaseLayout';
// Questa pagina sarà rinominata al bisogno e la rotta verrà riciclata
const pageData = {
  title: "Esplora il di traduzioni",
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

const EntrepreneurshipPage = () => {
  return <GenericPage pageData={pageData} />;
};
EntrepreneurshipPage.layout = (page) => <BaseLayout>{page}</BaseLayout>;


export default EntrepreneurshipPage;
