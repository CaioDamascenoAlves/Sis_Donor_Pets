import PetService from "@/services/PetService";

export default {
  name: "HomeComponent.vue",
  data() {
    return {
      pet: {},
    };
  },
  methods: {
    async getAllPets() {
      try {
        const response = await PetService.GetAllPet();
        this.pet = response.pet;
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
      this.$router.push("/updatePessoa");
    },
  },

  created() {
    this.getAllPet();
  },
};
