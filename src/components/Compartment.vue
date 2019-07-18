<template>
    <div class="section">
        <div class="padder"></div>
        <h2 data-aos="fade-up" data-aos-duration="750" >
            <slot name="subtitle"></slot>    
        </h2>
        <h1 data-aos="fade-up" data-aos-duration="750" :class="lightTitleColor">
            <slot name="title"></slot>
        </h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Compartment",
        props: {
            lightTitle: {
                type: Boolean,
                default: false
            },
            listParagraph: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            lightTitleColor() {
                return {
                    white: this.lightTitle
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    div.section {
        padding-left: 48px;
        padding-right: 48px;
        /*height: 100vh;*/
        padding-bottom: 96px;
    }
    .padder{
        padding-top: 96px;
    }
    h2{
        font-size: 3rem;
        line-height: 3rem;
        color: #595959;
    }
    h1 {
        font-size:5rem;
        color:#595959;

        &.white{
            color: #fff;
        }
    }
    p {
        padding: 0;
        margin: 0;
        display:inline-block;
        width:40%;
        text-align: justify;
        color:white;
        font-weight: 600;
        font-size: 2rem;

        span.teal{
            color:#68FFD1;
        }
        &.listparagraph{
            border-left: 5px solid #68FFD1;
            padding-left: 1.5rem;
            margin-left: 5px;
            font-size: 1.75rem;
            font-weight: normal;
            color: #D0D0D0;
            margin-top: 16px;
        }
    }
    @media screen and (max-width: 1366px){
        
        p {
            font-size: 1.5rem;
            width: 60%;
        }
    }
   
    @media screen and (max-width: 1024px) {
        div.section {
            height: auto;
        }
        .padder {
            padding-top: 64px;
        }
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1.5rem;
            width: 60%;
        }
    }
    @media screen and (max-width: 500px) {
        div.section {
            padding-left: 24px;
            padding-right: 24px;
        }
        h1{
            font-size: 2.5rem;
        }
        p {
            width:100%;
        }
    }
</style>
