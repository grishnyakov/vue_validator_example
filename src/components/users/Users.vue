<template>
  <span>Это первый блок
    <input v-model="user.test.age" type="text">
    {{doubleValue}}
    
     </span>
 
  <div class="users">
    <user-filter />
    <users-list />
  </div>
</template>

<script>
import UsersList from "./UsersList";
 import UserFilter from "./UserFilter";

export default {
  components: {
    UsersList,
    UserFilter,
  },
  data(){
    return {
      user: { }
    }
  },
  computed: {
    doubleValue(){
      return this.user?.test?.age * 2
    }
  },
  created(){
    this.user.test = {age: 77}
  }
};
</script>

<style lang="scss" scoped>
$toolbarHeight: 50px;

.users {
  height: 500px;
  width: 100%;
  max-width: 400px;
  border: 1px solid grey;

  & {
    .scroller {
      height: calc(100% - (#{$toolbarHeight})); // border'ы не учитываю
    }

    .filter {
      height: $toolbarHeight;
    }
  }
}
</style>

