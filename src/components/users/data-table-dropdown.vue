<script setup lang="ts">
import { MoreHorizontal } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditUser from "@/components/EditUser.vue";

defineProps<{
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}>();

function copy(id: string) {
  navigator.clipboard.writeText(id);
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <EditUser :user="user" />
      <DropdownMenuItem>Eliminar</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
