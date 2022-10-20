<template>
  <th class="table-heading text-left" @click="sortTableByKey(sortKey)">
    {{ title }}
    <v-icon v-if="isShowArrowIcon">{{
      arrowIcon
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
  computed: {
    isKeysEqual() {
      return this.sortedBy === this.sortKey;
    },
    isShowArrowIcon() {
      return this.isKeysEqual || this.sortedBy === `reversed ${this.sortKey}`;
    },
    arrowIcon() {
      return this.isKeysEqual ? "mdi-arrow-down" : "mdi-arrow-up";
    },
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
