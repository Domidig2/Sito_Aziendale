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
      introTitle="La storia di Maria:"
      // Testi
      introTexts={[
        "Ciao sono Maria e ho già avuto l'opportunitò di andare all'estero, di volare a Dublino per scoprire che avevo solo una necessità: cambiare la mia vita.",
        "Tornata in Italia ho esplorato diversi approcci in Urban Lab...",
      ]}
      // Galleria di immagini
      galleryImages={[
        { src: AperideasLogo, alt: 'Giocare in Aperideas' },
        { src: UrbanStreetLogo, alt: 'Allenarmi in Urban Street' },
        { src: BeecolabsLogo, alt: 'Imparare in Beecolabs' },
      ]}
      // Testi della sezione
      sectionTitle="Poi finalmente il mio valore, decisione e rapidità, sono un DevSecOps."
      sectionTexts={[
        "Sviluppo ed effettuo operazioni velocemente, devo solo garantire operativamente la sicurezza.",
        "In altre parole sviluppo landing page, garantisco la sicurezza di siti web ed effettuo operazioni in rete, cioè sono una Programmatrice specializzata in Cybersecurity. Se anche tu vuoi lavorare in Smart Working puoi diventare uno Sviluppatore, magari specializzato in Coding AI. Compila subito il contact form, parti dal corso gratuito. Se invece vuoi conoscere gli altri Smart Worker prosegui ad esplorare la pagina successiva.",
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