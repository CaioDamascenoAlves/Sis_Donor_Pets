import VueJwtDecode from "vue-jwt-decode";
import PessoaService from "@/services/PessoaService";
import PetService from "@/services/PetService";
import DoacaoService from "@/services/DoacaoService";

export default {
  name: "ProfileComponent.vue",
  data() {
    return {
      user: {},
      pessoa: {},
      pet: {},
      doacao: {},
    };
  },
  methods: {
    getUser() {
      const token = localStorage.getItem("jwt");
      const tokenDecoded = VueJwtDecode.decode(token);
      this.user = tokenDecoded;
    },
    async getPessoa() {
      try {
        const response = await PessoaService.GetPessoa();
        this.pessoa = response.pessoa;
      } catch (error) {
        console.error(error);
        swal({
          title: "Oops!",
          text: "Não foi possível carregar os dados da pessoa.",
          icon: "error",
        });
      }
    },
    async getPet() {
      try {
        const response = await PetService.GetPet();
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
    async getDoacao() {
      try {
        const response = await DoacaoService.GetDoacao();
        this.doacao = response.data;
		console.log(response)
		console.log(this.doacao)
      } catch (error) {
        console.error(error);
        swal({
          title: "Oops!",
          text: "Não foi possível carregar os dados do Pet.",
          icon: "error",
        });
      }
    },

    navigateToUpdatePessoa() {
      this.$router.push("/updatePessoa");
    },
    navigateToUpdatePet() {
      this.$router.push("/updatePet");
    },
    navigateToUpdateDoacao() {
      this.$router.push("/updateDoacao");
    },
  },

  created() {
    this.getUser();
	this.getPessoa();
    this.getPet();
    this.getDoacao();
  },
};
