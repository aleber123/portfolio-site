<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div id="app">
    <header role="banner" :class="{ 'menu-open': isMenuOpen }">
      <div class="header-container">
        <a href="#" class="logo" aria-label="Alexander Bergqvist">AB</a>
        
        <button class="menu-toggle" @click="toggleMenu" aria-expanded="isMenuOpen" aria-controls="main-nav">
          <span class="sr-only">Meny</span>
          <div class="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav id="main-nav" role="navigation" aria-label="Huvudnavigation" :class="{ 'is-open': isMenuOpen }">
          <a href="#" class="nav-link" @click="isMenuOpen = false">Hem</a>
          <a href="#about" class="nav-link" @click="isMenuOpen = false">Om mig</a>
          <a href="#projects" class="nav-link" @click="isMenuOpen = false">Projekt</a>
          <a href="#contact" class="nav-link" @click="isMenuOpen = false">Kontakt</a>
        </nav>
      </div>
    </header>

    <router-view></router-view>

    <footer role="contentinfo">
      <div class="footer-container">
        <div class="footer-content">
          <p class="footer-text">Designad & Utvecklad av Alexander Bergqvist</p>
          <div class="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --background: #0a192f;
  --background-alt: #112240;
  --text: #8892b0;
  --text-primary: #ccd6f6;
  --text-secondary: #8892b0;
  --primary: #64ffda;
  --accent: #64ffda;
  --border: #233554;
  --focus-outline: #64ffda;
  --header-height: 80px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  background-color: var(--background);
  color: var(--text);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}

body {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

#app {
  background-color: var(--background);
  color: var(--text);
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  position: relative;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
  letter-spacing: 1px;
}

nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link:focus::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--primary);
  transition: all 0.3s ease;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: fixed;
    top: var(--header-height);
    right: -100%;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background-color: var(--background-alt);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    padding: 2rem;
  }

  nav.is-open {
    right: 0;
  }

  .menu-open .hamburger span:first-child {
    transform: translateY(9px) rotate(45deg);
  }

  .menu-open .hamburger span:nth-child(2) {
    opacity: 0;
  }

  .menu-open .hamburger span:last-child {
    transform: translateY(-9px) rotate(-45deg);
  }
}

/* Adjust main content to account for fixed header */
main {
  padding-top: var(--header-height);
}

/* Footer styles */
footer {
  background-color: var(--background);
  border-top: 1px solid var(--border);
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-text {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-links a {
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-links a:hover {
  color: var(--primary);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  footer {
    padding: 1.5rem 0;
  }
  
  .footer-content {
    gap: 0.8rem;
  }
  
  .social-links {
    gap: 1.2rem;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --primary: #0066cc;
    --text-primary: #000000;
    --text-secondary: #333333;
  }
}

/* Improved focus styles */
*:focus {
  outline: 2px solid var(--focus-outline);
  outline-offset: 3px;
  border-radius: 2px;
}

/* Focus visible only when using keyboard */
*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--focus-outline);
  outline-offset: 3px;
  border-radius: 2px;
}

/* High contrast mode support */
@media (forced-colors: active) {
  * {
    border-color: ButtonText;
  }
}

/* Improved link styles for accessibility */
a {
  text-decoration: none;
  color: var(--primary);
  transition: color 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
}

a:hover, a:focus {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

/* Ensure sufficient color contrast */
.text-primary {
  color: var(--text-primary);
}

.text-secondary {
  color: var(--text-secondary);
}

/* Improved button styles for accessibility */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  background: transparent;
  color: var(--primary);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover, .btn:focus {
  background: rgba(100, 255, 218, 0.1);
}

.btn:active {
  transform: translateY(1px);
}

/* Ensure text remains visible during webfont load */
.font-loading {
  font-display: swap;
}

/* Improved list styles for accessibility */
ul[role="list"],
ol[role="list"] {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Skip to main content link - hidden by default, visible on focus */
.skip-to-main-content {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 1em;
  background-color: var(--background);
  color: var(--text-primary);
  text-decoration: none;
}

.skip-to-main-content:focus {
  left: 50%;
  transform: translateX(-50%);
}
</style>
