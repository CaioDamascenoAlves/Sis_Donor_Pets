<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3 offset-1">
				<div class="card">
					<img src="https://www.tiendanimal.pt/blog/wp-content/uploads/2022/10/como-adotar-um-gato-1200x800.jpg" class="card-img-top" alt="Imagem 1">
					<div class="card-body">
						<h5 class="card-title">Luna, Gata</h5>
						<a href="link-da-imagem-1" class="btn btn-primary">Adotar</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 offset-1">
				<div class="card">
					<img src="https://veterinario.pt/wp-content/uploads/2015/12/cachorrinho.jpg" class="card-img-top" alt="Imagem 2">
					<div class="card-body">
						<p class="card-text"><strong>Nome:</strong> {{ pet.nome }}</p>
						<p class="card-text"><strong>Espécie:</strong> {{ pet.tipo }}</p>
						<p class="card-text"><strong>Raça:</strong> {{ pet.raca }}</p>
						<p class="card-text"><strong>Idade:</strong> {{ pet.idade }}</p>
						<a href="link-da-imagem-2" class="btn btn-primary">Adotar</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 offset-1">
				<div class="card">
					<img src="https://petindica.com.br/wp-content/uploads/2020/08/6-curiosidades-sobre-calopsita-que-voce-precisa-conhecer.jpg" class="card-img-top" alt="Imagem 3">
					<div class="card-body">
						<h5 class="card-title">Lili, Calopsita</h5>
						<a href="link-da-imagem-3" class="btn btn-primary">Adotar</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Home.js" ></script>