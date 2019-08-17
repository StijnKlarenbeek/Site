<template>
    <nuxt-link :to="to">
        <slot></slot>
    </nuxt-link>
</template>

<script>
    export default {
        name: "MyLink",
        props: {
            /**
             * The redirect url within the website itself.
             */
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
