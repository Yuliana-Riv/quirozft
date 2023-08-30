<template >
  <div id="AddUsr">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(name, lastname, role, email, phone, pass, passc)
        "
      >
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input
              v-model="name"
              type="text"
              id="name"
              name="name"
              pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{2,254}"
              required
              class="in1"
            />
          </div>
          <div class="boxform">
            <label for="lastname" class="lastname">Apellido/s</label>
            <input
              v-model="lastname"
              type="text"
              id="lastname"
              name="lastname"
              pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{2,254}"
              required
              class="in1"
            />
          </div>
          <div class="boxform">
            <label for="role" class="role">Rol </label>
            <div class="select-container">
              <input
                type="checkbox"
                name="select-ch"
                id="select-ch"
                v-model="active"
                :true-value="true"
                :false-value="false"
              />
              <label for="select-ch">
                <div id="select-role" :class="{ rounded: active }">
                  {{ role }}
                </div>
              </label>
              <div class="options-cont" @click="closeSelect()">
                <div class="option-btn" @click="role = 'admin'">admin</div>
                <div class="option-btn" @click="role = 'colaborador'">colaborador</div>

              </div>
            </div>
          </div>
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label for="phone" class="phone">Teléfono</label>
            <input
              v-model="phone"
              type="text"
              id="phone"
              name="phone"
              minlength="10"
              maxlength="10"
              size="10"
              pattern="\d*"
              required
              class="in1"
            />
          </div>
          <div class="boxform">
            <label for="email" class="email">E-mail</label>
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              required
              class="in1"
            />
          </div>
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label for="pass" class="pass">Contraseña</label>
            <div class="dflx pass-cont">
              <input
                v-model="pass"
                type="password"
                id="pass"
                name="pass"
                minlength="8"
                required
                class="in5"
              />
                <div class="bx_pss_img">
                  <img
                    v-if="mostrar"
                    @click="mostrarPass()"
                    src="../../assets/login/NoMostrar.svg"
                    alt=""
                  />
                  <img
                    v-else
                    @click="mostrarPass()"
                    src="../../assets/login/Mostrar.svg"
                    alt=""
                  />
                </div>              
            </div>

          </div>
          <div class="boxform">
            <label for="passc" class="passc">Confirmar Contraseña</label>
            <input
              v-model="passc"
              type="password"
              id="passc"
              name="passc"
              minlength="8"
              required
              class="in5"
            />
          </div>
        </div>

        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Guardar</button>
        </div>

        <div v-if="status != ''" class="status_messages">
          <div v-if="status == 'success'" class="msg msg_success">
            <p>{{ message }}</p>
          </div>
          <div v-if="status == 'error'" class="msg msg_error">
            <p>{{ message }}</p>
          </div>
        </div>
      </form>

      <div v-if="viewModal" class="modal_view">
        <div id="modal_add">
          <div class="body dflx">
            <h3>Usuario agregado</h3>
            <img src="../../assets/default/add.png" alt="icono alerta" />
          </div>

          <div class="modal_add_btns dflx">
            <p @click="Add()" class="otro">Aceptar</p>
            <p @click="toEdit()" class="editar">Editar</p>
            <p @click="back()" class="inicio">Inicio</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddUsr",
  data() {
    return {
      status: "",
      message: "",
      name: "",
      lastname: "",
      role: "admin",
      active: false,
      phone: "",
      email: "",
      pass: "",
      passc: "",

      //MODAL

      viewModal: false,
    };
  },
  methods: {
    ...mapActions("usuarios", ["setAddedUsr"]),
    ...mapActions("usuarios", ["setHistoryOptionUsr"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    submit: async function (name, lastname, role, email, phone, pass, passc) {
      this.status = "";
      this.message = "";
      if (pass === passc) {
        let usuario = {
          name: name,
          lastname: lastname,
          phone: phone,
          email: email,
          password: pass,
          role: role,
        };

        let result = await this.$store.dispatch("usuarios/addItemUsr", {
          option: "user",
          item: usuario,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
          this.setAddedUsr(result.added);
          this.showModal();
        }
      } else {
        this.status = "error";
        this.message = "Las contraseñas no coinciden.";
      }
    },
    closeSelect() {
      this.active = false;
      document.getElementById("select-ch").checked = false;
    },

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedUsr("");
      this.setHistoryOptionUsr("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.name = "";
      this.lastname = "";
      this.role = "admin";

      this.phone = "";
      this.email = "";
      this.pass = "";
      this.passc = "";
      this.viewModal = false;
      this.setAddedUsr("");
    },
    toEdit: function () {
      this.setHistoryOptionUsr("Edit");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
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
.pass-cont {
  position: relative;
  align-items: center;
}
.bx_pss_img {
    position: absolute;
    right: 0;
}
#AddUsr label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddUsr input,
#AddUsr select {
  height: 2.5vw;
  width: 14.716666666666668vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-3);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
}

#select-role {
  height: 2.5vw;
  width: 13.716667vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-3);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
  display: flex;
  align-items: center;
  background-image: url("../../assets/default/blueflecha.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 12.6vw;
}
#select-role.rounded {
  border-radius: 0vw 1.5vw 0vw 0vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0.052083vw solid var(--color-2);
  border-bottom: 0;
}
#select-ch:checked ~ .options-cont {
  display: flex;
  position: absolute;
  padding: 0.573vw 1.25vw;
  flex-direction: column;
  background-color: white;
  width: 12.3vw;
  border-left: 0.052083vw solid var(--color-2);
  border-right: 0.052083vw solid var(--color-2);
  border-top: 0;
  border-bottom: 0.052083vw solid var(--color-2);
}
</style>