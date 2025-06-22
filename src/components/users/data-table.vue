<script setup lang="ts">
import { ref, watch } from "vue";
import type { User } from "@/interfaces/User";
import { columns } from "./columns";
import {
  getPaginationRowModel,
  getCoreRowModel,
  useVueTable,
  FlexRender,
  getFilteredRowModel,
  type ColumnFiltersState,
} from "@tanstack/vue-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { valueUpdater } from "@/lib/utils";
import Loading from "./Loading.vue";

const props = defineProps<{
  users: User[];
  loading: boolean;
}>();

const columnFilters = ref<ColumnFiltersState>([]);
const tableData = ref<User[]>([...props.users]);

watch(
  () => props.users,
  (newUsers) => {
    tableData.value = [...newUsers];
  },
  { immediate: true, deep: true }
);

const table = useVueTable({
  get data() {
    return tableData.value;
  },
  get columns() {
    return columns;
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  onColumnFiltersChange: (updaterOrValue) =>
    valueUpdater(updaterOrValue, columnFilters),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get columnFilters() {
      return columnFilters.value;
    },
  },
});
</script>

<template>
  <div class="rounded-md bg-card flex flex-col gap-4">
    <Input
      class="max-w-sm"
      placeholder="Buscar nombre..."
      :model-value="table.getColumn('name')?.getFilterValue() as string"
      @update:model-value="table.getColumn('name')?.setFilterValue($event)"
    />

    <Table>
      <TableHeader>
        <TableRow
          v-for="headerGroup in table.getHeaderGroups()"
          :key="headerGroup.id"
        >
          <TableHead v-for="header in headerGroup.headers" :key="header.id">
            <FlexRender
              v-if="!header.isPlaceholder"
              :render="header.column.columnDef.header"
              :props="header.getContext()"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <template v-if="table.getRowModel().rows?.length && !loading">
          <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
            <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
              <FlexRender
                :render="cell.column.columnDef.cell"
                :props="cell.getContext()"
              />
            </TableCell>
          </TableRow>
        </template>
        <template v-else-if="loading">
          <Loading />
        </template>
        <template v-else>
          <TableRow>
            <TableCell :colspan="columns.length" class="text-center py-4">
              No hay resultados.
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>

    <div class="flex items-center justify-end space-x-2">
      <Button
        variant="ghost"
        size="sm"
        :disabled="!table.getCanPreviousPage()"
        @click="table.previousPage()"
      >
        Anterior
      </Button>
      <Button
        variant="outline"
        size="sm"
        :disabled="!table.getCanNextPage()"
        @click="table.nextPage()"
      >
        Siguiente
      </Button>
    </div>
  </div>
</template>
