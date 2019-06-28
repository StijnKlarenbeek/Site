<template>
    <ul>
        <li class="title">{{title}}</li>
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: "VerticalUl",
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display:inline-block;
        width: 180px;
    }
    ul li{
        display:block;
        width: 100%;
    }
    ul li.title{
        color: #ADADAD;
        text-transform: uppercase;
        margin-bottom: 8px;
    }
    ul li a {
        width: 100%;
        font-size: 1.1rem;
        color: #fff;
        display:block;
        padding-top: 8px;
        padding-bottom: 8px;
        text-decoration: none;
    }


    @media screen and (max-width: 1024px) {
        ul{
            width: 140px;
        }
    }
</style>
