<template>
    <div :class="heroClasses">
        <div class="items"></div>
        <div class="item-thumbs"></div>
    </div>
</template>

<script>
export default {
    name: "SkCarousel",
    data: () => ({
        thumbs: [],
        activeCarouselIndex,
        maxCarouselStep
    }),
    props: {
        isHero : {
            type: boolean,
            default: true
        }
    },
    computed : {
        heroClasses() {
            return {
                'carousel': true,
                'hero': this.isHero
            }
        }
    },
    /**
     * Provide two methods
     */
    provide () {
      return {
        addCarouselItem: this.addCarouselItem,
        removeCarouselItem: this.removeCarouselItem
      }
    },
    methods: {
        addCarouselItem (item) {
            const index = this.$slots.default.indexOf(item.$vnode)
            this.thumbs.splice(index, 0, item);

            // if a step is added before the current one, go to it
            if (index < this.activeTabIndex + 1) {
                this.maxCarouselAmount = index;
                this.changeTab(this.activeCarouselIndex + 1, index);
            }
        },
        removeCarouselItem (item) {
            // const tabs = this.tabs
            // const index = tabs.indexOf(item)
            // if (index > -1) {
            //   // Go one step back if the current step is removed
            //   if (index === this.activeTabIndex) {
            //     this.maxStep = this.activeTabIndex - 1
            //     this.changeTab(this.activeTabIndex, this.activeTabIndex - 1)
            //   }
            //   if (index < this.activeTabIndex) {
            //     this.maxStep = this.activeTabIndex - 1
            //     this.activeTabIndex = this.activeTabIndex - 1
            //     this.emitTabChange(this.activeTabIndex + 1, this.activeTabIndex)
            //   }
            //   tabs.splice(index, 1)
        },

        /**
         * Switch tabs
         */
        changeTab (oldCarouselIndex, newCarouselIndex, emitChangeEvent = true) {

            
            // let oldTab = this.thumbs[oldCarouselIndex];
            // let newTab = this.thumbs[newCarouselIndex];

            // //Deactivate old tab
            // if (oldTab) {
            //     oldTab.active = false;
            // }

            // //Activate new Tab
            // if (newTab) {
            //     newTab.active = true;
            // }

            // //Set the carouselindex to the new one.
            // this.activeCarouselIndex = newCarouselIndex;

            //  //Active the new tab
            // this.activateTabAndCheckStep(this.activeCarouselIndex);

            // return true
        },
        /**
         * Activate the carousel item and check that the step is correct
         */
        activateCarouselAndCheckStep (index) {
            this.activateCarouselItem(index);
            
            // If index is bigger than last step, set max to index
            if (index > this.maxCarouselStep) {
                this.maxCarouselStep = index;
            }
            this.activeCarouselIndex = index;
        },

        /**
         * Activate the carousel item
         */
        activateCarouselItem (index) {
            // Deactivate all carouselitems
            this.deactivateCarouselItems();

            // Get the tab
            let carouselTab = this.thumbs[index];
            if (carouselTab) {
                // Set the carousel tab states
                carouselTab.active = true;
                carouselTab.checked = true;

                // Go to this item;
                this.tryChangeRoute(carouselTab);
            }
        },

        /**
         * Deactivate all the carousel items
         */
        deactivateCarouselItems() {
            this.thumbs.forEach((thumb) => {
                thumg.active = false;
            });
        }
    }
}
</script>

<style scoped>

</style>
