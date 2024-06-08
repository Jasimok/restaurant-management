<template>
    <Header />
    <div class="updaterest">
        <div class="title">
            <h1>Update Restaurant</h1>
        </div>
        <div class="add-form">
            <form @submit.prevent="UpdateRest">
                <input type="text" placeholder="Enter your Name" v-model="restaurnt.name">
                <input type="text" placeholder="Enter your contact" v-model="restaurnt.contact">
                <textarea v-model="restaurnt.details"></textarea>
                <button class="addrest">Update Restaurant</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import Header from "../components/Header.vue";
export default {
    name: 'UpdateRestaurnt',
    components: {
        Header,
    },
    data() {
        return {
            restaurnt: {
                name: '',
                details: '',
                contact: ''
            }
        }
    },
    async mounted() {
        let result = localStorage.getItem('user-info');
        if (!result) {
            this.$router.push({ name: 'signup' })
        }
        let data = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id);
        this.restaurnt = data.data;

    },
    methods: {
        UpdateRest() {
            axios.post('http://localhost:3000/restaurant' + this.$route.params.id, {
                name: this.restaurnt.name,
                details: this.restaurnt.details,
                contact: this.restaurnt.contact
            }).then((response) => {
                if (response.status == 201) {
                    alert("Data Update Done");
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