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
    users: [
      {
        id: 0,
        name: "Michael Buble",
        phone: "+ 7 843 899 23 23",
        childs: [],
      },
      {
        id: 1,
        name: "Katy Perry",
        phone: "+ 7 821 299 23 23",
        childs: [
          {
            id: 2,
            name: "Taylor Swift",
            phone: "+ 7 843 000 12 33",
            childs: [],
          },
        ],
      },
      {
        id: 3,
        name: "The Weeknd",
        phone: "+ 7 666 999 66 99",
        childs: [],
      },
    ],
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },
  mutations: {
    addNewUser(state, newUser) {
      state.users.push(newUser);
      state.users.pop(newUser);
      let isUserHasParent = false;
      function addUser(users) {
        users.forEach((el) => {
          if (el.name === newUser.chief) {
            isUserHasParent = true;
            el.childs.push(newUser);
          } else {
            addUser(el.childs);
          }
        });
      }
      addUser(state.users);
      if (!isUserHasParent) {
        state.users.push(newUser);
      }
    },
    updateUsers(state, users) {
      state.users = users;
    },
    sortTable(state, key) {
      switch (key) {
        case "name":
          state.users = state.users.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          break;
        case "phone":
          state.users = state.users.sort((a, b) => {
            return (
              Number(a.phone.slice(1).replace(/\s+/g, "")) -
              Number(b.phone.slice(1).replace(/\s+/g, ""))
            );
          });
          break;
      }
    },
  },
});
