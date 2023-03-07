import PetService from "@/services/PetService";

export default {
  name: "HomeComponent",
  data() {
    return {
      pets: [],
    };
  },
  methods: {
    async getAllPets() {
      try {
        const response = await PetService.GetAllPetsCached();
		this.pets = response.pets;
		console.log(this.pet)

      } catch (error) {
        console.error(error);
        swal({
          title: "Oops!",
          text: "Não foi possível carregar os dados da Doação.",
          icon: "error",
        });
      }
    },

    navigateToAdocao() {
      this.$router.push("/register");
    },
  },

  mounted() {
    this.getAllPets();
  },
};
