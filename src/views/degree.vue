<template>
    <div class=" container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 432c13.3 0 24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24zM176 136c0-13.3 10.7-24 24-24H408c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm24 136h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm144 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 352h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm144 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
        <div class = "page">
            <ul>
                <li class="li_1"> PSC1 - public basic first aid training /n - Calais, 5 Décembre 2013 - PSC1-13-062-21317 </li>
                <li class="li_2"> Bachelor Informatique - Efficom Lille </li>
                <li class="li_3"> Baccalauréat Economique et social </li>
                <li class="li_4"> Licence de droit L2 </li>
            </ul>
        </div>
    </div>

</template>

<script setup>

</script>
<style scoped>

.li_1 {

animation-name: slide-in-right_1;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 0.5s;

}
.li_2 {

animation-name: slide-in-right_2;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 1s;

}
.li_3 {

animation-name: slide-in-right_3;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 1.5s;

}
.li_4 {

animation-name: slide-in-right_4;
animation-duration: 1s;
animation-fill-mode: forwards;
opacity: 0;
animation-delay: 2s;


}

@keyframes slide-in-right_1 {
from {
  opacity: 0;
  transform: translateX(100%);
}
to {
  opacity: 1;
  transform: translateX(0);
}
}
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
.page {
position: fixed;
top: 40%;
left: 50%; /* Modification */
transform: translateX(-50%); /* Modification */
padding: 15px;
border-left: solid 1px;
}

svg{

    width: 20vh;
    display:flex;
}

div{
}
</style>