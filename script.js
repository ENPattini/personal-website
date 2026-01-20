/*
================================================================================
Emilio Nahuel Pattini - Personal Website JavaScript
================================================================================

This file contains all client-side interactivity for the portfolio site:
- Mobile menu toggle (hamburger)
- Dropdown menu behavior on mobile
- Dynamic loading of header/footer components
- Slider/carousel with auto-play, keyboard navigation, and accessibility
- Real-time search functionality with safe highlighting (DOM nodes only)
- Outside-click detection to close search results

Key principles:
- Vanilla JS only (no frameworks)
- Accessibility focus (ARIA attributes, keyboard support)
- Clean event delegation and DOM manipulation
- Error handling on fetch for components
- Mobile-first responsive interactions

Last updated: January 2026

© 2026 Emilio Nahuel Pattini
All rights reserved. See LICENSE for details.

================================================================================
*/

// ==================== MOBILE MENU TOGGLE ====================

/**
 * Toggles the mobile navigation menu visibility
 * (Exposed globally for inline onclick handler in HTML)
 */
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// ==================== DROPDOWN HANDLING ====================

/**
 * Attaches click listeners to top-level nav links for mobile dropdowns
 * Prevents default ONLY for links that have a dropdown submenu
 */
function attachDropdownListeners() {
  document.querySelectorAll(".nav-links > li > a").forEach(link => {
    link.addEventListener("click", function(e) {
      if (window.innerWidth <= 768) {
        const parentLi = this.parentElement;
        const hasDropdown = parentLi.querySelector(".dropdown") !== null;

        if (hasDropdown) {
          // Solo prevenir navegación si hay dropdown (evita que navegue a #)
          e.preventDefault();

          // Cerrar otros dropdowns abiertos
          document.querySelectorAll(".nav-links li.open").forEach(li => {
            if (li !== parentLi) li.classList.remove("open");
          });

          // Toggle este dropdown
          parentLi.classList.toggle("open");
        }
        // Si NO tiene dropdown (About, Contact), NO prevenir → permite navegación normal
      }
    });
  });
}

// ==================== DYNAMIC COMPONENT LOADING ====================

/**
 * Fetches and injects HTML content into the specified element
 * @param {string} id - ID of the target container
 * @param {string} url - Path to the HTML file
 * @param {Function} [callback] - Optional function to run after loading
 */
function loadHTML(id, url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch(error => console.error(`Error loading ${url}:`, error));
}

/**
 * Calculates the relative path prefix based on current URL depth
 * Used for loading components from subdirectories
 * @returns {string} Path prefix (e.g., '../' or '../../')
 */
function getBasePath() {
  const path = window.location.pathname;
  
  // Remove trailing slash and split into segments
  const cleanPath = path.replace(/\/$/, ''); // quita / final si existe
  const segments = cleanPath.split('/').filter(Boolean); // filtra vacíos
  
  // Depth = cantidad de carpetas (0 en raíz)
  const depth = segments.length;
  
  // Nunca negativo: si depth = 0 o 1 (raíz o index directo), usamos ''
  return depth > 1 ? '../'.repeat(depth - 1) : '';
}

const basePath = getBasePath();

// Load header (with callbacks for listeners) and footer
loadHTML('header', basePath + 'components/header.html', () => {
  attachDropdownListeners();
  attachSearchListeners();
});
loadHTML('footer', basePath + 'components/footer.html');

// ==================== SLIDER / CAROUSEL ====================

/**
 * Initializes the project showcase slider/carousel
 * Handles slide navigation, auto-play, pause on hover, and accessibility (ARIA + keyboard)
 */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.dots');
  let currentIndex = 0;
  let autoSlide;

  // Create navigation dots with proper ARIA attributes for accessibility
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    dot.setAttribute('tabindex', i === 0 ? '0' : '-1');
    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });

    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        currentIndex = i;
        showSlide(currentIndex);
      }
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('button');

  /**
   * Displays the selected slide and updates dots/ARIA attributes
   * @param {number} index - Index of the slide to show
   */
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
      dot.setAttribute('tabindex', i === index ? '0' : '-1');
    });

    // Announce change for screen readers
    const announcer = document.querySelector('.sr-announcer');
    if (announcer) {
      announcer.textContent = `Slide ${index + 1} of ${slides.length} shown`;
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Attach navigation button listeners
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  // Auto-advance every 5 seconds
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  startAutoSlide();

  // Pause/resume on hover
  const slider = document.querySelector('.slider');
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
  }

  // Show first slide on init
  showSlide(currentIndex);
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
});

// ==================== SEARCH FUNCTIONALITY ====================

/**
 * Attaches all event listeners for the search input and results dropdown
 * Provides real-time search, safe highlighting, and outside-click closing
 */
function attachSearchListeners() {
  const searchInput = document.getElementById('search');
  const resultsList = document.getElementById('search-results');

  if (!searchInput || !resultsList) return;

  // Static list of searchable works/projects
  const works = [
    { title: "Data Analysis - Urban Mobility Ecobici 2024 - R & Tableau", url: "../projects/ecobici-2024/urban-mobility-analysis.html" },
    { title: "Data Analysis - Projects", url: "../data-analysis/data-analysis.html" },
    { title: "Web Development - Projects", url: "../web-development/web-development.html" },
    { title: "Web Development - JavaScript CSS HTML", url: "../index.html" }
  ];

  /**
   * Creates highlighted text safely using DOM nodes (no innerHTML risk)
   * @param {string} text - Original text
   * @param {string} query - Search term
   * @returns {DocumentFragment} Fragment with highlighted parts
   */
  function createHighlightedText(text, query) {
    if (!query) {
      const span = document.createElement('span');
      span.textContent = text;
      return span;
    }

    const fragment = document.createDocumentFragment();
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    parts.forEach(part => {
      if (part.toLowerCase() === query.toLowerCase()) {
        const mark = document.createElement('mark');
        mark.textContent = part;
        fragment.appendChild(mark);
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
    });

    return fragment;
  }

  /**
   * Performs the search and renders results
   */
  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    resultsList.innerHTML = ""; // Safe clear

    if (query.length === 0) {
      searchInput.classList.remove("expanded");
      resultsList.style.display = 'none';
      return;
    }

    searchInput.classList.add("expanded");
    resultsList.style.display = 'block';

    const matches = works.filter(work =>
      work.title.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No se encontraron coincidencias";
      resultsList.appendChild(li);
      return;
    }

    matches.forEach(match => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = match.url;

      const highlighted = createHighlightedText(match.title, query);
      a.appendChild(highlighted);

      a.addEventListener("click", () => {
        searchInput.value = "";
        searchInput.classList.remove("expanded");
        resultsList.innerHTML = "";
        resultsList.style.display = 'none';
      });

      li.appendChild(a);
      resultsList.appendChild(li);
    });
  }

  // Real-time search on input
  searchInput.addEventListener("input", performSearch);

  // Re-show results when focusing with existing text
  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim().length > 0) {
      performSearch();
    }
  });

  // Trigger search on Enter
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch();
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("mousedown", (e) => {
    const clickedInside =
      searchInput.contains(e.target) ||
      resultsList.contains(e.target);

    if (!clickedInside && searchInput.classList.contains("expanded")) {
      searchInput.classList.remove("expanded");
      searchInput.blur();
      resultsList.innerHTML = "";
      resultsList.style.display = 'none';
    }
  });
}