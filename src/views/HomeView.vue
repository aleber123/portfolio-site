<template>
  <div class="custom-cursor" ref="cursor"></div>
  
  <main class="home" role="main">
    <!-- Hero Section -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <p class="fade-up intro">Hej, mitt namn är</p>
        <h1 class="fade-up name" id="hero-title">Alexander Bergqvist</h1>
        <h2 class="fade-up title" id="hero-subtitle">Frontend-utvecklare</h2>
        <p class="fade-up description">
          Jag är en nyexaminerad frontend-utvecklare med fokus på användarcentrerade och tillgängliga webbapplikationer.
          Med erfarenhet av Vue.js, React och moderna utvecklingsverktyg skapar jag hållbara digitala lösningar.
        </p>
        <div class="fade-up cta-buttons" role="navigation" aria-label="Primär navigation">
          <a href="#projects" class="btn" aria-label="Se mina projekt">Se mina projekt</a>
          <a href="#about" class="btn btn-outline" aria-label="Läs mer om mig">Om mig</a>
          <a href="mailto:alexander.bergqvist@gmail.com" class="btn btn-outline" aria-label="Skicka ett mail till mig">Kontakta mig</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about" aria-labelledby="about-title">
      <div class="container">
        <h2 class="section-title fade-up" id="about-title">Om Mig</h2>
        <div class="about-content">
          <div class="intro-grid">
            <div class="about-text fade-up">
              <p>
                Som frontend-utvecklare brinner jag för att skapa användarvänliga och tekniskt eleganta lösningar. 
                Med en solid grund i moderna webbteknologier och ett öga för detaljer, strävar jag efter att bygga 
                applikationer som inte bara fungerar felfritt utan också ger en förstklassig användarupplevelse.
              </p>
            </div>
            <div class="profile-image fade-up">
              <img src="/profile.jpg" alt="Alexander Bergqvist - Profilbild" />
            </div>
          </div>
          
          <div class="tech-stack fade-up" role="region" aria-labelledby="tech-stack-title">
            <h3 id="tech-stack-title">Teknisk Kompetens</h3>
            <div class="tech-categories">
              <div class="tech-category" role="list">
                <h4 id="frontend-title">Frontend</h4>
                <ul aria-labelledby="frontend-title" role="list">
                  <li role="listitem">Vue.js / React</li>
                  <li role="listitem">TypeScript</li>
                  <li role="listitem">TailwindCSS</li>
                  <li role="listitem">Responsive Design</li>
                </ul>
              </div>
              <div class="tech-category" role="list">
                <h4 id="backend-title">Backend</h4>
                <ul aria-labelledby="backend-title" role="list">
                  <li role="listitem">Node.js</li>
                  <li role="listitem">Express</li>
                  <li role="listitem">MongoDB</li>
                  <li role="listitem">RESTful APIs</li>
                </ul>
              </div>
              <div class="tech-category" role="list">
                <h4 id="tools-title">Verktyg & Metoder</h4>
                <ul aria-labelledby="tools-title" role="list">
                  <li role="listitem">Git / GitHub</li>
                  <li role="listitem">Docker</li>
                  <li role="listitem">Agila metoder</li>
                  <li role="listitem">CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects" aria-labelledby="projects-title">
      <div class="container">
        <h2 class="section-title fade-up" id="projects-title">Projekt</h2>
        <div class="projects-grid">
          <article v-for="project in projects" :key="project.title" class="project-card fade-up" role="article">
            <div class="project-content">
              <div class="project-header">
                <p class="project-overline">{{ project.type }}</p>
                <h3 class="project-title">{{ project.title }}</h3>
              </div>
              
              <div class="project-body">
                <div class="project-description card">
                  <p>{{ project.description }}</p>
                  <ul class="project-features" role="list">
                    <li v-for="feature in project.features" :key="feature" role="listitem">{{ feature }}</li>
                  </ul>
                </div>
                
                <div class="project-tech">
                  <h4 id="tech-list-{{project.title}}">Teknologier</h4>
                  <ul class="project-tech-list" role="list" :aria-labelledby="'tech-list-' + project.title">
                    <li v-for="tech in project.technologies" :key="tech" role="listitem">{{ tech }}</li>
                  </ul>
                </div>
                
                <div class="project-links">
                  <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer" class="btn btn-outline" :aria-label="'Se källkod för ' + project.title">
                    <span class="icon" aria-hidden="true">📂</span>
                    <span>Källkod</span>
                  </a>
                  <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer" class="btn" :aria-label="'Se live demo av ' + project.title">
                    <span class="icon" aria-hidden="true">🔗</span>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact" aria-labelledby="contact-title">
      <div class="container">
        <h2 class="section-title fade-up" id="contact-title">Kontakt</h2>
        <div class="contact-info" role="navigation" aria-label="Sociala medier och kontakt">
          <a href="mailto:alexander.bergqvist@gmail.com" class="contact-link" aria-label="Skicka mail">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            alexander.bergqvist@gmail.com
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="Besök min GitHub profil">
            <i class="fab fa-github" aria-hidden="true"></i>
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="Besök min LinkedIn profil">
            <i class="fab fa-linkedin" aria-hidden="true"></i>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)

