<template>
  <div>
    <slot />
  </div>
</template>

<script>

  export default {
    name: "Validator",
    props: {
      num: {
        type: Number,
        default: 0,
      },
    },
    methods: {
      validate () {
        console.log("Validate", this.num, "parent:", this.$parent.num);
        this.validateChild(this.$children);
      },
      validateChild (children) {
        if (!Array.isArray(children)) return;

        children.forEach((ch) => {
          if (ch.$options.name === this.$options.name) ch.validate();
          this.validateChild(ch.$children);
        });
      },
    },
  };
</script>
