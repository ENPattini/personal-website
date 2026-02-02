# Emilio Nahuel Pattini - Personal Website

*Available in: 🇬🇧 English (this file) | 🇪🇸 Español → [README.es.md](README.es.md) | 🇮🇹 Italiano → [README.it.md](README.it.md)*

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

**Source code for my multilingual personal portfolio website.**  

Built entirely from scratch using HTML5, CSS3, and vanilla JavaScript, with a focus on clarity, accessibility, and long‑term maintainability.
  
The site is fully static, responsive, and optimized for fast loading on Hostinger with a custom domain.


## Live Website

🌐 https://www.emilionahuelpattini.com

Showcases work across **data analysis**, **data science**, **web development**, **AI**, and **engineering**.


## Key Features

- Mobile‑first responsive design
- Fluid typography using clamp()
- Flexbox + Grid layout system
- Accessible carousel (ARIA roles, keyboard navigation, reduced‑motion support)
- Dynamic header and footer loading via fetch()
- Language‑specific components (header.html, header-es.html, header-it.html, etc.)
- Real‑time search with safe DOM node highlighting (no innerHTML)
- Search results filtered by active language
- Clean semantic HTML with English code comments
- Basic SEO, Open Graph, Twitter Cards, and custom favicons


## Multilingual Support

The website is fully available in **English**, **Spanish**, and **Italian**.

A smart index.html at the root automatically redirects visitors based on their browser language:

- es → /es/
- it → /it/
- en → /en/
- any other language → shows the fallback language selector

A fallback language selector is displayed if the browser language is not supported.


## Project Structure
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
|-- es/  (same structure as /en)
|-- it/  (same structure as /en)
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


## Notable Engineering Decisions

- **Language‑scoped folder architecture** for clean separation of content  
- **Static components** (`header.html`, `footer.html`) loaded via `fetch` for maintainability  
- **Relative and absolute path strategy** optimized for static hosting 
- **Safe DOM manipulation** (no `innerHTML` for search highlighting)  
- **Accessible UI patterns** (ARIA roles, keyboard navigation, reduced‑motion considerations)
- Parallel content structure for ES / EN / IT to ensure maintainability


## Tech Stack

- HTML5 (semantic structure, accessibility)
- CSS3 (Grid, Flexbox, transitions, fluid typography)
- Vanilla JavaScript (DOM, events, fetch, dynamic components)
- Static hosting on Hostinger


## How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/ENPattini/personal-website.git
   ```
2. Navigate into the folder:
   ```bash
   cd personal-website
   ```
3. Open `index.html` in the root folder to trigger automatic language detection.


## Contact

- 📧 contact@emilionahuelpattini.com

- 💼 https://www.linkedin.com/in/emilionahuelpattini

- 🐙 https://github.com/ENPattini

Thanks for taking a look!
Feedback & suggestions always welcome 🚀

© 2026 Emilio Nahuel Pattini
