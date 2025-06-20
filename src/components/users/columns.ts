import type { ColumnDef } from '@tanstack/vue-table'
import { h } from 'vue'
import DropdownAction from '@/components/users/data-table-dropdown.vue'
import type { User } from '@/interfaces/User'

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: () => h('div', {}, 'ID'),
    cell: ({ row }) => h('div', {}, row.getValue('id')),
  },
  {
    accessorKey: 'name',
    header: () => h('div', {}, 'Nombre'),
    cell: ({ row }) => h('div', {}, row.getValue('name')),
  },
  {
    accessorKey: 'username',
    header: () => h('div', {}, 'Nombre de usuario'),
    cell: ({ row }) => h('div', {}, row.getValue('username')),
  },
  {
    accessorKey: 'email',
    header: () => h('div', {}, 'Correo electrónico'),
    cell: ({ row }) => h('div', {}, row.getValue('email')),
  },
  {
    accessorKey: 'phone',
    header: () => h('div', {}, 'Teléfono'),
    cell: ({ row }) => h('div', {}, row.getValue('phone')),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, {
        user,
        onExpand: row.toggleExpanded,
      }))
    },
  },
]
