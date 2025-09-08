<script setup lang="ts">
import ButtonBase from './components/buttonBase.vue'
import IconHead from './components/iconHead.vue'
import InputField from './components/inputField.vue'
import ImagePanel from './components/imagePanel.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { alertError, alertSuccess } from './assets/alert'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

async function handleSubmit() {
  if (
    !name.value.trim() ||
    !email.value.trim() ||
    !password.value.trim() ||
    !confirmPassword.value.trim()
  ) {
    alert('Please fill in all fields.')
    return
  }
  if (password.value !== confirmPassword.value) {
    await alertError('Passwords do not match.')
    return
  }
  await alertSuccess('Registration successful!')
  console.log(`Name: ${name.value}, Email: ${email.value}, Password: ${password.value}`)
  router.push({
    path: '/',
  })
}
</script>

<template>
  <div class="container-fluid">
    <div class="row min-vh-100">
      <div class="col-lg-5 bg-white d-flex flex-column justify-content-center p-5">
        <form v-on:submit.prevent="handleSubmit">
          <IconHead />
          <InputField
            label="Name"
            type="text"
            placeholder="Your full name, please 😊"
            v-model="name"
            required
          >
          </InputField>
          <InputField
            label="Email"
            type="email"
            placeholder="We'll need your best email 📧"
            v-model="email"
            required
          >
          </InputField>
          <InputField
            label="Password"
            type="password"
            placeholder="..........."
            v-model="password"
            required
          >
          </InputField>
          <InputField
            label="Confirm Password"
            type="password"
            placeholder="..........."
            v-model="confirmPassword"
            required
          >
          </InputField>

          <ButtonBase> Sign Up </ButtonBase>
          <p class="text-center mt-4">
            Already have an account
            <router-link to="/" class="fw-semibold text-black">Sign in</router-link>
          </p>
          <div class="d-flex align-items-center my-4">
            <hr class="flex-grow-1" />
            <span class="mx-3">or continue with</span>
            <hr class="flex-grow-1" />
          </div>
          <div class="d-grid">
            <button type="button" class="btn btn-outline-secondary">
              <svg
                class="me-2"
                width="20"
                height="20"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style="vertical-align: middle"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.22 0-9.655-3.657-11.13-8.584l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H24v8h11.303c-.792 2.237-2.231 4.16-4.082 5.574l6.19 5.238C42.012 35.24 44 30.025 44 24c0-1.341-.138-2.65-.389-3.917z"
                ></path>
              </svg>
              G Google
            </button>
          </div>
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
