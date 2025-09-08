<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div
      :class="[]"
      style="max-width: 400px; width: 100%"
    >
      <span class="mb-4 d-flex justify-content-center">
        <img
          src="https://dev.sunny.co.id/build/assets/sunny_logo_black_no_bg-CLHsmPE_.png"
          alt="logo"
          width="256"
          height="68"
        />
      </span>

      <form @submit.prevent="handleSubmit" novalidate>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            :class="['form-control', emailError ? 'is-invalid' : '']"
            placeholder="Enter your email"
            @blur="emailError = !email.trim()"
            required
          />
          <div v-if="emailError" class="invalid-feedback">Email is required.</div>
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            :class="['form-control', passwordError ? 'is-invalid' : '']"
            placeholder="Enter your password"
            @blur="passwordError = !password.trim()"
          />
          <div class="invalid-feedback">Password is required.</div>
        </div>

        <div class="form-check mb-3">
          <input id="rememberMe" v-model="rememberMe" class="form-check-input" type="checkbox" />
          <label for="rememberMe" class="form-check-label"> Remember me </label>
        </div>

        <button type="submit" class="btn btn-warning w-100 mb-3">Sign In</button>
      </form>

      <div class="text-center">
        <a href="#" class="d-block mb-2">Forgot password?</a>
        <p class="mb-2">
          New on our platform? <router-link to="/signup">Create account</router-link>
        </p>
        <div class="divider my-4">
          <div class="divider-text">or login using</div>
        </div>
        <button class="btn btn-danger w-100">G Google</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      emailError: false,
      passwordError: false,
    }
  },
  computed: {
    formInvalid() {
      // Form is invalid if either field has an error
      return this.emailError || this.passwordError
    },
  },
  methods: {
    validate() {
      // Reset errors
      this.emailError = !this.email.trim()
      this.passwordError = !this.password.trim()
      // Return overall validity
      return !(this.emailError || this.passwordError)
    },
    handleSubmit() {
      if (!this.validate()) {
        // Validation failed, do not proceed
        return
      }
      // TODO: hook up to real auth
      console.log('Email:', this.email)
      console.log('Password:', this.password)
      console.log('Remember Me:', this.rememberMe)
      alert('Form submitted!')
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
}
</style>
