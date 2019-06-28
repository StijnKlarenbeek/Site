<template>
    <h3>
        <slot></slot>
    </h3>
</template>

<script>
    export default {
        name: "SupHeader"
    }
</script>

<style scoped>
    h3{
        margin-top: 0;
        color: #595959;
        font-weight: bolder;
        font-size: 2rem;
    }

    @media screen and (max-width: 1280px) {
        h3{
            font-size: 1.75rem;
        }
    }
    @media screen and (max-width: 1024px) {
        h3{
            font-size: 1.5rem;
        }
    }
</style>
