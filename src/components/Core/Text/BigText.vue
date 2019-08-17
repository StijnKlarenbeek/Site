<template>
    <p :class="align">
        <slot></slot>
    </p>
</template>

<script>
    export default {
        name: "BigText",
        props: {
            align: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    p{
        padding: 0;
        margin: 0;
        font-size: 1.45rem;
        font-weight: normal;
        color: #D0D0D0;
        margin-top: 10px;
    }

    p.justify{
        text-align: justify;
    }
    p.left{
        text-align: left;
    }
    p.right{
        text-align: right;
    }
    p.center{
        text-align: center;
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
