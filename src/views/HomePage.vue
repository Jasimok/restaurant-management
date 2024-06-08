<template>
    <Header />
    <div class="homepage">
        <h1>Hello {{ name }} Welcome</h1>
    </div>
    <table>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Details</td>
            <td>Contact</td>
            <td>Actions</td>
        </tr>
        <tr v-for="(item, index) in restaurant" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.details }}</td>
            <td>{{ item.contact }}</td>
            <router-link :to="{ name: 'update', params: { id: item.id } }">
                <td>Update</td>
            </router-link>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import Header from "../components/Header.vue";
export default {
    components: {
        Header,
    },
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurant: []
        }
    },
    async mounted() {
        let result = localStorage.getItem('user-info');
        this.name = JSON.parse(result).name;
        if (!result) {
            this.$router.push({ name: 'signup' })
        }
        let restaurnt = await axios.get('http://localhost:3000/restaurant');
        this.restaurant = restaurnt.data;
    }
}
</script>

<style scoped>
table {
    width: 100%;
}
</style>