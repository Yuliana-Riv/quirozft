<template>
  <div id="HeaderSec">
    <div class="dflx">
      <div class="titles">
        <div v-if="historyOption == 'Perzonalizacion'">
          <h3>PERSONALIZACIÓN</h3>
          <p>Selección de Perfiles de Color</p>
        </div>

        <div v-else-if="historyOption == 'Usuarios'">
          <div v-if="historyOptionUsr == 'Default'">
            <h3>USUARIOS</h3>
            <p>Accesos permitidos al administrador</p>
          </div>
          <div v-if="historyOptionUsr == 'Add'">
            <h3>USUARIOS</h3>
            <p>Agregar nuevo usuario</p>
          </div>
          <div v-if="historyOptionUsr == 'Edit'">
            <h3>USUARIOS</h3>
            <p>Editar usuario</p>
          </div>
        </div>
        <div v-else-if="historyOption == 'Personalizacion'">
          <div v-if="historyOptionPrf == 'Default'">
            <h3>PERSONALIZACIÓN</h3>
            <p>Selección de Perfiles de Color</p>
          </div>
          <div v-if="historyOptionPrf == 'Add'">
            <h3>PERSONALIZACIÓN</h3>
            <p>Agregar color</p>
          </div>
          <div v-if="historyOptionPrf == 'Edit'">
            <h3>PERSONALIZACIÓN</h3>
            <p>Editar color</p>
          </div>
        </div>
        <div v-else-if="historyOption == 'Default'">
          <div v-if="historyOptionUsr == 'Default'">
            <h3>USUARIOS</h3>
            <p>Accesos permitidos al administrador</p>
          </div>
          <div v-if="historyOptionUsr == 'Add'">
            <h3>USUARIOS</h3>
            <p>Agregar nuevo usuario</p>
          </div>
          <div v-if="historyOptionUsr == 'Edit'">
            <h3>USUARIOS</h3>
            <p>Editar usuario</p>
          </div>
        </div>

       
        <div v-else-if="historyOption == 'suscripciones'">
          <div v-if="historyOptionSbs == 'Default'">
            <h3>SUSCRIPCIONES</h3>
            <p>Listado de locales</p>
          </div>
          <div v-if="historyOptionSbs == 'Add'">
            <h3>SUSCRIPCIONES</h3>
            <p>Agregar nuevo local</p>
          </div>
          <div v-if="historyOptionSbs == 'Edit'">
            <h3>SUSCRIPCIONES</h3>
            <p>Editar local</p>
          </div>
        </div>

     

      


     
        <div v-else>
          <h3>{{ historyOption }}</h3>
          <p>Opción aun no disponible.</p>
        </div>
      </div>
      <div class="user-dv dflx">
        <div>
          <h4>
            {{ identity.name | splitUp }} {{ identity.lastname | splitUp }}
          </h4>
          <button @click="cerrarSesion()">Cerrar Sesión</button>
        </div>
        <div v-if="statusicon == 'success'" class="icon-user">
          <img :src="this.srcImg(icon)" alt="icono usuario" />
        </div>
        <div v-else class="icon-user">
          <img :src="icondefault" alt="icono usuario" />
        </div>
      </div>
    </div>

    <hr class="hrhd" />

    <div v-if="viewModal" class="modal_view">
      <div id="modal_logout">
        <div class="body">
          <img src="../assets/default/logout.png" alt="icono alerta" />
          <h3><span>Cerrar Sesión</span></h3>
        </div>

        <div class="modal_log_btns dflx">
          <p @click="logout()">Aceptar</p>
          <p @click="cancelar()">Cancelar</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { url } from "../global/index";
