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
      introTitle="Se le idee nascono dai propri bisogni, allora abbiamo delle soluzioni, scegli la tua:"
      // Testi
      introTexts={[
        "Bisogni diversi? Emozionali e sociali, funzionali e contestuali? Sei davvero molto malato ma abbiamo la cura adatta a te, si chiama sviluppo del capitale umano.",
        "Tanti interessi? Famiglia e parenti, casa e lavoro? Anche tu sei molto malata ma la cura è sempre la stessa, sviluppo del capitale umano, magari anche il tuo.",
        "La cura è sempre la stessa, una tabella di marcia ed un’anticipazione…",
      ]}
      // Galleria di immagini
      galleryImages={[
        { src: SanRaffaeleLogo, alt: 'Affidati a San Raffaele' },
        { src: PegasoLogo, alt: 'Vola sulle ali di Pegaso' },
        { src: MercatorumLogo, alt: 'Che ne dici di Mercatorum' },
      ]}
      // Titolo sotto
      sectionTitle="Scegli la tua area e parlane con i nostri Consulenti:"
      // Testi sotto
      sectionTexts={[
        "Sport e Benessere con Mimmo, Scuola ed Educazione con Porzia, Lavoro e Lingue con Alessandra e anche Maria.",
        "Perché crescono le Università Digitali? Apriti alle nuove Smart City.",
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