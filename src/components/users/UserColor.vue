<template>
  <div>
    <button
      v-for="color in colors"
      :style="{ backgroundColor: color }"
      :key="color"
      @click="$emit('selectColor', color)"
      :class="[current===color ? 'selected' : '']"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["red", "yellow", "green"],
    };
  },
  props: {
    current: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>

button {
  height: 18px;
  width: 30px;
  margin: 0px 5px;
}
button.selected {
  border: 4px solid blue;
}
</style>