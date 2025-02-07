import GenericPageLayout from '@/Layouts/GenericPageLayout';

// Immagini Loghi
import LogoBando1 from '@/assets/RUNTS-nero.jpg';
import LogoBando2 from '@/assets/RUNTS-nero.jpg';
import LogoBando3 from '@/assets/RUNTS-nero.jpg';
import LogoBando4 from '@/assets/RUNTS-nero.jpg';
// Immagine principale
import ImgPercorso from '@/assets/Immagine 24-10-24 - 15.26.jpg';

const BrandingPage = () => {
  return (
    <GenericPageLayout
      // Titolo
      introTitle="Chi siamo"
      // Testi
      introTexts={[
        "Urban Lab, Impresa Sociale iscritta al RUNTS, Registro Unico Nazionale del Terzo Settore. Sosteniamo la diversità e la crescita di Giovani & Donne, e sviluppiamo la loro intelligenza emotiva.",
        "Non esistono ragioni di convenienza, solo logica ed etica: Il Neet è un Follower che vuole capire la logica dei sistemi di formazione e lavoro per scegliere.",
        "Il tasso di disparità è un problema etico. La valutazione si basa su due variabili, psicologica e dinamica, ed offre un approccio strutturato per il cambio del Mindset.",
      ]}
      //immagini
      galleryImages={[
        { src: LogoBando1, alt: 'Logo RUNTS 1' },
        { src: LogoBando2, alt: 'Logo RUNTS 2' },
        { src: LogoBando3, alt: 'Logo RUNTS 3' },
        { src: LogoBando4, alt: 'Logo RUNTS 4' },
      ]}

      sectionTitle="Il Nostro Percorso"

      sectionTexts={[
        "La fase di sviluppo sperimentale, cofinanziata a seguito di aggiudicazione di bando in Regione Puglia, pone in evidenza rischi associati alle Famiglie, contesto formale.",
        "Da qui nasce la storia di Urban Lab, un approccio multidimensionale che parte da una matrice psicodinamica per arrivare alla realtà virtuale. Scopri tutte le storie...",
      ]}

      sectionImage={ImgPercorso}

      sectionImageHover={null}

      // Rotte specifiche avanti/indietro per i bottoni di sotto

      prevRoute="/"
      nextRoute="/explore-digital"
      contactRoute="/contact"
      donateRoute="/work.page"

      // Campi contact form

      contactFormFields={[
        { name: 'FirstName', label: 'Nome', type: 'text', placeholder: 'Inserisci il tuo nome' },
        { name: 'SurName', label: 'Cognome', type: 'text', placeholder: 'Inserisci il tuo cognome' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Inserisci il tuo email' },
        { name: 'phoneNumber', label: 'Telefono', type: 'tel', placeholder: 'Inserisci il tuo numero di telefono' },
        { name: 'message', label: 'Messaggio', type: 'textarea', placeholder: 'Scrivi il tuo messaggio', rows: 5 },
      ]}

      hoverEffect={false}
    />
  );
};

export default BrandingPage;