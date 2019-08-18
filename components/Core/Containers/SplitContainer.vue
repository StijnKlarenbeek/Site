<template>
    <!-- Split container-->
    <div class="split-container">
        <!-- Left container -->
        <div :class="leftClasses">
            <slot name="left"></slot>
        </div>

        <!-- Right container -->
        <div :class="rightClasses">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SplitContainer",
        props: {
            /**
             * The position of the image can be either of two values:
             *  left: Img will come in the left container
             *  right: Img will come in the right container
             */
            imgPos : {
                type: String,
                default: 'left',
                validator: function (item) {
                    return ['left','right'].indexOf(item) !== -1;
                }
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
                    'img-cont': this.imgPos === 'left',
                    'content-cont': this.imgPos === 'right',
                }
            },

            /**
             * Determine the classes for the right container
             * based on the imgPos(ition) prop
             */
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
    /**Split container**/
    .split-container{
        width: 100%;
        height: auto;
        overflow: auto;
        display:flex;
        justify-content: center;
        align-items: stretch;
        height: 500px;
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

    /**Styles for the img part of the split container**/
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
