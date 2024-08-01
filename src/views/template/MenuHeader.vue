<template>
    <div>
        <Menubar :model="items">
            <template #item="{ item, props }">
                <div class="d-flex flex-column justify-content-center align-items-center fw-bold text-primary p-2 mx-4" >
                    <span :class="item.icon"  class="fs-3"/>
                    <span class="ml-2">{{ item.label }}</span>
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
            items: [
                {
                    label: 'Trang chủ',
                    icon: 'pi pi-home'
                },
                {
                    label: 'Chia sẻ',
                    icon: 'pi pi-comments'
                },
                {
                    label: 'KQ học tập',
                    icon: 'pi  pi-clipboard'
                },
                {
                    label: 'TKB',
                    icon: 'pi pi-stopwatch'
                },
                {
                    label: 'Lịch thi',
                    icon: 'pi pi-calendar'
                },
                {
                    label: 'Tài khoản',
                    icon: 'pi pi-credit-card'
                },
                {
                    label: 'Lớp học',
                    icon: 'pi pi-calculator'
                },
                {
                    label: 'Cá nhân',
                    icon: 'pi pi-face-smile'
                },
                {
                    label: 'Đăng ký HP',
                    icon: 'pi pi-key'
                },
                {
                    label: 'Đánh giá RL',
                    icon: 'pi pi-map'
                },
                {
                    label: 'Tiện ích',
                    icon: 'pi pi-lightbulb'
                },
            ],
        }
    },
}
</script>
<style scoped>
.p-menubar{
    border: none
}

</style>