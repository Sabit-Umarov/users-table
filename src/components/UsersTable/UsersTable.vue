<template>
  <v-card width="100%" max-width="600">
    <v-simple-table fixed-header height="600px">
      <template v-slot:default>
        <UsersTableHead />
        <tbody :key="parentKey">
          <UsersTableUserRow
            v-for="user in allUsers"
            :key="user.id"
            :user="user"
            :childs="user.childs"
            :depth="0"
          />
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import UsersTableUserRow from "@/components/UsersTable/UsersTableUserRow.vue";
import UsersTableHead from "@/components/UsersTable/UsersTableHead.vue";

export default {
  name: "UsersTable",
  data: () => ({
    parentKey: "parent",
  }),
  components: {
    UsersTableUserRow,
    UsersTableHead,
  },
  computed: mapGetters(["allUsers"]),
  mounted() {
    this.loadUsers();
  },
  methods: {
    ...mapActions(["loadUsers"]),
  },
  watch: {
    allUsers() {
      this.parentKey = Math.random();
    },
  },
};
</script>
