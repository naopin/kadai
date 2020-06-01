import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  el: "#app",
  state: {
    sex:"",
    year:"",
    month:"",
    day:"",
    insurance:"",
    current:"",
    past:"",
    text:""

  },
  mutations: {
    selectSex(state, sex) {
      state.sex = sex
    },
    selectYear(state, year) {
      state.year = year
    },
    selectMonth(state, month) {
      state.month = month
    },
    selectDay(state, day) {
      state.day = day
    },
    selctInsurance(state,insurance) {
      state.insurance = insurance
    },
    selctCurrent(state,current) {
      state.current = current
    },
    selctPast(state,past) {
      state.past = past
    },
    textArea(state,text) {
      state.text = text
    }
  },
  getters: {
    sex: state => state.sex,
    year: state => state.year,
    month: state => state.month,
    day: state => state.day,
    insurance: state => state.insurance,
    current: state => state.current,
    past: state => state.past,
    text: state => state.text
    

  },
    

  actions: {
  },
  modules: {
  },
 
})