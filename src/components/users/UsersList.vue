<template>
  <RecycleScroller
    class="scroller"
    :items="filteredItems"
    :item-size="30"
    key-field="index"
    v-slot="{ item }"
  >
    <div class="user" >
      <input
        v-if="selectedIndex === item.index"
        :value="item.name"
        @input="($event) => editUser(item.index, {name: $event.target.value})"
        @keypress.enter="selectedIndex = -1"
      />
      <span v-else @click="selectedIndex = item.index">{{ item.name }}</span>

      <UserColor
        @selectColor="($event) => editUser(item.index, {color: $event})"
        :current="item.color"
      />
    </div>
  </RecycleScroller>
</template>

<script>
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { RecycleScroller } from "vue-virtual-scroller";
import UserColor from "./UserColor";

export default {
  components: {
    RecycleScroller,
    UserColor,
  },
  data() {
    return {
      selectedIndex: -1,
    };
  },
  methods: {
    editUser(index, value) {
      this.$store.commit("users/setUserProp", {
        index,
        value
      });
    },
  },
  computed: {
    filteredItems() {
      return this.$store.getters["users/filteredItems"];
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  height: 30px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: lightgray;
  }
}

.virtual-scroller[data-v-caa2d078]:not(.page-mode) {
  overflow-y: auto;
}
</style>
