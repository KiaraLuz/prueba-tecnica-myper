<script setup lang="ts">
import { MoreHorizontal } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditUser from "@/components/EditUser.vue";
import DeleteUser from "@/components/DeleteUser.vue";
import type { User } from "@/interfaces/User";

defineProps<{
  user: User;
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>Acciones</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <EditUser :user="user" />
      <DeleteUser :user="user" />
    </DropdownMenuContent>
  </DropdownMenu>
</template>
