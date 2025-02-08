import React from 'react';
import GenericPageLayout from '@/Layouts/GenericPageLayout';

// Immagini
import SanRaffaeleLogo from '@/assets/placeholders/Placeholder1.jpg';
import PegasoLogo from '@/assets/placeholders/Placeholder2.jpg';
import MercatorumLogo from '@/assets/placeholders/Placeholder3.jpg';
import ImgPercorso from '@/assets/Immagine 24-10-24 - 15.26 (1).jpg';

const UniversityPage = () => {
  return (
    <GenericPageLayout
      // Titolo
      introTitle="Scopri che auto fa per te! Rispondi al nostro test e trova il veicolo perfetto per il tuo stile di guida."
      // Testi
      introTexts={[
        "Preferisci l'adrenalina di una supercar o il comfort di un SUV? Ogni guidatore ha un'auto ideale, scopri quale è la tua!",
        "Tecnologia avanzata, prestazioni elevate o efficienza nei consumi? Rispondi alle domande e scopri quale veicolo rispecchia la tua personalità.",
        "Non importa se guidi per passione o per necessità, il nostro test ti aiuterà a trovare l'auto perfetta per le tue esigenze.",
      ]}
      // Galleria di immagini
      galleryImages={[
        { src: SanRaffaeleLogo, alt: 'Sportiva e adrenalinica' },
        { src: PegasoLogo, alt: 'Confortevole e spaziosa' },
        { src: MercatorumLogo, alt: 'Efficiente e tecnologica' },
      ]}
      // Titolo sotto
      sectionTitle="Rispondi alle domande e scopri il tuo match automobilistico!"
      // Testi sotto
      sectionTexts={[
        "Sei più un amante della velocità o della guida sicura? Scopri quale veicolo rappresenta il tuo stile di guida.",
        "Tecnologia, prestazioni, design... ogni scelta racconta qualcosa di te! Fai il test e trova l'auto perfetta.",
      ]}
      // Immagine hoverata o no
      sectionImage={ImgPercorso}
      sectionImageHover={null}

      // Rotte
      prevRoute="explore-digital"
      nextRoute="explore-creative"
      contactRoute="contact.submit"
      donateRoute="work.page"

      // Campi del form di contatto
      contactFormFields={[
        { name: 'FirstName', label: 'Nome', type: 'text', placeholder: 'Inserisci il tuo nome' },
        { name: 'SurName', label: 'Cognome', type: 'text', placeholder: 'Inserisci il tuo cognome' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Inserisci la tua email' },
        { name: 'phoneNumber', label: 'Telefono', type: 'tel', placeholder: 'Inserisci il tuo numero di telefono' },
        { name: 'message', label: 'Messaggio', type: 'textarea', placeholder: 'Scrivi il tuo messaggio', rows: 5 },
      ]}
      hoverEffect={false}
    />
  );
};

export default UniversityPage;
