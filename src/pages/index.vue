<script setup>
import AddUser from "@/components/AddUser.vue";
import Loading from "@/components/Loading.vue";
import Button from "@/components/ui/button/Button.vue";
import DataTable from "@/components/users/data-table.vue";
import { useUsers } from "@/composables/useUsers";

const { userStore } = useUsers();
</script>

<template>
  <div
    class="border-border border-2 rounded-lg m-6 p-6 bg-card flex flex-col gap-4"
  >
    <h1 class="text-xl font-bold">Listado de Usuarios</h1>
    <AddUser />
    <div v-if="userStore.isLoading">
      <Loading />
    </div>

    <div v-else class="overflow-x-auto">
      <DataTable :users="userStore.users" />
    </div>
  </div>
</template>
