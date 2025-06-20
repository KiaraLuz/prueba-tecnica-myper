<script setup lang="ts">
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
import { Input } from "@/components/ui/input";
import { useUsers } from "@/composables/useUsers";
import { ref } from "vue";

const { userStore } = useUsers();

const name = ref("");
const username = ref("");
const email = ref("");
const phone = ref("");

function handleAddUser() {
  const newUser = {
    id: userStore.users.pop().id + 1,
    name: name.value,
    username: username.value,
    email: email.value,
    phone: phone.value,
  };

  userStore.addUser(newUser);

  name.value = "";
  username.value = "";
  email.value = "";
  phone.value = "";
}
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="default" class="self-start"> Añadir </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Añadir Usuario</DialogTitle>
        <DialogDescription> Añade un usuario a la tabla </DialogDescription>
      </DialogHeader>
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <label>Nombre</label>
          <Input v-model="name" />
          <label>Nombre de usuario</label>
          <Input v-model="username" />
          <label>Correo electrónico</label>
          <Input v-model="email" />
          <label>Teléfono</label>
          <Input v-model="phone" />
        </div>
      </div>
      <DialogFooter class="sm:justify-end">
        <Button variant="default" class="w-auto">Añadir</Button>
        <DialogClose as-child>
          <Button variant="ghost" class="w-auto">Cancelar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
