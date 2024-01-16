<script >
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isEdit: false,
      todoText: this.todo.title,
    };
  },
  props: ["todo"],
  methods: {
    ...mapActions(["toggleTodo", "deleteTodo", "editTodo"]),
    edit() {
      this.isEdit = !this.isEdit;
      this.todoText = this.todo.title;
    },
  },
};
</script>

<template>
  <div class="w-full px-2">
    <div class="h-16 flex flex-row items-center justify-between gap-4">
      <!-- checkbox -->
      <input
        class="checkbox"
        type="checkbox"
        @click="toggleTodo(todo)"
        :checked="todo.done"
        v-if="!isEdit"
      />
      <!-- text -->
      <span
        class="w-full text-xl text-t-blue"
        :class="{ 'line-through text-t-pink': todo.done }"
        v-if="!isEdit"
      >
        {{ todo.title }}
      </span>
      <input
        class="w-full rounded-lg ring-0 border-t-pink focus:border-2 focus:border-t-pink focus:ring-0"
        v-if="isEdit"
        v-model="todoText"
        @change="todoChange"
        @keyup.enter="
          todoText != '' ? editTodo({ todo, value: todoText }) + edit() : edit()
        "
        @keyup.esc="edit"
      />

      <div class="flex flex-row items-center gap-0">
        <button
          class="w-9 h-9 rounded-xl flex justify-center items-center"
          @click="
            isEdit
              ? todoText != ''
                ? editTodo({ todo, value: todoText }) + edit()
                : edit()
              : edit()
          "
          v-if="!todo.done"
        >
          <!-- edit -->
          <svg
            class="w-6 h-6 text-t-purple hover:text-t-blue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
            v-if="!isEdit"
          >
            <path
              d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"
            />
            <path
              d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"
            />
          </svg>
          <!-- check -->
          <svg
            class="w-6 h-6 text-t-purple hover:text-t-blue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
            v-else
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        </button>

        <button
          class="w-9 h-9 rounded-xl flex justify-center items-center"
          @click="isEdit ? edit() : deleteTodo(todo)"
        >
          <!-- delete -->
          <svg
            class="w-6 h-6 text-t-purple hover:text-t-blue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
            v-if="!isEdit"
          >
            <path
              d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"
            />
          </svg>
          <!-- close -->
          <svg
            class="w-6 h-6 text-t-purple hover:text-t-blue"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            v-else
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- divider -->
    <div class="h-0.5 bg-t-pink rounded" />
  </div>
</template>

<style scoped>
</style>