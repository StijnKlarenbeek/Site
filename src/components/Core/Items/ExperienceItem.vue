<template>
    <div class="skill" :data-aos="animation" :data-aos-duration="animationDuration" :data-aos-delay="animationDelay">
        <!-- Top row contains title and date-->
        <div class="skill-row">
            <span class="title">
                {{title}}
            </span>
            <span class="date">
                {{date}}
            </span>
        </div>

        <!--Bottom row contains the location-->
        <div class="skill-row">
            <span class="location">
                {{location}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ExperienceItem",
        props: {
            /**
             * What experience did you get?
             */
            title: {
                type: String,
                required: true
            },

            /**
             * When did you get the experience
             */
            date: {
                type: String,
                required: true
            },

            /**
             * Where did you get the experience
             */
            location: {
                type: String,
                required: true
            },

            /**
             * AOS animation settings
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
        }
    }
</script>

<style scoped>
    .skill {
        width: 35%;
        padding-bottom: 32px;
        padding-top: 32px;
        border-bottom: 2px solid white;
        color: white;
    }

    .skill .skill-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /**Text styling**/
    .title {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .date {
        color: #68FFD1;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .location {
        color: #ADADAD;
        font-size: 1.25rem;
    }

    @media screen and (max-width: 1024px) {
        .skill {
            width: 60% !important;
        }
    }
    @media screen and (max-width: 468px) {
        .skill {
            width: 100% !important;
        }
        .skill .skill-row {
            flex-wrap: wrap;
        }

        /**We change the order for small screens to have date on top**/
        .skill .date {
            order:1;
            width: 100%;
        }
        .skill .title {
            order:2;
            width: 100%;
        }
    }
</style>
