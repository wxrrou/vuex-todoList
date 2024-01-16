
<script setup>
import ToDoTab from "./ToDoTab.vue";
import ToDoItem from "./ToDoItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const todoList = computed(() => {
  switch (store.getters.tab) {
    case 0:
      return store.getters.todoList;
    case 1:
      return store.getters.todoList.filter((todo) => !todo.done);
    case 2:
      return store.getters.todoList.filter((todo) => todo.done);
    default:
      return store.getters.todoList;
  }
});
</script>

<template>
  <div
    class="w-1/2 h-full py-4 px-6 flex items-center flex-col rounded-xl bg-t-white"
  >
    <ToDoTab />
    <ToDoItem :todo="todo" v-for="todo in todoList" :key="todo.id" />
    <div
      class="w-11/12 flex flex-row justify-center gap-4 text-t-purple mt-1"
      v-if="$store.getters.todoList.length > 0"
    >
      <span>ALL:{{ $store.getters.todoList.length }}</span
      ><span
        >UNDONE:
        {{ $store.getters.todoList.filter((todo) => !todo.done).length }}</span
      ><span
        >DONE:
        {{ $store.getters.todoList.filter((todo) => todo.done).length }}</span
      >
    </div>
  </div>
</template>


<style scoped>
</style>