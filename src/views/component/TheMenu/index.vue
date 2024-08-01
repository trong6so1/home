<template>
  <div>
    <Menu :model="items" class="border-0">
      <template #item="{ item }">
        <div class="d-flex flex-row" :style="item.label == this.title ? styleTitleActive : ''">
          <span class="pi pi-tags fs-6 me-3 text-warning"></span>
          <div class="d-flex flex-row">
            <h5 class="fs-6">{{ item.label }}</h5>
            <Tag severity="secondary" :value="item.tag" v-if="item.tag"></Tag>
          </div>
        </div>
      </template>
    </Menu>
  </div>
</template>
<script>
import Menu from "primevue/menu";
import Tag from "primevue/tag";

export default {
  name: "TheMenu",
  components: {
    Menu,
    Tag
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
        color: "red",
        background: "#f3f3f3"
      }
    };
  },
};
</script>