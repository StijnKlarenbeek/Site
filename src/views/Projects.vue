<template>
    <div class="work">
        <header class="hero">
        </header>
        <div class="hello"
        style="background:white;">

            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide class="swiper-1">
                    <div class="inner">
                        HELLOW 1
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="inner">
                        HELLOW 2
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="inner">
                        HELLOW 3
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="inner">
                        HELLOW 4
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>

        </div>
        <div class="gallery">
            <h1>
                More creations
            </h1>
            <gallery :filters="gallery.filters" :items="gallery.items"></gallery>
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
                        img: '/img/assets/projects/saveme/Savemegalleryexport.png'
                    }
                ]
            },
            swiperOption: {
                loop: true,
                effect: 'coverflow',
                grabCursor: false,
                slidesPerView:'auto',
                centeredSlides: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 400,
                    modifier: 1,
                    slideShadows : false,
                }, 
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                touchRatio: 0
            }
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




    .swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
      height: calc(100vh - 66px);
    }
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width:70% !important;
      height: 400px;
      margin-top:150px;
        transition:1000ms !important;
        transition: height 1000ms ease-in-out, margin-top 1000ms ease;
        /* background:blue; */
        transform:none !important;
        /* margin-right: 0 !important; */
    }
    .swiper-slide.swiper-slide-active {
        height: 600px;
        margin-top: 50px;
    }
    .swiper-slide-next,.swiper-slide-prev{
         /* transform: translate3d(0px, 0px, -661.652px) rotateX(0deg) rotateY(0deg) !important; */
    }
    .swiper-slide-next{
        margin-right: 150px;
        /* transform: translate3d(0px 150px, 0px) !important; */
    }
    
    .swiper-slide .inner{
        padding-left: 144px;
        padding-right: 144px;
        background:blue;
        height:100%;
        width:90%;
        margin-left: 5%;
        box-sizing:border-box;
    }
    .swiper-1 .inner {
        background:orange;
    }
    .swiper-slide-next .inner{
        /* margin-left: 15%; */
    }
    .swiper-slide-prev .inner{
        /* margin-left: -5%; */
    }
</style>
