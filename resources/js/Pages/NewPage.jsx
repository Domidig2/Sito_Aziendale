import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BaseLayout from '@/Layouts/BaseLayout';
import ContactForm from '@/Components/ContactForm';


import LogoArancio from '@/assets/images/logos/Logo arancio-b bookmarks.jpg';
import AulaDidattica from '@/assets/images/logos/1.jpg';
import Bagno from '@/assets/images/logos/1.jpg';
import VRRoom from '@/assets/images/logos/2.jpg';
import Beeco from '@/assets/images/logos/3.jpg';
import LogoNeroArancio from '@/assets/images/logos/Logo nero-arancio verticale.png';
import LogoArgento from '@/assets/images/logos/Logo argent-n bookmarks.jpg';
import MUR from '@/assets/images/logos/MUR-nero.jpg';
import ANG from '@/assets/images/logos/ANG-nero.jpg';
import SIS from '@/assets/images/logos/SIS-nero.jpg';
import RUNTS from '@/assets/images/logos/RUNTS-nero.jpg';

const NewPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  const formFields = [
    { name: 'FirstName', label: 'Nome', type: 'text', placeholder: 'Inserisci il tuo nome', defaultValue: '' },
    { name: 'SurName', label: 'Cognome', type: 'text', placeholder: 'Inserisci il tuo cognome', defaultValue: '' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Inserisci la tua email', defaultValue: '' },
    { name: 'phoneNumber', label: 'Telefono', type: 'tel', placeholder: 'Inserisci il tuo telefono', defaultValue: '' },
    { name: 'message', label: 'Messaggio', type: 'textarea', placeholder: 'Scrivi il tuo messaggio', rows: 5, defaultValue: '' }
  ];

  return (
    <div className="min-h-screen font-roboto overflow-x-hidden">
      {/* Prima Sezione */}
      <section className="bg-white text-black py-16 min-h-[80vh] flex flex-wrap">
        <div className="w-full md:w-1/3 px-5" data-aos="fade-right">
          <img
            className="w-full object-contain"
            src={LogoArancio}
            alt="Urban Lab Logo"
          />
        </div>
        <div className="w-full md:w-2/3 px-5">
          <div className="pt-16">
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">
              SITO IN RISTRUTTURAZIONE
            </h1>
            <p className="text-xl mb-8">Sarà l'ultima?</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { src: AulaDidattica, caption: 'Aula Didattica' },
                { src: Bagno, caption: 'Bagno' },
                { src: VRRoom, caption: 'VR Room' },
                { src: Beeco, caption: 'Beeco' }
              ].map((image, index) => (
                <div className="relative" data-aos="fade-up" key={index}>
                  <img className="w-full h-52 object-cover rounded-lg" src={image.src} alt={image.caption} />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center py-1">
                    {image.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seconda Sezione */}
      <section className="bg-[#f4b44b] text-black py-16 min-h-[80vh] flex flex-wrap">
        <div className="w-full md:w-1/3 px-5" data-aos="fade-right">
          <img className="w-full object-contain" src={LogoNeroArancio} alt="Urban Lab Logo" />
        </div>
        <div className="w-full md:w-2/3 px-5">
          <div className="pt-16">
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">
              PER LA RIGENERAZIONE URBANA
            </h1>
            <p className="text-xl mb-8">Contattaci per maggiori informazioni</p>


            <ContactForm
              formFields={formFields}
              title="Modulo di Contatto"
              onSubmit={() => post(route('contact.submit'))}
            />

          </div>
        </div>
      </section>

      {/* Terza Sezione */}
      <section className="bg-black text-white py-16 min-h-[80vh] flex flex-wrap">
        <div className="w-full md:w-1/3 px-5" data-aos="fade-left">
          <img className="w-full object-contain" src={LogoArgento} alt="Urban Lab Logo" />
        </div>
        <div className="w-full md:w-2/3 px-5">
          <div className="pt-16">
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">
              SOSTENGONO LA VISIONE
            </h1>
            <p className="text-xl mb-8">Siamo credibili</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { src: MUR, caption: 'MUR' },
                { src: ANG, caption: 'ANG' },
                { src: SIS, caption: 'SIS' },
                { src: RUNTS, caption: 'RUNTS' }
              ].map((image, index) => (
                <div className="relative" data-aos="fade-up" key={index}>
                  <img className="w-full h-52 object-cover rounded-lg" src={image.src} alt={image.caption} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

NewPage.layout = (page) => <BaseLayout>{page}</BaseLayout>;

export default NewPage;
