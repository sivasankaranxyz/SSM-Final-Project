<template>
  <div>
    <Header sitename="Investors" />

    <div class="token">
      <div
        class="w-full dark:bg-gray-500"
        style="
          background-image: url('');
          background-position: center center;
          background-blend-mode: multiply;
          background-size: cover;
        "
      >
        <div
          class="container mx-auto flex flex-col flex-wrap content-center justify-center p-4 py-20 md:p-10"
        >
          <h1
            class="text-5xl antialiased font-semibold leading-none text-center text-black"
          >
            SSM Initial Coin Offering
          </h1>
          <p
            class="pt-2 pb-8 text-2xl font-bold antialiased text-center text-black"
          >
            Buy the SSM Token in our Initial Coin Offering to invest in our
            Project
          </p>
          <!-- form -->
          <div class="bg-gray-100 rounded-full shadow p-3 flex">
            <span class="w-auto flex justify-end items-center text-gray-500">
              <i class="material-icons text-2xl"></i>
            </span>
            <input
              class="w-full rounded p-3"
              type="text"
              placeholder="Name"
              v-model="newItemName"
            />
            <input
              class="w-full rounded p-2"
              type="text"
              placeholder="Eth Address"
              v-model="newItemEth"
            />
            <input
              class="w-full rounded p-2"
              type="text"
              placeholder="100 SSM"
              v-model="newItemValue"
            />
            <button
              @click.prevent="addItem"
              class="bg-black hover:bg-gray-700 rounded-full text-white p-2 pl-12 pr-12"
            >
              <p class="font-semibold text-xm p-1">Buy</p>
            </button>
          </div>
          <!--  -->
          <div class="relative pt-3">
            <div class="flex mb-2 items-center justify-between">
              <div>
                <span
                  class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white-600 bg-white"
                >
                  SMM Sold
                </span>
              </div>
              <div class="text-right">
                <span class="text-xs font-semibold inline-block text-gray-900">
                  30%
                </span>
              </div>
            </div>
            <div
              class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200"
            >
              <div
                style="width: 30%"
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-900"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- list of users -->
    <div
      class="text-xl antialiased font-semibold leading-none text-center text-black"
      v-for="Item in Items"
      :key="Item"
    >
      <p
        class="text-xl antialiased font-semibold leading-none text-center text-black"
      >
        hi
      </p>
      <p
        class="text-xl antialiased font-semibold leading-none text-center text-black"
      >
        {{ Item.name }}
      </p>
      <p
        class="text-xl antialiased font-semibold leading-none text-center text-black"
      >
        {{ Item.eth }}
      </p>
      <p
        class="text-xl antialiased font-semibold leading-none text-center text-black"
      >
        {{ Item.value }}
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
// import HomeList from "@/components/HomeList.vue";
import { db } from "../firebase/db";
export default {
  name: "Investors",
  data() {
    return {
      Items: [],
      newItemName: "",
      newItemEth: "",
      newItemValue: "",
    };
  },
  methods: {
    async addItem() {
      if (this.newItemName) {
        await db.collection("Investors").add({
          name: this.newItemName,
          eth: this.newItemEth,
          value: this.newItemValue,
        });
        this.newItemName = "";
        this.newItemEth = "";
        this.newItemValue = "";
      }
    },
  },
  firestore: {
    Investors: db.collection("Investors"),
  },
  components: {
    Header,
    // HelloWorld,
    // HomeList,
  },
};
</script>

<style>
</style>