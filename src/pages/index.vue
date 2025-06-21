<script setup>
import AddUser from "@/components/AddUser.vue";
import Button from "@/components/ui/button/Button.vue";
import DataTable from "@/components/users/data-table.vue";
import { useUserStore } from "@/stores/userStore";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { users, isLoading } = storeToRefs(userStore);
</script>

<template>
  <div
    class="border-border border-2 rounded-lg m-6 p-6 bg-card flex flex-col gap-4"
  >
    <h1 class="text-xl font-bold">Listado de Usuarios</h1>
    <AddUser />

    <div class="overflow-x-auto">
      <DataTable :users="users" :loading="isLoading" />
    </div>
  </div>
</template>
