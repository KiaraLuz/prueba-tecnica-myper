<script setup lang="ts">
import ToogleTheme from "@/components/ToogleTheme.vue";
</script>
<template>
  <div
    class="flex flex-col bg-background text-foreground min-h-screen w-full font-sans"
  >
    <header
      class="relative flex justify-between items-center md:justify-center w-full p-4 border-b-2 border-border bg-card"
    >
      <span
        class="font-bold uppercase text-lg md:text-2xl text-left md:text-center"
      >
        CRUD de Usuarios con Vue.js
      </span>
      <ToogleTheme />
    </header>

    <main class="w-full max-w-4xl mx-auto">
      <slot />
    </main>
  </div>
</template>
