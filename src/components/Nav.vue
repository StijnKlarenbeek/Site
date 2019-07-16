<template>

    <div id="nav">
        <div class="burger" data-nav-target="prim_bar">
            <svg class="navburgerbars" viewBox="0 0 100 100" @click="switchNavActive">
                <path class="line top" d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"></path>
                <path class="line middle" d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"></path>
                <path class="line bottom" d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"></path>
            </svg>
        </div>
        <div class="left">
            <router-link class="brand" to="/">
                <img src="@/assets/icon.png" alt="">
                <span class="all-except-ipad">
                    STIJN KLARENBEEK
                </span>
                <span class="ipad-only">
                    SK
                </span>
            </router-link>
        </div>
        <div class="right">
            <router-link to="/projects">
                Projects
            </router-link>
            <dropdown-menu ref="dropdown" v-model="resumeNavOpen">
                Resume
                <template v-slot:dropdown>
                    <li>
                        <a target="_blank" href="/img/cv/CV Dutch.pdf">Dutch resume</a>
                    </li>
                    <li>
                        <a target="_blank" href="/img/cv/CV English.pdf">English resume</a>
                    </li>
                    <li>
                        <router-link to="/onlinecv">Online resume</router-link>
                    </li>
                </template>
            </dropdown-menu>
        </div>
    </div>
</template>

<script>
    import DropdownMenu from '@/components/Core/Buttons/DropdownMenu';

    export default {
        name: "Nav",
        data: () => ({
            activeNavClass: 'router-link-exact-active',
            languages: [
                'dutch',
                'uk'
            ],
            resumeNavOpen: false
        }),
        methods: {
            switchLanguage(activated, deactivated) {
                this.$refs[activated].classList.toggle(this.activeNavClass);
                this.$refs[deactivated].classList.toggle(this.activeNavClass);
            },
            switchNavActive() {
                document.getElementsByClassName('navburgerbars')[0].classList.toggle('active');
                document.getElementById("nav").classList.toggle('active');
            }
        },
        components: {
            DropdownMenu
        },
        watch: {
            '$route' (to, from) {

                if(this.resumeNavOpen) {
                    this.$refs.dropdown.hideDropDown();
                    // document.getElementsByClassName('navburgerbars')[0].classList.toggle('active');
                    // document.getElementById("nav").classList.toggle('active');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    #nav {
        padding: 8px 48px;
        position:relative;
        display: flex;
        justify-content: space-between;
        position: fixed;
        align-items: center;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9099;
        box-sizing: border-box;
        background: rgba(0,0,0,.8);

        a {
            font-weight: bold;
            text-decoration: none;
            font-size: 1.5rem;
            color: rgba(255,255,255,.4);
            display:inline-block;
            box-sizing:border-box;
            margin-right: 16px;
            margin-left: 16px;

            &.brand {
                opacity: 1;
                color: white;
                font-size: 1.5rem;
                display:flex;
                justify-content: flex-start;
                align-items: center;
            }

            &.router-link-exact-active {
                opacity: 1;
                color: rgba(255,255,255,1);
            }
        }

        img {
            margin-right: 16px;
            width: 50px;
        }
    }


    .burger {
        z-index: 2;
        border-radius: 10px;
        display: none;
    }

    .burger .navburgerbars {
        width: 50px;
        cursor: pointer;
    }
    .burger .navburgerbars .line {
        fill: none;
        stroke: #fff;
        stroke-width: 4;
        stroke-linecap: square;
        transition: stroke-dasharray 400ms,  stroke-dashoffset 400ms;
    }
    .burger .navburgerbars .line.top {
        stroke-dasharray: 40 172;
    }
    .burger .navburgerbars .line.middle {
        stroke-dasharray: 40 111;
    }
    .burger .navburgerbars .line.bottom {
        stroke-dasharray: 40 172;
    }
    .burger .navburgerbars.active .top {
        stroke-dashoffset: -132px;
    }
    .burger .navburgerbars.active .middle {
        stroke-dashoffset: -71px;
    }
    .burger .navburgerbars.active .bottom {
        stroke-dashoffset: -132px;
    }


    .dropdown-wrapper ul li{
        display:block !important;
        width:100%;
        margin: 0 !important;
    }
    .dropdown-wrapper ul li a{
        padding-top: 12px;
        padding-bottom: 12px;
        padding-right: 32px;
        padding-left: 32px;
        box-sizing: border-box !important;
        display:block !important;
        width:auto;
        border-radius:4px;
        color:#595959 !important;
        font-weight: normal !important;
        font-size: 1.2rem !important;
        margin-right: 8px !important;
        margin-left: 8px !important;
        transition:250ms;
    }
    .dropdown-wrapper ul li a:hover{
        background:#4353ff;
        color:white !important;
        -webkit-box-shadow: 0px 13px 57px -12px rgba(67,83,255,1);
        -moz-box-shadow: 0px 13px 57px -12px rgba(67,83,255,1);
        box-shadow: 0px 13px 57px -12px rgba(67,83,255,1);
        transition:250ms;
    }

    @media screen and (min-width: 768px) {

        span.all-except-ipad {
            display: inline;
        }
        span.ipad-only {
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        #nav {
            background:#000;
        }
        #nav .right {
            background:#000;
            position: absolute;
            left:-100%;
            top:69px;
            width:100%;
            transition: 250ms;

        }
        #nav.active .right {
            left:0;
        }
        #nav .right a{
            padding-left: 48px;
            display:block;
        }
    
        .burger {
            display:block;
        }
        span.all-except-ipad {
            display: none;
        }
        span.ipad-only {
            display: inline;
        }
    }

    @media screen and (min-width: 501px) {
        span.all-except-phone {
            display: inline;
        }
        span.phone-only {
            display: none;
        }
    }
    @media screen and (max-width: 500px) {
        span.all-except-phone {
            display: none;
        }
        span.phone-only {
            display: inline;
        }
        #nav {
            padding: 24px;
            padding-top: 8px;
            padding-bottom: 8px;
        }
        #nav .right a{
            padding-left: 24px;
        }
    }
</style>
