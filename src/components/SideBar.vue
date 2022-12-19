<template>
    <nav class="sidebar" :class="isNavClose ? 'close' : ''">
        <!-- Header: Group's name and Logo -->
        <header>
            <div class="image-text">
                <span class="image">
                    <img @mouseover="openNav" src="img/logo_small.png" alt="" />
                </span>
                <div class="text logo-text">
                    <span class="name"
                        >Nhóm <span class="groupname">14</span></span
                    >
                    <span class="profession">Quản lý học sinh</span>
                </div>
            </div>
            <i @click="closeNav" class="bx bx-chevron-right toggle"></i>
        </header>
        <!-- Menu bar -->
        <div class="menu-bar">
            <div class="menu">
                <!-- Home -->
                <ul class="menu-links">
                    <router-link :to="userType != 0 ? '/home' : '/'">
                        <li class="nav-link">
                            <label
                                @click="onTagClicked($event, userType != 0, 0)"
                                :class="currentTab === 0 ? 'current-nav' : ''"
                            >
                                <i class="bx bx-home-alt icon"></i>
                                <span class="text nav-text">Trang chủ</span>
                            </label>
                        </li>
                    </router-link>
                    <!-- Tra cứu -->
                    <router-link :to="userType >= 1 ? '/search' : '/'">
                        <li class="nav-link">
                            <label
                                @click="onTagClicked($event, userType >= 1, 1)"
                                :class="currentTab === 1 ? 'current-nav' : ''"
                            >
                                <i class="bx bx-search-alt icon"></i>
                                <span class="text nav-text">Tra cứu</span>
                            </label>
                        </li>
                    </router-link>
                    <!-- Giáo vụ -->
                    <router-link :to="userType >= 2 ? '/management' : (userType >= 1 ? '/home' : '/')">
                        <li class="nav-link">
                            <label
                                @click="onTagClicked($event, userType >= 2, 2)"
                                :class="currentTab === 2 ? 'current-nav' : ''"
                            >
                                <i class="bx bx-edit icon"></i>
                                <span class="text nav-text">Quản lý</span>
                            </label>
                        </li>
                    </router-link>
                    <!-- Quy định -->
                    <router-link :to="userType >= 3 ? '/regulation' : (userType >= 1 ? '/home' : '/')">
                        <li class="nav-link">
                            <label
                                @click="onTagClicked($event, userType >= 3, 3)"
                                :class="currentTab === 3 ? 'current-nav' : ''"
                            >
                                <i class="bx bx-key icon"></i>
                                <span class="text nav-text">Quy định</span>
                            </label>
                        </li>
                    </router-link>
                    <!-- Thông tin -->
                    <router-link :to="userType != 0 ? '/about' : '/'">
                        <li class="nav-link">
                            <label
                                @click="onTagClicked($event, userType != 0, 4)"
                                :class="currentTab === 4 ? 'current-nav' : ''"
                            >
                                <i class="bx bx-info-circle icon"></i>
                                <span class="text nav-text">Thông tin</span>
                            </label>
                        </li>
                    </router-link>
                </ul>
            </div>

            <div class="bottom-content">
                <!-- Quên mật khẩu -->
                <router-link style="text-decoration: none" :to="userType != 0 ? '/resetpassword' : '/'">
                    <li class="reset">
                        <label @click="onResetPassword">
                            <i class="bx bx-lock-open icon"></i>
                            <span class="text nav-text">Đổi mật khẩu</span>
                        </label>
                    </li>
                </router-link>
                <!-- Đăng xuất -->
                <li class="signout">
                    <label @click="onLogOut">
                        <i class="bx bx-log-out icon"></i>
                        <span class="text nav-text">Đăng xuất</span>
                    </label>
                </li>
                <!-- Dark/Light mode -->
                <li class="mode">
                    <div class="sun-moon">
                        <i class="bx bx-moon icon moon"></i>
                        <i class="bx bx-sun icon sun"></i>
                    </div>
                    <span class="mode-text text">{{
                        this.isDarkMode ? 'Chế độ sáng' : 'Chế độ tối'
                    }}</span>
                    <div @click="changeMode" class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
            </div>
        </div>
    </nav>
</template>

<script>

import { app } from '../main';
const body = document.querySelector('body');

