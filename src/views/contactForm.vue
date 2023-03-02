<template>
  <div class="content">
    <div class="things"> <p> Join me on my email or by LinkedIn</p>
    <div class="arrow">
      <div class="curve"></div>
      <div class="point"></div>
    </div>
  </div> 
</div>
<div class="container-form">
  <a href="https://www.linkedin.com/in/benoit-lavoine-bb6b06155/">
    <img src="src/assets/linkedin.png">
  </a>
  <input type="text"  value="pro.benoitlavoine@gmail.com" id="myInput" readonly="readonly">
  <button @click="copyEmail()"> {{ copyArea }}</button>
  </div>
</template>
<script setup>
import {ref} from 'vue';
  const copyArea = ref('Copy')
  function copyEmail() {
    var copyText = document.getElementById("myInput");
    copyText.select(); 
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    copyArea.value = ' Copied'
}
</script>
<style scoped>
img{
  width: 5vh;
  right: 30px;
}
label{
  color:  var(--color-text) ;
}
.things {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container-form{
  top: 50%;
}
p {
  color:#04AA6D;
  font-style: italic;
  font-size: 1rem;
  animation-name: slide-in-bot;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 0.3s;
}
@keyframes slide-in-top {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }to {
    opacity: 1;
    transform: translateY(0);
}}
.container-form {
  display:flex;
  border-radius: 5px;
  background-color: --color-background;
  padding: 20px;
  position: fixed;
  top: 60%;
  left: 50%; /* Modification */
  transform: translateX(-50%); /* Modification */
}
button {
  background-color: #04AA6D;
  border: none;
  width: 30%;
  max-width: 30%;
  cursor: pointer;
  color: white;
  padding: 12px 20px;
  margin-left: 10px
}
button:hover {
background-color: #45a049;
}
input[type=text], textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */  
  border: 1px solid #ccc; /* Gray border */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}
.things > .content {
  width: 50%;
  height: 500px;
  -webkit-box-sizing: border-box; 
	-moz-box-sizing: border-box;    
	box-sizing: border-box;
  position: relative;
}
.things > .content h1 {
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  height: 150px;
  color: #04AA6D;
}
/* Arrow 1 */
.arrow {
	position: relative;
  margin: 0 auto;
  width: 100px;
  top: 10px;
}
.arrow .curve {
	border: 2px solid #04AA6D;;
	border-color: transparent transparent transparent #04AA6D;;
	height: 360px;
	width: 1200px;
	border-radius: 230px 0 0 150px;
  animation-name: slide-in-top;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 0s;
}
@keyframes slide-in-top {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }to {
    opacity: 1;
    transform: translateY(0);
  }}
.arrow .point {
	position: absolute;
	left: 40px;
	top: 315px;
}
.arrow .point:before, .arrow .point:after {
	border: 1px solid #04AA6D;
	height: 25px;
	content: "";
	position: absolute;
  animation-name: slide-in-bot;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 0.7s;
}
@keyframes slide-in-bot {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }to {
    opacity: 1;
    transform: translateY(100);
  }}
.arrow .point:before {
	top: -11px;
	left: -11px;
	transform:rotate(-74deg);
	-webkit-transform:rotate(-74deg);
  -moz-transform:rotate(-74deg);
  -ms-transform: rotate(-74deg);
}
.arrow .point:after {
  top: -20px;
	left: 5px;
	transform:rotate(12deg);
	-webkit-transform: rotate(12deg);
  -moz-transform:rotate(12deg);
  -ms-transform: rotate(12deg);
}
@media screen and (max-width: 1024px) {

.things {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container-form{

  top: 50%;
}
}
@media screen and (max-width: 640px) {

.things {
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container-form{

  top: 75%;
}
}

@media screen and (max-width: 376px){
  .things {
display: none;
}

.container-form{

top: 40%;
}

button{
  width: 100px;
}
}
  
</style>