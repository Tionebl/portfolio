<template>
  <div class="page fixed top-20 left-1/2 transform -translate-x-1/2">
    <div class="container flex m-6">
      <div class="img">
        <!-- <img class="imgApp" src="@/assets/moicat.png"> -->
        <img class="imgApp" src="">
      </div>

      <div class="infoContainer p-10 border-l-2 border-gray-500 min-w-[40vh]">
        <typeWriter class="typeApp"></typeWriter>
        <h3 class="leftApparition text-justify max-w-[50vh]">
          Hey there! I'm a <span class="bold-text">web developer</span> based in
          <strong><span class="bold-text">Lille</span></strong>.
          With a passion for building dynamic and interactive web applications, I specialize in using
          <strong><span class="bold-text">Javascript</span></strong> and <strong><span class="bold-text">Vue 3</span></strong> to create seamless user experiences. Whether it's designing responsive websites or crafting complex web applications,
          I love to bring my ideas to life through code.
          Thanks for stopping by my portfolio!
        </h3>
        <button @click="downloadPdf">Download CV</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import typeWriter from '@/components/typeWriter/typeWriter.vue'
const pdfUrl = "CV_Oct2022_BenoitLavoine.pdf";

const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'CV_Oct2022_BenoitLavoine.pdf';
  link.click();
}
</script>
