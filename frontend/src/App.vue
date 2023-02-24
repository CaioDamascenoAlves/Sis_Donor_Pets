<template>
	<div id="app">
		<div class="conteiner-flex">
			<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
				<a class="navbar-brand order-md-last">Botão</a>
				<ul class="navbar-nav me-auto">
					<li class="nav-item">
						<router-link class="nav-link text-white	" to="/">Home</router-link>
					</li>
				</ul>
			</nav>
			<div class="container ">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>