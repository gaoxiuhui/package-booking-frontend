import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    postPackages:function(context,values){
      axios.post("http://localhost:8090/PackageToStorage",{
        waybillNum:values.waybillNum,
        recipients:values.recipients,
        phoneNum:values.phoneNum,
        weight:values.weight,
        state: 1
      }).then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      });
    }
  }
})