import swal from "sweetalert";
import Api from "./Api";

export default {
  /**
   * Método responsável por criar uma nova pet
   * (POST): localhost:3000/api/pet
   */
  async CreatePet(pet) {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().post("/pet", pet, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = response.data;

      swal({
        title: "Sucesso!",
        text: message,
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Não foi possível gragar os dados do Pet!",
        icon: "error",
      });
    }
  },

  async GetPet() {
    try {
      const token = localStorage.getItem("jwt");
      const response = await Api().get("/pet", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      swal({
        title: "Oops!",
        text: "Não foi possivel buscar os dados do Pet!",
        icon: "error",
      });
    }
  },
};