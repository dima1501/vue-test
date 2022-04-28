import axios from 'axios';

export const beerModule = {
  state: () => ({
    beer: null,
  }),
  mutations: {
    setBeerData(state, data) {
      state.beer = data;
    },
  },
  actions: {
    async fetchBeerData({ commit }) {
      try {
        const beerFetch = await axios.get('https://random-data-api.com/api/beer/random_beer');
        commit('setBeerData', beerFetch?.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  getters: {
    getBeer(state) {
      return state.beer;
    },
  },
};
