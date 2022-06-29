<template>
  <div>
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
    <div class="grid place-items-center h-screen bg-gray-800 h-screen">
      <div class="">
        <span class="dark:text-white">-- / --</span>
      </div>
      <div>
        <span class="dark:text-white">00:00</span>
      </div>
      <div class="border-2 divide-gray-50 w-auto">
        <img :src="country.flag" class="object-cover" alt="Guess this flag!" id="flag"/>
      </div>
      <div class="relative text-gray-700">
        <input type="text" v-model="answer" v-on:keyup.enter="sendAnswer(answer)"
               class="placeholder:italic placeholder:text-slate-400 w-full h-10 pl- pr-36 text-base placeholder-gray-600 rounded-lg focus:shadow-outline"
               placeholder="What is the country?"/>
        <button type="submit" v-on:click="sendAnswer(answer)"
                class="absolute inset-y-0 right-0 flex items-center px-4 font-bold text-white bg-orange-600 rounded-r-lg hover:bg-red-500 focus:bg-red-700">
          Submit
        </button>
      </div>
      <button v-on:click="goNext" value="next">next</button>
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
let answer = '';
let country = countries[number];
const goNext = function() {
  window.location.reload()
}

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
