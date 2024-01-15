<template>
  <div class="w-1/2 mt-12 mb-3 flex flex-row justify-between gap-3">
    <input
      class="w-10/12 h-12 px-4 py-3 text-t-blue text-lg placeholder:text-t-pink rounded-lg bg-t-white border-transparent focus:border-t-pink focus:bg-white focus:ring-0"
      type="text"
      placeholder="ADD TODO"
      name=""
      id=""
    />
    <button
      class="flex flex-row gap-1 justify-center items-center w-2/12 h-12 text-t-white font-semibold text-xl bg-t-pink rounded-lg"
    >
      <p>ADD</p>
      <svg
        class="w-5 h-5 text-t-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>