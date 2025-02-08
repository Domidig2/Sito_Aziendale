import GenericPageLayout from '@/Layouts/GenericPageLayout';

// Immagini Loghi
import LogoBando1 from '@/assets/auto1.jpg';
import LogoBando2 from '@/assets/auto2.jpg';
import LogoBando3 from '@/assets/auto3.jpg';
import LogoBando4 from '@/assets/auto4.jpg';
// Immagine principale
import ImgPercorso from '@/assets/auto5.jpg';

const BrandingPage = () => {
  return (
    <GenericPageLayout
      // Titolo
      introTitle="La nostra storia: Passione e Innovazione nel Mondo delle Auto"
      // Testi
      introTexts={[
        "Siamo nati con un obiettivo chiaro: unire tecnologia, design e innovazione per rivoluzionare il settore automobilistico.",
        "Dalle prime idee alla realizzazione di soluzioni avanzate, abbiamo sempre creduto nell'evoluzione dell'industria automobilistica come motore del progresso.",
        "La nostra missione è creare esperienze di guida uniche, combinando prestazioni, sicurezza e sostenibilità per soddisfare ogni tipo di guidatore.",
      ]}
      // Immagini
      galleryImages={[
        { src: LogoBando1, alt: 'Innovazione nel design' },
        { src: LogoBando2, alt: 'Tecnologie avanzate' },
        { src: LogoBando3, alt: 'Efficienza e sostenibilità' },
        { src: LogoBando4, alt: 'Prestazioni e velocità' },
      ]}

      sectionTitle="Dove siamo arrivati oggi"

      sectionTexts={[
        "Dopo anni di ricerca e sviluppo, siamo leader nell'innovazione automobilistica, offrendo soluzioni che ridefiniscono il concetto di mobilità.",
        "Dal design aerodinamico all'integrazione di software avanzati, il nostro impegno è rivolto a creare auto sempre più intelligenti e connesse.",
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
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Inserisci la tua email' },
        { name: 'phoneNumber', label: 'Telefono', type: 'tel', placeholder: 'Inserisci il tuo numero di telefono' },
        { name: 'message', label: 'Messaggio', type: 'textarea', placeholder: 'Scrivi il tuo messaggio', rows: 5 },
      ]}

      hoverEffect={false}
    />
  );
};

export default BrandingPage;
