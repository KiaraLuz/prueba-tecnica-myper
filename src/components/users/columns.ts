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
    header: () => h('div', {}, 'Name'),
    cell: ({ row }) => h('div', {}, row.getValue('name')),
  },
  {
    accessorKey: 'username',
    header: () => h('div', {}, 'Username'),
    cell: ({ row }) => h('div', {}, row.getValue('username')),
  },
  {
    accessorKey: 'email',
    header: () => h('div', {}, 'Email'),
    cell: ({ row }) => h('div', {}, row.getValue('email')),
  },
  {
    accessorKey: 'phone',
    header: () => h('div', {}, 'Phone'),
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
