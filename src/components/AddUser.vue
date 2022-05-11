<template>
  <div class="add-user-form">
    <div class="add-user-form__container">
      <label class="add-user-form__label">Имя</label>
      <v-text-field
        class="add-user-form__input"
        v-model="user.name"
        light
        dense
        hide-details="true"
        outlined
        label="Введите имя"
      ></v-text-field>
    </div>
    <div class="add-user-form__container">
      <label class="add-user-form__label">Телефон</label>
      <v-text-field
        v-mask="'+# ### ### ## ##'"
        v-model="user.phone"
        class="add-user-form__input"
        light
        dense
        hide-details="true"
        outlined
        label="Введите номер телефона"
      ></v-text-field>
    </div>
    <div class="add-user-form__container">
      <label class="add-user-form__label">Начальник</label>
      <v-select
        class="add-user-form__input"
        v-model="user.chief"
        :items="chiefs"
        hide-details="true"
        light
        dense
        outlined
        label="Выбрать начальника"
      ></v-select>
    </div>
    <v-btn
      class="mt-6"
      color="primary"
      light
      width="100%"
      @click="addUser"
      :disabled="!user.name || !user.phone"
      >Сохранить</v-btn
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddUser",
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
    addUser() {
      this.addNewUser(this.user);
      this.$emit("handleCloseModal");
      localStorage.setItem("users", JSON.stringify(this.allUsers));
    },
  },
};
</script>

<style lang="scss" scoped>
.add-user-form {
  &__container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 20px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
    @media screen and (max-width: 600px) {
      -webkit-box-align: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }
  &__label {
    width: 100px;
    padding-right: 20px;
  }
}
</style>
