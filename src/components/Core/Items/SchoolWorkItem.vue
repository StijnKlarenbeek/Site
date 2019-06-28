<template>
    <div class="skill" :data-aos="animation" :data-aos-duration="animationDuration" :data-aos-delay="animationDelay">
        <div class="skill-row">
            <span class="title">
                {{title}}
            </span>
            <span class="date">
                {{date}}
            </span>
        </div>
        <div class="skill-row">
            <span class="location">
                {{location}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SchoolWorkItem",
        props: {
            title: {
                type: String
            },
            date: {
                type: String
            },
            location: {
                type: String
            },
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

    .title {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .date {
        color: #68FFD1;
        /*color: #FF4387;*/
        /*color: #F5BA78;*/
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
