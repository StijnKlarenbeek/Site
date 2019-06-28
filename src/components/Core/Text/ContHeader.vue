<template>
    <h2>
        <slot></slot>
    </h2>
</template>
<script>
    export default {
        name: "ContHeader"
    }
</script>

<style scoped>
    h2 {
        color: #fff;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 1280px) {
        h2{
            font-size: 2.25rem;
        }
    }
    @media screen and (max-width: 1024px) {
        h2{
            font-size: 1.8rem;
        }
    }
</style>
