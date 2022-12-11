<template>
    <div class="container-fluid">
        <div class="form">
            <div class="text-center">
                <h6><span>Đăng nhập</span> <span>Đăng ký</span></h6>
                <input
                    v-model="isBack"
                    @change="onFlip"
                    type="checkbox"
                    class="checkbox"
                    id="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap">
                    <div class="card-3d-wrapper">
                        <!-- card front -->
                        <div class="card-front">
                            <div class="center-wrap">
                                <h4 class="heading">Đăng nhập</h4>
                                <div class="form-group">
                                    <input
                                        :value="emailInput"
                                        @input="onEmailInput"
                                        type="email"
                                        class="form-style"
                                        placeholder="Email"
                                    />
                                    <i class="input-icon material-icons"
                                        >alternate_email</i
                                    >
                                </div>
                                <div class="form-group">
                                    <input
                                        :value="passwordInput"
                                        @input="onPasswordInput"
                                        type="password"
                                        class="form-style"
                                        placeholder="Mật khẩu"
                                    />
                                    <i class="input-icon material-icons"
                                        >lock</i
                                    >
                                </div>
                                <div class="form-warning">
                                    {{ warningText }}
                                </div>
                                <button href="#" class="btn" @click="onLogin">
                                    Xong
                                </button>
                                <p class="text-center">
                                    <a href="#" class="link">Quên mật khẩu</a>
                                </p>
                            </div>
                        </div>
                        <!-- card back -->
                        <div class="card-back">
                            <div class="center-wrap">
                                <h4 class="heading">Đăng ký</h4>
                                <div class="form-group">
                                    <input
                                        :value="nameInput"
                                        @input="onNameInput"
                                        type="text"
                                        class="form-style"
                                        placeholder="Tên đầy đủ"
                                    />
                                    <i class="input-icon material-icons"
                                        >perm_identity</i
                                    >
                                </div>
                                <div class="form-group">
                                    <input
                                        :value="emailInput"
                                        @input="onEmailInput"
                                        type="email"
                                        class="form-style"
                                        placeholder="Email"
                                    />
                                    <i class="input-icon material-icons"
                                        >alternate_email</i
                                    >
                                </div>
                                <div class="form-group">
                                    <input
                                        :value="passwordInput"
                                        @input="onPasswordInput"
                                        type="password"
                                        class="form-style"
                                        placeholder="Mật khẩu"
                                    />
                                    <i class="input-icon material-icons"
                                        >lock</i
                                    >
                                </div>
                                <div class="form-warning">
                                    {{ warningText }}
                                </div>
                                <button href="#" class="btn" @click="onSignup">
                                    <router-link to="/login">Xong</router-link>
                                </button>
                                <p class="text-normal">
                                    Đã có tài khoản ?
                                    <a href="#" class="link-normal"
                                        >Đăng nhập</a
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login-Register',
    // data: variables
    data() {
        return {
            isBack: false,

            nameInput: '',
            emailInput: '',
            passwordInput: '',

            warningText: '',
        };
    },
    // methods: functions
    methods: {
        onEmailInput(e) {
            this.emailInput = e.target.value;
            if (
                /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(
                    this.emailInput
                )
            ) {
                this.warningText = '';
            } else {
                this.warningText = 'Invalid Email';
            }
        },

        onPasswordInput(e) {
            this.passwordInput = e.target.value;
            if (
                /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
                    this.passwordInput
                )
            ) {
                if (this.warningText != 'Invalid Email') {
                    this.warningText = '';
                }
            } else {
                if (this.warningText != 'Invalid Email') {
                    this.warningText = 'Invalid Password';
                }
            }
        },

        onLogin() {
            console.log('Login...');
            if (this == true) {
                console.log(this.emailInput, this.passwordInput);
            }
        },

        onFlip() {
            this.nameInput = '';
            this.emailInput = '';
            this.passwordInput = '';
            this.warningText = '';
        },

        onNameInput() {},

        onSignup() {
            console.log('Sign Up...');
            if (this === true) {
                window.location.href = 'index.html';
            }
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --background-color-1: #181818;
    --background-color-2: #06060a;
    --text-color: white;
    --primary-color: #fb8122;
    --warning-color: crimson;
}