export default {
    name: 'SideBar',
    props: ['tabname'],
    data() {
        return {
            userName: '',
            userType: 0,
            isDarkMode: false,
            isNavClose: false,
            currentTab: 0,
        };
    },
    computed: {
        getTabName() {
            return 0;
        },
    },
    beforeMount () {
        this.changeMode();
    },
    methods: {
        changeMode() {
            this.isDarkMode = !this.isDarkMode;
            body.classList.toggle('dark');
        },
        closeNav() {
            this.isNavClose = true;
            document.getElementById('main').className = 'main-content close';
        },
        openNav() {
            if (this.isNavClose) {
                this.isNavClose = false;
                document.getElementById('main').className = 'main-content';
            }
        },
        onLogOut() {
            let text = 'Are you sure want to Log out?';
            if (confirm(text) == true) {
                this.currentTab = 0;
                app.config.globalProperties.gUserName = '';
                app.config.globalProperties.gUserType = 0;
                this.userName = '';
                this.userType = 0;
                this.$router.push('/login');
            }
        },
        onResetPassword() {
            // g_userName = '';
            // g_isDarkMode = true;
            // g_isNavClose = false;
            // this.$tabName = 'Login';
            // alert('You are signed out');
            // window.location.href = 'login.html';
        },
        onTagClicked(e, enable, param1) {
            this.userName = this.gUserName;
            this.userType = this.gUserType;
            if (enable) {
                let tagNumber = parseInt(param1);
                if (tagNumber >= 0 && tagNumber <= 4) {
                    this.currentTab = tagNumber;
                }
                if (this.isNavClose) {
                    document.getElementById('main').className = 'main-content close';
                } else {
                    document.getElementById('main').className = 'main-content';
                }
            } else {
                this.currentTab = 0;
                
                if (this.isNavClose) {
                    document.getElementById('main').className = 'main-content close';
                } else {
                    document.getElementById('main').className = 'main-content';
                }
            }
        },
        changeUser(param) {
            console.log("param: ",param[0], param[1])
            // this.userName = param[0];
            // this.userType = param[1];
        }
    },
};
</script>
<style scoped>
/* ===== Sidebar ===== */
ul a {
    text-decoration: none;
}

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background: var(--sidebar-color);
    transition: var(--tran-05);
    z-index: 100;
}

.sidebar.close {
    width: 88px;
}

/* ===== Reusable code - Here ===== */
.sidebar li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.sidebar header .image,
.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
}

.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.sidebar .text,
.sidebar .icon {
    color: var(--text-color);
    transition: var(--tran-03);
}

.sidebar .text {
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
}

.sidebar.close .text {
    opacity: 0;
}

/* =========================== */

.sidebar header {
    position: relative;
}

.sidebar header .image-text {
    display: flex;
    align-items: center;
}

.sidebar header .logo-text {
    display: flex;
    flex-direction: column;
}

.sidebar .image-text .name {
    margin-top: 2px;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 5px;
}

.sidebar .image-text .groupname {
    font-family: 'Kumar One Outline', cursive;
}

.sidebar .image-text .name ::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-bottom: 4px solid var(--primary-color);
    border-left: 4px solid var(--primary-color);
    bottom: -3px;
    left: -2px;
}

.sidebar .image-text .name ::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-top: 4px solid var(--primary-color);
    border-right: 4px solid var(--primary-color);
    top: 0;
    right: 20px;
}

.sidebar .image-text .profession {
    font-size: 16px;
    margin-top: -2px;
    display: block;
}

.sidebar header .image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar header .image img {
    width: 40px;
    border-radius: 6px;
}

.sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: var(--primary-color);
    color: var(--sidebar-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-05);
}

body.dark .sidebar header .toggle {
    color: var(--text-color);
}

.sidebar.close .toggle {
    display: none;
}

.sidebar .menu {
    margin-top: 40px;
}

.sidebar li label {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
}

.sidebar li label:hover {
    background-color: var(--hover-color);
}

.sidebar li label:hover .icon,
.sidebar li label:hover .text {
    color: var(--sidebar-color);
}

body.dark .sidebar li label:hover .icon,
body.dark .sidebar li label:hover .text {
    color: var(--text-color);
}

.sidebar .menu-bar {
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
}

.menu-bar::-webkit-scrollbar {
    display: none;
}

.sidebar .menu-bar .mode {
    border-radius: 6px;
    position: relative;
    transition: var(--tran-05);
}

.menu-bar .mode .sun-moon {
    height: 50px;
    width: 60px;
}

.mode .sun-moon i {
    position: absolute;
}

.mode .sun-moon i.sun {
    opacity: 0;
}

body.dark .mode .sun-moon i.sun {
    opacity: 1;
}

body.dark .mode .sun-moon i.moon {
    opacity: 0;
}

.menu-bar .bottom-content .toggle-switch {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
}

.toggle-switch .switch {
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: var(--primary-color);
    transition: var(--tran-05);
}

.switch::before {
    content: '';
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: var(--sidebar-color);
    transition: var(--tran-04);
}

body.dark .switch::before {
    left: 20px;
}

.sidebar .menu-bar .current-nav {
    border-radius: 6px;
    background-color: var(--primary-color);
}

.sidebar .menu-bar .current-nav span {
    color: white;
}

.sidebar .menu-bar .current-nav i {
    color: white;
}

.sidebar .menu-bar .current-nav:hover {
    background-color: var(--selected-hover-color);
}
</style>
