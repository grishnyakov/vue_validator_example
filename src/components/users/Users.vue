<template>
  <div class="users">
    <user-add />
    <user-filter />
    <users-list />
  </div>
</template>

<script>
import UsersList from "./UsersList";
import UserFilter from "./UserFilter";
import UserAdd from "./add/UserAdd";

export default {
  components: {
    UsersList,
    UserFilter,
    UserAdd,
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
  display: flex;
  flex-direction: column;

  & {
    .filter {
      height: $toolbarHeight;
    }
  }
}
</style>

