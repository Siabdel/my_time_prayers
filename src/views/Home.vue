<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="row">
      <h3> Heures de prières de la ville de {{ settings.city }} </h3>
      <h3> pour le mois {{ settings.month }} </h3>
    </div>

    <div class="row">
      <h2> <a @click.prevent="aff_param=!aff_param" href=""> Settings </a></h2>
      <ul v-show="aff_param" class="list-group">
        <li class="list-group-item"> Ville : {{ settings.city }} </li> 
        <li class="list-group-item"> Pays : {{ settings.country }} </li> 
        <li class="list-group-item"> Latitude : {{ settings.latitude }} </li> 
        <li class="list-group-item"> Longitude : {{ settings.longitude }} </li> 
        <li class="list-group-item"> Methode : {{ settings.method }} </li> 
        <li class="list-group-item"> Mois : {{ settings.month }} </li> 
        <li class="list-group-item"> Annee : {{ settings.year }} </li> 
      </ul>
    </div> 

    <div class="row">
      <h2> <a @click.prevent="aff_today=!aff_today" href=""> Aujourd'hui </a></h2>
      <ul v-show="aff_today" v-if="today.timings" class="list-group">
        <li class="list-group-item"> Fajr : {{ today.timings.Fajr }} </li> 
        <li class="list-group-item"> Levée : {{ today.timings.Sunrise }} </li> 
        <li class="list-group-item"> Duhr : {{ today.timings.Dhuhr }} </li> 
        <li class="list-group-item"> Asr : {{ today.timings.Asr }} </li> 
        <li class="list-group-item"> Sunset : {{ today.timings.Sunset }} </li> 
        <li class="list-group-item"> Maghrib : {{ today.timings.Maghrib }} </li> 
        <li class="list-group-item"> Isha : {{ today.timings.Isha }} </li> 
        <li class="list-group-item"> Imsak : {{ today.timings.Imsak }} </li> 
        <li class="list-group-item"> Midnight : {{ today.timings.Midnight }} </li> 
        <li class="list-group-item"> Date le : {{ today.timings }} </li> 
      </ul>
    </div> 

    <div class="row">
      <h2> <a @click.prevent="aff_mois=!aff_mois" href=""> heure de prières du mois </a></h2>
      <div v-show="aff_mois"> 
        <TimePrayer :timeprs="tprayers" :afficher="(searchBy)?true:false"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import TimePrayer from "../components/TimePrayer.vue";
import {  mapActions, mapState } from "vuex"

export default {
  name : "HomePage",
  components: {
    TimePrayer,
  },
  data(){
    return {
      aff_mois : false,
      aff_param : false,
      aff_today : false,
      searchBy : "",
      sortBy : "nom",
    }
  },

  methods: {
    // map users
    ...mapActions(["getMessage",] ),
  },
  //computed 
  computed:{
    ...mapState(["tprayers", "settings", "message", "today"]) 
  },
  // methods 
  // created
  mounted(){
    console.log("fetchPrayerTime : today =" + this.today )
    console.log("fetchPrayerTime : settings = " + this.settings )
    console.log("fetchPrayerTime : ... !!" + this.tprayers )
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
