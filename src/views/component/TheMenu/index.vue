<template>
  <div>
    <Menu :model="items" class="border-0">
      <template #item="{ item }">
        <div class="d-flex flex-row">
          <span class="pi pi-tags align-self-center me-3 text-warning"></span>
          <h5 class="fs-6" :style="item.label == this.title ? styleTitleActive : ''">{{ item.label }}</h5>
        </div>
      </template>
    </Menu>
  </div>
</template>
<script>
import Menu from "primevue/menu";
export default {
  name: "TheMenu",
  components: {
    Menu,
  },
  props: {
    fields: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    title: {
        type: String,
        required: true,
        default() {
            return ""
        }
    }
  },
  data() {
    return {
      items: this.fields,
      styleTitleActive: {
        color: "red"
      }
    };
  },
};
</script>