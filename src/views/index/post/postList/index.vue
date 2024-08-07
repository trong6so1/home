<template>
    <div class="p-1">
        <h6 class="title px-2 py-2 fw-bold">Bảng tin</h6><hr class="mt-1">
        <div>
            <div v-for="field of fields" class="d-flex flex-row my-2">
                <div class="border border-1 me-2  py-1 px-3 d-flex flex-column">
                    <span class="m-0 fs-3 text-danger text-center fw-bold">{{field.created_at.getDate().toString().padStart(2, "0")}}</span>
                    <span class="m-0 fs-3 border-top border-3 border-danger w-100 fw-bold text-secondary">{{(field.created_at.getMonth()+1).toString().padStart(2, "0") + '/' + field.created_at.getFullYear()}}</span>
                </div>
                <div>
                    <router-link v-slot="{href}" :to="'/home/postDetail/'+field.id" custom>
                        <a :href="href" class="text-decoration-none text-dark title-post">
                        <span><span class="fw-bold fs-5">{{field.title}}</span> <span v-if="field.isNew">(NEW)</span><span class="fw-100">{{' '+field.created_at}}</span></span>
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostServices from './services.js'
export default {
    name: 'PostList',
    data() {
        return {
            fields : []
        }
    },
    created() {
        const services = new PostServices();
        services.getMaster().then((req) => {
            const fields = req.data.data.map((item)=> {
                return {
                    ...item,
                    created_at : new Date(item.created_at)  
                }
            })
            this.fields = fields
        })
    }
}
</script>
<style scoped>
.title-post :hover{
    color: red
}
</style>