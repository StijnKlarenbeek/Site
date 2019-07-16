<template>
    <a v-if="typeof to === 'undefined'" 
       key="normallink" 
       :href="href"
       :class="colorize">
        <slot></slot>
    </a>
    <router-link :class="colorize" v-else key="routerlink" :to="to">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String
        },
        href: {
            type: String
        },
        target: {
            type: String
        },
        color: {
            type: String
        }
    },
    computed: {
        colorize() {
            return {
                btn: true,
                'teal': this.color === 'teal'
            }
        }
    }
}
</script>

<style scoped>
    /**Default btn styles**/
    .btn {
        background:white;
        border:1px solid white;
        color:black;
        text-decoration:none;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
        font-size: 1.3rem;
        border-radius:2px;
        transition:250ms;
    }

    .btn i{
        display:inline-block;
        margin-left: 1rem;
    }

    .btn:hover{
        background:transparent;
        color:white;
        transition:250ms;
    }

    /**Teal color**/
    .btn.teal{
        background:#68FFD1;
        border-color:#68FFD1;
        color:black;
    }

    .btn.teal:hover{
        background:transparent;
        color:#68FFD1;
    }
</style>
