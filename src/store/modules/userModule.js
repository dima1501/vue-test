import axios from 'axios';

export const userModule = {
  state: () => ({
    user: null,
  }),
  mutations: {
    setUserData(state, data) {
      state.user = data;
    },
  },
  actions: {
    async fetchUserData({ commit }) {
      try {
        const userFetch = await axios.get('https://random-data-api.com/api/users/random_user');
        commit('setUserData', userFetch?.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
};
