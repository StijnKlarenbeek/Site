<template>
    <div class="page404">
        <h1>404</h1>
        <p>Oops, this page doesn't exist.</p>
    </div>
</template>
<script>
export default {
    name: 'Error404'
}
</script>

<style>
    .page404{
        padding-left: 48px;
        min-width: 100vw;
        min-height: 100vh;
        position: relative;
        top:0;
        z-index: 3;
        padding-top: 112px;
    }
    h1{
        font-size: 365px;
        line-height: 365px;
        font-weight: 900;
        margin-top: 0px;
        margin-bottom: 0px;
        margin-left: -12px;
        color: #030005;
        text-transform: uppercase;
        text-shadow: -1px -1px 0px #68FFD1, 1px 1px 0px #F5BA78;
        letter-spacing: -35px;
    }
    p{
        color: #fff;
        font-weight: 700;
        font-size: 55px;
    }
</style>


