<template>
    <div class="d-flex flex-row">
        <div class="leftMenu border-0">
            <TheMenu :fields="items" />
        </div>
        <div class="rightMenu d-flex flex-column border border-1 me-3 rounded-3">
            <router-view/>
        </div>
    </div>
</template>
<script>
import TheMenu from '@/views/component/TheMenu/index.vue';
import { fields } from './fields';
import { ref } from 'vue';

const titleHeader = ref("");
export default {
    name: "TheHome",
    components: { 
        TheMenu
    },
    data() {
        return {
            items: [], 
            title: titleHeader.value
        }
    },
    created() {
        this.items = fields
    }
}
</script>
<style scoped>
.leftMenu {
    width: 15%
}
.rightMenu {
    width: 85%
}
</style>