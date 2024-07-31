<template>
  <div>
    <TheHeader />
  </div>
  <div>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue'

export default {
  name: 'TheTemplate',
  components: {
    TheHeader
  }
}
</script>
