<template>
    <v-card>
        <v-card-media :src="activeVault.imgUrl" height="400px">
        </v-card-media>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{activeVault.title}}</h3>
                <div>{{activeVault.description}}</div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn flat class="orange--text">Share</v-btn>
            <v-btn flat class="orange--text add-keep">Keep</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'SingleVaultView',
        data() {
            return {

            }
        },
        computed: {
            activeVault() {
                return this.$store.state.activeVault
            }
        },
        mounted() {
            this.$store.dispatch('findVault', this.$route.params.vaultId)
        },
        // destroyed() {
        //     this.$store.dispatch('clearActiveKeep')
        // }
    }
</script>