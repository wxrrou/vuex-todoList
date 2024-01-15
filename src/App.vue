<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import ToDoInput from "./components/ToDoInput.vue";
import ToDoList from "./components/ToDoList.vue";
</script>

<template>
  <div
    class="flex items-center flex-col bg-t-orange py-16 max-h-full min-h-screen"
  >
    <h1 class="font-mono text-5xl font-bold tracking-wide text-t-white">
      TO-DO LIST
    </h1>
    <ToDoInput />
    <ToDoList />
  </div>
</template>

<style scoped>
</style>
