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
    <v-btn id="add-keep" primary fab fixed bottom right v-model="fab" @click="dialog = true">
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" persistent width="50%">
      <v-card>
        <v-card-title>
          <span class="headline">Create New Vault</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Title" required v-model="title"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Description" v-model="description"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Image" v-model="imgUrl"></v-text-field>
              </v-flex>
              <v-switch label="Private" v-model="private"></v-switch>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click="closeDialog">Cancel</v-btn>
          <v-btn class="blue--text darken-1" flat @click="createKeep">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import Keep from './Keep'
  export default {
    name: 'home',
    data() {
      return {
        fab: false,
        dialog: false,
        private: '',
        title: '',
        description: '',
        imgUrl: ''
      }
    },
    methods: {
      closeDialog() {
        this.dialog = false,
          this.title = '',
          this.description = '',
          this.imgUrl = '',
          this.private = false
      },
      createKeep() {
        var newKeep = {
          title: this.title,
          description: this.description,
          imgUrl: this.imgUrl,
          private: this.private
        }
        this.$store.dispatch('addKeep', newKeep)
        this.closeDialog()
      }
    },
    computed: {
      keeps() {
        return this.$store.state.homeKeeps
      }
    },
    mounted() {
      this.$store.dispatch('getKeeps')
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

  #add-keep {
    z-index: 9999;
  }
</style>