<template>
   <div id="login_view">
      <div class="login_cnt">

       

        <div class="login_bx">

          <div class="logo_bx">
            <img src="../assets/login/logo.svg" alt="Logo ">
          </div>

         
            <div class="login_frm">
              <p class="text_auth">Ingresa el código que fue enviado a tu correo electrónico</p>
              <form @submit.prevent=" verify() ">
                <input 
                      id="code" 
                      v-model="code_form" 
                      type="text" 
                      name="code" 
                      required
                      placeholder="Código"
                  >
               
                 
                  
                

               <div class="btn_login">
                <button  type="submit">Verificar</button>

               </div>

               <p class="form-reenviar-codigo" >¿Problemas? <span @click="sendCode()"> Solicita un nuevo código aquí</span> </p>

                <div  class="message_error" v-if="status=='error'">
                    <p>
                      {{this.message}}
                    </p>
                    <img src="../assets/default/alert.png">
                </div>
                <div  class="message_error" v-if="status=='success' && this.message">
                    <p>
                      {{this.message}}
                    </p>
                   
                </div>
              </form>
            </div>
          </div>

      

       
        
         
       </div>
    </div>

</template>
<script>


import userService from '../services/user.service'

export default {
  name: 'autentificacion',
  data: () => ({
    code_form: "",
    status:'',
    message:''
  }),
  created(){
 this.getIdentity()
  },
  computed:{
    identity() {
      return this.$store.getters['admin/getIdentity'];
    },
  },
  methods: {
      getIdentity: async function (){
          let response =  await this.$store.dispatch("admin/getData");
          return response
      },

    
      
        wait: function () {
      setTimeout(() => this.$router.go(), 200);
    },
     delStatus: function () {
      setTimeout(() => this.delMsgs()
      ,1500);
    },
    delMsgs: function(){
       this.status=""
       this.message=""
    },


    async  verify(){
       this.delMsgs()

        this.getIdentity()
        let identity= this.identity
      
   
          let code = String(identity.code)
          let id = String(identity.sub)

             let data ={
                "id":code,
                "id_user":id,
                "type":identity.role,
                "code":this.code_form
               
              }

                  

            let result = await this.$store.dispatch("main/addItem",  {option:'session', item:data});
                   
                  console.log(result)


 
          if(result.status == 'success'){
             let ath = await userService.createAuth();

             if(ath.status=='success'){
               await userService.setAth(ath.result);
               this.$router.push("/administrador").catch(err => {});
             }else{
               this.status ='error'
               this.message='Ha ocurrido un error.'
                  this.delStatus()
             }
             
            
       
             
          }else{
            this.status='error' 
            this.message='El codigo no coincide.'
            this.delStatus()
          }
          
      },
      
     

     
      async sendCode() {
        this.delMsgs()


         this.getIdentity()
        let identity= this.identity
      try {
        

      let result =  await this.$store.dispatch("admin/resendCode", {
            "email": identity.email,
            "name": identity.name,
            "code": identity.code
        });
     

         if(result.data.status !='success'){
            localStorage.removeItem('tkn')
             this.$router.push("/login").catch(err => {});
         }else{
          this.status ='success'
          this.message = 'Correo enviado a '+identity.email
          this.delStatus()
         }
       
      } catch (error) {
        this.status ='error'
        this.message =error.message
        this.delStatus()
      }
    }
  }
}
</script>


<style scoped>


#login_view{
  background: linear-gradient(222.39deg, #2B4A88 12.3%, #59C1AF 76.14%);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login_cnt{
    background-color: white;
    width: 28.153vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.047vw;
    padding:  3.715vw  0vw;
  }
  .login_bx{
    width: 20.565vw;
    height: auto;
  }

  .logo_bx{
    display: flex;
    justify-content: center;
  }.logo_bx img{
    width: 17.71vw;
    height: 8.111vw;
    margin-bottom: 1.884vw;
  }

  p.text_auth{
    color:#2B4A88;
    font-family: var(--montserrat);
    text-align: center;
    margin: 0vw;
    font-weight: 800;
    margin-bottom: 1.832vw;
    font-size: 0.942vw;
  }
  p.form-reenviar-codigo{
    text-align: center;
    color: #2B4A88;
    font-size: 0.680vw;
    font-weight: 600;
    margin: 0vw;
    margin-top: 1.936vw;
  }
  p.form-reenviar-codigo span{
   color: #2B4A88;
   cursor: pointer;
  }


  .login_frm input#code{
    width: 89.7%;
    border-radius: 1.570vw;
    height: 2.721vw;
    margin-bottom: 1.047vw;
    border: 1px solid rgba(87, 86, 86, 1);
    color: rgba(87, 86, 86, 1);
    font-size: 0.680vw;
    font-family: var(--montserrat);
    font-weight: 600;
    padding-left: 1.881vw;
  }
  .login_frm input::placeholder{
    color: rgba(87, 86, 86, 1);
  }

  .btn_login{
    display: flex;
    justify-content: center;
  }
  .btn_login button{
    background-color: #59C1AF;
    font-weight: 800;
    font-size: 0.733vw;
    height: 3.140vw;
    width: 16.065vw;
    border: none;
    border-radius: 2vw;
    color: white;
    font-family: var(--montserrat);
    cursor: pointer;
  }

  .message_error{
    display: flex;
    background-color: #2B4A88;
    justify-content: space-around;
    align-items: center;
    font-weight: 400;
    font-size: 0.6vw;
    color: white;
    border-radius: 5vw;
    margin-top: .5vw;
    padding: .1vw 0vw;

  }
  .message_error img{
    width: 1vw;

  }

@media (max-width: 768px) {
    #login_view{
      align-items: start;
    }
    .login_cnt{
      width: 100vw;
      border-radius: 0vw;
      padding-top: 10.769vw;
      padding-bottom: 19.231vw;
   }
   .login_bx{
     width: 70.049vw;
   }

   .logo_bx img{
     width: 51.282vw;
     height: 30.256vw;
     margin-bottom: 3.333vw;
   }
  
   .login_frm input#code{
    height: 12.869vw;
    font-size: 3.333vw;
    padding-left: 6.336vw;
    border-radius: 10vw;
    margin-bottom: 4.818vw;
   }

   p.text_auth{
   margin-bottom: 4.103vw;
    font-size: 3.590vw;
    margin-top: 4vw;
  }
  p.form-reenviar-codigo{
  
    font-size: 3.846vw;
    
    margin-top: 9.744vw;
  }
  p.form-reenviar-codigo span{
    display: block;
  width: 100%;
}


    .btn_login button {
      height:12.821vw;
      width: 100vw;
      border-radius: 10vw;
      font-size: 3.590vw;
    }

    .message_error{
      height:6.821vw;
      font-size: 2.333vw;
      margin-top: 2vw;
    }

    .message_error img {
      width: 2.622vw;
}


  }

</style>
