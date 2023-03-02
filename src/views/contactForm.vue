<template>

  <div class="container-form">
    <form @submit.prevent="submitForm">

      <label for="fname">First Name</label>
        <input v-model="name" type="text" id="fname" name="firstname" placeholder="Your name..">
      <br>
      <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
      <br>
      <label for="email">Email</label>
      <input v-model="email" type="text"  id="email" placeholder="Email..." required>
      <br>
      <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
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

label{

  color:  var(--color-text) ;
}
.container-form {
  border-radius: 5px;
  background-color: --color-background;
  padding: 20px;
  position: fixed;
  top: 40;
  left: 50%; /* Modification */
  transform: translateX(-50%); /* Modification */
  
}

input[type=text], textarea {

  width: 100%; /* Full width */
  padding: 12px; /* Some padding */  
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}
button[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

}

button[type=submit]:hover {

  background-color: #45a049;
}

@media screen and (max-width: 624px) {


.container-form{

    top: 30%;
    width: 300px;
   


}
}
</style>