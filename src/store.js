import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        tprayers : [],
        settings : [],
        today : {},
        isFetching : false,
        message : "Prayer time calendar",
    },

    getters :{
        getMessage(state){
            return state.message
        },

    },

    mutations : {
        set_tprayer(state, {tprayers}){
            state.tprayers = tprayers
        },
        set_settings(state, {params}){
            state.settings = params
        },

        set_today(state, {maintenant}){
            state.today = maintenant
        },

        setIsFetching(state, bool){
            state.isFetching = bool
        }
    },

    actions:{
        fetchPrayerTime({commit}) {
            var url = `http://localhost:8000/api/v1/prayer_time/`

            commit('setIsFetching', true);
            //ajax load
            return fetch(url)
                .then(response => response.json())
                .then(json => {
                    commit('set_tprayer', {tprayers : json["data"]})
                    commit('set_settings', {params : json["settings"]})
                    commit('set_today', { maintenant : json["today"]})
                    commit('setIsFetching', false)
                    console.log("json today timings=" + json["today"]["timings"])
                    })  
                .catch(err => {
                    commit('setIsFetching', false)
                    console.error(err)
                });
        }      
    }
})