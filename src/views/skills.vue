<template>
  <div class="page">
      <div class=" main-container">
          <div class="container-frameworks">
              <h3> Used framework...</h3>
              <ul>
                <li> Vue 3</li>
                <li> Tailwind CSS</li>
              </ul>
              

          </div>
          <div class="container-lang">
              <h3> Most used language...</h3> 
              <span> Javascript
                  <div class="progress-bar">
                      <div class="progress-bar-fill-js">60%</div>
                  </div>
              </span>
              <span>PHP
                  <div class="progress-bar">
                      <div class="progress-bar-fill-php">20%</div>
                  </div>
              </span>
              <span>Python
                  <div class="progress-bar">
                      <div class="progress-bar-fill-python">20%</div>
                  </div>
              </span>
          </div>
      </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.page {

  position: fixed;
  top: 40%;
  left: 50%; /* Modification */
  transform: translateX(-50%); /* Modification */
}

h3 {
  font-style: italic;
  padding: 15px;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: start;
}

.container-lang {
  width: 30vh;
  border-right: solid 1px rgb(164, 164, 164);
  border-left: solid 1px rgb(164, 164, 164);
  padding: 20px;
}

.container-frameworks {
    padding: 20px;
    
}

.progress-bar {
  background-color: #f2f2f2;
  border-radius: 10px;
  height: 20px;
  width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
}

.progress-bar-fill-js {
  background-color: hsla(160, 100%, 37%, 1);
  text-align: center;
  color: white;
  animation: fill-progress-js 2s forwards;
  animation-delay: 0s;
}

.progress-bar-fill-php {
  text-align: center;
  color: white;
  animation: fill-php 2s forwards;
  animation-delay: 0.7s;
}

.progress-bar-fill-python {
  text-align: center;
  color: white;
  animation: fill-python 2s forwards;
  animation-delay: 1.5s;
}


@keyframes fill-progress-js {
  from { width: 0%; background-color: red }
  to { width: 60%; background-color:hsla(160, 100%, 37%, 1)}
}
@keyframes fill-php {
  from { width: 0%; background-color: red }
  to { width: 20%;background-color: orange }
}
@keyframes fill-python {
  from { width: 0%; background-color: red}
  to { width: 20%;background-color: orange  }
}
</style>