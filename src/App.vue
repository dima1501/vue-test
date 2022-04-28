<template>
  <div :class="$style.app">
    <div :class="$style.appUser">
      <AppCard>
        <AppUser/>
      </AppCard>
    </div>
    <div :class="$style.appContent">
      <AppCard>
        <AppContent></AppContent>
      </AppCard>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
  mapMutations,
} from 'vuex';
import { store } from './store';

import AppCard from './components/ui/AppCard.vue'
import AppUser from './components/AppUser.vue'
import AppContent from './components/AppContent.vue'

export default {
  store,
  name: 'App',
  components: {
    AppCard,
    AppUser,
    AppContent,
  },
  computed: {
    ...mapState({
      user: (state) => state.userModule.user,
      beer: (state) => state.beerModule.beer,
    }),
  },
  methods: {
    ...mapMutations({
      setUserData: 'setUserData',
    }),
    ...mapActions({
      fetchUserData: 'fetchUserData',
      fetchBeerData: 'fetchBeerData',
    }),
  },
  async mounted() {
    this.fetchUserData()
    this.fetchBeerData()
  }
}
</script>

<style lang="scss" module>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 15px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 60px;
  }
  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: normal;
  }
  &User {
    width: 100%;
    max-width: 360px;
    flex-shrink: 0;
    margin-bottom: 30px;
    @media screen and (min-width: 900px) {
      display: flex;
      margin-bottom: 0;
      margin-right: 40px;
    }
  }
  &Content {
    width: 100%;
  }
}
</style>
