<template>
    <div class="login-page">
        <img class="logo" src="../assets/img/resto.png" alt="">
        <div class="sign-up-title">
            <h1>Login Page</h1>
        </div>
        <div class="login-form">
            <form @submit.prevent="LoginSubmit">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password">
                <button>Sign Up</button>
                <router-link :to="{ name: 'signup' }">Sign up</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        LoginSubmit() {
            try {
                const login = axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);

                if (login.status === 200 && login.data.length > 0) {
                    localStorage.setItem('user-info', JSON.stringify(login.data[0]));
                    this.$router.push({ name: 'home' });
                } else {
                    // Handle invalid login
                    alert('Invalid email or password');
                }
            } catch (error) {
                // Handle error
                console.error(error);
                alert('An error occurred while logging in');
            }
        }
    },
    mounted() {
        let result = localStorage.getItem('user-info');
        if (result) {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>

<style scoped>
.login-form {
    display: flex;
    justify-content: center;
}

.sign-up-title h1 {
    text-align: center;
    font-size: 28px;
    font-weight: 700;
}

img.logo {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    display: block;
}

.login-form input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
    outline: none;
    box-shadow: none;
}

.login-form button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
    margin: 0 auto;
    display: block;
}
</style>