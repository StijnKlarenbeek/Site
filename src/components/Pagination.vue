<template>
    <ul>
        <li data-aos="fade"
            data-aos-delay="550"
            data-ao-duration="750"
            v-if="firstPageVis"
            class="pagination-item">
            <button type="button"
                    @click="onPageClick(1)"
                    :disabled="isInFirstPage">
                First
            </button>
        </li>

        <li data-aos="fade"
            data-aos-delay="700"
            data-ao-duration="750"
            class="pagination-item">
            <button type="button"
                    @click="onPageClick(currentPage -1)"
                    :disabled="isInFirstPage">
                &lt;
            </button>
        </li>

        <!-- Range of pages -->
        <li data-aos="fade"
            data-aos-delay="850"
            data-ao-duration="750"
            class="pagination-item"
            v-for="page in pages"
            :key="page.name">
            <button type="button"
                    @click="onPageClick(page.name)"
                    :disabled="page.isDisabled"
                    :class="{ active: isPageActive(page.name) }">
                {{ page.name }}
            </button>
        </li>

        <li data-aos="fade"
            data-aos-delay="1000"
            data-ao-duration="750"
            class="pagination-item">
            <button type="button"
                    @click="onPageClick(currentPage + 1)"
                    :disabled="isInLastPage">
                &gt;
            </button>
        </li>

        <li data-aos="fade"
            data-aos-delay="1150"
            data-ao-duration="750"
            v-if="lastPageVis"
            class="pagination-item">
            <button type="button"
                    @click="onPageClick(totalPages)"
                    :disabled="isInLastPage">
                Last
            </button>
        </li>
    </ul>

</template>

<script>
    export default {
        name: "Pagination",
        props: {
            maxVisibleButtons: {
                type: Number,
                required: false,
                default: 2
            },
            totalPages: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            perPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            },
            firstPageVis: {
                type: Boolean,
                default: false
            },
            lastPageVis: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            startPage() {
                if (this.currentPage === 1) {
                    return 1;
                }

                if (this.currentPage === this.totalPages) {
                    return this.totalPages - this.maxVisibleButtons + 1;
                }
                return this.currentPage - 1;
            },
            endPage() {

                return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);

            },
            pages() {
                const range = [];
                for (let i = this.startPage; i <= this.endPage; i += 1) {
                    range.push({
                        name: i,
                        isDisabled: i === this.currentPage
                    });
                }

                return range;
            },
            isInFirstPage() {
                return this.currentPage === 1;
            },
            isInLastPage() {
                return this.currentPage === this.totalPages;
            },
        },
        methods: {
            onPageClick(page) {
                this.$emit('input', page);
            },
            isPageActive(page) {
                return this.currentPage === page;
            }
        }
    }
</script>

<style scoped>
    ul {
        margin-top: 0;
        margin-bottom: 0;
        padding-top: 32px;
    }
    .pagination {
        list-style-type: none;
    }

    .pagination-item {
        display: inline-block;
    }
    .pagination-item button {
        background: none;
        color:white;
        width:40px;
        height: 40px;
        border:1px solid white;
        font-size: 1.2rem;
        border-radius:50%;
        cursor: pointer;
        transition: 250ms;
    }
    .pagination-item button:hover, .pagination-item button.active {
        background: #68FFD1;
        border-color:#68FFD1;
        color:#3C4240;
    }
</style>
