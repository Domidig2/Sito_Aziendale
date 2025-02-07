import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import ApplicationLogo from '@/Components/ApplicationLogo';
import ContactForm from '@/Components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/CustomNavbar.css';

import Logo1 from '../assets/images/logos/Logo1.png';
import Logo2 from '../assets/images/logos/Logo2.png';
import Logo3 from '../assets/images/logos/Logo3.png';
import Logo4 from '../assets/images/logos/Logo4.png';
import Logo5 from '../assets/images/logos/Logo5.png';
import Logo6 from '../assets/images/logos/Logo6.png';
import Logo7 from '../assets/images/logos/Logo7.png';
import Logo8 from '../assets/images/logos/Logo8.png';

const CustomNavbar = () => {
  const { auth } = usePage().props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];
  const logoNames = [
    'Branding',
    'Matching',
    'Trova Idee',
    'Trova Bandi',
    'Esperto',
    'Cerco Socio',
    'Startup',
    'Export',
  ];

  const menuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
    exit: { x: '100%', transition: { type: 'spring', stiffness: 80, damping: 20 } },
  };

  const envelopeVariants = {
    initial: { y: 0, color: '#ffffff' },
    animate: {
      y: [-5, 5, -5],
      color: ['#ffffff', '#ffaa00', '#ffffff'],
      transition: {
        y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        color: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
      },
    },
    hover: { scale: 1.3, color: '#ffaa00', transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-dark-gray relative border-b-[1px] border-primary-orange shadow-md">
      {/* Navbar principale */}
      <div className="sticky top-0 z-50 bg-dark-gray w-full h-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between h-full items-center">
          {/* Logo principale */}
          <div className="flex items-center">
            <Link href="/">
              <ApplicationLogo className="h-12 logo-effect" />
            </Link>
          </div>

          {/* Icone */}
          <div className="flex items-center space-x-6">
            {/* Contattaci */}
            <motion.div
              variants={envelopeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              onClick={() => setIsContactOpen(true)}
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-2xl transition duration-300"
              />
            </motion.div>

            {/* Icona Menu Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
            </button>
          </div>
        </div>
      </div>

      {/* Menu a Comparsa */}
      {isMenuOpen && (
        <motion.div
  className="fixed inset-0 z-40 bg-dark-gray flex flex-col lg:flex-row items-center py-8 px-6 overflow-hidden"
  initial="hidden"
  animate="visible"
  exit="exit"
  transition={{ type: 'spring', stiffness: 80, damping: 20 }}
>
<div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-12">
  {/* Pagine */}
  <div className="flex flex-col items-center space-y-6 w-full lg:w-1/2">
    <h3 className="text-primary-orange text-lg font-bold mb-6">Esplora le Aree</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-lg">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <Link
            href={
              index === 0
                ? route('branding.page') // Chi siamo
                : index === 1
                ? route('explore-digital') // Maria: digitale
                : index === 2
                ? route('university.page') // Università
                : index === 3
                ? route('explore-creative') // Creativa
                : index === 4
                ? route('inclusive.page') // Inclusiva
                : index === 5
                ? route('work.page') // Mondo del Lavoro- dona il tuo sostegnp
                : index === 6
                ? route('entrepreneurship.page') // pagine non ancora definite
                : route('export.page') // pagine non ancora definite
            }
            className="flex flex-col items-center"
          >
            <img
              src={logo}
              alt={`Logo ${logoNames[index]}`}
              className="h-12 w-12 lg:h-14 lg:w-14 object-contain"
            />
            <span className="text-white text-sm">{logoNames[index]}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>

  {/*  Area Riservata */}
  <div className="flex flex-col items-center justify-between w-full lg:w-1/2">
    <div className="w-full max-w-md bg-transparent py-6 px-6 rounded-lg border-2 border-primary-orange">
      <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center">
        Benvenuto nella tua Area Riservata
      </h3>
      <p className="text-gray-300 text-sm text-center leading-relaxed mb-4">
        Accedi per gestire il tuo profilo, esplorare le tue opportunità o registrati per unirti alla nostra community!
      </p>
      <div className="flex flex-col items-center space-y-3">
        {auth.user ? (
          <>
            <Link
              href={route('profile.edit')}
              className="w-full py-2 text-white font-bold border-2 border-primary-orange rounded hover:bg-black hover:text-primary-orange transition-transform transform hover:scale-105 shadow-md text-center"
            >
              Gestisci il tuo Profilo
            </Link>
            <Link
              href={route('logout')}
              method="post"
              className="w-full py-2 text-white font-bold border-2 border-primary-orange rounded hover:bg-black hover:text-primary-orange transition-transform transform hover:scale-105 shadow-md text-center"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              href={route('login')}
              className="w-full py-2 text-white font-bold border-2 border-primary-orange rounded hover:bg-black hover:text-primary-orange transition-transform transform hover:scale-105 shadow-md text-center"
            >
              Accedi
            </Link>
            <Link
              href={route('register')}
              className="w-full py-2 text-white font-bold border-2 border-primary-orange rounded hover:bg-black hover:text-primary-orange transition-transform transform hover:scale-105 shadow-md text-center"
            >
              Registrati
            </Link>
          </>
        )}
      </div>
      <div className="text-center mt-6">
        <h4 className="text-white text-lg font-bold mb-4">Seguici sui nostri canali</h4>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="text-primary-orange hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-primary-orange hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-primary-orange hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</motion.div>
      )}

      {/* Popup del form di contatto */}
      {isContactOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-transparent rounded-lg p-6 w-full max-w-3xl relative">
            <ContactForm
              title="Contattaci"
              formFields={[]}
              onSubmit={() => setIsContactOpen(false)}
              isPopup={true}
              onClose={() => setIsContactOpen(false)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;