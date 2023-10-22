import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter } from 'react-router-dom';
import CounterProvider from './context/CounterProvider'; // Correct the import statement

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './translations/en/common.json';
import arTranslation from './translations/ar/common.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslation
            },
            ar: {
                translation: arTranslation
            }
            // Add more languages here
        },
        fallbackLng: 'en', // Fallback language if translation for current language is not available
        debug: true, // Enable debug mode, optional
        detection: {
            order: ['navigator'] // Language detection order, optional
        },
        interpolation: {
            escapeValue: false // React already escapes by default
        }
    });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <CounterProvider>
            <App />
        </CounterProvider>
    </BrowserRouter>
);

reportWebVitals();
