<template>
	<div>
		<v-card>
			<div @click="singleView(keep)">
				<v-card-media :src="keep.imgUrl" height="200px">
				</v-card-media>
				<v-card-title primary-title>
					<div>
						<h3 class="headline mb-0">{{keep.title}}</h3>
						<div>{{keep.description}}</div>
					</div>
				</v-card-title>
			</div>
			<v-card-actions>
				<v-btn flat class="orange--text">Share</v-btn>
				<v-btn flat class="orange--text" @click.stop="selectVault">Keep</v-btn>
			</v-card-actions>
		</v-card>
		<v-bottom-sheet v-model="sheet">
			<v-list>
				<v-subheader>Click Vault to Add Keep to</v-subheader>
				<v-list-tile v-for="vault in userVaults" :key="vault.title" @click="addToVault(vault.id)">
					<!-- <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <img :src="`/static/doc-images/bottom-sheets/${tile.img}`" :alt="tile.title">
            </v-avatar>
          </v-list-tile-avatar> -->
					<v-list-tile-title>{{ vault.title }}</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-bottom-sheet>
	</div>
</template>

<script>
	import router from "../router"
	export default {
		name: 'Keep',
		props: ["keep"],
		data() {
			return {
				sheet: false
			}
		},
		methods: {
			singleView(keep) {
				router.push('/keeps/' + keep.id)
			},
			selectVault() {
				this.sheet = true
			},
			addToVault(vaultId) {
				var keepToAdd = {
					keepId: this.keep.id,
					vaultId: vaultId
				}
				this.sheet = false
				this.$store.dispatch('addToVault', keepToAdd)
			}
		},
		computed: {
			userVaults() {
				return this.$store.state.userVaults
			}
		}
	}

</script>