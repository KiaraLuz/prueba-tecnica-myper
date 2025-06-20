<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";
import DefaultLayout from "@/layout/DefaultLayout.vue";
</script>

<template>
  <div>
    <Toaster />
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </div>
</template>
