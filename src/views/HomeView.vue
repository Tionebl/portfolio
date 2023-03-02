<script setup>
import typeWriter from '@/components/typeWriter/typeWriter.vue'
</script>
<template>
  <div class = page>
    <div class="container">
      <div class=" img">
      <img class= "imgApp" src="@/assets/moicat.png">
      </div>
    
      <div class="infoContainer">
        <typeWriter class="typeApp"></typeWriter>
        <h3 class="leftApparition"> Hey there! I'm a web developer based in Lille. With a passion for building dynamic and interactive web applications, I specialize in using Javascript and Vue 3 to create seamless user experiences. Whether it's designing responsive websites or crafting complex web applications, I love to bring my ideas to life through code. Thanks for stopping by my portfolio!</h3>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page{

  position: fixed;
  top: 40%;
  left: 50%; /* Modification */
  transform: translateX(-50%); /* Modification */
}
.container {
  display: flex;
  margin: 30px;
}
.infoContainer{

 padding: 10px;
 border-left: solid 1px gray;
 min-width: 40vh;

}

img {
  border-radius: 50%;
  height: 25vh;
  width: 25vh;
  margin-right: 30px
}
h3{
  font-size: 80%;
  text-align : justify;
  max-width: 50vh;
  
  margin-left: auto;
  margin-right: auto
}


.typeApp{
  
  margin: 30px;
  animation-name: slide-in-top;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 0s;

}
.imgApp{
  animation-name: slide-in-left;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 1s;

}
.leftApparition {

  animation-name: slide-in-right;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 0.5s;
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-in-top {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 1024px) {

  img {
  border-radius: 50%;
  height: 15vh;
  width: 15vh;
  margin: 30px
}
.infoContainer{

padding: 10px;
border-left: solid 1px gray;
min-width: 5vh;

}
}
@media screen and (max-width: 624px) {


  .container{

    max-width: 400px ;
  }

  .img{
  transform: translateY(30%);
}


}
</style>