import React from 'react';
import GenericPageLayout from '@/Layouts/GenericPageLayout';

// Immagini
import AcademyImage from '@/assets/placeholders/Placeholder1.jpg';
import EnergyManagerImage from '@/assets/placeholders/Placeholder2.jpg';
import EnergySpecialistImage from '@/assets/placeholders/Placeholder4.jpg';
import EconomicSpecialistImage from '@/assets/placeholders/Placeholder5.jpg';

const InclusivaExplorePage = () => {
  const introTexts = [
    "Dalle prime automobili alle innovazioni del futuro, il settore automobilistico è in continua evoluzione.",
    "Dai motori termici alle soluzioni elettriche e ibride: la sostenibilità sta cambiando il modo in cui guidiamo.",
    "Tecnologia avanzata, sicurezza e prestazioni: le auto moderne sono più connesse e intelligenti che mai.",
    "Dal design all'aerodinamica, ogni dettaglio conta nel creare l'auto perfetta per ogni tipo di guidatore.",
  ];

  const galleryImages = [
    { src: AcademyImage, alt: "Auto sportive e adrenaliniche" },
    { src: EnergyManagerImage, alt: "Auto elettriche e sostenibili" },
    { src: EnergySpecialistImage, alt: "SUV spaziosi e versatili" },
    { src: EconomicSpecialistImage, alt: "Berlina tecnologica e innovativa" },
  ];

  const sectionTexts = [
    "Il mondo delle auto offre infinite possibilità: velocità, comfort, tecnologia e sostenibilità si combinano per creare esperienze di guida uniche.",
    "Ogni veicolo ha una storia da raccontare: dalle icone del passato alle rivoluzioni elettriche del presente, scopri il fascino e il progresso dell'automotive.",
  ];

  return (
    <GenericPageLayout
      introTitle="Esplora il Mondo delle Auto"
      introTexts={introTexts}
      galleryImages={galleryImages}
      sectionTitle="Dalle auto sportive ai SUV elettrici: il futuro è già qui"
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
