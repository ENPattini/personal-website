# Emilio Nahuel Pattini - Sitio Web Personal

Código fuente de mi sitio web personal multilingüe.

Construido completamente desde cero utilizando HTML5, CSS3 y JavaScript puro, con un enfoque en claridad, accesibilidad y mantenibilidad a largo plazo.

El sitio es totalmente estático, responsive y optimizado para una carga rápida en Hostinger con dominio personalizado.


## Sitio en Vivo

🌐 https://www.emilionahuelpattini.com

Presenta trabajos en **análisis de datos**, **ciencia de datos**, **desarrollo web**, **IA** e **ingeniería**.


## Características Principales

- Diseño responsive mobile‑first
- Tipografía fluida usando clamp()
- Sistema de layout con Flexbox y Grid
- Carrusel accesible (roles ARIA, navegación por teclado, soporte para reduced‑motion)
- Carga dinámica de header y footer mediante fetch()
- Componentes específicos por idioma (header.html, header-es.html, header-it.html, etc.)
- Búsqueda en tiempo real con resaltado seguro de nodos del DOM (sin innerHTML)
- Resultados filtrados según el idioma activo
- HTML semántico limpio con comentarios en inglés
- SEO básico, Open Graph, Twitter Cards y favicons personalizados


## Soporte Multilingüe

El sitio está disponible en **inglés**, **español** e **italiano**.

El archivo index.html en la raíz redirige automáticamente según el idioma del navegador:

- es → /es/
- it → /it/
- en → /en/
- cualquier otro idioma → muestra el selector de idioma

Se muestra un selector de idioma cuando el idioma del navegador no está soportado.


## Estructura del Proyecto
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
|-- es/  (misma estructura que /en)
|-- it/  (misma estructura que /en)
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

## Decisiones de Ingeniería Destacadas

- **Arquitectura de carpetas por idioma** para una separación clara del contenido
- **Componentes estáticos** (`header` y `footer`) cargados mediante `fetch` para facilitar el mantenimiento
- **Estrategia combinada de rutas relativas y absolutas** optimizada para hosting estático
- **Manipulación segura del DOM** (sin `innerHTML` para el resaltado de búsqueda)
- **Patrones de UI accesibles** (roles ARIA, navegación por teclado, reduced‑motion)
- Estructura paralela para ES / EN / IT para asegurar mantenibilidad


## Stack Tecnológico

- HTML5 (estructura semántica, accesibilidad)
- CSS3 (Grid, Flexbox, transiciones, tipografía fluida)
- JavaScript puro (DOM, eventos, fetch, componentes dinámicos)
- Hosting estático en Hostinger


## Cómo Ejecutarlo Localmente

1. Clonar el repositorio:
   git clone https://github.com/ENPattini/personal-website.git

2. Entrar en la carpeta:
   cd personal-website

3. Abrir `index.html` en la raíz para activar la detección automática de idioma.


## Contacto

- 📧 contact@emilionahuelpattini.com

- 💼 https://www.linkedin.com/in/emilionahuelpattini

- 🐙 https://github.com/ENPattini

¡Gracias por visitar el proyecto!
Comentarios y sugerencias son siempre bienvenidos 🚀

© 2026 Emilio Nahuel Pattini