# Emilio Nahuel Pattini - Sito Web Personale

*Disponibile in: 🇬🇧 English → [README.md](README.md) | 🇪🇸 Español → [README.es.md](README.es.md) | 🇮🇹 Italiano (questo file)*

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Codice sorgente del mio sito web personale multilingue.

Costruito completamente da zero con HTML5, CSS3 e JavaScript puro, con un focus su chiarezza, accessibilità e mantenibilità a lungo termine.

Il sito è completamente statico, responsive e ottimizzato per un caricamento rapido su Hostinger con dominio personalizzato.


## Sito Online

🌐 https://www.emilionahuelpattini.com

Presenta progetti di **analisi dei dati**, **data science**, **sviluppo web**, **IA** e **ingegneria**.


## Funzionalità Principali

- Design responsive mobile‑first
- Tipografia fluida tramite clamp()
- Layout basato su Flexbox e Grid
- Carosello accessibile (ruoli ARIA, navigazione da tastiera, supporto reduced‑motion)
- Caricamento dinamico di header e footer tramite fetch()
- Componenti specifici per lingua (header.html, header-es.html, header-it.html, ecc.)
- Ricerca in tempo reale con evidenziazione sicura dei nodi DOM (senza innerHTML)
- Risultati filtrati in base alla lingua attiva
- HTML semantico pulito con commenti in inglese
- SEO di base, Open Graph, Twitter Cards e favicons personalizzate


## Supporto Multilingue

Il sito è disponibile in **inglese**, **spagnolo** e **italiano**.

Il file index.html nella root reindirizza automaticamente in base alla lingua del browser:

- es → /es/
- it → /it/
- en → /en/
- qualsiasi altra lingua → mostra il selettore di lingua

Viene mostrato un selettore di lingua quando la lingua del browser non è supportata.


## Struttura del Progetto
```
/
|-- index.html
|-- script.js
|-- style.css
|
|-- components/
|     |-- header.html
|     |-- header-es.html
|     |-- header-it.html
|     |-- footer.html
|     |-- footer-es.html
|     |-- footer-it.html
|
|-- en/
|   |-- index.html
|   |-- about.html
|   |-- contact.html
|   |
|   |-- data/
|   |     |-- data-analysis/
|   |           |-- data-analysis.html
|   |           |-- projects/
|   |                 |-- ecobici-2024/
|   |                       |-- index.html
|   |                       |-- urban-mobility-analysis.html
|   |                       |-- urban-mobility-analysis.pdf
|   |                       |-- urban-mobility-analysis_files/...
|   |
|   |-- development/
|         |-- web-development/
|               |-- web-development.html
|
|-- es/  (stessa struttura di /en)
|-- it/  (stessa struttura di /en)
|
|-- images/
|   |-- logo.png
|   |-- profile.jpg
|   |-- thumbnails/
|   |-- favicons/
|
|-- LICENSE
|-- README.md
```

## Decisioni Tecniche Rilevanti

- **Architettura delle cartelle basata sulla lingua** per una chiara separazione dei contenuti
- **Componenti statici** (`header` e `footer`) caricati tramite `fetch` per una migliore manutenibilità
- **Strategia combinata di percorsi relativi e assoluti** ottimizzata per hosting statico
- **Manipolazione sicura del DOM** (senza `innerHTML` per l’evidenziazione della ricerca)
- **Pattern UI accessibili** (ruoli ARIA, navigazione da tastiera, reduced‑motion)
- Struttura parallela per ES / EN / IT per garantire coerenza e mantenibilità


## Stack Tecnologico

- HTML5 (struttura semantica, accessibilità)
- CSS3 (Grid, Flexbox, transizioni, tipografia fluida)
- JavaScript puro (DOM, eventi, fetch, componenti dinamici)
- Hosting statico su Hostinger


## Come Eseguirlo in Locale

1. Clonare il repository:
   git clone https://github.com/ENPattini/personal-website.git

2. Entrare nella cartella:
   cd personal-website

3. Aprire `index.html` nella root per attivare il rilevamento automatico della lingua.


## Contatti

- 📧 contact@emilionahuelpattini.com

- 💼 https://www.linkedin.com/in/emilionahuelpattini

- 🐙 https://github.com/ENPattini

Grazie per la visita!
Feedback e suggerimenti sempre benvenuti 🚀

© 2026 Emilio Nahuel Pattini
