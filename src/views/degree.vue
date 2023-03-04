<template>
  <div class=" container">
    <div class = "page">
      <div class = "year-xp">
        <span> xp: 6M </span>
      </div>
      <ul>
        <li class="li_1"> Bachelor Informatique - Efficom Lille </li>
        <li class="li_2"> Licence de droit </li>
        <li class="li_3"> Baccalauréat Economique et social </li>
        <li class="li_4"> PSC1 - public basic first aid training - Calais, 5 Décembre 2013 - PSC1-13-062-21317 </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.page{
  display: flex;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%); 
  padding: 15px;
}
.year-xp{
border: solid;
border-color: transparent;
background-color: #04AA6D;
color: white;
font-weight: bold;
font-size: 50px;
width: 200px;
height: 200px;
margin-right: 10px;
animation-name: slide-right-year;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 0s;
}
span{
display: flex;
justify-content: center;
align-items: center;
height: 100%;
}
ul{
  border-left: solid 1px;
}
.li_1 {
animation-name: slide-in-right_1;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 0s;
}
.li_2 {
animation-name: slide-in-right_2;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 0.5s;
}
.li_3 {
animation-name: slide-in-right_3;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 1s;
}
.li_4 {
animation-name: slide-in-right_4;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 1.5s
}
@keyframes slide-right-year {
from {
  opacity: 0;
  transform: translateX(-100%);
}
to {
  opacity: 1;
  transform: translateX(0);
}}
@keyframes slide-in-right_1 {
from {
  opacity: 0;
  transform: translateX(100%);
}
to {
  opacity: 1;
  transform: translateX(0);
}}
@keyframes slide-in-right_2 {
from {
  opacity: 0;
  transform: translateX(100%);
}
to {
  opacity: 1;
  transform: translateX(0);
}
}
@keyframes slide-in-right_3 {
from {
  opacity: 0;
  transform: translateX(100%);
}
to {
  opacity: 1;
  transform: translateX(0);
}
}
@keyframes slide-in-right_4 {
from {
  opacity: 0;
  transform: translateX(100%);
}
to {
  opacity: 1;
  transform: translateX(0);
}
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 624px) {

}
</style>