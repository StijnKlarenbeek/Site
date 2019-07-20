<template>
    <div class="carousel-item">

    </div>
</template>

<script>
export default {
    inject: ['addCarouselItem', 'removeCarouselItem'],
    /**
     * Lifecycle, call the injected method so it is executed
     */
    mounted () {
        this.addCarouselItem(this)
    },
    /**
     * Lifecycle, call the injected method so the item is removed
     */
    destroyed () {
        /**
         * Remove from the page
         */
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
        }
        this.removeCarouselItem(this)
    }
}
</script>

<style>

</style>
