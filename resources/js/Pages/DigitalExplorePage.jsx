import React from 'react';
import GenericPageLayout from '@/Layouts/GenericPageLayout';

// Immagini
import AperideasLogo from '@/assets/placeholders/Placeholder1.jpg';
import UrbanStreetLogo from '@/assets/placeholders/Placeholder2.jpg';
import BeecolabsLogo from '@/assets/placeholders/Placeholder3.jpg';
import ImgPercorsoDefault from '@/assets/Immagine 24-10-24 - 15.26.jpg';
import ImgPercorsoHover from '@/assets/Immagine 24-10-24 - 15.26 (1).jpg';

const MatchingPage = () => {
  return (
    <GenericPageLayout
      // Titolo
      introTitle="L'evoluzione dell'industria automobilistica:"
      // Testi
      introTexts={[
        "Dalle prime vetture a vapore alle supercar di oggi, il settore automobilistico ha attraversato un'evoluzione straordinaria.",
        "Tecnologie innovative, efficienza nei consumi e design futuristico stanno ridefinendo il modo in cui ci spostiamo ogni giorno.",
      ]}
      // Galleria di immagini
      galleryImages={[
        { src: AperideasLogo, alt: 'Auto sportive e prestazionali' },
        { src: UrbanStreetLogo, alt: 'SUV spaziosi e versatili' },
        { src: BeecolabsLogo, alt: 'Veicoli elettrici e sostenibili' },
      ]}
      // Testi della sezione
      sectionTitle="Il futuro della mobilità è già qui!"
      sectionTexts={[
        "Le auto moderne non sono solo mezzi di trasporto, ma veri e propri concentrati di tecnologia, sicurezza e connettività.",
        "Dalla guida autonoma ai motori elettrici, ogni innovazione punta a migliorare l'esperienza di guida e ridurre l'impatto ambientale.",
      ]}
      // Immagini con hover
      sectionImage={ImgPercorsoDefault}
      sectionImageHover={ImgPercorsoHover}
      // Rotte
      prevRoute="/investitori"
      nextRoute="/university"
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

export default MatchingPage;
