<template>
    <div :class="'case-concept-container ' + theme">
        <div class="inner">
            <!-- Title -->
            <h1 data-aos="fade-up" data-aos-duration="750" >{{title}}</h1>

            <!-- Description -->
            <p data-aos="fade-up" data-aos-duration="750" data-aos-delay="150">
                <slot></slot>    
            </p>
        </div>
        <img 
            data-aos="fade-left" data-aos-duration="750" data-aos-delay="150"
            :src="img" :alt="imgalt">
    </div>
</template>

<script>
import ContHeader from '@/components/Core/Text/ContHeader';

export default {
    props: {
        theme: {
            type: String,
            default: 'black-out'
        },
        /**
         * Title to give
         */
        title: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        imgalt: {
            type: String,
            required: true
        }
    },
    components: {
        ContHeader
    }
}
</script>

<style scoped>
    /**Text styling**/
    h1{
        color:#fff;
        font-size: 3rem;
    }
    p{
        color: #D0D0D0;
        width: 55%;
        font-size: 1.45rem;
        text-align:justify;
        margin-top: 1rem;
    }

    /**Case container**/
    .case-concept-container{
        padding-top: 172px;
        padding-bottom: 172px;
        display:flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        min-height: 800px;
    }
    .case-concept-container img{
        position: absolute;
        height: 80%;
        width:  auto;
        right: -200px;
        /* right: -150px; */
        -webkit-box-shadow: 0px 0px 54px -10px rgba(255,255,255,1);
        -moz-box-shadow: 0px 0px 54px -10px rgba(255,255,255,1);
        box-shadow: 0px 0px 54px -10px rgba(255,255,255,1);
    }

    /**Theme-ify the container**/
    .case-concept-container.black-out {
        background: #000;
    }

    /**Width styling of the inner container**/
    .case-concept-container .inner{
        width:50%;
    }

    @media screen and (min-width: 1500px) and (max-width:1920px) {
        .case-concept-container .inner{
            width:60%;
        }
    }
    @media screen and (min-width:1280px) and (max-width: 1499px) {
        .case-concept-container .inner{
            width:70%;
        }
    }
</style>
