<script setup>
const tabs = ["ALL", "UNDONE", "DONE"];
</script>

<template>
  <div class="w-full flex flex-row justify-center">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      @click="$store.dispatch('setTab', index)"
      :class="$store.getters.tab === index ? 'tab-1' : 'tab-0'"
    >
      {{ tab }}
    </button>
  </div>
</template>

<style scoped>
</style>