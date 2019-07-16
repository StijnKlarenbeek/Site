<template>
    <div class="skill-item"
            :data-aos="animation"
            :data-aos-duration="animationDuration"
            :data-aos-delay="animationDelay">
        <!-- the colored container -->
        <div :class="classes" :style="styles"></div>

        <!-- The title of the skill-->
        <div class="skill-row texted mt32">
            {{title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkillItem",
        props: {
            /**
             * The skill name
             */
            title: {
                type: String,
                required: true
            },

            /** 
             * The color of the colored container
             */
            background: {
                type: String,
                default: '#fff'
            },

            /**
             * Makes the container rounded
             */
            rounded: {
                type: Boolean,
                default: true
            },

            /**
             * Aos animation settings
             */
            animation: {
                type: String
            },
            animationDuration: {
                type: String
            },
            animationDelay: {
                type: String
            }
        },
        computed: {
            /**
             * Calculate the classes for the 
             * colored container
             */
            classes() {
                return {
                    'skill-row': true,
                    'icon': true,
                    'rounded': this.rounded
                }
            },

            /**
             * Set the background for the colored
             * container
             */
            styles() {
                return {
                    background:this.background,
                }
            }
        }
    }
</script>

<style scoped>
    .skill-faded {
        opacity: .5;
        cursor: pointer;
        transition:opacity 250ms;
    }
    .skill-faded:hover{
        opacity: 1;
    }
    .skill-faded.active {
        opacity: 1;
    }
    .skill-item {
        padding-right: 32px;
        padding-left: 32px;
        height: 172px;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius:15px;
    }
    .skill-row.icon{
        margin-top: 15px;
        width: 30px;
        height: 30px;
        position: relative;
    }
    .skill-row.icon.rounded{
        border-radius: 50%;
    }
    .skill-row.icon::after{
        content: '';
        position:absolute;
        background: inherit;
        opacity: .35;
        width: 60px;
        height: 60px;
        left: -50%;
        top: -50%;
    }
    .skill-row.icon.rounded::after {
        border-radius:50%;
    }
    .skill-row.mt32{
        margin-top: 32px;
    }
    .skill-row.texted{
        color:#fff;
        font-size: 2rem;
        font-weight: 600;
    }
    @media screen and (max-width: 1024px) {
        .skill-row.texted {
            font-size: 1.5rem;
        }
    }
    @media screen and (max-width: 500px) {
        .skill-item {
            width: 50%;
            padding-left: 0;
            padding-right: 0;
        }
    }
</style>
