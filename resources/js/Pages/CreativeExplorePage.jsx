import React from 'react';
import GenericPageLayout from '@/Layouts/GenericPageLayout';

// Immagini
import TizioLab from '@/assets/placeholders/Placeholder1.jpg';
import TizioRover from '@/assets/placeholders/Placeholder2.jpg';
import TizioStreet from '@/assets/placeholders/Placeholder3.jpg';
import TizioStars from '@/assets/placeholders/Placeholder4.jpg';
import TizioSad from '@/assets/Immagine 24-10-24 - 15.26 (1).jpg';
import TizioHappy from '@/assets/Immagine 24-10-24 - 15.26.jpg';

const CreativeExplorePage = () => {
  return (
    <GenericPageLayout
      // Titolo di introduzione
      introTitle="Se le idee rappresentano una novità, la modalità per averne una è l’analisi dati."
      // Testi introduttivi
      introTexts={[
        "Lo sviluppo del capitale umano ingenera reazioni emotive soprattutto se si pensa ad innovazioni di prodotto e non di processo, quindi Persona nuova e non crescita.",
        "Lo sa bene Tizio che dalla Comunità Digitale è passata a quella Creativa.",
      ]}
      // Galleria di immagini
      galleryImages={[
        { src: TizioLab, alt: 'Tizio in Urban Lab' },
        { src: TizioRover, alt: 'Tizio in Range Rover' },
        { src: TizioStreet, alt: 'Tizio in Urban Street' },
        { src: TizioStars, alt: 'Tizio in Stars' },
      ]}
      // Titolo della sezione
      sectionTitle="Sono Tizio ed appartengo alla Comunità Creativa, per cambiare devo collaudare."
      // Testi della sezione
      sectionTexts={[
        "Imparo ad analizzare dati per crescere professionalmente con gli altri Consulenti.",
        "Solo 12 ore per analizzarli con alcuni strumenti di testing: Google Sheets, Business Intelligence e Tableau.",
      ]}
      // Immagine della sezione con hover
      sectionImage={TizioSad}
      sectionImageHover={TizioHappy}

      // Rotte
      prevRoute="/university"
      nextRoute="/explore-inclusiva"
      contactRoute="contact.submit"
      donateRoute="/mondo-lavoro"

      // Campi del form di contatto
      contactFormFields={[
        { name: 'FirstName', label: 'Nome', type: 'text', placeholder: 'Inserisci il tuo nome' },
        { name: 'SurName', label: 'Cognome', type: 'text', placeholder: 'Inserisci il tuo cognome' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Inserisci la tua email' },
        { name: 'phoneNumber', label: 'Telefono', type: 'tel', placeholder: 'Inserisci il tuo numero di telefono' },
        { name: 'message', label: 'Messaggio', type: 'textarea', placeholder: 'Scrivi il tuo messaggio', rows: 5 },
      ]}
      hoverEffect={true}
    />
  );
};

export default CreativeExplorePage;