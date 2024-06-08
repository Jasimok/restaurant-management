<template>
    <Header />
    <div class="addrestaurant">
        <div class="title">
            <h1>Add Restaurant</h1>
        </div>
        <div class="add-form">
            <form @submit.prevent="handlesubmit">
                <input type="text" placeholder="Enter your Name" v-model="name">
                <input type="text" placeholder="Enter your contact" v-model="contact">
                <textarea v-model="details"></textarea>
                <button class="addrest">Add Restaurant</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Header from "../components/Header.vue";
export default {
    name: 'AddRestaurant',
    components: {
        Header,
    },
    data() {
        return {
            name: '',
            details: '',
            contact: ''
        }
    },
    mounted() {
        let result = localStorage.getItem('user-info');
        if (!result) {
            this.$router.push({ name: 'signup' })
        }
    },
    methods: {
        handlesubmit() {
            axios.post('http://localhost:3000/restaurant', {
                name: this.name,
                details: this.details,
                contact: this.contact
            }).then((response) => {
                if (response.status == 201) {
                    alert("Data insert Done");
                    this.$router.push({ name: 'home' });
                }
            }).catch((error) => {
                console.log(error);
            });


        }
    },
}
</script>

<style scoped>
.add-form input {
    display: block;
    height: 40px;
    width: 320px;
    padding: 0px 15px;
    margin-bottom: 15px;
    outline: none;
    box-shadow: none;
}

.add-form textarea {
    width: 320px;
    resize: none;
    height: 100px;
    outline: none;
    box-shadow: none;
    padding: 15px 15px;
    display: block;
}

button.addrest {
    height: 50px;
    width: 350px;
    background: aqua;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    cursor: pointer;
}
</style>