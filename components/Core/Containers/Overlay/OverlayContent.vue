<template>
    <div class="overlay-inner-content">
        <sup-header>
            <slot name="subtitle"></slot>    
        </sup-header>
        <cont-header>
            <slot name="title"></slot>
        </cont-header>
        <sk-btn :to="to" color="">
            <slot></slot>
        </sk-btn>
    </div>
</template>

<script>
import ContHeader from '@/components/Core/Text/ContHeader';
import SupHeader from '@/components/Core/Text/SupHeader';
import SkBtn from '@/components/Core/Buttons/SkBtn';
export default {
    props: {
        to: {
            type: String,
            required: true
        }
    },
    components: {
        ContHeader,
        SupHeader,
        SkBtn
    }
}
</script>

<style scoped>
    .overlay-inner-content{
        display:block;
    }
    .overlay-inner-content a{
        margin-top: 10px;
        display:inline-block;
    }
</style>
