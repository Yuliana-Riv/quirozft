<template>
    <div id="profile">
           
             <div v-if="historyOption =='Default'" class="dflx">
                <div class="box-profile">
                            <div class="dflx">
                        <p class="noitems">No. de items <span v-if="data != 'No se encontraron coincidencias.'">{{data.length}}</span> <span v-else>0</span> </p>
                         
        <div class="select-container">
          <input type="checkbox" name="select-ch" id="select-ch" v-model="active" true-value="true" false-value="false"/>
          <label for="select-ch">
            <div id="select-items" :class="{'rounded' : active}">
                Items por página: {{itemsPerPage}}
            </div>
          </label>
          <div class="options-cont" @click="closeSelect()">
            <div
              class="option-btn"
              v-bind:value="6"
              @click="itemsPerPage = '6'"
            >
              6
            </div>
            <div
              class="option-btn"
              v-bind:value="12"
              @click="itemsPerPage = '12'"
            >
              12
            </div>
            <div
              class="option-btn"
              v-bind:value="18"
              @click="itemsPerPage = '18'"
            >
              18
            </div>
            <div
              class="option-btn"
              v-bind:value="24"
              @click="itemsPerPage = '24'"
            >
              24
            </div>
          </div>
        </div>
                         <div class="buscador dflx">
                              <input v-model="search_value" type="search" id="input-search" class="form-control" :placeholder="'Búsqueda'"  />
                              <div class="icon_buscar">
                              <img @click="search(search_value)" src="../../assets/default/Search.png" alt="icono buscar">
                              </div>

                        </div>





                   </div>

                     <div  @click="changeView('Add','')"  class="btn_añadir dflx">
                                <p  > AGREGAR</p>  <img src="../../assets/default/add.png" alt="">
                     </div>


                       <div class="tbl_profile">
            <div class="tbl_header dflx">
                <div class="tblh tblrad">
                    <p>NOMBRE</p>
                </div>
                 <div class="tblh ">
                    <p>COLOR</p>
                </div>
                
                 <div class="tblh2 ">
                   
                    <p>EDITAR</p>
                </div>
                 <div class="tblh2  tblh2r ">
                   
                    <p>BORRAR</p>
                </div>
                 
            </div>
            <div tbl_content>
                <div  v-if="data.length>0">
                    <div class="tbl_items dflx" v-for="(item, key) in filteredItems" :key="key">
                        <div class="tbl_item itp1 ">
                            <p>{{item.name}}</p>
                        </div>
                        <div class="tbl_item dflx">
                            <p class="pill" :style="{background:item.code}"></p> <p :style="{color:item.code}">{{item.code}}</p>
                        </div>
                       
                       
                            <div class="icon_editar">
                                <img   @click="changeView('Edit',item)" src="../../assets/default/i_editar.png" alt="icono editar"   >
                            </div>
                            <div v-if="item.main !='si'" class="icon_eliminar">
                                <img  @click="showModal(item.id)" src="../../assets/default/i_eliminar.png" alt="icono eliminar" >
                            </div>
                        
                    </div>
                </div>  
                <div v-else>
                    <p class="snu">Aun no hay registros.</p>
                </div>
            </div>
        </div>

          <div  id="navigate-buttons" class="mlf">
                    <div class="dflx">
                        <button @click="prev" id="btn-prev" class="btn-navigate  "><img src="../../assets/default/Left.png" alt="icono anterior"></button>
                        <p class="num-pages">{{currentPage}} / {{totalPages}}</p>
                        <button @click="next"  id="btn-next" class="btn-navigate  "><img src="../../assets/default/Right.png" alt="icono siguiente"></button>
                     </div>
        </div>


                </div>
                <div class="box-logo">
                  <p class="upd-logo">Actualizar logo administrador</p>
                   <div class="form-img">

                     <div class="dflx">
                          <div @click="submitImg(file1, logo.id)" class="btn_añadir2 dflx">
                            <p>AGREGAR <span> IMAGEN</span></p>
                            <img src="../../assets/default/upload.png" alt="" />
                          </div>
                        </div>


                        <div class="grup-form dflx">
                          <div class="boxform">
                          
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

                       

                        <div v-if="status2 != ''" class="status_messages">
                          <div v-if="status2 == 'success'" class="msg msg_success">
                            <p>{{ message2 }}</p>
                          </div>
                          <div v-if="status2 == 'error'" class="msg msg_error">
                            <p>{{ message2 }}</p>
                          </div>
                        </div>
                      </div>


