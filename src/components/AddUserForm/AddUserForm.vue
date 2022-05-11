<template>
  <form name="add-new-user">
    <AddUserFormInputContainer :label="'Имя'">
      <v-text-field
        v-model="user.name"
        light
        dense
        hide-details="true"
        outlined
        label="Введите имя"
      ></v-text-field>
    </AddUserFormInputContainer>
    <AddUserFormInputContainer :label="'Телефон'">
      <v-text-field
        v-mask="'+# ### ### ## ##'"
        v-model="user.phone"
        light
        dense
        hide-details="true"
        outlined
        label="Введите номер телефона"
      ></v-text-field>
    </AddUserFormInputContainer>
    <AddUserFormInputContainer :label="'Начальник'">
      <v-select
        v-model="user.chief"
        :items="chiefs"
        hide-details="true"
        light
        dense
        outlined
        label="Выбрать начальника"
      ></v-select>
    </AddUserFormInputContainer>
    <v-btn
      class="mt-6"
      color="primary"
      type="submit"
      light
      width="100%"
      @click="AddUserForm"
      :disabled="!user.name || !user.phone"
      >Сохранить</v-btn
    >
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AddUserFormInputContainer from "@/components/AddUserForm/AddUserFormInputContainer.vue";

export default {
  name: "AddUserForm",
  data: () => ({
    user: {
      id: null,
      name: "",
      phone: "",
      childs: [],
      chief: null,
    },
    chiefs: [],
  }),
  components: {
    AddUserFormInputContainer,
  },
  computed: mapGetters(["allUsers"]),
  mounted() {
    let users = this.allUsers;
    this.getChiefs(users);
    this.user.id = this.chiefs.length + 1;
  },
  methods: {
    ...mapActions(["addNewUser"]),
    getChiefs(users) {
      users.forEach((el) => {
        this.chiefs.push(el.name);
        if (el.childs) {
          this.getChiefs(el.childs);
        }
      });
    },
    AddUserForm() {
      this.addNewUser(this.user);
      this.$emit("handleCloseModal");
      localStorage.setItem("users", JSON.stringify(this.allUsers));
    },
  },
};
</script>
