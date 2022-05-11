<template>
  <th class="table-heading text-left" @click="sortTableByKey(sortKey)">
    {{ title }}
    <v-icon v-if="sortedBy === sortKey || sortedBy === `reversed ${sortKey}`">{{
      sortedBy === sortKey ? "mdi-arrow-down" : "mdi-arrow-up"
    }}</v-icon>
  </th>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UsersTableHeadColumn",
  props: {
    sortKey: String,
    title: String,
    sortedBy: String,
  },
  methods: {
    ...mapActions(["sortTableByKey"]),
  },
};
</script>

<style scoped>
.table-heading {
  cursor: pointer;
}
</style>
