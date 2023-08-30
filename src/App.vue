<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'App',
  data(){
    return{
      colores:''
    }
  },

  async created(){
    await this.getAllInfoClr('profile')
  
    this.colores = this.profiles
     this.actualizarColores()
  },
  watch:{
      profiles(){
        
         this.actualizarColores()
        
      }
  },
  computed:{
    profiles() {
        return this.$store.getters["profile/data"];
        },
  },
  methods: {
     ...mapActions('colors', ['getAllInfoClr']),
     ...mapActions('profile', ['getAllInfoPrf']),
     actualizarColores(){
        const arr = this.$store.getters["colors/data"];
   
     
        
         if(Array.isArray(arr)){
           for (var i=0; i<arr.length; i++) {
         
             if(i==0){
                document.documentElement.style.setProperty('--color-1', arr[i].code);
             }else if(i==1){
                document.documentElement.style.setProperty('--color-2', arr[i].code);
             }else if(i==2){
               document.documentElement.style.setProperty('--color-3', arr[i].code);
             }else if(i==3){
                document.documentElement.style.setProperty('--color-4', arr[i].code);
             }else if(i==4){
              document.documentElement.style.setProperty('--color-5', arr[i].code);
             }else if(i==5){
                document.documentElement.style.setProperty('--color-6', arr[i].code);
             }else if(i==6){
                document.documentElement.style.setProperty('--color-7', arr[i].code);
             }
          }
         }
     }
  },
}

</script>



<style>
@import './css/default.css';

  @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&family=Sora:wght@100;200;300;400;500;600;700;800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap');
  html{
    scroll-behavior: smooth;
  }

  :root{
    /** No eliminar los 7 colores */
    --color-1: #E21F1D;
    --color-2:  #242424;
    --color-3: #A7A7A7;
    --color-4: #F5F5F5;
    --color-5:  #FFFFFF;
    --color-6:  #D9D9D9;
    --color-7:  #FFFFFF;
    --color-8:  #59C1AF;
    --color-9:  #787878;
    --color-10:  #2B4A88;
    --color-11:  #99DED2;
    --color-12:  #4678BA;
    
    --Sans: 'Source Sans Pro', sans-serif;
    --Open_Sans: 'Open Sans', sans-serif;
    --Sora: 'Sora', sans-serif;
    --Mukta: 'Mukta', sans-serif;
    --dmsans:'DM Sans', sans-serif;
    --montserrat:'Montserrat', sans-serif;
    --inter: 'Inter', sans-serif;

    --redHatDisplay: 'Red Hat Display', sans-serif;

    --fs-idseccionpc: 0.625vw;

     /* Tipografias */
  --font-titulo1: "Outfit";
  --font-titulo2: "Outfit" ;
  --font-parrafo: "Outfit" ;
  --font-parrafo2: "Outfit" ;

  }

  a {
    text-decoration: none;
    color: inherit;
}
.algc{
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0vw;   
   overflow: hidden;
}

/*INICIO SLIDE CAROUSEL TESTIMONIOS*/

.slideA .VueCarousel-dot-container {
    display: flex !important;
    justify-content: center;
    width: 47vw;
    margin: 0 auto;
    padding: 0;
}

.slideA .VueCarousel-dot {
    width: 6.763285024154589VW !important;
    height: 6.763285024154589VW !important;
}
.slideA button.VueCarousel-dot.VueCarousel-dot--active {
    /*width: 100% !important;*/
    background-color: #4678BA !important;
    outline: 0px !important;
    border-radius: 10vw !important;
}
.slideA .VueCarousel-dot:focus {
    /*background-color: #4678BA !important;*/
    outline: 0px solid lightblue !important;
}

@media (min-width: 769px) {
  .slideA .VueCarousel-dot-container {
      width: 6.458333333333334VW;
  }
  .slideA .VueCarousel-dot {
      width: 0.8348958333333333VW !important;
      height: 0.8348958333333333VW !important;
  }
}

/*FIN SLIDE CAROUSEL TESTIMONIOS*/

/*INICIO SLIDE CAROUSEL BLOG*/
.slideB .VueCarousel-inner {
    width: 52vw;
}
.slideB .VueCarousel-slide {
    /* flex-basis: inherit; */
    /* backface-visibility: hidden; */
    width: 52vw;
}

@media (min-width: 769px) {
  .slideB .VueCarousel-inner {
      width: 44vw;
  }
  .slideB .VueCarousel-slide {
      width: 44vw;
  }
}
/*FIN SLIDE CAROUSEL BLOG*/

/*INICIO SLIDE CAROUSEL EQUIPO*/


.slideC .VueCarousel-dot-container {
    display: flex !important;
    justify-content: center;
    width: 47vw;
    margin: 0 auto;
    padding: 0;
    margin-top: 0vw !important;
}

.slideC .VueCarousel-dot {
    width: 6.763285024154589VW !important;
    height: 6.763285024154589VW !important;
    margin-top: 0vw !important;
}
.slideC button.VueCarousel-dot.VueCarousel-dot--active {
    
    background-color: #4678BA !important;
    outline: 0px !important;
    border-radius: 10vw !important;
}
.slideC .VueCarousel-dot:focus {
    /*background-color: #4678BA !important;*/
    outline: 0px solid lightblue !important;
}
.slideC .VueCarousel-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding-bottom: 8vw;
}

@media (min-width: 769px) {
  .slideC .VueCarousel-dot-container {
      width: 6.458333333333334VW;
  }
  .slideC .VueCarousel-dot {
      width: 0.8348958333333333VW !important;
      height: 0.8348958333333333VW !important;
  }
}


/*FIN SLIDE CAROUSEL EQUIPO*/

body {
  margin: 0vw;
}


html{
  scroll-behavior: smooth;
}

input:focus-visible {
  outline: none !important;
}

input,
textarea,
select {
  padding-left: 0.5vw;
  outline: none;
}



.dflx{
  display: flex;
}
.dflxc{
  display: flex;
  justify-content: center;
}
.tac{
  text-align: center !important;
}

.pointer{
  cursor: pointer;
}

.jcsb{
  justify-content: space-between;
}

.box_ctr{
  display: flex;
  justify-content: center;
}
.box_rh{
  display: flex;
  justify-content: right;
}

.box_ctr_alg{
  display: flex;
  justify-content: center;
  align-items: center;
}
.crs_ptr{
  cursor: pointer;
}


</style>
