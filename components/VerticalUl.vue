<template>
    <!-- Print an unordered list with a title-->
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
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 8px;
    }
    ul li a {
        width: 100%;
        font-size: 1.1rem;
        color:rgb(125, 130, 156);
        display:block;
        padding-top: 8px;
        padding-bottom: 8px;
        text-decoration: none;
    }
    ul li a:hover {
        text-decoration:underline;
    }


    @media screen and (max-width: 1024px) {
        ul{
            width: 140px;
        }
    }
</style>
