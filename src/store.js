import { createStore } from "vuex";


const store = createStore({
  state() {
    return {
      isModalOpen: false,
      modalVal: "Signup"
    };
  },
  mutations: {
    OPEN_SIGNUP(state) {
      state.isModalOpen = true;
      state.modalVal = "Signup";
    },

    OPEN_LOGIN(state) {
      state.isModalOpen = true;
      state.modalVal = "Login";
    },
    CLOSE_MODAL(state) {
      state.isModalOpen = false;
    },
  },

  
  actions: {
    closeModal({ commit }){
      commit("CLOSE_MODAL");
    },

    openSignup({ commit }){
      commit("OPEN_SIGNUP");
    },
    
    openLogin({ commit }){
      commit("OPEN_LOGIN");
    }  

  },
});

export default store;