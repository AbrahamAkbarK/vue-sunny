<template>
  <div class="mb-3">
    <label :for="label" class="form-label fw-medium">{{ label }} </label>
    <div class="input-group">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :id="label"
        :name="label"
        :placeholder="placeholder"
        class="form-control"
        :required="required"
      />
      <!-- Slot for icons or buttons inside the input group -->
      <slot></slot>
    </div>
    <div
      v-if="!modelValue && required"
      class="form-text text-danger invalid-feedback"
      style="font-size: 0.8rem"
    >
      {{ label }} is required
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.form-control:focus ,.form-select:focus {
  border-color: #ffd207;
  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);
}
.required-asterisk {
  content: '*';
  color: red;
  margin-left: 0.25rem;
}
</style>
