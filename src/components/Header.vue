<template>
    <nav class="main-menu">
        <div class="menu-logo">
            <img class="logo" src="../assets/img/resto.png" alt="">
        </div>
        <div class="nav-menu">
            <ul>
                <router-link :to="{ name: 'home' }">
                    <li>Home</li>
                </router-link>
                <router-link :to="{ name: 'addrest' }">
                    <li>Add Restaurnt</li>
                </router-link>

            </ul>
        </div>
        <div class="user-profile">
            <p @click="handlelogout">Logout</p>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        handlelogout() {
            localStorage.clear();
            this.$router.push({ name: 'login' });
        }
    },
}
</script>

<style scoped>
.menu-logo img {
    width: 80px;
}

.nav-menu ul {
    margin: 0px;
    padding: 0;
    list-style: none;
    display: inline-flex;
}

.nav-menu ul li {
    padding-left: 20px;
}

nav.main-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>