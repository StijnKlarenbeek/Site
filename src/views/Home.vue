<template>
    <div class="home">
        <div>
            <compartment id="whoami">
                <template v-slot:title>
                    01.&nbsp;&nbsp;Wie ben ik
                </template>
                <p data-aos="fade-up" data-aos-duration="750" data-aos-delay="150">
                    Mijn naam is <span class="teal">Stijn Klarenbeek</span> en ik ben een
                    enthusiaste en gemotiveerde software developer
                    en UI designer. Ik ben altijd op zoek naar
                    nieuwe ideeën en ontwerpen.
                </p>
            </compartment>
            <compartment id="training">
                <template v-slot:title>
                    02. Scholing
                </template>
                <SchoolWorkItem v-for="(school,index) in scholing"
                                :key="index"
                                v-bind="school"/>
            </compartment>
            <compartment id="workexperience">
                <template v-slot:title>
                    03. Werkervaring
                </template>
                <SchoolWorkItem v-for="(work,index) in paginatedWork(work.pagination.currentPage)"
                                :key="index"
                                v-bind="work"/>
                <pagination :total-pages="work.pagination.totalPages"
                            :total="work.pagination.total"
                            :per-page="work.pagination.perPage"
                            :current-page="work.pagination.currentPage"
                            v-model="work.pagination.currentPage"></pagination>
            </compartment>
            <compartment id="skills">
                <template v-slot:title>
                    04. Vaardigheden
                </template>
                <div class="row">
                    <div class="column-100">
                        <div class="skill-item-grid">
                            <skill-item v-for="(skill, index) in skills.items"
                                        :key="index"
                                        v-bind="skill"
                                        @click.native="moveToSkill(index)"></skill-item>
                        </div>
                    </div>
                </div>
            </compartment>
            <compartment id="contact">
                <template v-slot:title>
                    05. Contact informatie
                </template>
                <div class="row break-phone">
                    <div class="column-50 phone-col-100"
                         :data-aos="contact.animation.colOne.animation"
                         :data-aos-duration="contact.animation.colOne.animationDuration"
                         :data-aos-delay="contact.animation.colOne.animationDelay">
                        <contact-item v-for="(contact, index) in contactItemsFirstHalf" :key="index"
                                      v-bind="contact"></contact-item>

                    </div>
                    <div class="column-50 phone-col-100"
                         :data-aos="contact.animation.colTwo.animation"
                         :data-aos-duration="contact.animation.colTwo.animationDuration"
                         :data-aos-delay="contact.animation.colTwo.animationDelay">
                        <contact-item v-for="(contact, index) in contactItemsSecondHalf" :key="index"
                                      v-bind="contact"></contact-item>

                    </div>
                </div>
            </compartment>
        </div>
    </div>
</template>

<script>
    import Compartment from '@/components/Compartment';
    import Pagination from '@/components/Pagination';

    import SchoolWorkItem from '@/components/Core/Items/SchoolWorkItem';
    import SkillItem from '@/components/Core/Items/SkillItem';
    import ContactItem from '@/components/Core/Items/ContactItem';
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
            // increaseProgress() {
            //     let progressFill = document.getElementById('progressFill');
            //     progressFill.style.width = '0px';
            //     let percentTime = 0;
            //     this.skills.seconds = this.skillsCounter / 1000;
            //
            //     if (this.skills.currentActive < this.skills.items.length - 1) {
            //         this.skills.items[this.skills.currentActive].active = false;
            //         this.skills.currentActive += 1;
            //         this.skills.items[this.skills.currentActive].active = true;
            //     } else {
            //         this.skills.items[this.skills.currentActive].active = false;
            //         this.skills.currentActive = 0;
            //         this.skills.items[0].active = true;
            //     }
            //
            //     let id = setInterval(() => {
            //         if (percentTime >= 100) {
            //             clearInterval(id);
            //         }
            //         percentTime += 1 / (this.skills.seconds + 0.1);
            //         progressFill.style.width = percentTime + '%';
            //     }, this.skills.interval);
            // },
            // loopThroughSkills() {
            //   this.skillInterval = setInterval(() => {
            //     this.increaseProgress();
            //   }, this.skillsCounter);
            // },
            // moveToSkill(index) {
            // document.getElementById('progressFill').style.width = '0px';
            // clearInterval(this.skillInterval);
            // clearInterval(this.increaseProgressSkillInterval);
            // this.skills.items[this.skills.currentActive].active = false;
            // this.skills.currentActive = index;
            // this.skills.items[index].active = true;
            // this.loopThroughSkills();
            // },
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
        mounted() {
            // this.loopThroughSkills();
        },
        beforeDestroy() {
            // clearInterval(this.skillInterval);
            // clearInterval(this.increaseProgressSkillInterval);
        },
        props: {
            msg: String
        },
        components: {
            Compartment,
            SchoolWorkItem,
            Pagination,
            SkillItem,
            ContactItem
        }
    }
</script>

<style>
    .home {
        position: relative;
        z-index: 3;
        padding-bottom: 96px;
        padding-top: 96px;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
        color: #4353ff;
    }

    #fp-nav ul li a span, .fp-slidesNav ul li a span {
        background: white;
    }

    .fp-tableCell {
        vertical-align: top;
    }

    .row {
        display: flex;
        width: 100%;
    }

    .row .column-50 {
        width: 50%;
    }

    .row .column-100 {
        width: 100%;
    }

    .skill-item-grid {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .row .column-50 .progress {
        width: 100%;
        height: 3px;
        background: rgba(255, 255, 255, .3);
        border-radius: 5px;
    }

    .row .column-50 .progress .filler {
        height: 3px;
        background: #fff;
        border-radius: 5px;
        width: 0%;
    }

    @media screen and (max-width: 1024px) {
        .row .ipad-col-75 {
            width: 75%;
        }
    }

    @media screen and (max-width: 468px) {
        .phone-col-100 {
            width: 100% !important;
        }

        .break-phone {
            display: block;
        }

        .skill-item-grid {
            justify-content: space-between;
        }
    }
</style>
