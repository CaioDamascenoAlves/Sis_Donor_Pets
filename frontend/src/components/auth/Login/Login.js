import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import LoginService from '@/services/LoginService';
import PessoaService from '@/services/PessoaService';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        email: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    loginForm: {
      email: { required },
      password: { required },
    },
  },
  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }

        await LoginService.loginUser(this.loginForm);

        const hasPessoa = await PessoaService.checkHasPessoa();
        if (hasPessoa) {
          this.$router.push('/profile');
        } else {
          this.$router.push('/createPessoa');
        }
      } catch (error) {
        swal({
          title: 'Senha Incorreta!',
          text: 'Digite a senha cadastrada!',
          icon: 'error',
        });
      }
    },
  },
};
