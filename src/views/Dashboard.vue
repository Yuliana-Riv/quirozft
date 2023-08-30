<template>
    <div id="Dashboard">
         <SideMenu /> 
        <div class="content_sections">
          <Sections :option="'Default'" />
        
        </div>
    </div>
</template>
<script>

import SideMenu from '../components/SideMenu.vue'
import Sections from '../components/Sections.vue' 


  

export default {
  name: 'Dashboard',
  components:{
    SideMenu,
    Sections
  },
 
}
</script>
<style scoped>
   
   #Dashboard{
     display: flex;
   }

   .content_sections{
     background: var(--color-5);
     min-height: 59.25VW;
     width: 78.17708333333333VW;
     
   }
</style>
