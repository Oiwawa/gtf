<template>
  <nav class="hidden md:block w-24 h-full shadow-md bg-white px-1 absolute">
    <div class="relative">
      <button type="button" class="flex items-center m-5 h-12">
        <img src="/assets/img/home.png" alt="See previous flag">
      </button>
    </div>
    <div class="relative">
      <button type="button" class="flex items-center py-4 px-6 h-20">
        <img src="/assets/img/params.png" alt="See previous flag">
      </button>
    </div>
  </nav>
    <div class="grid place-items-center h-screen bg-black h-screen">
      <div class="">
        <span class="dark:text-white">-- / --</span>
      </div>
      <div>
        <span class="dark:text-white">00:00</span>
      </div>
      <div class="border-2 divide-gray-50 w-auto">
        <img :src="country.flag" class="object-cover" alt="Guess this flag!" id="flag"/>
      </div>
      <div>
        <label for="flag-name">
          <input type="text" id="flag-name" name="flag-name" v-model="answer">
        </label>
      </div>
      <div>
        <button type="submit" v-on:click="sendAnswer(answer)">
          <span class="dark:text-white">Submit</span>
        </button>
      </div>
      <div class="flex space-x-40">
        <button type="button" class="w-12">
          <img src="/assets/img/arrow-left.png" alt="See previous flag">
        </button>
        <button type="button" class="w-12">
          <img src="/assets/img/arrow-right.png" alt="See next flag" v-on:click="goNext">
        </button>
      </div>
    </div>
</template>

<script setup>
import {checkAnswer, fetchFlag} from "./composables/fetch";

const countries = await fetchFlag().then(function (response) {
 let countries = response.data;
  countries.sort(() => Math.random() - 0.5)
 return countries;
})

let number = 0;
let country = countries[number];

const goNext = function() {
  number += 1;
  country = countries[number];
  window.location.reload(true)
}

let answer = '';
const sendAnswer = async function (answer) {
 let params = {
    answer: answer,
    code: country.code
  }

 const isTrue = await checkAnswer(params).then(function (response) {
    return response
  })
  if (isTrue) {
    goNext();
  }
}

</script>
