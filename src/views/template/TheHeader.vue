<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img src="https://dsdhome.vn/images/bggianhang/1626312677_bg.png" />
      </template>
    </Menubar>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar'
import { menuData } from './helpers'
export default {
  name: 'TheHeader',
  components: {
    Menubar
  },

  data() {
    return {
      items: null
    }
  },

  created() {
    this.items = menuData
  }
}
</script>
