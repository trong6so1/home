<template>
    <div class="p-1">
        <h6 class="title px-2 py-2 fw-bold">Bảng tin</h6><hr class="mt-1">
        <div>
            <div v-for="field of fields" class="d-flex flex-row my-2">
                <div class="border border-1 me-2  py-1 px-3 d-flex flex-column">
                    <span class="m-0 fs-3 text-danger text-center fw-bold">{{field.date.getDate()}}</span>
                    <span class="m-0 fs-3 border-top border-3 border-danger w-100 fw-bold text-secondary">{{field.date.getMonth()+1 + '/' + field.date.getFullYear()}}</span>
                </div>
                <div>
                    <router-link v-slot="{href}" :to="'/home/postDetail/'+field.id" custom>
                        <a :href="href" class="text-decoration-none text-dark title-post">
                        <span><span class="fw-bold fs-5">{{field.title}}</span> <span v-if="field.isNew">(NEW)</span><span class="fw-100">{{' '+field.date}}</span></span>
                        </a>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {fields} from './services.js'
export default {
    name: 'PostList',
    data() {
        return {
            fields : []
        }
    },
    created() {
        fields.forEach(field => {
            field.date= new Date(field.date);
        });
        this.fields = fields;
    }
}
</script>
<style scoped>
.title-post :hover{
    color: red
}
</style>