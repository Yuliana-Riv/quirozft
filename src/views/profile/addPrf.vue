<template >
  <div id="AddPrf">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(name, code)
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
             
              required
            />
          </div>
         <div class="boxform">
            <label for="code" class="code">Color</label>
            <input
              v-model="code"
              type="color"
              id="code"
              name="code"
              required
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
            <h3>Color agregado</h3>
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
  name: "AddPrf",
  data() {
    return {
      status: "",
      message: "",
      name: "",
      code:"#FFFFFF",
    
      active: false,
    

      //MODAL

      viewModal: false,
    };
  },
  methods: {
    ...mapActions("profile", ["setAddedPrf"]),
    ...mapActions("profile", ["setHistoryOptionPrf"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    submit: async function (name, code) {
      this.status = "";
      this.message = "";

        let profile = {
          name,
          code,
          main:"no"
        };

        let result = await this.$store.dispatch("profile/addItemPrf", {
          option: "profile",
          item: profile,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
          this.setAddedPrf(result.added);
          this.showModal();
        }
   
    },
  

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedPrf("");
      this.setHistoryOptionPrf("Default");
    },
    Add: function () {
      this.status = "";
      this.message = "";
      this.name = "";
      this.code = "";
    
      this.viewModal = false;
      this.setAddedPrf("");
    },
    toEdit: function () {
      this.setHistoryOptionPrf("Edit");
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },
  },
};
</script>
<style scoped>
#AddPrf label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#AddPrf input,
#AddPrf select {
  height: 2.5vw;
  width: 14.716666666666668vw;
  border: 0.052083vw solid var(--color-2);
  border-radius: 0vw 1.5vw 1.5vw 0vw;
  color: var(--color-3);
  font-size: 0.7291666666666666vw;
  font-weight: 500;
  padding-left: 1.09375vw;
}


input[type=color]{
   border-radius: 0vw !important;
   width: 7vw !important;
 
}
</style>