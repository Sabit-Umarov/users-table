<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1 class="app-title">Roistat test</h1>
    </v-app-bar>
    <v-main>
      <v-container class="content-wrapper">
        <UsersTable />
        <v-btn @click="toggleModal(true)" color="primary" class="mt-4"
          >Добавить</v-btn
        >
        <AddUserModal
          :title="'Добавление пользователя'"
          :isShowModal="isShowModal"
          @handleCloseModal="toggleModal(false)"
        >
          <AddUser @handleCloseModal="toggleModal(false)" />
        </AddUserModal>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import UsersTable from "@/components/UsersTable.vue";
import AddUserModal from "@/components/AddUserModal.vue";
import AddUser from "@/components/AddUser.vue";

export default {
  name: "App",
  components: {
    UsersTable,
    AddUserModal,
    AddUser,
  },
  data: () => ({
    isShowModal: false,
  }),
  methods: {
    toggleModal(val) {
      this.isShowModal = val;
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  border-radius: 4px;
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #512da8;
}

::-webkit-scrollbar-thumb:hover {
  background: #2e0f77;
}

.content-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%;
}
</style>
