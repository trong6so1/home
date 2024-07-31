<template>
    <div class="d-flex flex-row">
        <div class="leftMenu border-0">
            <TheMenu :fields="items" :title="title" />
        </div>
        <div class="rightMenu d-flex flex-column border border-1 me-3 rounded-3">
            <div class="p-4">
                <h5 class="title">{{ title }}</h5><hr>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import TheMenu from '@/views/component/TheMenu/index.vue';
import { fields } from './fields';
export default {
    name: "Index",
    components: {
        TheMenu
    },
    data() {
        return {
            items: [],
            title: 'Bảng tin'
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