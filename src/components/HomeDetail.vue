<template>
  <section class="dark:bg-coolGray-800 dark:text-coolGray-100">
    <div class="container flex flex-col mx-auto lg:flex-row">
      <div
        class="w-full lg:w-1/3"
        style="
          background-image: url('https://source.unsplash.com/random/640x480');
          background-position: center center;
          background-size: cover;
        "
      ></div>
      <div class="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-8 h-8 mb-8 dark:text-violet-400"
        >
          <path
            fill-rule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h2 class="text-3xl font-semibold leading-none">
          Modern solutions to all kinds of problems
        </h2>
        <p class="mt-4 mb-8 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          voluptatum rem amet!
        </p>
        <button
          class="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-violet-400 dark:text-coolGray-900"
        >
          Get started
        </button>
      </div>
    </div>
  </section>
  <section class="p-6 dark:bg-coolGray-800 dark:text-coolGray-50 bg-gray-200">
    <form
      novalidate=""
      action=""
      class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
    >
      <fieldset
        class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-coolGray-900"
      >
        <div class="space-y-2 col-span-full lg:col-span-1">
          <p class="font-medium">Personal Inormation</p>
          <p class="text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            fuga autem eum!
          </p>
        </div>
        <div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div class="col-span-full sm:col-span-3">
            <label for="firstname" class="text-sm">First name</label>
            <input
              id="firstname"
              type="text"
              placeholder="First name"
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-3">
            <label for="lastname" class="text-sm">Last name</label>
            <input
              id="lastname"
              type="text"
              placeholder="Last name"
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-3">
            <label for="email" class="text-sm">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
            />
          </div>
          <div class="col-span-full">
            <label for="address" class="text-sm">Address</label>
            <input
              id="address"
              type="text"
              placeholder=""
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-2">
            <label for="city" class="text-sm">City</label>
            <input
              id="city"
              type="text"
              placeholder=""
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-2">
            <label for="state" class="text-sm">State / Province</label>
            <input
              id="state"
              type="text"
              placeholder=""
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
            />
          </div>
          <div class="col-span-full sm:col-span-2">
            <label for="zip" class="text-sm">ZIP / Postal</label>
            <input
              id="zip"
              type="text"
              placeholder=""
              class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-coolGray-700 dark:text-coolGray-900"
            />
          </div>
        </div>
      </fieldset>
    </form>
  </section>
</template>