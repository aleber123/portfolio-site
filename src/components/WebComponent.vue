<!-- A custom web component to demonstrate component creation skills -->
<template>
  <div class="custom-component" :class="{ 'is-active': isActive }" @click="toggle">
    <slot name="icon"></slot>
    <div class="content">
      <slot></slot>
    </div>
    <div class="accessibility-info" role="status" aria-live="polite">
      {{ isActive ? 'Expanded' : 'Collapsed' }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
const toggle = () => {
  isActive.value = !isActive.value
}
</script>

<style scoped lang="scss">
.custom-component {
  border: 2px solid var(--primary-color, #4a90e2);
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.3s ease;

  // Mobile-first design
  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  &.is-active {
    background-color: var(--primary-color, #4a90e2);
    color: white;
  }

  .accessibility-info {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
}
</style>
