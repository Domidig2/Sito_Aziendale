import React from 'react';
import GenericPageLayout from '@/Layouts/GenericPageLayout';

// Immagini
import AcademyImage from '@/assets/placeholders/Placeholder1.jpg';
import EnergyManagerImage from '@/assets/placeholders/Placeholder2.jpg';
import EnergySpecialistImage from '@/assets/placeholders/Placeholder4.jpg';
import EconomicSpecialistImage from '@/assets/placeholders/Placeholder5.jpg';

const InclusivaExplorePage = () => {
  const introTexts = [
    "Dai problemi della Comunità Digitale alle prospettive nella Comunità Creativa",
    "Dai dati ai gruppi, ecco la rimodellazione in Sole 24 Ore: sostenibilità ambientale ed anche sociale, innovazione digitale e intelligenza artificiale, infine area manageriale.",
    "Per innovare, anche i nostri Manager, abbiamo previsto percorsi di accelerazione ma anche Master universitari validi come crediti formativi per conseguire la laurea.",
    "Per la sostenibilità abbiamo due diversi approcci: digitale in Sole 24 Ore, oppure…",
  ];

  const galleryImages = [
    { src: AcademyImage, alt: "Academy Building Manager" },
    { src: EnergyManagerImage, alt: "Energy Manager" },
    { src: EnergySpecialistImage, alt: "Energy Specialist" },
    { src: EconomicSpecialistImage, alt: "Economic Specialist" },
  ];

  const sectionTexts = [
    "La combo tra percorsi di accelerazione, in presenza o online, ma anche master, con crediti formativi universitari permette di conseguire la laurea in Ingegneria.",
    "Il nostro Neet che né studia né lavora, sceglie se diventare uno Sviluppatore oppure Analista Dati, ancora un Tecnico specializzato attraverso un percorso gratuito.",
  ];

  return (
    <GenericPageLayout
      introTitle="Esplora Inclusiva"
      introTexts={introTexts}
      galleryImages={galleryImages}
      sectionTitle="La combo tra percorsi di accelerazione e master"
      sectionTexts={sectionTexts}
      sectionImage={AcademyImage}
      sectionImageHover={EnergyManagerImage}
      prevRoute="/explore-creative"
      nextRoute="/mondo-lavoro"
      contactRoute="/contact"
      donateRoute="/donate"
      contactFormFields={[
        { name: 'FirstName', label: 'Nome', type: 'text', placeholder: 'Inserisci il tuo nome' },
        { name: 'SurName', label: 'Cognome', type: 'text', placeholder: 'Inserisci il tuo cognome' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Inserisci la tua email' },
        { name: 'phoneNumber', label: 'Telefono', type: 'tel', placeholder: 'Inserisci il tuo numero di telefono' },
        { name: 'message', label: 'Messaggio', type: 'textarea', placeholder: 'Scrivi il tuo messaggio', rows: 5 },
      ]}
    />
  );
};

export default InclusivaExplorePage;