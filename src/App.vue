<template>
  <div class="container">
      <ul class="list-group list-group-horizontal list-inline text-bold">
        <li class="list-group_item">
          <router-link to="/"> Accueil</router-link>
        </li>
        <li class="list-group_item">
          <router-link to="/param">Settings</router-link>
        </li>
        <li>
          <router-link to="/timep">Time Prayer today</router-link>
        </li>
        <li class="list-group_item">
          <router-link to="http://localhost:8000/api/v1/prayer_time/" >Prayer API</router-link>
        </li>
      </ul>

      <router-view> </router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { mapActions, } from "vuex";

export default {
  name: 'App',

  // methods 
  methods :{
    ...mapActions(["fetchPrayerTime", ])
  },
  // created
  async created(){
    await this.fetchPrayerTime();
    //console.log("fetchPrayerTime = ... !!" )
  },
};
</script>