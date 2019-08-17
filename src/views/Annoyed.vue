<template>
    
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
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
            </swiper>
</template>

<script>
export default {
    data: () => ({

            swiperOption: {
                loop: true,
                grabCursor: false,
                slidesPerView:'auto',
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            }
    })
}
</script>

<style>

    .swiper-container {
      width: 100%;
      padding-top: 50px;
      padding-bottom: 50px;
      height: calc(100vh - 66px);
    }
    .swiper-slide,.swiper-slide-duplicate {
        background-position: center;
        background-size: cover;
        width:70% !important;
        height: 600px;
        margin-top:50px;
        transition: none !important;
        transition-delay:unset !important;
        transition-duration: unset !important;
        transition-property: unset !important;
        transition-timing-function: unset !important;
        transform:none !important;
        display:flex;
        justify-content: center;
        align-items: stretch;
    }

    .swiper-slide .inner{
        height: 100%;
        width: 100%;
        background:green;
        transform:scale(0.8);
        transition:transform 1500ms;
    }
    .swiper-slide.swiper-slide-active .inner{
        /* height: 100%; */
        /* height: 600px; */
        /* margin-top: 50px; */
        background:black;
        transform:scale(1);
    }
 
    .swiper-slide-next{
        margin-right: 150px;
    }
    .swiper-1{
        /* transition:1500ms !important; */
    }
    .swiper-1 .inner {
        background:orange;
    }
    .swiper-slide-next .inner{
        /* margin-left: 15%; */
        transform:scale(0.8);
        transition:transform 1500ms;
    }
    .swiper-slide-prev .inner{
        /* margin-left: -5%; */
        transform:scale(0.8);
        transition:transform 1500ms;
    }
</style>
