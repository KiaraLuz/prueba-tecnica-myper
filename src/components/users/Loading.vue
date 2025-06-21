<script lang="ts" setup>
import { Skeleton } from "@/components/ui/skeleton";
</script>

<template>
  <tr v-for="i in 5" :key="i">
    <td class="px-4 py-2">
      <Skeleton class="w-full h-5 rounded-full" />
    </td>
    <td class="px-4 py-2">
      <Skeleton class="w-full h-5 rounded-full" />
    </td>
    <td class="px-4 py-2">
      <Skeleton class="w-full h-5 rounded-full" />
    </td>
    <td class="px-4 py-2">
      <Skeleton class="w-full h-5 rounded-full" />
    </td>
    <td class="px-4 py-2">
      <Skeleton class="w-full h-5 rounded-full" />
    </td>
  </tr>
</template>
