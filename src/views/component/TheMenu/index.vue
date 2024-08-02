<template>
  <div>
    <Menu :model="items" class="border-0">
      <template #item="{ item, props }">
        <div>
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href"  
            :style="title == item.label ? styleTitleActive : ''"
            class="d-flex flex-row p-0" 
            @click.prevent="ChangeTitle(item.label,navigate)" 
            v-bind="props.action"
            >
              <span class="pi pi-tags fs-6 me-3 text-warning"></span>
              <div class="d-flex flex-row">
                <h5 class="fs-6">{{ item.label }}</h5>
                <Tag severity="secondary" :value="item.tag" v-if="item.tag"></Tag>
              </div>
            </a>
          </router-link>
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
  },
  data() {
    return {
      items: this.fields,
      title: '',
      styleTitleActive: {
        color: "red",
        background: "#f3f3f3"
      }
    };
  },
  methods: {
    ChangeTitle(title,navigate){
      this.title = title
      navigate();
    }
  },
};
</script>