<template>
    <header>
        <div class="outer">
            <button class="go-back-btn"
            data-aos="fade-in" data-aos-duration="750"
             @click="goBack">
                <i class="fas fa-long-arrow-alt-left"></i>go back
            
            </button>
            <div class="inner"
                data-aos="zoom-in" data-aos-duration="750">
                <div class="left">
                    <!-- Main content-->
                    <h1 >{{title}}</h1>
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
                        <span>or</span>

                        <sk-btn href="/" target="_blank" color="primary" class="download-btn">
                            DOWNLOAD 
                            <i class="fas fa-long-arrow-alt-right"></i>  
                        </sk-btn>
                    </div>
                </div>
                <div class="right">
                    <!-- Image container-->
                    <img 
                        data-aos="fade-left" data-aos-duration="750"
                        :src="img" 
                        :alt="imgalt">
                </div>
            </div>
        </div>
        <!-- Add the header image here -->
        <!-- <img class="headimg" src="/img/assets/cases/HeadingLine.svg" alt=""> -->
    </header>
    
</template>

<script>

    import SkBtn from '@/components/Core/Buttons/SkBtn';

export default {
    props: {
        /**
         * Head title
         */
        title: {
            type: String,
            required: true
        },

        /**
         * What type of project is it e.q.: Design concept, web template etc...
         */
        type: {
            type: String,
            required: true
        },

        /**
         * The image on the right sidfe
         */
        img: {
            type: String,
            required: true
        },

        /**
         * The alt for when the image doesn't load
         */
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
    },
    components: {
        SkBtn
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

    /**The header image**/
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
        box-sizing: border-box;
        z-index:5;
    }

    /**Go back button**/
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

    /**Inner left container**/
    header .outer .inner .left{
        height: 100%;
        display:flex;
        flex-direction: column;
        padding:24px 48px;
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

    /**View case btn**/
    header .outer .inner .left .btn-case-row .view-case-btn{
        font-size: 1.2rem;
        margin-right: .75rem;
    }
    header .outer .inner .left .btn-case-row .view-case-btn i{
        display:inline-block;
        margin-right: 0.3rem;
    }

    /**Download btn**/
    header .outer .inner .left .btn-case-row .download-btn{
        margin-left: 16px;
    }

    /**Image on the RIGHT side of the inner container**/
    header .outer .inner .right img{
        height: 650px;
        width:100%;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    @media screen and (min-width: 1500px) and (max-width:1920px) {
        header .outer{
            width:60%;
        }
    }
    @media screen and (min-width:1280px) and (max-width: 1499px) {
        header .outer{
            width:70%;
        }
        header .outer .inner {
            height: 350px;
        }
        header .outer .inner .left h1{
            font-size: 2.2rem;
        }
        header .outer .inner .left h2{
            font-size: 1.5rem;
        }
        header .outer .inner .left p{
            font-size: 1.2rem;
        }
        header .outer .inner .right img{
            height: 450px;
        }
    }

    /**
    * Reset the padding to smaller padding on the content container
    */
    @media screen and (min-width:0px) and (max-width: 1279px) {
        /**Left inner container**/
        header .outer .inner .left{
            padding: 12px 24px;
        }
    }
    @media screen and (min-width:882px) and (max-width: 1279px) {
        /**Outer container (with back button)**/
        header .outer{
            width:100%;
            padding: 0 48px;
        }
    }
    @media screen and (min-width: 680px) and (max-width:881px){
        /**Outer container (with back button)**/
        header .outer{
            width:80%;
            padding: 0 48px;
        }
    }
    @media screen and (min-width: 0px) and (max-width:679px){
        /**Outer container (with back button)**/
        header .outer{
            width:100%;
            padding: 0 48px;
        }
    }


    /**Ipad and mobile styling**/
    @media screen and (min-width: 0px) and (max-width:881px){
        /**Inner container(without back button)**/
        header .outer .inner{
            flex-wrap:wrap;
            height: 350px;
            position: relative;
        }

        /**Change positioning to stack the containers and have them take up the full width**/
        header .outer .inner .left, header .outer .inner .right{
            width:100%;
            position:absolute;
            left:0;
            top:0;
            border-radius:8px;
        }

        /**Left container (content)**/
        header .outer .inner .left {
            z-index: 4;
            height:100%;   
            background: rgba(0,0,0,.80);
        }

        /**Right container (img)**/
        header .outer .inner .right{
            z-index: 3;
        }

        /**Image on the RIGHT side of the inner container**/
        header .outer .inner .right img{
            object-fit: cover;
            height:350px;
            border-radius:10px;
        }
    }

    /**Text sizing ipad**/
    @media screen and (min-width:500px) and (max-width:881px) {

        header .outer .inner .left h1{
            font-size: 2rem;
        }
        header .outer .inner .left h2{
            font-size: 1.75rem;
            position: absolute;
            right:24px;
            top:12px;
        }
    }
    
    @media screen and (max-width: 500px){
        /**Inner container(without back button)**/
        header .outer .inner{
            height: 500px;
        }
        
        /**Set the radius good**/
        header .outer .inner .left, header .outer .inner .right{
            border-radius:8px;
        }

        /**Text styling for phones**/
        header .outer .inner .left h1{
            font-size: 2rem;
        }
        header .outer .inner .left h2{
            font-size: 1.5rem;
        }
        header .outer .inner .left p{
            font-size: 1.25rem;
        }

        /**Btn row (view case or download files)**/
        header .outer .inner .left .btn-case-row{
            display:flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 0;
        }

        /**View case btn**/
        header .outer .inner .left .btn-case-row .view-case-btn{
            margin-top: 8px;
            order:3;
        }
        header .outer .inner .left .btn-case-row span{
            order:2;
        }

        /**Download btn**/
        header .outer .inner .left .btn-case-row .download-btn{
            margin-bottom: 8px;
            margin-left: 0;
            order:1;
        }

        /**Image on the RIGHT side of the inner container**/
        header .outer .inner .right img{
            height: 500px;
            border-radius:10px;
        }
    }
</style>
