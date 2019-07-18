<template>
    <div class="work">
        <header class="hero">
            <h1 data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="750">
                Designing <br>
                & Creating
            </h1>
            <h2 data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="750">
                It is what i do because it is<br>
                what i love doing with my time.
            </h2>
        </header>
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
                        DESIGN CONCEPT
                    </sup-header>
                    <cont-header data-aos="fade-right"
                                 data-aos-duration="750">
                        Student Monitoring Dashboard
                    </cont-header>
                    <big-text data-aos="fade-right"
                              data-aos-duration="750"
                              class="mt-2">
                        This great tool lets you monitor, plan and keep track of your students performance without any hasle.
                    </big-text>
                    <!--<my-link data-aos="fade-right"-->
                             <!--data-aos-duration="750"-->
                             <!--class="mt-2"-->
                             <!--to="/work">-->
                        <!--check it out-->
                    <!--</my-link>-->
                </div>
            </template>
        </split-container>
        <div class="gallery">
            <h1>
                More creations
            </h1>
            <gallery :filters="gallery.filters" :items="gallery.items"></gallery>
            <!--<div class="gallery-filter-row">-->

            <!--</div>-->
            <!--<div class="gallery-row">-->-
                <!--<div class="item">-->
                    <!--<img src="/img/assets/Savemegalleryexport.png" alt="">-->
                <!--</div>-->
                <!--<div class="item"></div>-->
            <!--</div>-->
        </div>

        <MyFooter/>
    </div>
</template>

<script>
    import SplitContainer from '@/components/Core/Containers/SplitContainer';

    import SupHeader from "@/components/Core/Text/SupHeader";
    import ContHeader from "@/components/Core/Text/ContHeader";
    import BigText from "@/components/Core/Text/BigText";

    import MyLink from "@/components/Core/Buttons/MyLink";

    import MyFooter from '@/components/MyFooter';

    import Gallery from '@/components/Gallery/Gallery';

    export default {
        name: "Work",
        data: () =>({
            gallery: {
                filters: [
                    'All', 'Design concept', 'Web template', 'Software'
                ],
                items: [
                    {
                        title: 'Save me',
                        filter: 'Design concept',
                        link: '/projects/saveme',
                        img: '/img/assets/Savemegalleryexport.png'
                    }
                ]
            },
        }),
        components: {
            //Containers
            SplitContainer,

            //Text
            SupHeader,
            ContHeader,
            BigText,

            //Btns
            MyLink,
            
            //Footer
            MyFooter,

            //Gallery
            Gallery
        }
    }
</script>

<style scoped>
    .work{
        position: relative;
        z-index: 3;
        /*padding-bottom: 96px;*/
        /*padding-top: 96px;*/

    }

    .hero{
        background: url('/img/work/purplehero.png');
        background-size:100% 100%;
        height: 587px;
        width: 100%;
    }

    .hero h1{
        padding-top: 186px;
        padding-left: 48px;
        color: #fff;
        font-size: 3.75rem;
        line-height: 3.75rem;
    }

    .hero h2{
        padding-left: 48px;
        margin-top: 32px;
        font-size: 2rem;
        line-height: 2rem;
         color: #ADADAD;
        font-weight: normal;
     }

    .gallery{
        width: 100%;
        height:auto;
        background: #000;
    }

    .gallery h1 {
        padding-top: 92px;
        padding-left: 48px;
        padding-right: 48px;
        color: #fff;
        font-size: 3.75rem;
        line-height: 3.75rem;
    }

    .mt-2{
        margin-top: 24px;
    }

    @media screen and (max-width: 1280px) {
        .hero{
            height: 450px;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: 70%;
        }
        .hero h1{
            padding-top: 160px;
            font-size: 2.5rem;
            line-height: 2.5rem;
        }
        .hero h2{
            font-size: 1.75rem;
            line-height: 1.75rem;
        }
    }
</style>
