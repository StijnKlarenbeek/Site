<template>
    <div class="work">
        
        <div class="gallery">
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
                        type: 'Design concept',
                        background: {
                            img: '/img/assets/projects/saveme/Savemegalleryexport.png',
                            gradient: 'linear-gradient(to top right, rgba(53, 102, 255,.6), rgba(120, 38, 255, .6))'
                        },
                        links: {
                            download: 'https://www.google.com',
                            demo: '/projects/saveme'
                        },
                        description:`Save me is a design concept for a savings application dashboard. 
                                     This application allows you to create multiple bins so thatyou 
                                     can save for multiple things at the same time.`,
                        price: {
                            amount: "FREE"
                        }
                    }
                ]
            },
            swiperOption: {
                loop: true,
                grabCursor: false,
                slidesPerView:'auto',
                // loopedSlides: 3,
                centeredSlides: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
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
      height: calc(100vh - 66px);
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      width: 80%;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      background:blue;
      transform: none !important;
      transition: 500ms !important;
    }
    .swiper-slide .inner{
        width: 100%;
        height:100%;
        background: #000;
    }
    .swiper-slide .inner{
        transform:scale(0.8);
      transition: 500ms !important;
    }
    .swiper-slide-active .inner{
        transform:scale(1);
      transition: 500ms !important;
    }
    .slide-1{
        background: orange;
    }
    .slide-2{
        background: green;
    }
    .slide-3{
        background: blue;
    }
</style>
