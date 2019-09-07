<template>
    <div id="app">
        <Nav/>
        <!-- <img class="me-img" src="img/forthebf.png"> -->
        <transition name="component-fade" mode="out-in">
            <nuxt/>
        </transition>
    </div>
</template>

<script>
    import Nav from '@/components/Nav';

    export default {
        name: 'App',
        components: {
            Nav
        }
    }
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700&display=swap');
    /*@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700,800&display=swap');*/
    /*@import url('https://fonts.googleapis.com/css?family=Kanit:400,500,600,700&display=swap');*/
     * {
         box-sizing: border-box;
         padding: 0;
         margin: 0;
     }
    html, body {
        background: #000000;
        font-family: 'Open Sans', sans-serif;
        /*font-family: 'Nunito', sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100%;
        scroll-behavior: smooth;
    }
    #app {
        left: 0;
        position: relative;
        margin-left: 0;

    }
    .me-img{
        height:150%;
        width: auto;
        position: fixed;
        top:0;
        right:48px;
        z-index: 2;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    @media screen and (max-width:468px) {
        .me-img {
            width: 90%;
            height: auto;
            bottom: -15%;
            top:auto;
            right:5%;
        }
    }
</style>
