<template>

  <div class="container">
    <form @submit.prevent="submitForm">
      <label for="name">Nom :</label>
      <input v-model="name" id="name" type="text" required>
      <br>
      <label for="email">Email :</label>
      <input v-model="email" id="email" type="email" required>
      <br>
      <button type="submit">Envoyer</button>
    </form>
    <p v-if="formSubmitted">Formulaire envoyé avec succès !</p>
  </div>


</template>

<script setup>

  let name = '';
  let email = '';
  let formSubmitted = false;

  function submitForm() {
    // Vérifier que les champs obligatoires sont remplis
    if (name && email) {
      // Envoyer le formulaire
      // ...
      
      // Afficher le message de succès
      formSubmitted = true;
    }
  }

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
}
</style>