<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <a href="#">
          <span class="sr-only">SSM Homes</span>
          <img class="h-8 w-auto sm:h-16" src="@/assets/ssmlogo.png" />
        </a>
        <span class="ml-3 text-xl"></span>{{ sitename }}
      </a>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        <router-link
          to="/"
          class="mr-5 text-xl text-gray-900 hover:text-gray-500"
          >Renters</router-link
        >
        <!-- <a class="mr-5 text-xl text-gray-900 hover:text-gray-500">Homeowners</a> -->
        <router-link
          to="/investors"
          class="mr-5 text-xl text-gray-900 hover:text-gray-500"
          >Investors</router-link
        >
      </nav>
      <button
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        Login
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    sitename: String,
  },
};
</script>

<style>
</style>