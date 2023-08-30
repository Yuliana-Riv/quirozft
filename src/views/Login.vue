<template>
  <div id="login_view">
    <div class="login_cnt">
      <div class="login_bx">
        <div class="logo_bx">
          <img src="../assets/login/logo.svg" alt="Logo " />
        </div>

        <div class="login_frm">
          <h1>Login</h1>
          <form @submit.prevent="login(email, password)">
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              :placeholder="'Correo electrónico'"
              required
            />
            <div class="bx_pss">
              <input
                v-model="password"
                type="password"
                name="pass"
                id="pass"
                minlength="8"
                :placeholder="'Contraseña'"
                required
              />
              <div class="bx_pss_img">
                <img
                  v-if="mostrar"
                  @click="mostrarPass()"
                  src="../assets/login/NoMostrar.svg"
                  alt=""
                />
                <img
                  v-else
                  @click="mostrarPass()"
                  src="../assets/login/Mostrar.svg"
                  alt=""
                />
              </div>
            </div>

            <div class="btn_login">
              <button type="submit">Iniciar sesión</button>
            </div>

            <div class="message_error" v-if="status == 'error'">
              <p>
                {{ this.message }}
              </p>
              <img src="../assets/default/alert.png" />
            </div>
          </form>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
import userService from "../services/user.service";

export default {
  name: "Login",
  data() {
    return {
      status: "",
      message: "",
      email: "",
      password: "",
      mostrar: false,
    };
  },
  computed: {
    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
  },

  methods: {
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    delStatus: function () {
      setTimeout(() => this.delMsgs(), 1500);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
    },
    async login(email, password) {
      this.status = "";
      this.message = "";

      let result = await this.$store.dispatch("admin/login", {
        email,
        password,
      });

      if (result.status == "success") {
        let response = await this.$store.dispatch("admin/getData");

        if (response.status == "success") {
          if (
            response.result.role == "legrafica" ||
            response.result.role == "admin"
          ) {
            let isAdmin = userService.isAdmin(response.result);

            if (isAdmin.admin == true) {
              this.$router.push("/auth").catch((err) => {});
            } else {
              this.wait();
            }
          } else {
            this.$router.push("/").catch((err) => {});
          }
        } else {
          this.status = "error";
          this.message = response.message;
          this.delStatus();
          this.wait();
        }
      } else {
        this.status = "error";
        this.message = result.message;
        this.delStatus();
      }
    },

    mostrarPass: function () {
      var tipo = document.getElementById("pass");
      if (tipo.type == "password") {
        tipo.type = "text";
        this.mostrar = false;
      } else {
        tipo.type = "password";
        this.mostrar = true;
      }
    },
  },
};
</script>
<style scoped>
#login_view {
  background: linear-gradient(222.39deg, #2B4A88 12.3%, #59C1AF 76.14%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_cnt {
  background-color: white;
  width: 28.153vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.047vw;
  padding: 3.715vw 0vw;
}
.login_bx {
  width: 20.565vw;
  height: auto;
}

.logo_bx {
  display: flex;
  justify-content: center;
}
.logo_bx img {
  width: 17.71vw;
  height: 8.111vw;
  margin-bottom: 1.884vw;
}

.login_frm h1 {
  color: #2B4A88;
  font-family: var(--montserrat);
  text-align: center;
  margin: 0vw;
  margin-bottom: 1.832vw;
  font-size: 1.832vw;
}

.login_frm input#email {
  width: 89.7%;
  border-radius: 1.57vw;
  height: 2.721vw;
  margin-bottom: 1.047vw;
  border: 1px solid rgba(87, 86, 86, 1);
  color: rgba(87, 86, 86, 1);
  font-size: 0.68vw;
  font-family: var(--montserrat);
  font-weight: 600;
  padding-left: 1.881vw;
}
.login_frm input::placeholder {
  color: rgba(87, 86, 86, 1);
}
.bx_pss {
  display: flex;
  align-items: center;
  height: 2.721vw;
  border-radius: 1.57vw;
  border: 1px solid rgba(87, 86, 86, 1);
  width: 99.5%;
  margin-bottom: 1.884vw;
}
.bx_pss input#pass {
  color: rgba(87, 86, 86, 1);
  font-size: 0.68vw;
  font-family: var(--montserrat);
  font-weight: 600;
  padding-left: 1.881vw;
  width: 75%;
  border: none;
  margin-left: 1%;
}
.bx_pss_img img {
  width: 1.622vw;
  cursor: pointer;
}
.btn_login {
  display: flex;
  justify-content: center;
}
.btn_login button {
  background-color: #59C1AF;
  font-weight: 800;
  font-size: 0.733vw;
  height: 3.14vw;
  width: 16.065vw;
  border: none;
  border-radius: 2vw;
  color: white;
  font-family: var(--montserrat);
  cursor: pointer;
}

.message_error {
  display: flex;
  background-color: #2B4A88;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  font-size: 0.6vw;
  color: white;
  border-radius: 5vw;
  margin-top: 0.5vw;
  padding: 0.1vw 0vw;
}
.message_error img {
  width: 1vw;
}

@media (max-width: 768px) {
  #login_view {
    align-items: start;
  }
  .login_cnt {
    width: 100vw;
    border-radius: 0vw;
    padding-top: 10.769vw;
    padding-bottom: 19.231vw;
  }
  .login_bx {
    width: 70.049vw;
  }

  .logo_bx img {
    width: 51.282vw;
    height: 30.256vw;
    margin-bottom: 3.333vw;
  }
  .login_frm h1 {
    font-size: 8.974vw;
    margin-bottom: 5.133vw;
  }
  .login_frm input#email {
    height: 12.869vw;
    font-size: 3.333vw;
    padding-left: 6.336vw;
    border-radius: 10vw;
    margin-bottom: 4.818vw;
  }

  .bx_pss {
    height: 12.869vw;
    border-radius: 10vw;
    margin-bottom: 4.818vw;
  }

  .bx_pss input#pass {
    font-size: 3.333vw;
    padding-left: 6.336vw;
  }

  .bx_pss_img img {
    width: 4.622vw;
  }

  .btn_login button {
    height: 12.821vw;
    width: 100vw;
    border-radius: 10vw;
    font-size: 3.59vw;
  }

  .message_error {
    height: 6.821vw;
    font-size: 2.333vw;
    margin-top: 2vw;
  }

  .message_error img {
    width: 2.622vw;
  }
}
</style>
