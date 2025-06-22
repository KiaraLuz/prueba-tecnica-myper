<script setup lang="ts">
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { User } from "@/interfaces/User";
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { toast } from "vue-sonner";

const userStore = useUserStore();
const dialogOpen = ref(false);

const props = defineProps<{
  user: User;
}>();

function handleDeleteUser(values: any) {
  try {
    userStore.deleteUser(props.user.id);
    toast("Usuario eliminado", {
      description: `${values.name} fue eliminado correctamente`,
    });
  } catch (error) {
    toast.error("Error al eliminar usuario");
  } finally {
    dialogOpen.value = false;
  }
}
</script>

<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger as-child>
      <span
        class="focus:bg-accent focus:text-accent-foreground relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm"
        >Eliminar</span
      ></DialogTrigger
    >
    <DialogContent class="sm:max-w-md text-foreground border-0">
      <DialogHeader>
        <DialogTitle>Eliminar Usuario</DialogTitle>
        <DialogDescription
          >Confirma la eliminación del usuario</DialogDescription
        >
      </DialogHeader>

      <div class="sm:justify-end flex gap-2">
        <Button
          @click="handleDeleteUser(user)"
          class="w-auto"
          variant="destructive"
          >Eliminar</Button
        >
        <Button variant="ghost" @click="dialogOpen = false" class="w-auto"
          >Cancelar</Button
        >
      </div>
    </DialogContent>
  </Dialog>
</template>
