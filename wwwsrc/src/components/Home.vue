<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark class="primary">
          <v-card-text class="px-0">Top Keeps</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="keep in keeps">
        <Keep :keep="keep"></Keep>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Keep from './Keep'
  export default {
    name: 'hello',
    data() {
      return {

      }
    },
    computed: {
      keeps() {
        return this.$store.state.homeKeeps
      }
    },
    components: {
      Keep
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>