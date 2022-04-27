<template>
  <div :class="$style.app">
    <div :class="$style.appUser">
      <AppCard>
        <AppUser v-if="user" :user="user" />
      </AppCard>
    </div>
    <div :class="$style.appContent">
      <AppCard>
        <AppContent v-if="beer" :beer="beer"></AppContent>
      </AppCard>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default;

import AppCard from './components/ui/AppCard.vue'
import AppUser from './components/AppUser.vue'
import AppContent from './components/AppContent.vue'

export default {
  name: 'App',
  components: {
    AppCard,
    AppUser,
    AppContent,
  },
  data() {
    return {
      user: null,
      beer: null
    }
  },
  methods: {
    async fetchUserData () {
      try {
        const userFetch = await axios.get('https://random-data-api.com/api/users/random_user')
        this.user = userFetch?.data
      } catch (error) {
        console.error(error)
      } 
    },
    async fetchBeerData () {
      try {
        const beerFetch = await axios.get('https://random-data-api.com/api/beer/random_beer')
        this.beer = beerFetch?.data
      } catch (error) {
        console.error(error)
      }
    }
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
