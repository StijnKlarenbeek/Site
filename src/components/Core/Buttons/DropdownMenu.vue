<template>
    <div class="dropdown-menu">
        <button @click="toggleDropDown">
            <slot></slot>
        </button>
        <transition name="slide-fade">
            <div v-if="opened" class="dropdown-wrapper">
                <svg class="arrow" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="48" 
                    height="10" 
                    viewBox="0 0 48 10" 
                    fill="none" 
                    transform="rotate(180)">
                    <path d="M28.8 8.00002C33.8925 2.87765 40.7987 0 48 0H0C7.20132 0 14.1075 2.87765 19.2 8.00002C21.8511 10.6667 26.1489 10.6667 28.8 8.00002Z"/>
                </svg>
                <ul>
                    <slot name="dropdown"></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        data() {
            return {
                opened: this.open
            }
        },
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggleDropDown(){
                this.opened = !this.opened
            }
        }
    }
</script>

<style scoped>
    .dropdown-menu{
        display:inline-block;
        position:relative;
    }
    button{
        background:rgba(255,255,255,.2);
        border-radius:45px;
        padding:0px 20px;
        height: 28px;
        color:white;
        border:none;
        font-size: 1.15rem;
        font-weight: bold;
        outline: none;
        transition:250ms;
    }
    button:hover{
        cursor:pointer;
        background:rgba(255,255,255,.25);
        transition:250ms;
    }
    .dropdown-wrapper{
        position:absolute;
        right: 0;
        top:33px;
        width:250px;
    }
    .dropdown-wrapper .arrow{
        fill:white;
        position: absolute;
        right: 10px;
    }
    .dropdown-wrapper ul{
        background:#ffffff;
        position: relative;
        top:8px;
        border-radius:5px;
        padding-top: 16px;
        padding-bottom: 16px;
        box-sizing: border-box;
        margin-left: 0px;
        padding-left: 0px;
    }

    /* Enter and leave animations can use different
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        /* top:30px; */
        transition: all .3s;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        top:50px;
        /* right:10px; */
        opacity: 0;
    }
</style>
