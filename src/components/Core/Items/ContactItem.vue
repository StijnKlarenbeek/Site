<template>
    <!-- Wrapper container-->
    <div class="skill" :data-aos="animation" :data-aos-duration="animationDuration" :data-aos-delay="animationDelay">
        <!-- Skill row with a bottom border -->
        <div class="skill-row bordered">
            <span class="title">
                {{title}}
            </span>
        </div>

        <!-- The contact item info-->
        <div class="skill-row">
            <span class="location">
                {{info}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactItem",
        props: {
            /**
             * The title is basicly like 
             *  Gender, Name, Address, etc..
             */
            title: {
                type: String,
                required: true,
            },

            /**
             * The actual info pertaining to the 
             * title
             */
            info: {
                type: String,
                required: true
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
        }
    }
</script>

<style scoped>
    .skill {
        width: 70%;
        padding-top: 16px;
        color: white;
    }

    .skill .skill-row {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 16px;
        padding-top: 16px;
    }

    /**Set the border and remove padding at the top
       This removes unnecessary extra spacing**/
    .skill .skill-row.bordered {
        border-bottom: 2px solid white;
        padding-top: 0;
    }

    /**Text styling**/
    .title {
        font-size: 2rem;
        font-weight: bold;
    }

    .location {
        color: #ADADAD;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 1024px) {
        .title {
            font-size: 1.5rem;
        }
        .location {
            font-size: 1.25rem;
        }

        /**Change padding for top and bottom**/
        .skill .skill-row {
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }
    @media screen and (max-width:468px) {
        .skill {
            width: 100%;
        }
    }
</style>
