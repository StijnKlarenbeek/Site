<template>
    <div class="gallery">
        <div class="bar"></div>
        <div class="content">
            <!-- Loop throguh all the items -->
            <div class="item" v-for="(item, index) in items" :key="index">
                <div class="left">
                    <!-- Image -->
                    <div class="overlay" :style="getBackground(item)">
                        <div class="inner">
                            {{item.price.amount}}
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="header">
                        <h3>{{item.title}}</h3>
                        <h5 :style="getTextColor(item.type)">{{item.type}}</h5>
                    </div>
                    <p class="text-justify">
                        {{item.description}}
                    </p>
                    <div class="button-row">
                        <sk-btn to="/projects/saveme" target="_blank" rounded color="tertiary opacified" phone-block 
                                class="ml-2 ml-p-0 mt-p-2">
                            View case 
                        </sk-btn>


                        <sk-btn href="/" target="_blank" rounded color="tertiary" phone-block
                                class="ml-2 ml-p-0 mt-p-2">
                            Download 
                        </sk-btn>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SkBtn from '@/components/Core/Buttons/SkBtn';

    export default {
        name: "Gallery",
        data: function() {
            return {
                filtered: ['All']
            }
        },
        props: {
            items: {
                type: Array
            }
        },
        methods: {
            getBackground(item) {
                return {
                    'background': item.background.gradient + ", url('" + item.background.img + "')",
                    'background-size': 'cover',
                    'background-position': 'center center'
                }
            },
            getTextColor(itemType) {
                let color = "";
                if(itemType === "Design concept") {
                    color = "#FFDE94"
                }

                return {
                    'color' : color
                }
            },



            filterItems(filter) {
                if(this.singleFilter) {
                    // this.filtered = [];
                    this.filtered = [filter];
                }else {
                    let filterIndex = this.filtered.indexOf(filter);
                    if (filter !== 'all') {
                        if (filterIndex > -1) {
                            this.filtered.splice(filterIndex, 1);
                        } else {
                            this.filtered.push(filter);
                        }
                    } else {
                        this.filtered = [];
                    }
                }

            }, 
            switchFilterVisibility(){
                let els = this.$refs.galleryul.children;

                /**
                 * The array is an objefct like rray so we prototype this
                 */
                Array.prototype.forEach.call(els, el => {
                    if(!el.classList.contains('filter')) {
                        el.classList.toggle('visible');
                    }
                });
            }
        },
        computed: {
            visibleItems() {
                return this.items.filter((item) => {
                    return this.filtered.indexOf(item.filter) > -1
                });
            }
        },
        components: {
            SkBtn
        }
    }
</script>

<style scoped>
    /**margin**/
    .ml-1{
        margin-left: 8px;
    }
    .ml-2{
        margin-left: 16px;
    }

    .gallery .bar {
        width: 100%;
        margin-top: 56px;
        background: #151515;
        height: 60px;
        display:flex;
        justify-content: center;
        align-items: center;
        position: -webkit-sticky;
        position: sticky;
        top: 66px; /* required */
        list-style:none;
    }

    .gallery .content{
        width: 40%;
        /* min-height: 800px; */
        margin-left: 30%;
        padding-top: 60px;
        padding-bottom: 120px;
    }

    /**Main gallery item**/
    .gallery .content .item {
        /* height: 300px; */
        background: #2E2E2E;
        margin-top: 50px;
        border-radius:5px;
        display:flex;
        justify-content: flex-start;

       -webkit-box-shadow: 0px 10px 49px -9px rgba(255,255,255,.3);
        -moz-box-shadow: 0px 10px 49px -9px rgba(255,255,255,.3);
        box-shadow: 0px 10px 49px -9px rgba(255,255,255,.3);
    }
    .gallery .content .item .left {
        width:50%;
        border-bottom-left-radius: 5px;
        border-top-left-radius:5px;
        padding-left: 48px;
        padding-right: 48px;
    }
    .gallery .content .item .left .overlay{
        width: 100%;
        height: 250px;
        background: #fff;
        border-radius: 5px;
        margin-top: -25px;
        position: relative;


        -webkit-box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.25);
    }
    .gallery .content .item .left .overlay .inner {
        background: #fff;
        display: inline-block;
        border-radius:5px;
        color:#0F203F;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 12px;
        padding-bottom: 12px;
        font-size: 1.5rem;
        font-weight: bold;
        
        position: absolute;
        top: 50%;
        left:50%;
        transform: translate(-50%, -50%);

        -webkit-box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 0px 19px 0px rgba(0,0,0,0.25);
    }

    /**Right content**/
    .gallery .content .item .right {
        width:60%;
        padding-right: 48px;
        padding-top: 24px;
    }

    .gallery .content .item .right .header{
        display:flex;
        color:white;
        align-items: center;
        justify-content: space-between;
    }
    .gallery .content .item .right .header h3{
        font-size: 2rem;
    }
    .gallery .content .item .right .header h5{
        font-size: 1.2rem;
    }

    .gallery .content .item .right p {
        text-align: justify;
        color:#ADADAD;
        font-size: 1.2rem;
        margin-top: 16px;
    }

    .gallery .content .item .right .button-row {
        margin-top: 40px;
        padding-bottom: 48px;
    }

    @media screen and (min-width: 1500px) and (max-width:1920px) {
        .gallery .content{
            width:50%;
            margin-left: 25%;
        }
    }
    @media screen and (min-width:1280px) and (max-width: 1499px) {
        .gallery .content{
            width:60%;
            margin-left: 20%;
        }
    }
    @media screen and (min-width:1024px) and (max-width: 1280px) {
        .gallery .content{
            width:70%;
            margin-left: 15%;
        }
    }
    @media screen and (min-width:845px) and (max-width: 1024px) {
        .gallery .content{
            width:85%;
            margin-left: 7.5%;
        }
    }
    @media screen and (min-width:570px) and (max-width: 845px) {
        .gallery .content{
            width:80%;
            margin-left: 10%;
        }
        .gallery .content .item {
            flex-wrap: wrap;
        }

        .gallery .content .item .left {
            width:100%;
        }
        .gallery .content .item .right {
            width:100%;
            padding-left: 48px;
        }
    }
    @media screen and (max-width: 570px) {
        .gallery .content{
            width:100%;
            margin-left:0%;
            padding-left: 24px;
            padding-right: 24px;
        }
        .gallery .content .item {
            flex-wrap: wrap;
        }
        .gallery .content .item .left {
            width:100%;
            padding-left: 24px;
            padding-right: 24px;
        }
        .gallery .content .item .right {
            width:100%;
            padding-left: 24px;
            padding-right: 24px;
        }
    }

    @media screen and (max-width: 450px){
        .ml-p-0{
            margin-left: 0;
        }
        .mt-p-2{
            margin-top: 16px;
        }
        .gallery .content .item .right {
            padding-top: 16px;
        }
        .gallery .content .item .right .header{
            display:block;
        }

        .gallery .content .item .right .button-row{
            margin-top: 24px;
            padding-bottom: 32px;
        }
    }

</style>
