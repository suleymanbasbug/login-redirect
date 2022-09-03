<template>
  <div>
    <h2>You can leave the inputs blank.</h2>
    <h3>If it comes from car/uuid, it redirects.</h3>
    <div>
      <p>Email</p>
      <input type="text" />
    </div>
    <p>Password</p>
    <input type="password" />
    <div>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script setup>
import router from "../router";
import { useStore } from "vuex";
const store = useStore();
const prevRoute = router.options.history.state.back;
let findUuidOnUrl;
const stateUuid =  store.getters.uuid;
if (prevRoute) {
  findUuidOnUrl = prevRoute.split("/").at(-1);
}
const login = () => {
    store.commit('changeLogin', true);
    if(stateUuid == findUuidOnUrl){
        router.push(`car/${stateUuid}`)
    }else{
        router.push('/')
    }
}
</script>

<style></style>
