<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormEditUser from "./FormEditUser.vue";

const props = defineProps();

const dialogOpen = ref(false);
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

      <FormEditUser :user="props.user" @close="dialogOpen = false" />
    </DialogContent>
  </Dialog>
</template>
