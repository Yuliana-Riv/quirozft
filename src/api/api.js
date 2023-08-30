import axios from "axios";

    
export default {

    login(data, headers){
        return axios.post(`/login`, data, {headers});
    },

    
    resendCode(data, headers){
      return axios.post(`/reenviar-codigo`, data, {headers});
    },

    getInfoUser(data, headers){
      return axios.post(`/info_usr`, data, {headers});
    },
    
  getAllInfo(option, headers){
    return axios.get(`/${option}`, {headers});
  },

  getStatusImage(payload, headers){
    return axios.get(`/${payload.option}-img/${payload.image}`, {headers});
  },
  
  getInfoById(payload, headers){
    return axios.get(`/${payload.option}/${payload.id}`, {headers});
  },
 
  search(data, headers){
    return axios.get(`/buscar/${data.normalizedOpt}/${data.search}`, {headers});
  },

  searchById(data, headers){
    return axios.get(`/buscar/${data.normalizedOpt}/${data.id}/${data.search}`, {headers});
  },


 
  enviarMailContacto(data, headers){
    return axios.post('j43-wdrDE4s_wffs2/contacto', data, headers);
  },
  //metodos de eliminar, editar y agregar
  deleteItem(payload,headers){
    return axios.delete(`/${payload.option}/delete`, {
        data: payload,
        headers: headers
      });
  },
  
  editItem(payload,headers){
    return axios.put(`/${payload.option}/update`, payload.item, {headers} );
  },

  addItem(payload,headers){
    return axios.post(`/${payload.option}/create`, payload.item, {headers});
  },

  editImage(payload,headers){
    return axios.put(`/${payload.option}/upload/image/${payload.id}`, payload.item, {headers} );
  },


}