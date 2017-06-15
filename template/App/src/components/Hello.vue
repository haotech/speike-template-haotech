<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <router-link to="/">home</router-link>
      <li v-for="p in projects">
        <router-link to="/home">{{ p.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      projects: 'allProjects'
    })
  },
  method: {
    ...mapActions([])
  },
  mounted () {
    this.$store.dispatch('getAllProjects')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
