<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100 bg-light"
  >
    <div
      :class="[]"
      style="max-width: 400px; width: 100%;"
    >
      <div class="text-center mb-4">
        <!-- Logo with sunburst -->
        <span class="mb-4 d-flex justify-content-center">
    <img
      src="https://dev.sunny.co.id/build/assets/sunny_logo_black_no_bg-CLHsmPE_.png"
      alt="logo"
      width="256"
      height="68"
    />
  </span>
      </div>

      <form @submit.prevent="handleSubmit" novalidate>
        <!-- Name Field -->
        <div class="mb-3">
          <label for="name" class="form-label">
            Name <span class="text-danger">*</span>
          </label>
          <input
            id="name"
            v-model="name"
            type="text"
            :class="['form-control', nameError ? 'is-invalid' : '']"
            placeholder="Your full name, please 😊"
            @blur="nameError = !name.trim()"
            required
          />
          <div class="invalid-feedback">
            Name is required.
          </div>
        </div>

        <!-- Email Field -->
        <div class="mb-3">
          <label for="email" class="form-label">
            Email <span class="text-danger">*</span>
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            :class="['form-control', emailError ? 'is-invalid' : '']"
            placeholder="We'll need your best email 📧"
            @blur="emailError = !email.trim()"
            required
          />
          <div class="invalid-feedback">
            Email is required.
          </div>
        </div>

        <!-- Password Field -->
        <div class="mb-3">
          <label for="password" class="form-label">
            Password <span class="text-danger">*</span>
          </label>
          <input
            id="password"
            v-model="password"
            type="password"
            :class="['form-control', passwordError ? 'is-invalid' : '']"
            placeholder="..........."
            @blur="passwordError = !password.trim()"
            required
          />
          <div class="invalid-feedback">
            Password is required.
          </div>
        </div>

        <!-- Confirm Password Field -->
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">
            Confirm Password <span class="text-danger">*</span>
          </label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            :class="['form-control', confirmPasswordError ? 'is-invalid' : '']"
            placeholder="..........."
            @blur="confirmPasswordError = !confirmPassword.trim()"
            required
          />
          <div class="invalid-feedback">
            Confirm Password is required.
          </div>
        </div>

        <!-- Sign Up Button -->
        <button type="submit" class="btn btn-warning w-100 mb-3">
          Sign Up
        </button>
      </form>

      <!-- Sign-In Link & Google Button -->
      <div class="text-center">
        <p class="mb-2">
          Already have an account?
          <router-link to="/">Sign In</router-link>
        </p>
        <div class="divider my-4">
          <div class="divider-text">or login using</div>
        </div>
        <button class="btn btn-danger w-100">
          G Google
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nameError: false,
      emailError: false,
      passwordError: false,
      confirmPasswordError: false
    }
  },
  computed: {
    formInvalid() {
      return (
        this.nameError ||
        this.emailError ||
        this.passwordError ||
        this.confirmPasswordError
      )
    }
  },
  methods: {
    validate() {
      // reset errors
      this.nameError = !this.name.trim()
      this.emailError = !this.email.trim()
      this.passwordError = !this.password.trim()
      this.confirmPasswordError = !this.confirmPassword.trim()
      // overall validity
      return !(
        this.nameError ||
        this.emailError ||
        this.passwordError ||
        this.confirmPasswordError
      )
    },
    handleSubmit() {
      if (!this.validate()) {
        return
      }
      // TODO: integrate real registration logic
      console.log('Name:', this.name)
      console.log('Email:', this.email)
      console.log('Password:', this.password)
      console.log('Confirm Password:', this.confirmPassword)
      alert('Registration submitted!')
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
}
.text-danger {
  font-size: 1rem;
}
</style>
