<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { toTypedSchema } from "@vee-validate/yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/composables/useUsers";
import { toast } from "vue-sonner";
import { computed } from "vue";

const props = defineProps();

const initialValues = computed(() => ({
  name: props.user.name,
  username: props.user.username,
  email: props.user.email,
  phone: props.user.phone,
}));

const emit = defineEmits(["close"]);

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

const { userStore } = useUsers();

function handleEditUser(values) {
  try {
    userStore.editUser({
      id: props.user.id,
      ...values,
    });

    toast("Usuario actualizado", {
      description: `${values.name} fue editado correctamente`,
    });
  } catch (err) {
    toast.error("Error al editar usuario");
  } finally {
    emit("close");
  }
}
</script>

<template>
  <Form
    :validation-schema="schema"
    :initial-values="initialValues"
    @submit="handleEditUser"
    class="grid gap-4"
  >
    <div class="grid gap-4">
      <div class="grid gap-1">
        <label>Nombre</label>
        <Field name="name" v-slot="{ field }">
          <Input
            v-bind="field"
            :value="field.value"
            @input="field.value = $event.target.value"
          />
        </Field>
        <ErrorMessage name="name" class="text-destructive text-sm" />
      </div>

      <div class="grid gap-1">
        <label>Nombre de usuario</label>
        <Field name="username" v-slot="{ field }">
          <Input
            v-bind="field"
            :value="field.value"
            @input="field.value = $event.target.value"
          />
        </Field>
        <ErrorMessage name="username" class="text-destructive text-sm" />
      </div>

      <div class="grid gap-1">
        <label>Correo electrónico</label>
        <Field name="email" v-slot="{ field }">
          <Input
            v-bind="field"
            :value="field.value"
            @input="field.value = $event.target.value"
          />
        </Field>
        <ErrorMessage name="email" class="text-destructive text-sm" />
      </div>

      <div class="grid gap-1">
        <label>Teléfono</label>
        <Field name="phone" v-slot="{ field }">
          <Input
            v-bind="field"
            :value="field.value"
            @input="field.value = $event.target.value"
          />
        </Field>
        <ErrorMessage name="phone" class="text-destructive text-sm" />
      </div>
    </div>

    <div class="sm:justify-end flex gap-2 pt-4">
      <Button type="submit" class="w-auto">Guardar</Button>
      <Button
        type="button"
        variant="ghost"
        class="w-auto"
        @click="emit('close')"
        >Cancelar</Button
      >
    </div>
  </Form>
</template>
