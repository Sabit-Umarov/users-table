<template>
  <thead>
    <tr>
      <UsersTableHeadColumn
        v-for="(heading, index) in tableHeadings"
        :key="index"
        :title="heading.title"
        :sortKey="heading.sortKey"
        :sortedBy="getSortKey"
      />
    </tr>
  </thead>
</template>

<script>
import { mapGetters } from "vuex";

import UsersTableHeadColumn from "@/components/UsersTable/UsersTableHeadColumn.vue";

export default {
  name: "UsersTableHead",
  data: () => ({
    tableHeadings: [
      {
        title: "Имя",
        sortKey: "name",
      },
      {
        title: "Телефон",
        sortKey: "phone",
      },
    ],
  }),
  components: {
    UsersTableHeadColumn,
  },
  computed: mapGetters(["getSortKey"]),
};
</script>
