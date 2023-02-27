<template>
	<div id="app">
		<div class="sidebar">
			<ul>
				<router-link to="/home" class="btn">Home</router-link>
				<router-link to="/profile" class="btn">Perfil</router-link>
				<router-link to="/createPet" class="btn"> Doe um Pet</router-link>
				<li><button class="btn btn-danger" @click="logOutUser()">Logout</button></li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<style>
.sidebar {
	position: fixed;
	top: 0;
	left: 0;
	width: 200px;
	height: 100%;
	background-color: #333;
	color: #fff;
}

.sidebar ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.sidebar li {
	margin: 0;
	padding: 0;
}

.sidebar a,
.sidebar button {
	display: block;
	padding: 10px;
	color: #fff;
	text-decoration: none;
	border: none;
	background-color: transparent;
	cursor: pointer;
	width: 100%;
}

.sidebar a:hover {
	background-color: #555;
}

.sidebar button:hover {
	background-color: 0;
}

</style>

<script>
export default {
	methods: {
		logOutUser() {
			localStorage.removeItem("jwt");
			this.$router.push("/");
		},
	},
};

</script>