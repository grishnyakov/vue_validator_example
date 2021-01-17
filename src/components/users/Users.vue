<template>
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

