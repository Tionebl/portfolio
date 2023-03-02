<template>
    <div class=" container">
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


div{
    
}
</style>