<div class="div-logo">
  <img class="logo" v-if="statusimg" :src="srcImg(logo.logo)" alt="">
</div>


                </div>

             </div>
             <div v-if="historyOption =='Add'">
                 <!-- Agregar profile -->
                 <AddPrf/>
             </div>
             <div v-if="historyOption =='Edit'">
               <!-- Editar profile -->
               <EditPrf/>
             </div>
         


             <div v-if="status !=''" class="status_messages">
                            <div v-if="status =='success'" class="msg msg_success">
                                 <p>{{message}}</p>
                            </div>
                            <div  v-if="status =='error'" class="msg msg_error">
                                <p>{{message}}</p>
                            </div>
        </div>

         
           <div v-if="viewModal" class="modal_view">
           
            <div id="modal_delete">
                <div class="body">
                     <img src="../../assets/default/alert.png" alt="icono alerta">
            <h3 >¿Estás seguro de  <span>eliminar <br> este color?</span></h3>
                </div>
           
            <div class="modal_del_btns dflx">
                <p @click="eliminar()">Aceptar</p>   <p  @click="closeModal()" >Cancelar</p>
            </div>
          </div>
        </div> 
      
    </div>
</template>
<script>

import {url} from '../../global/index'; 

import {mapActions} from 'vuex';
import AddPrf from './addPrf.vue'
import EditPrf from './editPrf.vue'
export default {
  name: 'profile',
  components:{
   AddPrf,
   EditPrf 
  },
    data(){
       return{
        
           status:'',
           message:'',
           status2: "",
           message2: "",

           item: '',
           search_value:'',
           updsearchcli:'',
           currentPage: 1,
           itemsPerPage:   12,
           active:false,
           viewModal:false,
           itemDel:'',
           radius:false,

            archivo: "No se eligió archivo",
            file1: null,

                 url:url,
                statusimg:false,

       }
   },
 async created() {
    await this.getAllInfoPrf('profile')
    await this.getAllInfoLgo('personalize')

     const result = await this.status_img(this.logo.logo)  
  },
  

   
  computed:{
     data() {
         const arr = this.$store.getters["profile/data"];
         let filter =[]
         if(!Array.isArray(arr)){
          return []
         }else{
            if(this.search_value !=''){
              for (const item of arr) {
                  if(this.includesItem(this.search_value, item.name)){
                    filter.push(item)
                  }
              }
            }else{
              filter = arr
            }
         }
        
          return filter

        },
        logo() {
         const arr = this.$store.getters["logo/data"];
         
         if(Array.isArray(arr)){

          if(arr[0]?.logo){
            return arr[0]
          }else{
            return {logo:''}
          }

           
         }else{
           return {logo:''}
         }
      

        },
         historyOption(){
            return this.$store.getters["profile/getHistoryOption"]
        },

        
          //Paginacion
        allItems () {
            return Object.keys(this.data).map(pid => this.data[pid])
        },
        filteredItems () {
        
             return  this.allItems.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage )
        },
        totalPages () {
            let total = Math.ceil(this.allItems.length / this.itemsPerPage)
                if(total < this.currentPage){
                this.currentPage =1
                }
        return total
       },
  },
  methods:{
        
       ...mapActions('profile', ['getAllInfoPrf']),
       ...mapActions('logo', ['getAllInfoLgo']),
           ...mapActions('profile', ['setHistoryOptionPrf']),
         ...mapActions('profile', ['setAddedPrf']),
        
        includesItem(search, name){
              name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if(search ==''){
              return true
            }
            name = name.toLowerCase()
            search= search.toLowerCase()
            if(search ==''){
                return false;
            }
            return name.includes(search)
          },

           changeView(option, item){
             this.item=item
             this.setAddedPrf(item)
             this.setHistoryOptionPrf(option)
         },

         activeRadius(){
             this.radius? this.radius =false:  this.radius =true;
         },

         showModal: function(id){
             this.itemDel =id;
             this.viewModal=true
         },
         closeModal:function(){
             this.viewModal=false;
             this.itemDel =''
         },

           wait: function(){
            setTimeout(() => this.$router.go(), 200);
        },

          delStatus: function () {
            setTimeout(() => this.delMsgs()
            ,2000);
            setTimeout(() => this.wait()
            ,500);
            
        },
        delMsgs: function(){
            this.status=""
            this.message=""
        },

        eliminar: async function(){
            let id = this.itemDel
            this.status='';
            this.message='';

             let result = await this.$store.dispatch("profile/deleteItemPrf", {option: 'profile', id:id});
           
            if(result.status=='error'){
            this.message = result.message;
            this.status='error'
            this.delStatus()
           
            }else{
                this.status='';
                this.message='';
                this.wait()
            }
         },
          closeSelect(){
      document.getElementById("select-ch").checked = false;
      this.active = false;
    },








         // botones de paginacion.
         next () {
          
          if ( this.currentPage < this.totalPages) {
            this.currentPage++
          }
        },
        prev () {
          if (this.currentPage > 1) {
            this.currentPage--
          }
        },





         submitImg: async function (image, id) {
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
            data.append("id", id);
          //Añadimos el método PUT dentro del formData
          // Como lo hacíamos desde un formulario simple _(no ajax)_
          data.append("_method", "PUT");
          //Enviamos la petición
          let result = await this.$store.dispatch("logo/editItemLgo", {
           
            item: data,
            option: "personalize",
          });
        

          if (result.status == "error") {
            this.status2 = "error";
            this.message2 = result.message;
            this.delStatus();
          } else {
            // success
            this.wait()
          }
        }
      } else {
        this.status2 = "error";
        this.message2 = "Imagen no subida.";
        this.delStatus();
      }
    },
      previewFiles(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.file1 = files[0];
      this.archivo = this.file1.name;
    },

    status_img:async  function (img){
       if(!img || img =='') {
                this.statusimg =false
                return ''
            }

      this.statusimg =false;
                 let payload ={
                    option:'personalize',
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

       srcImg:   function (img){
         if(!img || img =='') {
                this.statusimg =false
                return ''
            }
                let src = `${url}/personalize-img/${img}`
                
    
                return src
        },


  }
}
</script>
<style scoped>
.box-profile{
  border-right: 1px solid var(--color-3);
  padding-right: 2vw;
  margin-right: 3vw;
}
.tbl_profile{
      margin-top: 1.9791666666666665VW;
         width: 27VW;
}

