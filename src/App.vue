<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { useUserStore } from "./stores/userStore";

const userStore = useUserStore();
userStore.fetchUsers();
</script>

<template>
  <div>
    <Toaster class="pointer-events-auto" />
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </div>
</template>
