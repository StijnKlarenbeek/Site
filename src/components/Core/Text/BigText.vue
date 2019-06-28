<template>
    <p>
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: "BigText"
    }
</script>

<style scoped>
    p{
        padding: 0;
        margin: 0;
        font-size: 1.75rem;
        font-weight: normal;
        color: #D0D0D0;
    }
    @media screen and (max-width: 1280px) {
        p{
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 1024px) {
        p{
            font-size: 1.2rem;
        }
    }
</style>
