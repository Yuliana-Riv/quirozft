'use strict'

import api from '@/api/api';
import userService from '../../services/user.service'
import ncryptService from '../../services/ncrypt.service'

const GETTING_INFO      = 'GET_INFO',
      GET_INFO_SUCCESS  = 'GET_INFO_SUCCESS',
      GETTING_IMG        = 'GET_IMG',
      GET_IMG_SUCCESS  = 'GET_IMG_SUCCESS',
      SET_HISTORY_OPTION = 'SET_HISTORY_OPTION',
      SET_ADDED = 'SET_ADDED',
   
      SET_STATUS = 'SET_STATUS',
      GETTING_MSG='GETTING_MSG',
      GET_MSG='GET_MSG';
     
    

export default {
    namespaced: true,
    state:{
        loading: false,
        data: [],
        loading_img: false,
        img:null,
        historyOption: 'Default',
        historyIndex: 0,
        status: '',
        msg:'Ver Todos',
        added:''
    },
    getters: {
        loading(state) {
            return state.loading;
        },
        data(state) {
            return state.data;
        },
        loading_img(state) {
            return state.loading_img;
        },
        img(state) {
            return state.img;
        },
        getHistoryOption(state){
            return state.historyOption
        },
        getHistoryIndex(state){
            return state.historyIndex
        },
        getAdded(state){
            return state.added
        },
        status(state){
            return state.status
        },
        msg(state){
            return state.msg
        },
        
    },
    mutations: {
        [GETTING_INFO](state) {
            state.loading = true;
            state.data = [];
        },
        [GET_INFO_SUCCESS](state, change) {
            state.loading = false;
            state.data = change;
        },
        [GETTING_IMG](state) {
            state.loading_img = true;
            state.img = null;
        },
        [GET_IMG_SUCCESS](state, change) {
            state.loading_img = false;
            state.img = change;
        },
        [SET_HISTORY_OPTION](state, change){
            state.historyOption = change;
        },
        [SET_ADDED](state, change){
            state.added = change;
        },
        [SET_STATUS](state, value){
            state.status = value;
        },
        [GET_MSG](state, value){
            state.msg =value
        },
        [GETTING_MSG](state){
            state.msg = 'Cargando...'
        },
    },
    actions:{
        setAddedClr({commit}, payload){
            commit(SET_ADDED, payload);  
        },

        setHistoryOptionClr({commit}, payload){
            commit(SET_HISTORY_OPTION, payload);  
        },
        async getAllInfoClr({ commit }, payload) {
            commit(GETTING_INFO);
            commit(GETTING_MSG);
            //console.log(payload)
            let normalizedOpt = payload.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g, ""); 
           
           
            try {               
             
                let token = userService.getToken() 
                const _pk = ncryptService._createPubToken()
             
                
                let headers =  {'Authorization': token, "_pk":_pk} ;

                let response = await api.getAllInfo(normalizedOpt, headers);

                if(response.data.status =='success'){
                    commit(GET_INFO_SUCCESS, response.data.result);
                }else{
                    commit(GET_INFO_SUCCESS, response.data.result);
                }
                commit(GET_MSG, "Ver todos");


                //console.log(response.data.result)
                return response.data;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

        async getInfoByIdClr({ commit }, payload) {
            commit(GETTING_INFO);
            try {              
                let token = userService.getToken() 
                const _pk = ncryptService._createPubToken()

                let headers =  {'Authorization': token, "_pk":_pk} ;
              

                let response = await api.getInfoById(payload, headers);
                commit(GET_INFO_SUCCESS, response.data.result);
                //console.log(response.data.result)
                return response.data.result;
            } catch (error) {
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },

        async searchClr({ commit }, payload) {
            commit(GETTING_INFO);
            commit(GETTING_MSG);
            let option = payload.option
            let search = payload.search;
            //console.log(payload)
    
            try {               
                let normalizedOpt = option.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f-\s]/g, ""); 
                let token = userService.getToken() 
                const _pk = ncryptService._createPubToken()

                const headers =  {'Authorization': token, "_pk":_pk} ;
              

                let data ={
                    normalizedOpt: normalizedOpt,
                    search: search
                }

                let response = await api.search(data, headers);
                commit(GET_INFO_SUCCESS, response.data.result);
                commit(GET_MSG, option);
                //console.log(response.data.result)
                return response.data.result;
            } catch (error) {
                //console.log(error)
                return {
                    status:'error',
                    message:'Ha ocurrido un error al intentar obtener la información.',
                    result:''
                }
            }
           
        },


        async deleteItemClr({ commit }, payload) { 
            commit(SET_STATUS, 'SUCCESS')
            try {               
                let token = userService.getToken() 
                const _pk = ncryptService._createPubToken()

                const headers =  {'Authorization': token, "_pk":_pk} ;
                let response = await api.deleteItem(payload, headers);
                //console.log(response.data)
                return response.data;
            } catch (error) {
               //console.log(error)
               return {
                status:'error',
                message:'Ha ocurrido un error al intentar eliminar la información.',
                result:''
              }
            }
           
        },
        async editItemClr({ commit }, payload) { 
            commit(SET_STATUS, 'SUCCESS')
            try {               
                let token = userService.getToken() 
                const _pk = ncryptService._createPubToken()

                const headers =  {'Authorization': token, "_pk":_pk} ;
                let response = await api.editItem(payload, headers);
               // console.log(response.data)
                return response.data;
            } catch (error) {
               //console.log(error)
               return {
                status:'error',
                message:'Ha ocurrido un error al intentar editar la información.',
                result:''
              }
            }
           
        },

        async addItemClr({ commit }, payload) { 
            commit(SET_STATUS, 'SUCCESS')
            
            try {               
                let token = userService.getToken() 
                const _pk = ncryptService._createPubToken()

                const headers =  {'Authorization': token, "_pk":_pk} ;
                let response = await api.addItem(payload, headers);
                return response.data;
            } catch (error) {
               //console.log(error)
               return {
                status:'error',
                message:'Ha ocurrido un error al intentar guardar la información.',
                result:''
              }
            }
           
        },


      

       
   
    },
}