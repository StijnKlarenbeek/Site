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
        justify-content: center;
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
            max-width:1570px;
        }
    }
    @media screen and (min-width: 1400px) and (max-width: 1599px) {
        .header .inner{
            max-width:1370px;
        }
    }
    @media screen and (min-width: 1200px) and (max-width: 1399px) {
        .header .inner{
            max-width: 1200px;
        }
    }
    @media screen and (max-width:1200px) {
        
    .header .inner .overlay{
        width:600px;
    }
    }
</style>
