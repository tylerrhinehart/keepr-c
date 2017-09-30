<template>
	<v-layout>
		<v-flex xs12 sm6 offset-sm3>
			<v-card>
				<v-card-media :src="keep.imgUrl" height="200px">
				</v-card-media>
				<v-card-title primary-title>
					<div>
						<h3 class="headline mb-0">{{keep.title}}</h3>
						<div>{{keep.description}}}</div>
					</div>
				</v-card-title>
				<v-card-actions>
					<v-btn flat class="orange--text">Share</v-btn>
					<v-btn flat class="orange--text">Explore</v-btn>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
	export default {
		name: 'Keep',
		props: [keep],
		data() {
			return {

			}
		}
	}
</script>