<template>
    <div class="skill" :data-aos="animation" :data-aos-duration="animationDuration" :data-aos-delay="animationDelay">
        <div class="skill-row bordered">
            <span class="title">
                {{title}}
            </span>
        </div>
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
            title: {
                type: String
            },
            info: {
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
    .skill .skill-row.bordered {
        border-bottom: 2px solid white;
        padding-top: 0;
    }

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
