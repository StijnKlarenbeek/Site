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
            <split-container>
            <template v-slot:left>
                <img data-aos="zoom-in"
                     data-aos-duration="750"
                     src="/img/work/workplanstudent.png" alt="">
            </template>
            <template v-slot:right>
                <div class="wrapper">
                    <sup-header data-aos="fade-right"
                                data-aos-duration="750">
                        LATEST DROP
                    </sup-header>
                    <cont-header data-aos="fade-right"
                                 data-aos-duration="750">
                        Save me
                    </cont-header>
                    <big-text data-aos="fade-right"
                              data-aos-duration="750"
                              class="mt-2">
                        This great tool lets you monitor, plan and keep track of your students performance without any hasle.
                    </big-text>
                    <my-link data-aos="fade-right"
                             data-aos-duration="750"
                             class="mt-2"
                             to="/projects/saveme">
                        check it out
                    </my-link>
                </div>
            </template>
        </split-container>
        </div>

        <MyFooter/>
    </div>
</template>

<script>
    import Compartment from '@/components/Compartment';

    //Containers
    import SplitContainer from '@/components/Core/Containers/SplitContainer';

    //Texts
    import SupHeader from "@/components/Core/Text/SupHeader";
    import ContHeader from "@/components/Core/Text/ContHeader";
    import BigText from "@/components/Core/Text/BigText";

    //Btns
    import SkBtn from '@/components/Core/Buttons/SkBtn';
    import MyLink from '@/components/Core/Buttons/MyLink';

    //Footer
    import MyFooter from '@/components/MyFooter';

    import {mapGetters} from 'vuex';

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

            //Btns
            SkBtn,
            MyLink,

            //Footer
            MyFooter,

            //Containers
            SplitContainer,

            //Texts
            SupHeader,
            ContHeader,
            BigText,
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
