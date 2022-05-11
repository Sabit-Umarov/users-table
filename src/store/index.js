import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    addNewUser({ commit }, newUser) {
      commit("addNewUser", newUser);
    },
    loadUsers({ commit }) {
      const users = JSON.parse(localStorage.getItem("users"));
      if (users) {
        commit("updateUsers", users);
      }
    },
    sortTableByKey({ commit }, key) {
      commit("sortTable", key);
    },
  },
  state: {
    keyTableSortedBy: "",
    users: [
      {
        id: 0,
        name: "Michael Buble",
        phone: "+7 978 785 48 99",
        childs: [],
      },
      {
        id: 1,
        name: "Katy Perry",
        phone: "+7 978 785 48 00",
        childs: [
          {
            id: 2,
            name: "Taylor Swift",
            phone: "+7 978 985 48 99",
            childs: [],
          },
        ],
      },
      {
        id: 3,
        name: "The Weeknd",
        phone: "+7 978 785 48 01",
        childs: [],
      },
    ],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    getSortKey(state) {
      return state.keyTableSortedBy;
    },
  },
  mutations: {
    addNewUser(state, newUser) {
      state.users.push(newUser);
      state.users.pop(newUser);
      let isUserHasParent = false;
      function AddUserForm(users) {
        users.forEach((el) => {
          if (el.name === newUser.chief) {
            isUserHasParent = true;
            el.childs.push(newUser);
          } else {
            AddUserForm(el.childs);
          }
        });
      }
      AddUserForm(state.users);
      if (!isUserHasParent) {
        state.users.push(newUser);
      }
    },
    updateUsers(state, users) {
      state.users = users;
    },
    sortTable(state, key) {
      key === state.keyTableSortedBy
        ? (state.keyTableSortedBy = `reversed ${key}`)
        : (state.keyTableSortedBy = key);
      function sortArray(array) {
        switch (key) {
          case "name":
            array = array.sort((a, b) => {
              if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return key === state.keyTableSortedBy ? 1 : -1;
              }
              if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return key === state.keyTableSortedBy ? -1 : 1;
              }
              return 0;
            });
            array.forEach((el) => {
              if (el.childs) {
                sortArray(el.childs);
              }
            });
            break;
          case "phone":
            array = array.sort((a, b) => {
              const first = Number(a.phone.replace(/\s+/g, ""));
              const second = Number(b.phone.replace(/\s+/g, ""));
              return key === state.keyTableSortedBy
                ? first - second
                : second - first;
            });
            array.forEach((el) => {
              if (el.childs) {
                sortArray(el.childs);
              }
            });
            break;
        }
        return array;
      }
      sortArray(state.users);
    },
  },
});
