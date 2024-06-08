<template>
    <div class="sign-up">
        <img class="logo" src="../assets/img/resto.png" alt="">
        <div class="sign-up-title">
            <h1>Sign Up</h1>
        </div>
        <div class="sign-up-form">
            <form @submit.prevent="SignupSubmit">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password">
                <button>Sign Up</button>
                <router-link :to="{name:'login'}">Login</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
    name: 'SignUp',
        data() {
            return {
                name: '',
                email: '',
                password:''
            }
    },
        methods: {
            async SignupSubmit() {
               let result = await axios.post('http://localhost:3000/user', {
                    name: this.name,
                    email: this.email,
                    password: this.password
               });

               if ( result.status == 201 ) {
                   localStorage.setItem('user-info', JSON.stringify(result.data));
                   this.$router.push({name:'home'})
               }

            }
    },
    mounted() {
        let result = localStorage.getItem('user-info');
        if (result) {
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style scoped>
.sign-up-form {
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
.sign-up-form input {
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
.sign-up-form button {
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
