<template>
    <div class="home">
        <div>
            <!-- header -->
            <compartment id="whoami" :light-title="true">
                <template v-slot:subtitle>
                    HELLO
                </template>
                <template v-slot:title>
                    MY NAME IS STIJN
                </template>
                <p class="listparagraph" data-aos="fade-up" data-aos-duration="750" data-aos-delay="150">
                    My name is Stijn Klarenbeek and I am an enthusiastic and motivated software developer. 
                    I am always looking for new ideas and designs and I'm always working to get better.
                </p>

                <div class="btn-row" data-aos="fade-up" data-aos-duration="750" data-aos-delay="250">
                    <sk-btn to="/projects">
                        PROJECTS <i class="fa fa-long-arrow-alt-right"></i>
                    </sk-btn>

                    <sk-btn to="/onlinecv" color="teal" class="ml32">
                        RESUME <i class="fa fa-long-arrow-alt-right"></i>
                    </sk-btn>
                </div>
            </compartment>
        </div>

        <MyFooter/>
    </div>
</template>

<script>
    import Compartment from '@/components/Compartment';
    import SkBtn from '@/components/Core/Buttons/SkBtn';
    import {mapGetters} from 'vuex';

    import MyFooter from '@/components/MyFooter';

    export default {
        name: 'home',

        data: () => ({


            options: {
                sectionsColor: 'transparent',
                controlArrows: true,
                navigationTooltips: ['Wie ben ik', 'Scholing', 'Werkervaring', 'Vaardigheden', 'Contact'],
                showActiveTooltip: false,
                slidesNavPosition: 'bottom',

                menu: true,
                navigation: true,
                scrollBar: true
            },
            skillsCounter: 5000,
            skillInterval: null,
            increaseProgressSkillInterval: null
        }),
        methods: {
            paginatedWork(page) {
                let beginIndex = (page * this.work.pagination.perPage - 2) - 1;
                let endIndex = (beginIndex + this.work.pagination.perPage);
                return this.work.items.slice(beginIndex, endIndex);
            },
        },
        computed: {
            contactItemsFirstHalf() {
                return this.contact.items.slice(0, 3);
            },
            contactItemsSecondHalf() {
                return this.contact.items.slice(3, 6);
            },
            ...mapGetters({
                scholing: 'getScholing',
                work: 'getWorkExperience',
                skills: 'getSkills',
                contact: 'getContact'
            })
        },
        props: {
            msg: String
        },
        components: {
            Compartment,
            SkBtn,
            MyFooter
        }
    }
</script>

<style>
    .ml32{
        margin-left: 32px;
    }

    .home {
        position: relative;
        z-index: 3;
        padding-top: 96px;
    }

    /**Btn row**/
    .btn-row{
        margin-top: 40px;
    }
    
</style>
