<!-- Reusable project card component with accessibility features -->
<template>
  <article class="project-card" :aria-labelledby="titleId">
    <h3 :id="titleId" class="project-title">{{ title }}</h3>
    <div class="project-tech">
      <span 
        v-for="tech in technologies" 
        :key="tech"
        class="tech-tag"
        role="img"
        :aria-label="tech"
      >
        {{ tech }}
      </span>
    </div>
    <p class="project-description">{{ description }}</p>
    <div class="project-links">
      <a 
        v-if="githubUrl" 
        :href="githubUrl"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View project source code on GitHub"
      >
        GitHub
      </a>
      <a 
        v-if="liveUrl" 
        :href="liveUrl"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View live project demo"
      >
        Live Demo
      </a>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    default: () => []
  },
  description: {
    type: String,
    required: true
  },
  githubUrl: {
    type: String,
    default: ''
  },
  liveUrl: {
    type: String,
    default: ''
  }
})

const titleId = computed(() => `project-${props.title.toLowerCase().replace(/\s+/g, '-')}`)
</script>

<style scoped lang="scss">
.project-card {
  background: var(--card-bg, #ffffff);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  .project-title {
    font-size: 1.5rem;
    margin: 0 0 1rem;
    color: var(--text-primary, #333);
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .tech-tag {
      background: var(--tag-bg, #e9ecef);
      padding: 0.25rem 0.75rem;
      border-radius: 16px;
      font-size: 0.875rem;
    }
  }

  .project-description {
    color: var(--text-secondary, #666);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-links {
    display: flex;
    gap: 1rem;

    .link {
      color: var(--primary-color, #4a90e2);
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }

      &:focus {
        outline: 2px solid var(--primary-color, #4a90e2);
        outline-offset: 2px;
      }
    }
  }
}

// Mobile responsiveness
@media (max-width: 768px) {
  .project-card {
    padding: 1rem;

    .project-title {
      font-size: 1.25rem;
    }
  }
}
</style>
