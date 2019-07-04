<template>
    <div class="split-container">
        <div :class="leftClasses">
            <slot name="left"></slot>
        </div>
        <div :class="rightClasses">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SplitContainer",
        props: {
            imgPos : {
                type: String,
                default: 'left',
                validator: function (item) {
                    return ['left','right'].indexOf(item) !== -1;
                }
            }
        },
        computed: {
            leftClasses() {
                return {
                    'left': true,
                    'img-cont': this.imgPos === 'left',
                    'content-cont': this.imgPos === 'right',
                }
            }    ,
            rightClasses() {
                return {
                    'right': true,
                    'img-cont': this.imgPos === 'right',
                    'content-cont': this.imgPos === 'left',
                }
            }
        }
    }
</script>

<style scoped>
    .split-container{
        width: 100%;
        height: auto;
        overflow: auto;
        display:flex;
        justify-content: center;
        align-items: stretch;
        height: 500px;
    }
    .split-container .left,.split-container .right{
        width: 50%;
        overflow: hidden;
        background: #0b0b0b;
    }
    .split-container .content-cont{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-left: 144px;
        padding-right: 144px;
    }
    .split-container .img-cont img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1450px) {
        .split-container .content-cont{
            padding-left: 96px;
            padding-right: 96px;
        }
    }
    @media screen and (max-width: 1280px) {
        .split-container{
            height: 400px;
        }
        .split-container .content-cont{
            padding-left: 72px;
            padding-right: 72px;
        }
    }
    @media screen and (max-width: 1024px) {
        .split-container{
            height: 300px;
        }
        .split-container .content-cont{
            padding-left: 48px;
            padding-right: 48px;
        }
    }
    @media screen and (max-width: 768px) {
        .split-container{
            flex-wrap:wrap;
            height: auto;
        }
        .split-container .left,.split-container .right{
            width: 100%;
        }
        .split-container .content-cont {
            order:1;
            padding-top: 48px;
            padding-bottom: 48px;
        }
        .split-container .img-cont{
            order:2;
            height: 300px;
        }
    }
</style>
