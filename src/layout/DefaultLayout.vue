<template>
  <div
    class="flex flex-col bg-background text-foreground min-h-screen w-full font-sans"
  >
    <header
      class="flex w-full text-2xl p-4 items-center justify-center border-b-2 border-border font-bold uppercase text-center bg-card"
    >
      CRUD de Usuarios con Vue.js
    </header>

    <main class="w-full max-w-4xl mx-auto px-4 py-6">
      <slot />
    </main>
  </div>
</template>
