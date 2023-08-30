<template >
  <div id="Inicio">
    <Navigator />
    <Equipo />
    <About />
    <Calculadora/>
    <Servicios />
    <Testimonio />
    <BlogHome />
    <contacto />

  </div>
</template>
<script>

import {url} from '../global/index'; 
import Navigator from '@/components/fixed/Navigator'
import Testimonio from '@/components/Testimonio'
import Equipo from '@/components/Equipo'
import About from '@/components/About'
import Calculadora from '@/components/Calculadora'
import Servicios from '@/components/Servicios'

import BlogHome from '@/components/BlogHome'
import Contacto from '../components/Contacto.vue';

export default {
  name:'HOME',
  components: {
    Navigator,
    Testimonio,
    Equipo,
    About, 
    Calculadora,
    Servicios,
    BlogHome,
    Contacto
  }   
}
</script>
