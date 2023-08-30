
import dayjs from 'dayjs';

import CryptoJS  from "crypto-js";
const _keypub = "%h56546346&h554hF-Dp67Mf223tadaH";


export default {
  


  _createPubToken(){
    let result =''
    try{
        const data ={
            iat: dayjs().format(), //fecha en la que se ha creado el token
            exp: dayjs().add(1, 'minute').format()// fecha de expiracion del token, en este caso expira en 30 dias.
        };

        const str = JSON.stringify(data)
        result  = CryptoJS.AES.encrypt(str, _keypub).toString();

    }catch(err){
         //console.log(err.message)
    }

    return result
  },

  _decryptPubData(data){
    let result =''
    try{
       var bytes  = CryptoJS.AES.decrypt(data, _keypub);
       result = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) 

    }catch(err){
         //console.log(err.message)
    }

    return result
  },

  _encryptPubData(data){
    let result =''
    try{

        const str = JSON.stringify(data)
        result  = CryptoJS.AES.encrypt(str, _keypub).toString();

    }catch(err){
         console.log(err.message  + '[3]')
        
    }

    return result
  }
  





};

