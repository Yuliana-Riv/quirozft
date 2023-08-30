<template >
  <div id="EditPrf">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            added.name,
            added.code,
            added.main,
        
          )
        "
      >
        <div class="grup-form dflx">
          <div class="boxform">
            <label for="name" class="name">Nombre </label>
            <input
              v-model="added.name"
              type="text"
              id="name"
              name="name"
             
              required
            
            />
          </div>
         
           <div class="boxform">
            <label for="code" class="code">Color</label>
            <input
              v-model="added.code"
              type="color"
              id="code"
              name="code"
              required
            />
          </div>
        </div>

      

        <div class="dflx">
          <p @click="wait()" class="btnRegresar">Regresar</p>
          <button class="alta" type="submit">Editar</button>
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
    </div>


    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Color actualizado</h3>
          <img src="../../assets/default/add.png" alt="icono alerta" />
        </div>

        <div class="modal_edit_btns dflx">
          <p @click="wait()" class="otro">Aceptar</p>
          <!-- <p  @click="back()" class="inicio">Inicio</p>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "EditPrf",

  data() {
    return {
      status: "",
      message: "",
      status2: "",
      message2: "",
      active: false,
      
     

      //MODAL
   
      viewModal: false,
    };
  },
  created() {
    let payload = {
      id: this.added.id,
      option: "user",
    };
    this.getInfoByIdPrf(payload);
  },
  computed: {
    added() {
      return this.$store.getters["profile/getAdded"];
    },
    data() {
      return this.$store.getters["profile/data"];
    },
  },
  methods: {
    ...mapActions("profile", ["setAddedPrf"]),
    ...mapActions("profile", ["setHistoryOptionPrf"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    ...mapActions("profile", ["getInfoByIdPrf"]),
    submit: async function (name, code, main) {
      this.status = "";
      this.message = "";
      
        let profile = {
          id: this.added.id,
           name, code, main
        };

        let result = await this.$store.dispatch("profile/editItemPrf", {
          option: "profile",
          item: profile,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
          this.delStatus()
        } else {
          // success
          this.showModal();
        }
    
    },
  

    delStatus: function () {
      setTimeout(() => this.delMsgs(), 2000);
    },
    delMsgs: function () {
      this.status = "";
      this.message = "";
      this.status2 = "";
      this.message2 = "";
    },

    showModal: function () {
      this.viewModal = true;
    },
    closeModal: function () {
      this.viewModal = false;
      this.setAddedPrf("");
      this.setHistoryOptionPrf("Default");
    },
    Edit: function () {
      this.viewModal = false;
    },
    back: function () {
      setTimeout(() => this.$router.go(), 200);
    },

   
  },
};
</script>
<style scoped>
#EditPrf label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#EditPrf input,
#EditPrf select {
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