const updateCursor = (e) => {
  if (cursor.value) {
    cursor.value.style.left = e.clientX + 'px'
    cursor.value.style.top = e.clientY + 'px'
  }
}

const addHoverClass = () => {
  if (cursor.value) cursor.value.classList.add('hover')
}

const removeHoverClass = () => {
  if (cursor.value) cursor.value.classList.remove('hover')
}

onMounted(() => {
  document.addEventListener('mousemove', updateCursor)
  const links = document.querySelectorAll('a, button')
  links.forEach(link => {
    link.addEventListener('mouseenter', addHoverClass)
    link.addEventListener('mouseleave', removeHoverClass)
  })
})

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursor)
  const links = document.querySelectorAll('a, button')
  links.forEach(link => {
    link.removeEventListener('mouseenter', addHoverClass)
    link.removeEventListener('mouseleave', removeHoverClass)
  })
})

const projects = [
  {
    type: 'Examensarbete',
    title: 'Hållbar Webbdesign',
    description: 'Utvecklade en fullskalig webbapplikation som demonstrerar hållbara designprinciper. Implementerade energieffektiv kod, optimerade bilder och resurser, samt följde WCAG 2.1 riktlinjer för tillgänglighet. Projektet inkluderar realtidsövervakning av koldioxidavtryck.',
    technologies: ['React', 'Node.js', 'Performance Metrics API', 'WCAG 2.1', 'Lighthouse'],
    features: [
      'Energieffektiv kodarkitektur',
      'Automatiserad prestanda-optimering',
      'Tillgänglighetsanpassat gränssnitt',
      'Realtidsmätning av resursutnyttjande'
    ],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/sustainable-web.png'
  },
  {
    type: 'Frontend Projekt',
    title: 'Quiz Game för Barn',
    description: 'Ett pedagogiskt quiz-spel utvecklat med Vue 3 och Firebase. Spelet använder gamification för att göra lärande roligt och engagerande för barn. Implementerade realtids-multiplayer och progressspårning.',
    technologies: ['Vue 3', 'Composition API', 'Firebase', 'Vite', 'TailwindCSS'],
    features: [
      'Realtids multiplayer-funktionalitet',
      'Progressiv webb-app (PWA)',
      'Offline-stöd med local storage',
      'Animerade spelinteraktioner'
    ],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/quiz-game.png'
  },
  {
    type: 'UX/Frontend Projekt',
    title: 'E-handelsplattform',
    description: 'Utvecklade en modern e-handelsplattform med fokus på användarupplevelse och konverteringsoptimering. Implementerade avancerade filtreringsfunktioner och snabb produktsökning.',
    technologies: ['React', 'Redux Toolkit', 'Stripe API', 'Framer Motion', 'Styled Components'],
    features: [
      'Optimerad checkout-process',
      'Realtids lagerhantering',
      'Avancerad produktfiltrering',
      'Responsiv produktvisning'
    ],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/ecommerce.png'
  },
  {
    type: 'UI/UX Projekt',
    title: 'Design System för Vårdapplikationer',
    description: 'Skapade ett omfattande design system för vårdrelaterade webbapplikationer med fokus på tillgänglighet och användarvänlighet. Implementerade återanvändbara komponenter och dokumentation.',
    technologies: ['React', 'Storybook', 'Styled Components', 'Jest', 'Figma'],
    features: [
      'WCAG 2.1 kompatibla komponenter',
      'Interaktiv komponentdokumentation',
      'Automatiserade tester',
      'Designsystem dokumentation'
    ],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/healthcare-design.png'
  }
]

