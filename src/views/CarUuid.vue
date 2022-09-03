<template>
  <div>UUID : {{ $route.params.uuid }}</div>
</template>

<script setup>
import { useStore } from "vuex";
import router from "../router";
const store = useStore();
if (!store.getters.login) {
  setTimeout(() => {
    router.push("/login");
  }, 2000);
}
</script>

<style></style>
