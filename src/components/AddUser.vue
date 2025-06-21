<script setup>
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormAddUser from "./FormAddUser.vue";

const dialogOpen = ref(false);
</script>

<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <Button variant="default" class="self-start">Añadir</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Añadir Usuario</DialogTitle>
        <DialogDescription> Añade un usuario a la tabla </DialogDescription>
      </DialogHeader>

      <FormAddUser @close="dialogOpen = false" />
    </DialogContent>
  </Dialog>
</template>
