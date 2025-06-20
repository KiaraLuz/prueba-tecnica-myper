<template>
  <div
    class="flex flex-col bg-background text-foreground min-h-screen font-sans"
  >
    <header
      class="flex w-full text-2xl p-4 items-center justify-center border-b-2 border-border font-bold uppercase text-center bg-card"
    >
      CRUD de Usuarios con Vue.js
    </header>

    <main class="p-6 border-border border-2 rounded-lg m-4 bg-card">
      <slot />
    </main>
  </div>
</template>
