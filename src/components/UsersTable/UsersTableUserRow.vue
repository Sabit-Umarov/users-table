<template>
  <Fragment v-if="childs">
    <tr>
      <td :style="indent" class="d-flex align-center">
        <v-icon v-if="depth > 0" light>mdi-subdirectory-arrow-right</v-icon>
        {{ user.name }}
      </td>
      <td>{{ user.phone }}</td>
    </tr>
    <UsersTableUserRow
      v-for="user in childs"
      :key="user.name"
      :childs="user.childs"
      :user="user"
      :depth="depth + 1"
    >
    </UsersTableUserRow>
  </Fragment>
</template>
<script>
import { Fragment } from "vue-fragment";

export default {
  name: "UsersTableUserRow",
  components: {
    Fragment,
  },
  props: ["user", "childs", "depth"],
  computed: {
    indent() {
      return { "padding-left": `${this.depth * 20 + 16}px` };
    },
  },
};
</script>
