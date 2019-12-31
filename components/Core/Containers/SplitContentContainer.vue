<template>
    <!-- Split container-->
    <div class="split-container">
        <!-- Left container -->
        <div :class="leftClasses" :style="{'background': backgroundLeft}">
            <slot name="left"></slot>
        </div>

        <!-- Right container -->
        <div :class="rightClasses" :style="{'background':backgroundRight}">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SplitContentContainer",
        props: {
            backgroundLeft: {
                type: String,
                required: true
            },
            backgroundRight: {
                type: String,
                required: true
            }
        },
        computed: {
            /**
             * Determine the classes for the left container
             * based on the imgPos(ition) prop
             */
            leftClasses() {
                return {
                    'left': true,
                    'content-cont': true,
                }
            },

            /**
             * Determine the classes for the right container
             * based on the imgPos(ition) prop
             */
            rightClasses() {
                return {
                    'right': true,
                    'content-cont': true,
                }
            }
        }
    }
</script>

<style scoped>
    /**Split container**/
    .split-container{
        width: 100%;
        height: auto;
        overflow: auto;
        display:flex;
        justify-content: center;
        align-items: stretch;
        height: calc(100vh - 66px);
    }

    /**Set the default styles for both containers**/
    .split-container .left, .split-container .right{
        width: 50%;
        overflow: hidden;
        background:rgb(32, 34, 43);
    }

    /**The styles for the text content container**/
    .split-container .content-cont{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-left: 144px;
        padding-right: 144px;
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
    @media screen and (max-width: 850px){
        
        .split-container .content-cont{
            padding-left: 36px;
            padding-right: 36px;
        }
    }

    /**Change height of container on small screens**/
    @media screen and (max-width: 1024px) {
        .split-container{
            height: 300px;
        }
    }

    /**Default wrap at 768px (ipad)**/
    @media screen and (max-width: 768px) {
        /**Wrap the containers so the flow gets broken naturally**/
        .split-container{
            flex-wrap:wrap;
            height: auto;
        }
        /**Change width of the left and right containers**/
        .split-container .left,.split-container .right{
            width: 100%;
        }
        /**Change order of the content and image so image is always on bottom**/
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
    @media screen and (max-width: 500px) {
        /**Change padding of the containers on phones**/
        .split-container .content-cont {
            padding-left: 24px;
            padding-right: 24px;
        }
    }
</style>