</script>

<style scoped lang="scss">
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;

  .intro {
    color: var(--accent);
    font-family: 'Space Grotesk', monospace;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .name {
    color: var(--text-primary);
    margin: 0;
  }

  .title {
    color: var(--text-secondary);
    margin: 1rem 0;
  }

  .description {
    max-width: 540px;
    margin: 2rem 0;
    line-height: 1.8;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 3rem;
  }
}

.about {
  background: var(--background-alt);
  padding: 6rem 0;

  .about-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .intro-grid {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 3rem;
    margin-bottom: 3rem;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;

      .profile-image {
        width: 180px;
        height: 180px;
        margin: 0 auto 1rem;
      }
    }
  }

  .profile-image {
    width: 200px;
    height: 200px;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 3px solid var(--primary);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }
    }
  }

  .about-text {
    p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: var(--text);
    }
  }

  .tech-stack {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--primary);
    }

    .tech-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 1.5rem;
    }

    .tech-category {
      background: var(--background);
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      h4 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
        padding-bottom: 0.5rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 0.8rem 0;
          color: var(--text);
          display: flex;
          align-items: center;
          
          &:before {
            content: "•";
            color: var(--primary);
            font-weight: bold;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    .tech-categories {
      grid-template-columns: 1fr;
    }
    
    .about-text p {
      font-size: 1rem;
    }
  }
}

.contact {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 100px 0;

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
    border: 1px solid var(--border);
    border-radius: 8px;
    transition: background 0.3s ease;

    &:hover {
      background: var(--background-alt);
    }

    i {
      font-size: 1.2rem;
    }
  }
}

.projects {
  padding: 100px 0;
  background: var(--background-alt);

  .projects-grid {
    display: grid;
    gap: 4rem;
    margin-top: 3rem;
  }

  .project-card {
    position: relative;
    background: var(--background);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px -15px rgba(2,12,27,0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .project-content {
      padding: 2rem;
    }

    .project-header {
      margin-bottom: 1.5rem;
    }

    .project-overline {
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }

    .project-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .project-description {
      color: var(--text-secondary);
      font-size: 1rem;
      line-height: 1.6;
    }

    .project-features {
      list-style: none;
      padding: 0;
      margin: 1rem 0;

      li {
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.95rem;

        &::before {
          content: "▹";
          position: absolute;
          left: 0;
          color: var(--accent);
        }
      }
    }

    .project-tech {
      margin: 1.5rem 0;

      h4 {
        font-size: 1rem;
        margin-bottom: 0.75rem;
        color: var(--text-secondary);
      }
    }

    .project-tech-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      list-style: none;
      padding: 0;

      li {
        background: var(--background-alt);
        color: var(--accent);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.85rem;
        font-family: var(--font-mono);
      }
    }

    .project-links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;

      .btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        font-size: 0.9rem;
        
        .icon {
          font-size: 1.2rem;
        }
      }
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .projects {
    padding: 60px 0;

    .project-card {
      .project-content {
        padding: 1.5rem;
      }

      .project-title {
        font-size: 1.3rem;
      }

      .project-links {
        flex-direction: column;
        
        .btn {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
}

// Small mobile devices
@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;

    &::after {
      width: 150px;
    }
  }

  .about .skills-list {
    grid-template-columns: 1fr;
  }

  .project-card {
    .project-tech-list {
      justify-content: flex-start;
    }
  }
}

// Ensure smooth scrolling and better touch experience
@media (hover: none) and (pointer: coarse) {
  .custom-cursor {
    display: none;
  }

  a, button {
    padding: 0.8rem !important; // Larger touch targets
    
    &:active {
      transform: scale(0.98);
    }
  }
}

// Fix for iOS Safari 100vh issue
@supports (-webkit-touch-callout: none) {
  .hero {
    min-height: -webkit-fill-available;
  }
}
</style>
