<template>
    <router-link :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        name: "MyLink",
        props: {
            to: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    a {
        color: #68FFD1;
        /*color: #F5BA78;*/
        font-weight: bolder;
        font-size: 1.5rem;
        text-decoration: none;
        display:inline-block;
    }
    @media screen and (max-width: 1280px) {
        a{
            font-size: 1.25rem;
        }
    }
    @media screen and (max-width: 1024px) {
        a{
            font-size: 1rem;
        }
    }
</style>
