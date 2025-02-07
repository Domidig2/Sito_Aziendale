import React from 'react';
import { useForm } from '@inertiajs/react';
import '../assets/css/ContactForm.css';
// Popup del contact form
const ContactForm = ({ title, onSubmit, isPopup = false, onClose }) => {
  const { data, setData, post, errors } = useForm({
    FirstName: '',
    SurName: '',
    email: '',
    phoneNumber: '',
    body: '',
    privacy_consent_institutional: false,
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setData(key, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('contact.submit'), {
      data,
      onSuccess: () => onClose && onClose(),
      onError: (errors) => console.error('Errori di validazione:', errors),
    });
  };

  return (
    <div className={`bg-black bg-opacity-60 p-8 ${isPopup ? 'max-w-xs sm:max-w-md' : 'max-w-lg'} mx-auto rounded-lg shadow-2xl backdrop-blur-md border border-gray-700`}>
      {isPopup && (
        <button className="absolute top-2 right-2 text-white hover:text-primary-orange text-xl" onClick={onClose}>
          ✖
        </button>
      )}

      <h4 className="text-2xl font-bold text-primary-orange mb-6 text-center border-b border-gray-600 pb-3">{title}</h4>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
          <div className="flex-1">
            <label className="block text-gray-300 mb-1">Nome</label>
            <input
              type="text"
              name="FirstName"
              value={data.FirstName || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all"
              placeholder="Inserisci il tuo nome"
            />
            {errors.FirstName && <div className="text-red-500 mt-1">{errors.FirstName}</div>}
          </div>
          <div className="flex-1">
            <label className="block text-gray-300 mb-1">Cognome</label>
            <input
              type="text"
              name="SurName"
              value={data.SurName || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all"
              placeholder="Inserisci il tuo cognome"
            />
            {errors.SurName && <div className="text-red-500 mt-1">{errors.SurName}</div>}
          </div>
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={data.email || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all"
            placeholder="Inserisci la tua email"
          />
          {errors.email && <div className="text-red-500 mt-1">{errors.email}</div>}
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Numero di telefono</label>
          <input
            type="tel"
            name="phoneNumber"
            value={data.phoneNumber || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all"
            placeholder="Inserisci il tuo numero di telefono"
          />
          {errors.phoneNumber && <div className="text-red-500 mt-1">{errors.phoneNumber}</div>}
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Messaggio</label>
          <textarea
            name="body"
            value={data.body || ''}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all resize-none"
            placeholder="Inserisci il tuo messaggio"
            rows={3}
          ></textarea>
          {errors.body && <div className="text-red-500 mt-1">{errors.body}</div>}
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            name="privacy_consent_institutional"
            checked={data.privacy_consent_institutional || false}
            onChange={handleChange}
            className="text-primary-orange bg-gray-800 border-gray-600 focus:ring-primary-orange"
          />
          <label className="text-gray-400">Consenso Privacy Istituzionale</label>
          {errors.privacy_consent_institutional && <div className="text-red-500 mt-1">{errors.privacy_consent_institutional}</div>}
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="border-2 border-primary-orange text-primary-orange font-bold py-2 px-6 rounded-lg hover:bg-primary-orange hover:text-white transition-transform transform hover:scale-105 shadow-lg"
          >
            Invia la tua richiesta
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;