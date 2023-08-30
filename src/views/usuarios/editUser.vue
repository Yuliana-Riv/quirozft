<template >
  <div id="EditUsr">
    <div class="form-content">
      <form
        @submit.prevent="
          submit(
            added.name,
            added.lastname,
            added.role,
            added.email,
            added.phone,
            pass,
            passc
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
              pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{2,254}"
              required
              class="in1"
            />
          </div>
          <div class="boxform">
            <label for="lastname" class="lastname">Apellido/s</label>
            <input
              v-model="added.lastname"
              type="text"
              id="lastname"
              name="lastname"
              pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s]{2,254}"
              required
              class="in1"
            />
          </div>
          <div class="boxform">
            <label for="role" class="role">Rol</label>
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
                  {{ added.role }}
                </div>
              </label>
              <div class="options-cont" @click="closeSelect()">
                <div class="option-btn" @click="added.role = 'admin'">
                  admin
                </div>
                <div class="option-btn" @click="added.role = 'colaborador'">
                  colaborador
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grup-form dflx">
          <div class="boxform">
            <label for="phone" class="phone">Teléfono</label>
            <input
              v-model="added.phone"
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
              v-model="added.email"
              type="email"
              id="email"
              name="email"
              required
              class="in1"
            />
          </div>
        </div>
        <p class="chpass">*Solo si deseas cambiar la contraseña.</p>
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
              class="in5"
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

    <hr class="hrhd" />

    <div class="form-img">
      <div class="grup-form dflx">
        <div class="boxform">
          <label>Imagen</label>
          <div class="dflx">
            <label class="filelabel" for="uploadimg">
              <span>Seleccionar Archivo</span></label
            >
            <label class="filelabelname tbl_item" for="uploadimg">
              {{ archivo }}</label
            >
          </div>

          <input
            @change="previewFiles"
            type="file"
            id="uploadimg"
            name="uploadimg"
            required
            class="fileinput"
          />
        </div>
      </div>

      <div class="dflx">
        <div @click="submitImg(file1)" class="btn_añadir2 dflx">
          <p>AGREGAR <span> IMAGEN</span></p>
          <img src="../../assets/default/upload.png" alt="" />
        </div>
      </div>

      <div v-if="status2 != ''" class="status_messages">
        <div v-if="status2 == 'success'" class="msg msg_success">
          <p>{{ message2 }}</p>
        </div>
        <div v-if="status2 == 'error'" class="msg msg_error">
          <p>{{ message2 }}</p>
        </div>
      </div>
    </div>

    <div class="div-user">
  <img class="logo" v-if="statusimg" :src="srcImg(added.image)" alt="">
</div>

    <div v-if="viewModal" class="modal_view">
      <div id="modal_edit">
        <div class="body dflx">
          <h3>Usuario actualizado</h3>
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
import {url} from '../../global/index'; 
export default {
  name: "EditUsr",

  data() {
    return {
      status: "",
      message: "",
      status2: "",
      message2: "",
      active: false,
      pass: "",
      passc: "",
      archivo: "No se eligió archivo",
   statusimg:false,
      //MODAL
      file1: null,
      viewModal: false,
    };
  },
  async created() {
    let payload = {
      id: this.added.id,
      option: "user",
    };
    this.getInfoByIdUsr(payload);

       const result = await this.status_img(this.added.image)  
  },
  computed: {
    added() {
      return this.$store.getters["usuarios/getAdded"];
    },
    data() {
      return this.$store.getters["usuarios/data"];
    },
  },
  methods: {
    ...mapActions("usuarios", ["setAddedUsr"]),
    ...mapActions("usuarios", ["setHistoryOptionUsr"]),
    wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
    ...mapActions("usuarios", ["getInfoByIdUsr"]),
    submit: async function (name, lastname, role, email, phone, pass, passc) {
      this.status = "";
      this.message = "";
      if (pass === passc) {
        let user = {
          id: this.added.id,
          name: name,
          lastname: lastname,
          phone: phone,
          email: email,
          password: pass,
          role: role,
        };

        let result = await this.$store.dispatch("usuarios/editItemUsr", {
          option: "user",
          item: user,
        });

        if (result.status == "error") {
          this.status = "error";
          this.message = result.message;
        } else {
          // success
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
    submitImg: async function (image) {
      this.status = "";
      this.msg = "";

      if (image != null) {
        if (image.size > 5000000) {
          this.status2 = "error";
          this.message2 = "La imagen excede el tamaño maximo permitido de 1MB.";
          this.delStatus();
        } else {
          //Creamos el formData
          var data = new FormData();
          //Añadimos la imagen seleccionada
          data.append("image", image);
          //Añadimos el método PUT dentro del formData
          // Como lo hacíamos desde un formulario simple _(no ajax)_
          data.append("_method", "PUT");
          //Enviamos la petición
          let result = await this.$store.dispatch("main/editImage", {
            id: this.added.id,
            item: data,
            option: "user",
          });
        //  console.log(result);

          if (result.status == "error") {
            this.status2 = "error";
            this.message2 = result.message;
            this.delStatus();
          } else {
            // success
            this.showModal();
          }
        }
      } else {
        this.status2 = "error";
        this.message2 = "Imagen no subida.";
        this.delStatus();
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
      this.setAddedUsr("");
      this.setHistoryOptionUsr("Default");
    },
    Edit: function () {
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

    previewFiles(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file1 = files[0];
      this.archivo = this.file1.name;
    },

     srcImg:   function (img){
      console.log(img)
         if(!img || img =='') {
                this.statusimg =false
                return ''
            }
                let src = `${url}/user-img/${img}`
                
    
                return src
        },

        status_img:async  function (img){
       if(!img || img =='') {
                this.statusimg =false
                return ''
            }

      this.statusimg =false;
                 let payload ={
                    option:'user',
                    image:img
                }
                let response  =''

                try{
                     response =  await this.$store.dispatch("main/getStatusImage", payload);
                  
                      if(!response?.data?.status){
                       this.statusimg =true
                      }else{
                        response = ''
                      }
                }catch(err){
                    //console.log(err)
                }

                return response
               
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
#EditUsr label {
  color: var(--color-2);
  font-weight: 700;
  font-size: 0.7291666666666666vw;
  margin-bottom: 0.3vw;
}

#EditUsr input,
#EditUsr select {
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