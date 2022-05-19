<template>
  <div class="w-24 h-full shadow-md bg-white px-1 absolute">
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
  </div>
    <div class="grid place-items-center h-screen bg-black h-screen">
      <div class="">
        <span class="dark:text-white">-- / --</span>
      </div>
      <div>
        <span class="dark:text-white">00:00</span>
      </div>
      <div class="border-2 divide-gray-50 w-96">
        <img src="/assets/img/uk-flag.png" class="object-cover" alt="Guess this flag!">
      </div>
      <div>
        <label for="flag-name">
          <input type="text" id="flag-name" name="flag-name">
        </label>
      </div>
      <div class="flex space-x-40">
        <button type="button" class="w-12">
          <img src="/assets/img/arrow-left.png" alt="See previous flag">
        </button>
        <button type="button" class="w-12">
          <img src="/assets/img/arrow-right.png" alt="See next flag">
        </button>
      </div>
    </div>
</template>
