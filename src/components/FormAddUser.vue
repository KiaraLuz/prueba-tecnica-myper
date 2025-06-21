<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/composables/useUsers";
import { toast } from "vue-sonner";
import { ref } from "vue";

const emit = defineEmits(["close"]);

const { userStore } = useUsers();

const schema = toTypedSchema(
  yup.object({
    name: yup.string().required("Campo obligatorio"),
    username: yup.string().required("Campo obligatorio"),
    email: yup.string().email("Correo inválido").required("Campo obligatorio"),
    phone: yup
      .string()
      .min(6, "Teléfono inválido")
      .required("Campo obligatorio"),
  })
);

function handleAddUser(values) {
  const lastId = userStore.users.length
    ? Math.max(...userStore.users.map((u) => u.id))
    : 0;

  const newUser = {
    id: lastId + 1,
    ...values,
  };

  try {
    userStore.addUser(newUser);
    toast("Usuario añadido correctamente", {
      description: `${values.name} fue agregado`,
    });
  } catch (error) {
    toast.error("Error al agregar usuario");
  } finally {
    emit("close");
  }
}
</script>

<template>
  <Form :validation-schema="schema" @submit="handleAddUser">
    <div class="grid gap-4">
      <div class="grid gap-1">
        <label>Nombre</label>
        <Field name="name" v-slot="{ field }">
          <Input v-bind="field" />
        </Field>
        <ErrorMessage name="name" class="text-destructive text-sm" />
      </div>

      <div class="grid gap-1">
        <label>Nombre de usuario</label>
        <Field name="username" v-slot="{ field }">
          <Input v-bind="field" />
        </Field>
        <ErrorMessage name="username" class="text-destructive text-sm" />
      </div>

      <div class="grid gap-1">
        <label>Correo electrónico</label>
        <Field name="email" v-slot="{ field }">
          <Input v-bind="field" />
        </Field>
        <ErrorMessage name="email" class="text-destructive text-sm" />
      </div>

      <div class="grid gap-1">
        <label>Teléfono</label>
        <Field name="phone" v-slot="{ field }">
          <Input v-bind="field" />
        </Field>
        <ErrorMessage name="phone" class="text-destructive text-sm" />
      </div>
    </div>

    <div class="sm:justify-end flex gap-2 pt-4">
      <Button type="submit" class="w-auto">Añadir</Button>
      <Button variant="ghost" class="w-auto" @click="emit('close')"
        >Cancelar</Button
      >
    </div>
  </Form>
</template>
