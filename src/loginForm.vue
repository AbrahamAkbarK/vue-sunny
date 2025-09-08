<template>
  <div class="container-fluid">
    <div class="row min-vh-100">
      <LoginBase class="col-lg-5 bg-white d-flex flex-column justify-content-center p-5">
      </LoginBase>
      <ImagePanel class="d-none d-lg-flex col-lg-7 bg-light image-panel-container p-5">
      </ImagePanel>
    </div>
  </div>
</template>

<script setup>
import LoginBase from './loginBase.vue';
import ImagePanel from './components/imagePanel.vue';
</script>

<style scoped>
.image-panel-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
</style>
