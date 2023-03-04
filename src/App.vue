<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to='/about'>About</RouterLink>
      <RouterLink to='/skills'>Skills</RouterLink>
      <RouterLink to='/degree'>XP & Degrees</RouterLink>
      <RouterLink to='/contactForm'>Contact</RouterLink>
    </nav>
    <transition name="fade">
      <RouterView />
    </transition>
  </header>
</template>

<style scoped>

header {
  line-height: 1.5;
  
}

/* Define the transition effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

nav {
  position: fixed;
  top: 0;
  left: 50%; /* Modification */
  transform: translateX(-50%); /* Modification */
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
  z-index: 1000;
  white-space: nowrap;
  /* border: solid 1px;
  border-radius: 30px */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  /* padding: 0 1rem; */
  padding-left: 30px;
  padding-right: 30px;
  border-left: 2px solid var(--color-border);
  
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    margin: 0;
    border-radius: 0;
    margin-top: 30px;
  }
  
  nav a:last-of-type {
    border-bottom: none;
  }
}

@media screen and (max-width: 640px) {
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    margin: 0;
    border-radius: 0;
    font-size: 14px;
  }
  
  nav a {
    display: block;
    padding: 1rem 0;
    border-left: none;
    border-bottom: 1px solid var(--color-border);
    margin: 0;
  }
  
  nav a:last-of-type {
    border-bottom: none;
  }
}
</style>
