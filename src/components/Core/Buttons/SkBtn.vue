<template>
    <a v-if="typeof to === 'undefined'" 
       key="normallink" 
       :target="target"
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
        },
        rounded :{
            type: Boolean,
            default: false
        },
        /**
         * Makes the btn 100% width on small screens
         */
        phoneBlock :{
            type: Boolean,
            default: false
        }
    },
    computed: {
        colorize() {
            return {
                btn: true,
                'teal': this.color === 'teal',
                'primary': this.color === 'primary',
                'tertiary': this.color.includes('tertiary'),
                'opacified': this.color.includes("opacified"),
                'rounded': this.rounded,
                'phone-block': this.phoneBlock
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
    .btn.rounded{
        border-radius:30px;
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

    .btn.primary{
        background: #5100FF;
        border-color:#5100FF;
        color: #fff;
    }
    .btn.primary:hover{
        background:transparent;
        color: #5100ff;
    }

    .btn.tertiary{
        font-size: 1.1rem;
        background: #F4A8C5;
        border-color:#F4A8C5;
        font-weight: bolder;
        color:white;
        border:none;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .btn.btn.tertiary:hover{
        background: rgba(244,168,197,.35);
        /* background: #c787a0; */
        color: #F4A8C5;

    }
    .btn.btn.tertiary.opacified{
        background: rgba(244,168,197,.35);
        color: #F4A8C5;
    }
    .btn.btn.tertiary.opacified:hover{
        background: #F4A8C5;
        color:#fff;
    }

    @media screen and (max-width: 450px){
        .phone-block{
            display:block;
            width:100%;
            text-align: center;
        }
    }
</style>
