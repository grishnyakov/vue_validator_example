<template>
  <div class="filter">
    <div>
      <input v-model="searchName" type="text" class="search" placeholder="Поиск" />
    </div>
    <div class="text-right float-right">
     
        <UserColor
          @selectColor="($event) => (searchColor = $event)"
          :current="searchColor"
        />
      
      <div class="summary" v-show="searchName || searchColor">
        Найдено {{ filteredCount }} из {{ totalCount }}
      </div>
    </div>
  </div>
</template>

<script>
import UserColor from "./UserColor";
export default {
  components: {
    UserColor,
  },
  computed: {
    searchName: {
      set(text) {
        this.$store.commit("users/searchName", text);
      },
      get() {
        return this.$store.state.users.searchName;
      },
    },
    searchColor: {
      set(color) {
        this.$store.commit("users/searchColor", color);
      },
      get() {
        return this.$store.state.users.searchColor;
      },
    },

    totalCount() {
      return this.$store.state.users.list.length;
    },
    filteredCount() {
      return this.$store.getters["users/filteredItems"].length;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  margin: 5px;
  outline: none;
  height: 20px;
}
.filter {
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    display: inline-block;
    margin: 2px
  }
  div:last-child {
    margin-right: 10px;
  }
  .summary {
    width: 100%;
  }
}
</style>