
<script setup>
import ToDoTab from "./ToDoTab.vue";
import ToDoItem from "./ToDoItem.vue";
</script>

<template>
  <div
    class="w-1/2 h-full py-4 px-6 flex items-center flex-col rounded-xl bg-t-white"
  >
    <ToDoTab />
    <div class="w-full" v-for="todo in $store.state.todoList" :key="todo.id">
      <ToDoItem :todo="todo" />
    </div>
  </div>
</template>


<style scoped>
</style>