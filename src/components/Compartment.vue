<template>
    <div class="section">
        <div class="padder"></div>
        <h1 data-aos="fade-up" data-aos-duration="750">
            <slot name="title"></slot>
        </h1>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Compartment"
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
    h1 {
        font-size:5rem;
        color:#595959;
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
            /*color: #4353ff;*/
            /*color: #FF4387;*/
            /*color: #F5BA78;*/
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
    @media screen and (max-width: 468px) {
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
