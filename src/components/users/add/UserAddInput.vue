<template>
  <input :type="field.type" :id="name" :value="value" @input="input" />
  <label :for="name" v-text="name"></label>
</template>


<script>
export default {
  props: {
    name: String,
    field: Object,
    value: {
        
    }
  },
  methods: {
    input(event) {
      this.$emit("update:value", event.target.value.trim());
    },
  },
};
</script>