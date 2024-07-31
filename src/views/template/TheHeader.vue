<template>
  <div>
    <Menubar :model="items">
        <template #start>
          <div class="d-flex flex-row">
            <img class="mx-2" src="https://sv.dntu.edu.vn/images/dntu-logo.png" width="40px">
            <h1 class="title">TRƯỜNG ĐẠI HỌC CÔNG NGHỆ ĐỒNG NAI<br>HỆ THỐNG QUẢN LÝ SINH VIÊN</h1>
          </div>
        </template>
        <template #end>
          <Menubar :model="fieldLogin" class='menubar'/>
        </template>     
    </Menubar>
  </div>
  <MenuHeader />
</template>

<script>
import Menubar from 'primevue/menubar';
import MenuHeader from './MenuHeader.vue';
export default {
  name: 'TheHeader',
  components: {
    Menubar,
    MenuHeader
  },

  data() {
    return {
      items: null,
      fieldLogin:  [
                {
                    label: 'Chào mừng: '+ this.name,
                    items: [
                      {
                        label: 'Trang cá nhân',
                        style: 'color: blue;background-color: #fff; text-align: center;padding: 5px',
                      },
                      {
                        label: 'Đổi mật khẩu',
                        style: 'color: blue;background-color: #fff; text-align: center;padding: 5px',
                      },
                      {
                        label: 'Đăng xuất',
                        style: 'color: blue;background-color: #fff; text-align: center;padding: 5px'
                      }
                    ],
                    style: 'font-weight:500;font-size:15px;'
                },
            ],
      name: 'Đinh Hiếu Trọng'
    }
  },
  mounted() {
      this.name= 'Đinh Hiếu Trọng'
    },
}
</script>
<style scoped>
.p-menubar{
  color: #fff;
  background: none repeat scroll 0 0 #007ACC;
  padding: 3px;
  border: none;
  border-radius: 0;
}
.menubar {
  color: #fff;
  background: none repeat scroll 0 0 #007ACC;
  padding: 3px;
  border: none;
  border-radius: 0;
}
.title{
  font-size: 17px;
  margin: 0 
}
.login{
  font-size: 15px;
}
</style>
<style>
.p-menubar-end{
  align-self: flex-end;
}
</style>
