<template>
	<div class="container">
		<h1 class="text-center mb-5">Lista de Pets</h1>
		<div class="row">
			<div class="col-md-4 mb-4" v-for="pet in pets" :key="pet._id">
				<div class="card shadow-sm" :style="`border: 5px solid ${getCardColor(pet)};`">
					<img :src="pet.imagemUrl" class="card-img-top" alt="Imagem do Pet">
					<div class="card-body">
						<h5 class="card-title">{{ pet.nome }}</h5>
						<p class="card-text">Idade: {{ pet.idade }}</p>
						<p class="card-text">Tipo: {{ pet.tipo }}</p>
						<p class="card-text">Raça: {{ pet.raca }}</p>
						<button class="btn btn-primary " @click="logOutUser()">
							<font-awesome-icon :icon="['fas', 'heart']" />
							Adotar
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		getCardColor(pet) {
			const colorStops = [
				{ stop: 0, color: '#73fc54' },
				{ stop: 33, color: '#efd94e' },
				{ stop: 66, color: '#eea084' },
				{ stop: 99, color: '#56506f' },
			];
			const petAgePercent = (pet.idade / 20) * 100;
			for (let i = 1; i < colorStops.length; i++) {
				if (petAgePercent <= colorStops[i].stop) {
					const prevColor = colorStops[i - 1].color;
					const nextColor = colorStops[i].color;
					const prevStop = colorStops[i - 1].stop;
					const nextStop = colorStops[i].stop;
					const stopDiff = nextStop - prevStop;
					const stopPercent = (petAgePercent - prevStop) / stopDiff;
					const r = Math.floor(parseInt(prevColor.slice(1, 3), 16) * (1 - stopPercent) + parseInt(nextColor.slice(1, 3), 16) * stopPercent);
					const g = Math.floor(parseInt(prevColor.slice(3, 5), 16) * (1 - stopPercent) + parseInt(nextColor.slice(3, 5), 16) * stopPercent);
					const b = Math.floor(parseInt(prevColor.slice(5, 7), 16) * (1 - stopPercent) + parseInt(nextColor.slice(5, 7), 16) * stopPercent);
					return `rgb(${r}, ${g}, ${b})`;
				}
			}
			return colorStops[colorStops.length - 1].color;
		},
		logOutUser() {
			localStorage.removeItem("jwt");
			this.$router.push("/");
		},
	},
};
</script>

<style>
.card {
	border-radius: 15px;
}
</style>