import { mapActions } from "vuex";
import icondefault from "../assets/default/icon-user.png";
export default {
  name: "HeaderSec",
  data() {
    return {
      message: "",
      status: "",
      viewModal: false,
      url: url,
      icondefault: icondefault,
      statusimg: "success",
    };
  },
  async created() {
    await this.getIdentity();

    let payload = {
      id: this.identity.sub,
      option: "user",
    };
    this.getImage(payload);
  },
  computed: {
    historyOption() {
      return this.$store.getters["main/getHistoryOption"];
    },
    icon() {
      return this.$store.getters["main/img"];
    },
    statusicon() {
      return this.$store.getters["main/statusimg"];
    },
    historyOptionUsr() {
      return this.$store.getters["usuarios/getHistoryOption"];
    },

    historyOptionPrf() {
      return this.$store.getters["profile/getHistoryOption"];
    },
    historyOptionClb() {
      return this.$store.getters["colaborador/getHistoryOption"];
    },
    historyOptionTrr() {
      return this.$store.getters["terrenos/getHistoryOption"];
    },
    historyOptionCss() {
      return this.$store.getters["casas/getHistoryOption"];
    },
    historyOptionOfn() {
      return this.$store.getters["oficinas/getHistoryOption"];
    },

    historyOptionLcl() {
      return this.$store.getters["locales/getHistoryOption"];
    },
    historyOptionNv() {
      return this.$store.getters["nave/getHistoryOption"];
    },
    historyOptionInd() {
      return this.$store.getters["industrial/getHistoryOption"];
    },
    historyOptionOtr() {
      return this.$store.getters["otros/getHistoryOption"];
    },
    historyOptionBod() {
      return this.$store.getters["bodega/getHistoryOption"];
    },
    historyOptionSbs() {
      return this.$store.getters["suscripciones/getHistoryOption"];
    },
    historyOptionBnr() {
      return this.$store.getters["banner/getHistoryOption"];
    },

    historyOptionAdr() {
      return this.$store.getters["address/getHistoryOption"];
    },
    historyOptionHor() {
      return this.$store.getters["horario/getHistoryOption"];
    }, 
    historyOptionPho() {
      return this.$store.getters["phone/getHistoryOption"];
    }, 
    historyOptionSM() {
      return this.$store.getters["social_media/getHistoryOption"];
    },



    identity() {
      return this.$store.getters["admin/getIdentity"];
    },
  },
  methods: {
    ...mapActions("main", ["getImage"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },

    getIdentity: async function () {
      let response = await this.$store.dispatch("admin/getData");
      return response;
    },

    cerrarSesion() {
      this.viewModal = true;
    },
    cancelar() {
      this.viewModal = false;
    },
    logout: async function () {
      let response = await this.$store.dispatch("admin/logout");
      this.wait();
    },

    srcImg: function (img) {
      let src = `${url}/user-img/${img}`;

      this.status_img(img);

      return src;
    },

    status_img: async function (img) {
      let payload = {
        option: "user",
        image: img,
      };
      let response = "";

      try {
        response = await this.$store.dispatch("main/getStatusImage", payload);
        if (response.data.status == "error") {
          this.statusimg = "error";
        } else {
          this.statusimg = "success";
        }
      } catch (err) {
        this.statusimg = "error";
      }
    },
  },
  filters: {
    split: (value) => {
      if (!value) return "";
      value = value.toString();

      return value.charAt(0).toUpperCase();
    },
    splitUp: (value) => {
      if (!value) return "";
      value = value.toString();

      let splitStr = value.toLowerCase().split(" ");

      return splitStr[0].charAt(0).toUpperCase() + splitStr[0].substring(1);
    },
    splitName: (value) => {
      if (!value) return "";
      value = value.toString();

      let splitStr = value.toLowerCase().split(" ");
      let len = splitStr.length;

      if (len == 1) {
        return splitStr[0].charAt(0).toUpperCase() + splitStr[0].substring(1);
      }

      return (
        splitStr[0].charAt(0).toUpperCase() +
        splitStr[0].substring(1) +
        " " +
        splitStr[1].charAt(0).toUpperCase() +
        splitStr[1].substring(1)
      );
    },
  },
};
</script>

<style scoped>
#HeaderSec {
  margin-top: 5.46875vw;
}

hr.hrhd {
  width: 70.72916666666667vw;
  margin-left: 0px;
  /*border-bottom: .1px solid #B1B1B1;*/
  margin-top: 1.6145833333333335vw;
  margin-bottom: 1vw;
}

.titles {
  width: 39.375vw;
}
.titles h3 {
  color: var(--color-2);
  font-weight: 600;
  font-size: 1.3020833333333335vw;
  margin: 0vw;
}
.titles p {
  color: var(--color-3);
  margin: 0px;
  font-size: 0.8333333333333334vw;
}

.user-dv {
  margin-left: 10vw;
}

.user-dv h4 {
  color: var(--color-2);
  margin: 0vw;
  font-size: 0.9375vw;
  margin-top: 0.5vw;
  text-align: right;
}
.user-dv button {
  color: var(--color-1);
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.7291666666666666vw;
  margin-left: 3.2vw;
  padding: 0vw;
}
.icon-user {
  margin-left: 0.8854166666666666vw;
  width: 3.6458333333333335vw;
  height: 3.6458333333333335vw;
  overflow: hidden;
  border-radius: 2vw;
}
.icon-user img {
  width: 3.6458333333333335vw;
  height: 3.6458333333333335vw;
}
</style>
