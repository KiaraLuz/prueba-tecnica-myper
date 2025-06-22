<script setup lang="ts">
import { ref } from "vue";
import type { User } from "@/interfaces/User";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import FormEditUser from "./FormEditUser.vue";

const dialogOpen = ref(false);

const props = defineProps<{
  user: User;
}>();
const { user } = props;
</script>

<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <span
        class="focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm"
        >Editar</span
      ></DialogTrigger
    >
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Editar Usuario</DialogTitle>
        <DialogDescription>Edita los datos del usuario</DialogDescription>
      </DialogHeader>

      <FormEditUser v-if="user" :user="user" @close="dialogOpen = false" />
    </DialogContent>
  </Dialog>
</template>
