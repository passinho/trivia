<template>
  <button type="button" class="hide px-1 py-1 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded-full hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
  @click="manage()"
  >Mg</button>
  <Loader v-if="store.loading"></Loader>
  <div v-else class="w-11/12 mx-auto grid grid-cols-1 gap-y-8 lg:w-5/12">
    <h1 class="text-center text-3xl my-12 font-bold">
    SHOW<span class="text-purple-500"> RURAL</span>
    </h1>
    <div class="relative mb-6">

      <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
          <div class="flex">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              @
            </span>
            <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk">
          </div>

        <label for="input-group-1" class="block mt-9 mb-2 text-sm font-medium text-gray-900      dark:text-white">E-mail</label>

          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input type="email" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com">
          </div>
      </div>
    
    <button
      class="px-12 py-4 bg-gray-600 text-white text-lg rounded-lg hover:bg-gray-700 transition w-full"
      @click="startQuiz($event)"
    >
      Iniciar quiz
    </button>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import Loader from './Loader.vue';
  import { store } from '.././store';
  

  // const categories = ref(null);
  // const selectedCategory = ref(null);
  // //const difficulties = ref(['fácil', 'medio', 'difícil']);
  // const selectedDifficulty = ref('fácil');
  // const option = {"trivia_categories":[{"id":9,"name":"Geral"},{"id":10,"name":" Books"},{"id":11,"name":" Film"},{"id":12,"name":" Music"},{"id":13,"name":"Musicals & Theatres"},{"id":14,"name":"Television"},{"id":15,"name":"Video Games"},{"id":16,"name":"Board Games"}]};

  onMounted(() => {
      store.loading = false;
  });

  function manage() {
      store.manage()
  }

  function startQuiz() {

    store.startQuiz();
   
  }
</script>



