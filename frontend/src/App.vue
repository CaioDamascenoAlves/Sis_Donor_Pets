<template>
	<div id="app">
		<div class="sidebar">
			<ul>
				<router-link to="/home" class="btn text-dark"> <font-awesome-icon :icon="['fas', 'house']" /> Home</router-link>
				<router-link to="/profile" class="btn text-dark"><font-awesome-icon :icon="['fas', 'user']" /> Perfil</router-link>
				<router-link to="/createPet" class="btn text-dark"><font-awesome-icon :icon="['fas', 'paw']" /> Doe um
					Pet</router-link>
				<li><button class="btn btn-danger text-dark" @click="logOutUser()"> <font-awesome-icon
							:icon="['fas', 'right-from-bracket']" /> Logout</button></li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<style>
.sidebar {
	position: fixed;
	top: 0;
	left: -10px;
	width: 200px;
	height: 100%;
	background: linear-gradient(to bottom, #e0e0e0 0%, #c2c2c2 25%, #a5a5a5 50%, #979797 100%);
	border-radius: 5%;
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