.tbl_items{
      border-bottom: 1px solid var(--color-3);
}

.tbl_item{
    overflow: auto;
}
      .tblh{
            width: 10.78125VW;
            height: 2.5VW;
            background: var(--color-2);
            border-right: 1px solid  var(--color-5);
           
      }
       .tblh2{
            width: 2.5VW;
            height: 2.5VW;
            background: var(--color-3);
            border-right: 1px solid  var(--color-5);
           
      }
      .tblh p{
             padding-left: 1.3541666666666667VW;
             color: var(--color-5);
             font-size: 0.7291666666666666VW;
             font-weight: 500;
      }
      .tblh2 p{
             padding-top: 0.5VW;
             padding-left: .3vw;
             color: var(--color-5);
             font-size: 0.46875VW;
             font-weight: 700;
      }

       .icon_editar , .icon_eliminar{
            width: 2.5VW;
            height: 2.5VW; 
            
      }

       .icon_editar img , .icon_eliminar img{
       
             width:  0.8333333333333334VW;
            height:   0.8333333333333334VW; 
            padding-top: .9vw;
            padding-left: .9vw;
            cursor: pointer;
      }
      .tblrad{
            border-radius: 1.5vw 0vw 0vw 1.5vw;
      }

      .tblh2r{
            border-radius:  0vw .5vw .5vw 0vw ;
      }

      .tbl_item{
             width: 10.78125VW;
      } .tbl_item p{
             padding-left: 1.3541666666666667VW;
      }

      .mlf{
          margin-left: 21.5VW !important;
      }

      p.pill{
     
        width: 1vw;
        height: 1vw;
        text-align: center;
        margin-left: 2vw;
        padding: 0vw;

      }

      .itp1 p{
        font-weight: 800;
        color: #B1B1B1;
      }
</style>
