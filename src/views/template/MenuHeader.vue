<template>
    <div>
        <Menubar :model="items">
            <template #item="{ item, props }">
                <div >
                    <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                        <a :href="href"  
                        :class="path.includes(item.parentRoute) ? 'text-danger' : ''"
                        class="d-flex flex-column justify-content-center align-items-center fw-bold text-primary p-2 mx-4" 
                        @click.prevent="ChangeTitle(item.label,navigate)" 
                        v-bind="props.action"
                        >
                            <span :class="item.icon"  class="fs-3"/>
                            <span class="ml-2">{{ item.label }}</span>
                        </a>
                    </router-link>
                </div>
            </template>  
        </Menubar>
    </div>
</template>
<script>
import Menubar from 'primevue/menubar';
export default {
    components: {
        Menubar,
    },
    name: 'MenuHeader',
    data() {
        return {
            path: "",
            items: [
                {
                    label: 'Trang chủ',
                    icon: 'pi pi-home',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'Chia sẻ',
                    icon: 'pi pi-comments',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'KQ học tập',
                    icon: 'pi  pi-clipboard',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'TKB',
                    icon: 'pi pi-stopwatch',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'Lịch thi',
                    icon: 'pi pi-calendar',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'Tài khoản',
                    icon: 'pi pi-credit-card',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'Lớp học',
                    icon: 'pi pi-calculator',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'Cá nhân',
                    icon: 'pi pi-face-smile',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'Đăng ký HP',
                    icon: 'pi pi-key',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'Đánh giá RL',
                    icon: 'pi pi-map',
                    route: '/home/index',
                    parentRoute: 'home',
                },
                {
                    label: 'Tiện ích',
                    icon: 'pi pi-lightbulb',
                    parentRoute: 'home',
                },
            ],
        }
    },

    methods: {
        ChangeTitle(title,navigate) {
            this.title = title;
            navigate();
        }
    },
    created() {
        this.path = this.$route.path;
    }
}
</script>
<style scoped>
.p-menubar{
    border: none
}

</style>