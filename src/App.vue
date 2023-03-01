<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterMessage from '@/components/footer.vue'

</script>

<template>
  <header>
    
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to='/about'>About</RouterLink>
      <RouterLink to='/skills'>Skills</RouterLink>
      <RouterLink to='/xpAndDegrees'>XP & Degrees</RouterLink>
      <RouterLink to='/contactForm'>Contact</RouterLink>
    </nav>
    <RouterView />
  </header>
  <div class = "footer-message">
  <footer-message></footer-message>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  
}


nav {
  position: fixed;
  top: 0;
  left: 50%; /* Modification */
  transform: translateX(-50%); /* Modification */
  
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  /* border: solid 1px;
  border-radius: 30px */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
.footer-message {
  position: fixed;
  bottom: 0;
  transform: translateX(-100%);
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  margin-left: 20px;
  margin-right: 10px;
}

nav a:first-of-type {
  border: 0;
}
footer-message {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
