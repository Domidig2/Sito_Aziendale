import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-16 px-12 border-t-[1px] border-primary-orange relative">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Colonna 1 */}
        <motion.div
          className="footer-column"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-xl font-bold text-primary-orange mb-6">Soluzioni</h4>
          <ul className="space-y-4">
            <li><a href="/marketing" className="hover:text-primary-orange hover:underline">Marketing</a></li>
            <li><a href="/analytics" className="hover:text-primary-orange hover:underline">Analytics</a></li>
            <li><a href="/commerce" className="hover:text-primary-orange hover:underline">Commerce</a></li>
            <li><a href="/insights" className="hover:text-primary-orange hover:underline">Insights</a></li>
          </ul>
        </motion.div>

        {/* Colonna 2 */}
        <motion.div
          className="footer-column"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-xl font-bold text-primary-orange mb-6">Supporto</h4>
          <ul className="space-y-4">
            <li><a href="/pricing" className="hover:text-primary-orange hover:underline">Prezzi</a></li>
            <li><a href="/documentation" className="hover:text-primary-orange hover:underline">Documentazione</a></li>
            <li><a href="/guides" className="hover:text-primary-orange hover:underline">Guide</a></li>
            <li><a href="/status" className="hover:text-primary-orange hover:underline">Stato API</a></li>
          </ul>
        </motion.div>

        {/* Colonna 3 */}
        <motion.div
          className="footer-column"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-xl font-bold text-primary-orange mb-6">Azienda</h4>
          <ul className="space-y-4">
            <li><a href="/about" className="hover:text-primary-orange hover:underline">Chi siamo</a></li>
            <li><a href="/blog" className="hover:text-primary-orange hover:underline">Blog</a></li>
            <li><a href="/jobs" className="hover:text-primary-orange hover:underline">Lavora con noi</a></li>
            <li><a href="/partners" className="hover:text-primary-orange hover:underline">Partner</a></li>
          </ul>
        </motion.div>

        {/* Colonna 4 - Contatti e Social */}
        <motion.div
          className="footer-column"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-xl font-bold text-primary-orange mb-6">Contattaci</h4>
          <ul className="space-y-4">
            <li>
              <a href="mailto:info@urbanlabs.com" className="hover:text-primary-orange hover:underline flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@urbanlabs.com
              </a>
            </li>
          </ul>

          <div className="mt-6 flex space-x-6">
            {/* Icone Social */}
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-orange">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-orange">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-orange">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-orange">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto text-center border-t border-gray-700 pt-8 mt-8">
        <p className="text-md text-gray-400">&copy; {new Date().getFullYear()} UrbanLabs. Tutti i diritti riservati.</p>
      </div>

      {/* Gradient personalizzato */}
      <div className="absolute top-0 left-0 w-full h-4 bg-footer-gradient"></div>
    </footer>
  );
};

export default Footer;
