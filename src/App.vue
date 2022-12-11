<template>
    <!-- <login></login> -->
    <side-bar/>
    <div id="main" class="main-content">
        <router-view></router-view>
    </div>
</template>

<script>
// import Login from './components/Login.vue'
import SideBar from './components/SideBar.vue';
export default { 
    name: 'App',
    components: {
        // Login,
        SideBar,
    },

};
</script>
