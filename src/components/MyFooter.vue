<template>
    <footer>
        <div class="footer-row top-row flex"
             data-aos="fade-up"
             data-aos-duration="750">
             <!-- Brand name -->
            <div class="left w-50 flex align-center">
                <div class="wrapper">
                    <img src="@/assets/icon.png">
                    <h2>
                        Stijn Klarenbeek
                    </h2>
                </div>
            </div>

            <!-- Footer navigation -->
            <div class="right w-50 flex">
                <!-- Displays footer navigations for each listitem print a list of links -->
                <vertical-ul v-for="(item,index) in footerLinks"
                             :key="index"
                            v-bind="item">

                    <!-- Print the list of links -->
                    <li v-for="(linkItem,linkIndex) in item.items" :key="linkIndex">
                        <!-- Check if a vue router link should be rendered or an anchor tag -->
                        <router-link v-if="typeof(linkItem.link) !== 'undefined' && linkItem.link.length !== 0" :key="linkItem.link" :to="linkItem.link">
                            {{linkItem.nl}} <span v-if="linkItem.new" class="new">NEW</span>
                        </router-link>
                        <a :href="linkItem.webLink" v-else target="_blank" :key="linkItem.webLink">
                            {{linkItem.nl}} <span v-if="linkItem.new" class="new">NEW</span>
                        </a>
                    </li>
                </vertical-ul>
            </div>
        </div>

        <!-- Copyright row -->
        <div class="footer-row"
             data-aos="fade-up"
             data-aos-delay="150"
             data-aos-duration="750">
            <span class="copyright">
                &#9400; 2018 - {{year}} Stijn Klarenbeek &mdash; All rights reserved &nbsp;&mdash;&nbsp; <router-link to="/license">license and terms</router-link>
            </span>
        </div>
    </footer>
</template>

<script>
    import VerticalUl from '@/components/VerticalUl';

    export default {
        name: "Footer",
        data: () => ({
            year: new Date().getFullYear(),
            footerLinks: [
                {
                    title: 'SITEMAP',
                    items: [
                        {
                            nl: 'Home',
                            en: 'Home',
                            link: '/'
                        },
                        {
                            nl: 'Projects',
                            en: 'Projects',
                            link: '/projects'
                        },
                        {
                            nl: 'Resume',
                            en: 'Resume',
                            link: '/onlinecv'
                        }
                    ],
                },
                // {
                //     title: 'CASES',
                //     items: [
                //         {
                //             nl: 'GYG',
                //             en: 'GYG',
                //             link: '/cases/GYG',
                //             new:true
                //         }
                //     ]
                // },
                {
                    title: 'SOCIALS',
                    items: [
                        {
                            nl: 'Github',
                            en: 'Github',
                            webLink: 'https://github.com/StijnKlarenbeek',
                        },
                        {
                            nl: 'LinkedIn' ,
                            en: 'LinkedIn',
                            webLink: 'https://www.linkedin.com/in/stijn-klarenbeek-983188141/'
                        },
                        {
                            nl: 'Facebook' ,
                            en: 'Facebook',
                            webLink: 'https://www.facebook.com/stijn.klarenbeek.94'
                        },
                        {
                            nl: 'AngelList',
                            en: 'AngelList',
                            webLink: 'https://angel.co/stijn-klarenbeek'
                        }
                    ],
                    style: {
                        width:'80px'
                    }
                }
            ]
        }),
        components: {
            VerticalUl
        }
    }
</script>

<style scoped>
    footer {
        background: #0b0b0b;
        color: #fff;
        padding: 96px 48px;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .flex.column {
        flex-direction: column;
    }

    .flex .align-center .wrapper {
        align-items: center;
        display: flex;
    }

    .left img {
        width: 50px;
    }

    .left h2 {
        margin-left: 16px;
    }

    span.copyright {
        color: #ADADAD;
        display:inline-block;
        margin-left: 66px;
        margin-top: 16px;
    }
    span.copyright a{
        color:#68FFD1;
    }

    .mr-3{
        margin-right: 36px;
    }


    ul li a span.new{
        background: #6300FF;
        background: rgb(67, 83, 255);
        background: #4353ff;
        background: rgb(67, 83, 255);
        display:inline-block;
        font-size: .9rem;
        line-height: .9rem;
        border-radius: 3px;
        margin-left: 4px;
        padding: 4px 8px;
    }

    @media screen and (max-width: 768px){
        .top-row{
            flex-wrap:wrap;
        }
        .top-row .left, .top-row .right{
            width: 100%;
        }
        .top-row .right{
            margin-top: 32px;
            margin-bottom: 8px;
        }
        span.copyright {
            margin-left: 0;
        }
    }
    @media screen and (max-width: 500px) {
        footer {
            padding: 32px 24px;
            padding-bottom: 96px;
        }
    }
</style>
