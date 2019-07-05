<template>
    <div class="license">
        <h1 data-aos="fade-right" 
            data-aos-duration="750">
            License
        </h1>
        <div class="container text-left">
            <h2 class="title"
                data-aos="fade-right" 
                data-aos-duration="750"
                data-aos-delay="50">
                The Creative Commons Attribution 3.0 License
            </h2>
            <p class="text-justify"
                data-aos="fade-right" 
                data-aos-duration="750"
                data-aos-delay="100">
                Everything that is published on this site unless otherwise stated is 
                licensed under the <a class="cclink" href="https://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons Attribution 3.0 License</a>
                This allows YOU to use my creations in the following manners:
            </p>
            <ul>
                <li
                    data-aos="fade-right" 
                    data-aos-duration="750"
                    data-aos-delay="150">
                    <i class="fas fa-check"></i>
                    Use them for personal creations
                </li>
                <li
                    data-aos="fade-right" 
                    data-aos-duration="750"
                    data-aos-delay="200">
                    <i class="fas fa-check"></i>
                    Use them for commercial creations
                </li>
                <li
                    data-aos="fade-right" 
                    data-aos-duration="750"
                    data-aos-delay="250">
                    <i class="fas fa-check"></i>
                    Change them however you wish
                </li>
            </ul>
            <p class="text-justify"
                data-aos="fade-right" 
                data-aos-duration="750"
                data-aos-delay="300">
                And all free of charge! The only thing you need to is give me credit for creating the basis!
            </p>
        </div>
        <img src="https://i.creativecommons.org/l/by/3.0/88x31.png" alt="ccimg"
                data-aos="fade-right" 
                data-aos-duration="750"
                data-aos-delay="350">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .license{
        min-width: 100vw;
        min-height: 100vh;
        position: relative;
        top:0;
        z-index: 3;
        padding-top:65px;
        display:flex;
        justify-content: flex-start;
        align-items:center;
        flex-direction:column;
    }
    h1{
        font-size: 255px;
        line-height: 255px;
        font-weight: 900;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: -35px;
        color: #000;
        text-shadow: -1px -1px 0px #68FFD1, 1px 1px 0px #F5BA78;
        letter-spacing: -35px;
    }
    p{
        margin-top: 16px;
        font-size: 1.35rem;
        line-height: 1.85rem;
    }
    .text-justify{
        text-align:justify; 
    }

    .container{
        width:592px;
        background: rgba(0,0,0,1);
        box-sizing: border-box;
        color:white;
    }
    ul{
        margin-top: 24px;
        margin-bottom: 24px;
        margin-left: -8px;
    }
    ul li{
        display:block;
        font-size: 1.35rem;
        line-height: 2.25rem;
    }
    ul li i{
        color:#F5BA78;
        display:inline-block;
        margin-right: 12px;
    }
    .cclink{
        color:#68FFD1;
        text-decoration: underline dotted #68FFD1;
    }
    img{
        margin-top: 24px;
    }
    @media screen and (max-width:624px) {
        h1{
            font-size: 185px;
            line-height: 185px;
            letter-spacing:-22px;
        }
        .container{
            width:453px;
        }  
    }
    @media screen and (max-width:475px) {
        .license{
            padding-top: 64px;
        }
        h1{
            font-size: 135px;
            line-height: 135px;
            letter-spacing:-16px;
        }
        .container{
            width:331px;
        }  
    }
</style>
