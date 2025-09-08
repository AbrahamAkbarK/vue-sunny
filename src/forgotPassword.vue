<script setup>
import ButtonBase from './components/buttonBase.vue'
import IconHead from './components/iconHead.vue'
import InputField from './components/inputField.vue'
import ImagePanel from './components/imagePanel.vue'
import { ref } from 'vue'
import { alertSuccess } from './assets/alert'
import { useRouter } from 'vue-router'

const email = ref('')
const router = useRouter()



async function submitHandler() {
  if (!email.value.trim()) {
    alert('Please fill in your email.')
    return
  }
  // Here you can add your logic to handle password reset, e.g., API call
  console.log(`Email for password reset: ${email.value}`)
  await alertSuccess('Password reset link sent to your email!')
  router.push({
    path: '/',
  })
}
</script>

<template>
  <div class="container-fluid">
    <div class="row min-vh-100">
      <div class="col-lg-5 bg-white d-flex flex-column justify-content-center p-5">

        <form v-on:submit.prevent="submitHandler">
          <IconHead />
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            v-model="email"
            required
          />
          <ButtonBase> Reset Password </ButtonBase>
          <RouterLink to="/" class="text-center text-black fw-semibold d-block mt-3">
            Back to Login
          </RouterLink>
        </form>
      </div>
      <ImagePanel class="d-none d-lg-flex col-lg-7 bg-light image-panel-container p-5">
      </ImagePanel>
    </div>
  </div>
</template>

<style scoped>
.image-panel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  max-width: 400px;
  width: 100%;
  content: center;
  margin: auto;
  align-items: center;

}
</style>
