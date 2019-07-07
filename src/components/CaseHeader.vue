<template>
    <header>
        <div class="outer">
            <button class="go-back-btn" @click="goBack"><i class="fas fa-long-arrow-alt-left"></i>go back</button>
            <div class="inner">
                <div class="left">
                    <!-- Main content-->
                    <h1>{{title}}</h1>
                    <h2 :class="typeColor">{{type}}</h2>

                    <!-- Add description text -->
                    <p>
                        <slot></slot>
                    </p>

                    <!-- Btn row-->
                    <div class="btn-case-row">
                        <button class="view-case-btn">
                            <i class="fas fa-long-arrow-alt-down"></i> VIEW CASE
                        </button>
                        or
                        <a href="/" target="_blank" 
                            class="download-btn">
                            DOWNLOAD 
                            <i class="fas fa-long-arrow-alt-right"></i>  
                        </a>
                    </div>
                </div>
                <div class="right">
                    <!-- Image container-->
                    <img :src="img" :alt="imgalt">
                </div>
            </div>
        </div>
        <!-- Add the header image here -->
        <!-- <img class="headimg" src="/img/assets/cases/HeadingLine.svg" alt=""> -->
    </header>
    
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        imgalt: {
            type: String,
            required: true
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    },
    computed: {
        typeColor() {
            return {
                'design' : this.type === 'Design Concept'
            }
        }
    }
}
</script>

<style scoped>
    button{
        background:none;
        border:none;
        color:white;
        text-transform: uppercase;
        outline:none;
    }

    header{
        min-height: 800px;
        height: 100vh;
        background: #0B0B0B;
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .headimg{
        position:absolute;
        top:0%;
        left: 0;
        width:100%;
        height:100%;
        z-index:4;
    }

    /**Outer container (with back button)**/
    header .outer{
        width:50%;
        position:relative;
        z-index:5;
    }

    header .outer .go-back-btn{
        color:#9F9F9F;
        font-size: 1.2rem;
        margin-bottom: 16px;
        transition:250ms;
    }
    header .outer .go-back-btn i{
        display:inline-block;
        margin-right: .5rem;
    }
    header .outer .go-back-btn:hover{
        cursor:pointer;
        color:white;
        transition:250ms;
    }
    header .outer .go-back-btn:active,
    header .outer .go-back-btn:focus{
        text-shadow: 1px 1px 1px white;
    }

    /**The inner container (without back button)**/
    header .outer .inner{
        background:#1E1E1E;
        height:500px;
        width:100%;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius:10px;
    }

    /**Set container widths**/
    header .outer .inner .left, header .outer .inner .right{
        width:50%;
    }

    /***
    LEFT
    ***/
    header .outer .inner .left{
        height: 100%;
        display:flex;
        flex-direction: column;
        padding-left: 48px;
        padding-right: 48px;
        padding-top: 24px;
        padding-bottom: 24px;
        box-sizing:border-box;
    }

    header .outer .inner .left h1{
        color:white;
        font-size: 3rem;
    }

    /*Base h2 style*/
    header .outer .inner .left h2{
        font-size: 1.75rem;
    }
    header .outer .inner .left p{
        color:#9F9F9F;
        margin-top: 1.2rem;
        font-size: 1.4rem;
        line-height: 1.8rem;
        text-align: justify
    }

    /**Set sub head title color*/
    header .outer .inner .left h2.design{
        color:#FFBE6D;
    }

    /**Btn row (view case or download files)**/
    header .outer .inner .left .btn-case-row{
        margin-top: auto;
        margin-bottom: 1.2rem;
        color:#6B6B6B;
        font-size: 1.2rem;
    }

    /** View case btn**/
    header .outer .inner .left .btn-case-row .view-case-btn{
        font-size: 1.2rem;
        margin-right: .75rem;
    }
    header .outer .inner .left .btn-case-row .view-case-btn i{
        display:inline-block;
        margin-right: 0.3rem;
    }

    /**Download files btn**/
    header .outer .inner .left .btn-case-row .download-btn{
        background:#5100FF;
        color:white;
        text-decoration:none;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
        font-size: 1.3rem;
        margin-left: .75rem;
    }
    header .outer .inner .left .btn-case-row .download-btn i{
        display:inline-block;
        margin-left: 0.5rem;
    }



    /***
    RIGHT
    ***/
    header .outer .inner .right img{
        height: 650px;
        width:100%;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

</style>
