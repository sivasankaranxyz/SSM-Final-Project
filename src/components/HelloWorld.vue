<template>
  <div>
    <div
      class="w-full bg-cover bg-center"
      style="
        height: 20em;
        background-image: url(https://bungalowliving.imgix.net/home-page/header/header-hero-min.png);
      "
    >
      <div
        class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50"
      >
        <div class="text-center">
          <h1
            class="mb-6 text-2xl font-extrabold leading-none tracking-normal text-white md:text-4xl md:tracking-tight"
          >
            Get back to living
          </h1>
          <h1
            class="mb-6 text-4xl font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight"
          >
            Great homes and a rental experience
          </h1>
          <div class="bg-white rounded-full shadow p-2 flex">
            <span
              class="w-auto flex justify-end items-center text-gray-500 p-2"
            >
              <i class="material-icons text-2xl"></i>
            </span>
            <input
              class="w-full rounded p-2"
              type="text"
              placeholder="Try 'Salem'"
            />
            <button
              class="bg-black hover:bg-gray-700 rounded-full text-white p-2 pl-6 pr-6"
            >
              <p class="font-semibold text-xm">Search</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
