<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    @click="toggleDark()"
    class="relative md:absolute md:top-5 md:right-4 w-10 h-6 bg-primary rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out flex items-center"
  >
    <span
      class="w-4 h-4 bg-background rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
      :class="{ 'translate-x-4': isDark, 'translate-x-0': !isDark }"
    />
  </button>
</template>
