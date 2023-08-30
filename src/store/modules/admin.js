'use strict'

import api from '@/api/api';
import userService from '../../services/user.service';
import ncryptService from '../../services/ncrypt.service'

const SET_TOKEN     = 'SET_TOKEN',
      SET_IDENTITY  = 'SET_IDENTITY';

export default {
    namespaced: true,
    state:{
        token: '',
        identity: { },
       
    },
    getters: {
        getToken(state){
            return state.token;
        },
        getIdentity(state){
            return state.identity;
        }
    },
    mutations: {
        [SET_TOKEN](state, payload){
            state.token = payload;
        },
        [SET_IDENTITY](state, payload){
            state.identity = payload;
        }
    },
    actions:{
        async login({commit}, payload) {
         
            try {

                const _pk = ncryptService._createPubToken()
                let headers = { "_pk":_pk };
                let response = await api.login(payload, headers);
                
                localStorage.removeItem("tkn");
                localStorage.removeItem("lastv");
                localStorage.removeItem('ath')  //limpiar el localstorage

                if(response.data.status =='success'){
                    commit(SET_TOKEN, response.data.result);
                    localStorage.setItem("tkn", response.data.result);
                }
              
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar iniciar sesión.',
                    result:''
                }
            }
        },

        async getData({commit}){
            try {
                
                let response = await userService.getData()

                if(response.status =='success'){ //el token si fue valido y se obtuvo el usuario.
                    commit(SET_IDENTITY, response.result);
                  
                }
              
                return response;
                
               
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error.',
                    result:''
                }
            }
        },

        async resendCode({commit}, payload) {
         
        try {
            const _pk = ncryptService._createPubToken()
            let headers = {  "_pk":_pk};
            let response = await api.resendCode(payload, headers);
           
            return response;
        } catch (error) {
          // console.log(error)
        }
      },

   
     
      async enviarMailContacto({commit}, payload) {
           
        try {
            const _pk = ncryptService._createPubToken()
            let headers = { "Content-Type": "application/x-www-form-urlencoded", "_pk": _pk };
            let response = await api.enviarMailContacto(payload, headers);
    
            return response.data;
        } catch (error) {
            //console.log(error);
        }
    },
       
        
        logout({commit}) {          
            localStorage.removeItem("tkn");  
            localStorage.removeItem("lastv"); 
            localStorage.removeItem('ath')         
            commit(SET_IDENTITY, null);
            commit(SET_TOKEN, null);            
        },
        
     
   
    }
}