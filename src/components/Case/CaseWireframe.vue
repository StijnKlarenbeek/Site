<template>
    <div class="case-wireframe-container">
        <!-- Title -->
        <div class="inner">
            <h1>{{title}}</h1>
        </div>

        <!-- Wireframe images -->
        <div class="wire-frame-gallery">
            <div class="item" v-for="(wireFrame, index) in wireFrameImages" :key="index">
                <img :src="wireFrame.img" :alt="wireFrame.imgAlt">
            </div>
        </div>

        <!-- Big wireframe image -->
        <div class="big-wireframe-img">
            <img :src="bigWireFrame.img" :alt="bigWireFrame.imgAlt">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        /**
         * Title
         */
        title: {
            type: String,
            required:true
        },

        /**
         * Wire frame images
         */
        wireFrameImages: {
            type: Array,
            required: true
        },

        /**
         * Big wireframe image
         */
        bigWireFrame: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .case-wireframe-container{
        width:100%;
        display: flex;
        background: linear-gradient(to bottom, #000,#2E2E2E);
        padding-top: 96px;
        padding-bottom: 96px;
    }

    .case-wireframe-container .wire-frame-gallery{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 56px;
        grid-row-gap: 56px;
    }
</style>
