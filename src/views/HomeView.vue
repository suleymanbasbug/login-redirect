


<script setup>
import { v4 as uuidv4 } from 'uuid';
import { useStore } from 'vuex';
import router from '../router';
const createdUuid = uuidv4();

const store = useStore();
store.commit('changeUuid',createdUuid)

setTimeout(()=> {
  router.push(`car/${createdUuid}`);
},2000)
</script>


<template>
  <main>
    <div>Just Wait, You are redirected...</div>
    <div>Created uuid : {{createdUuid}}</div>
  </main>
</template>
