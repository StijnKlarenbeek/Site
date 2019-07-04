<template>
    <div class="gallery">
        <ul>
            <li v-for="(filter,index) in filters" :key="index" @click="filterItems(filter)"
            :class="{'active': filtered.indexOf(filter)> -1} ">
                {{filter}}
            </li>
        </ul>
        <div class="gallery-content">
                <router-link :to="item.link"
                             class="gallery-item"
                             v-for="item in items"
                             :key="item.title + item.link">
                    <div class="inner">
                        <img :src="item.img" :alt="item.alt">
                        <span class="title" v-if="typeof item.title !== 'undefined'">
                            {{item.title}}
                         </span>
                        <span :class="'filter ' + item.filter">
                            {{item.filter}}
                        </span>
                    </div>

                </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        data: function() {
            return {
                filtered: ['All']
            }
        },
        props: {
            itemsPerRow: {
                type: Number,
                default: 3
            },
            singleFilter: {
                type: Boolean,
                default: true
            },
            filters: {
                type: Array,
                default: function () {
                    return ['all']
                }
            },
            items: {
                type: Array
            }
        },
        methods: {
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

            }
        },
        computed: {
            // rows() {
            //     let leftOver = this.items.length % this.itemsPerRow;
            //     let addExtra = 0;
            //     if(leftOver > 0) {
            //         addExtra = 1;
            //     }
            //
            //     return ~~(this.items.length / this.itemsPerRow) +addExtra;
            // },
            visibleItems() {
                return this.items.filter((item) => {
                    return this.filtered.indexOf(item.filter) > -1
                });
            }
        }
    }
</script>

<style scoped>
    .gallery ul {
        width: 100%;
        margin-top: 56px;
        background: #151515;
        height: 80px;
        display:flex;
        justify-content: center;
        align-items: center;
        position: -webkit-sticky;
        position: sticky;
        top: 66px; /* required */
    }
    .gallery ul li{
        color: #ADADAD;
        font-weight: bolder;
        font-size: 1.5rem;
        margin-left: 32px;
        margin-right: 32px;
        transition: 300ms;
        cursor: pointer;
    }
    .gallery ul li:hover{
        color: #fff;
    }
    .gallery ul li.active{
        color: #fff;
        padding: 4px 16px;
        background: #5100FF;
        border-radius:3px;
        transition: 300ms;
    }
    .gallery-content {
        width: 100%;
        height:auto;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        box-sizing: border-box;
        flex-wrap:wrap;
    }

    .gallery-content .gallery-item {
        width: calc(100% / 3);
        height: auto;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        text-decoration: none;
        padding-bottom: 56px;
        padding-top: 56px;
    }

    .gallery-content .gallery-item:hover{
        background: #151515;
    }

    .gallery-content .gallery-item .inner{
        width: 60%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        box-sizing: border-box;
    }

    .gallery-content .gallery-item .inner img {
        width: 100%;
        height: auto;
    }

    .gallery-content .gallery-item .inner .title{
        color:white;
        font-size: 1.5rem;
        font-weight: bolder;
        display: inline-block;
        margin-top: 8px;
    }

    .gallery-content .gallery-item:hover .inner .title{
        text-decoration: underline #fff;
    }

    .gallery-content .gallery-item .inner .filter{
        font-size: 1.25rem;
        font-weight: bolder;
    }

    .gallery-content .gallery-item .inner .filter.Web{
        color: #6DFFBB;
    }

    .gallery-content .gallery-item:hover .inner .filter.Web{
        text-decoration: underline #6DFFBB;
    }

    .gallery-content .gallery-item .inner .filter.Design{
        color: #FF6D8D;
        color: #FFBE6D;
    }

    .gallery-content .gallery-item:hover .inner .filter.Design{
        text-decoration: underline #FF6D8D;
        text-decoration: underline #FFBE6D;
    }

    .gallery-content .gallery-item .inner .filter.Software{
        color: #746DFF;
        color: #4353ff;
    }

    .gallery-content .gallery-item:hover .inner .filter.Software{
        text-decoration: underline #4353ff;
    }
</style>
