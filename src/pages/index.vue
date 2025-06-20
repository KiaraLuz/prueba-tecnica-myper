<script setup>
import DataTable from "@/components/users/data-table.vue";
import { useUsers } from "@/composables/useUsers";

const { userStore } = useUsers();
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Listado de Usuarios</h1>
    <div v-if="userStore.isLoading">Cargando...</div>

    <div v-else>
      <DataTable :users="userStore.users" />
    </div>
  </div>
</template>
