<template>
  <v-card width="100%" max-width="600">
    <v-simple-table fixed-header height="600px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="table-heading text-left" @click="sortTableByKey('name')">
              Имя
            </th>
            <th
              class="table-heading text-left"
              @click="sortTableByKey('phone')"
            >
              Телефон
            </th>
          </tr>
        </thead>
        <tbody :key="parentKey">
          <UserRowTree
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

import UserRowTree from "@/components/UserRowTree.vue";

export default {
  name: "UsersTable",
  data: () => ({
    parentKey: "parent",
  }),
  components: {
    UserRowTree,
  },
  computed: mapGetters(["allUsers"]),
  mounted() {
    this.loadUsers();
  },
  methods: {
    ...mapActions(["loadUsers", "sortTableByKey"]),
  },
  watch: {
    allUsers() {
      this.parentKey = Math.random();
    },
  },
};
</script>

<style scoped>
.table-heading {
  cursor: pointer;
}
</style>
