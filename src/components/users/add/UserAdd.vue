<template>
  <div class="add-from">
    <div v-for="(field, name) in fields" :key="name">
      <form-input v-model:value="field.value" :field="field" :name="name"></form-input>
    </div>
    <button @click="add" v-text="'Add new user'"></button>
    {{fields}}
  </div>
</template>

<script>

import UserAddInput from "./UserAddInput";

export default {
  components: {
    "form-input": UserAddInput
  },

  data: () => {
    return {
      fields: {
        name: {
          type: "text",
          value: "dasdasd",
        },
        age: {
          type: "number",
          value: 44,
        },
      },
    };
  },
  methods: {
    add() {},
  },
};
</script>

<style lang="scss" scoped>
.add-from {
  border-bottom: 1px solid black;
  padding: 10px;
}
</style>