body {
    font-family: 'Josefin Sans', sans-serif;
    letter-spacing: 1px;
    background: var(--background-color-1);
    background-image: url('https://wallpapercave.com/wp/wp3493594.png');
    background-attachment: fixed;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

a {
    text-decoration: none;
}

.text-center {
    text-align: center;
}

input[type='checkbox'] {
    display: none;
}

h4 {
    font-weight: 600;
    color: var(--text-color);
}

h6 {
    margin-bottom: 30px;
    color: var(--text-color);
}

h6 span {
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
}

.checkbox:checked + label,
.checkbox:not(:checked) + label {
    position: relative;
    display: block;
    width: 60px;
    height: 16px;
    background: var(--primary-color);
    border-radius: 8px;
    margin: 10px auto;
    cursor: pointer;
}

.checkbox:checked + label::before,
.checkbox:not(:checked) + label::before {
    position: absolute;
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: var(--primary-color);
    background-color: var(--text-color);
    top: -10px;
    left: -10px;
    font-family: 'Material Icons';
    content: '\f1e2';
    line-height: 36px;
    text-align: center;
    font-size: 24px;
    transition: all 0.5s ease;
}

.checkbox:checked + label::before {
    transform: translateX(44px) rotate(-270deg);
}

.card-3d-wrap {
    position: relative;
    width: 400px;
    max-width: 100%;
    height: 400px;
    transform-style: preserve-3d;
    perspective: 800px;
    margin-top: 60px;
}

.card-3d-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
    transition: all 600ms ease-out;
}

.card-front,
.card-back {
    width: 100%;
    height: 100%;
    background-color: var(--background-color-2);
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: 300%;
    position: absolute;
    border-radius: 6px;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card-back {
    transform: rotateY(180deg);
}

.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
    transform: rotateY(180deg);
}

.center-wrap {
    position: absolute;
    width: 100%;
    padding: 0 35px;
    top: 50%;
    left: 0;
    transform: translate3d(0, -50%, 35px) perspective(100px);
    z-index: 20;
    display: block;
}

.heading {
    margin-bottom: 30px;
    font-size: 24px;
}

.form-group {
    position: relative;
    display: block;
    margin-bottom: 12px;
}

.form-style {
    padding-left: 55px;
    height: 48px;
    width: 100%;
    font-weight: 500;
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.5px;
    outline: none;
    background: #0f1121;
    color: var(--text-color);
    border: none;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
    transition: all 200ms linear;
}

.form-style:focus,
.form-style:active {
    border: none;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}

.input-icon {
    position: absolute;
    top: 0;
    left: 18px;
    height: 48px;
    font-size: 24px;
    line-height: 48px;
    color: var(--primary-color);
    text-align: left;
}

.form-group input::placeholder {
    color: #c4c3ca;
    opacity: 0.7;
    transition: all 200ms linear;
}

.form-group input:focus::placeholder {
    opacity: 0;
}

.form-warning {
    color: var(--warning-color);
    font-size: 12px;
}
/* Button Login SignUp */
.btn {
    height: 44px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 30px;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: var(--primary-color);
    color: #ffffff;
    margin-top: 15px;
    /* box-shadow: 0 8px 24px 0 rgba(228, 104, 10, 0.2); */
    transition: all 200ms linear;
}

.btn:hover {
    background: #ffffff;
    color: var(--primary-color);
    box-shadow: 0 8px 24px 0 rgba(138, 140, 146, 0.2);
}

/* Forgot password */
.link {
    color: #c4c3ca;
    margin-top: 20px;
    display: block;
}

.text-normal {
    color: #c4c3ca;
    margin-top: 20px;
    display: block;
}

.link-normal {
    color: #c4c3ca;
    display: inline;
}

.link-normal:hover {
    color: var(--primary-color);
}

.link:hover {
    color: var(--primary-color);
}
</style>
