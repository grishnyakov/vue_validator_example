<template>
  <v-app>
    <validator
      ref="root"
      :num="1"
    >
      <some-component>
        <validator :num="2" />
      </some-component>
      <some-component>
        <validator :num="3" />
        <validator :num="4" />
      </some-component>
      <validator :num="5" />

      <validator :num="6">
        <!-- Убедимся, что 6 валидирует 7 -->
        <validator :num="7" />
      </validator>
    </validator>
  </v-app>
</template>

<script>
  import Validator from "./Validator";
  import Body from "./Body";

  export default {
    components: {
      Validator,
      "some-component": Body,
    },
    mounted () {
      this.$refs.root.validate();
    },
  };
</script>
