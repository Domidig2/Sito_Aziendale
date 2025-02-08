import React from 'react';
import GenericPageLayout from '@/Layouts/GenericPageLayout';

// Immagini
import TizioLab from '@/assets/auto1.jpg';
import TizioRover from '@/assets/auto2.jpg';
import TizioStreet from '@/assets/auto3.jpg';
import TizioStars from '@/assets/auto4.jpg';
import TizioSad from '@/assets/Immagine 24-10-24 - 15.26 (1).jpg';
import TizioHappy from '@/assets/Immagine 24-10-24 - 15.26.jpg';

const CreativeExplorePage = () => {
  return (
    <GenericPageLayout
      // Titolo di introduzione
      introTitle="Dall'innovazione alla strada: l'evoluzione dell'industria automobilistica"
      // Testi introduttivi
      introTexts={[
        "Le automobili sono molto più di semplici mezzi di trasporto: sono un mix perfetto di ingegneria, design e tecnologia avanzata.",
        "Dai primi modelli a combustione fino alle più recenti auto elettriche, l'automotive è un settore in continua trasformazione.",
      ]}
      // Galleria di immagini
      galleryImages={[
        { src: TizioLab, alt: 'Progettazione e innovazione' },
        { src: TizioRover, alt: 'SUV moderni e spaziosi' },
        { src: TizioStreet, alt: 'Auto sportive e dinamiche' },
        { src: TizioStars, alt: 'Tecnologie di guida autonoma' },
      ]}
      // Titolo della sezione
      sectionTitle="Le auto del futuro: tra prestazioni, efficienza e sostenibilità"
      // Testi della sezione
      sectionTexts={[
        "Le nuove tecnologie stanno rivoluzionando il settore: guida autonoma, connettività avanzata e motori sempre più efficienti.",
        "Dal motorsport alle city car, ogni veicolo è progettato per offrire un'esperienza di guida unica e personalizzata.",
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
