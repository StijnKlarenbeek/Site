<template>
    <header class="header">
        <div class="inner">
            <slot></slot>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header {
        width: 100%;
        display:flex;
        justify-content: center;
        align-items:center;
        height:calc(100vh - 66px);
        min-height: 800px;
    }

    .header .inner{
        display:flex;
        justify-content: space-between;
        align-items:center;
    }
    .header .inner .hero-content{
        width:40%;
    }

    .header .inner .overlay{
        width:50%;
        margin-left: 10%;
    }
    @media screen and (min-width:1600px){
        .header .inner{
            max-width:1500px;
        }
    }
    @media screen and (min-width: 1400px) and (max-width: 1599px) {
        .header .inner{
            max-width:1300px;
        }
      
    }
    @media screen and (min-width: 1200px) and (max-width: 1399px) {
        .header .inner{
            max-width: 1170px;
        }

    }

    /**Flex wrap from here on**/
    @media screen and (max-width:1200px){
        
        .header .inner{
            flex-wrap: wrap;
        }
        .header .inner .hero-content{
            margin-bottom: 48px;
        }
        .header .inner .overlay{
            margin-left: 0;
        }
    }

    @media screen and (min-width:1024px) and (max-width:1200px) {
        .header .inner .hero-content{
            width:900px;
        }
        .header .inner .overlay{
            width:900px;
        }
    }
    /**Reset header height**/
    @media screen and (max-width:1024px) {
        .header {
            min-height: 0;
            height: auto;
            padding-top: 32px;
            padding-bottom: 32px;
        }
    }
    @media screen and (min-width:768px) and (max-width:1024px) {
        .header .inner .hero-content{
            width:700px;
        }
        .header .inner .overlay{
            width:700px;
        }
    }
    @media screen and (min-width:570px) and (max-width:768px) {
        .header .inner .hero-content{
            width:500px;
        }
        .header .inner .overlay{
            width:500px;
        }
    }
    @media screen and (min-width: 420px) and (max-width:570px) {
        .header .inner .hero-content{
            width:372px;
        }    
        .header .inner .overlay{
            width:372px;
        }
    }
    @media screen and (min-width: 300px) and (max-width:420px) {
        .header .inner .hero-content{
            width:100%;
            padding-left: 24px;
            padding-right: 24px;
        }    
        .header .inner .overlay{
            width:300px;
        }
    }

</style>
