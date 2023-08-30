import Vue from 'vue'
import Vuex from 'vuex'

import admin from './modules/admin'
import colors from './modules/colors'
import logo from './modules/logo'
import main from './modules/main'
import profile from './modules/profile'
import usuarios from './modules/usuarios'
import suscripciones from './modules/suscripciones'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    admin: admin,
    main: main,
    usuarios: usuarios,
    profile:profile,
    colors:colors,
    logo:logo,
    suscripciones:suscripciones
  }
})
